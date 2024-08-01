const express = require("express")
const { userValidateObj,signinValidateObj } = require("./validate")
const { Users, Posts } = require("./db")
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("./auth")
const rootRouter = express.Router()
const multer = require('multer');
const upload = multer();
const PASSWORD = "confidential"


rootRouter.post('/signup',async(req,res)=>{
    const user = req.body
    const {success} = userValidateObj.safeParse(user)
    const existingUser = await Users.findOne({
        user_email:user.user_email
    })
    if(!success)
    {
        return res.status(422).json({
            msg:"Incorrect inputs"
        })
    }
    if(existingUser)
    {
        return res.status(409).json({
            msg:"User exists, login instead!"
        })
    }
    const newUser = await Users.create(user)
    const userId = newUser._id
    if(newUser)
    {
        const token = jwt.sign({userId},PASSWORD)
        return res.status(200).json({
            token:token
        })
    }
})

rootRouter.post('/signin',async(req,res)=>{
    const user = req.body
    const {success} = signinValidateObj.safeParse(user);
    if(!success)
    {
        return res.status(422).json({
            msg:"Incorrect inputs"
        })
    }
    const currentUser = await Users.findOne(user)
    const userId = currentUser._id
    if(currentUser)
    {
        const token = jwt.sign({userId},PASSWORD)
        return res.status(200).json({
            token:token
        })
    }
})

rootRouter.get('/profile',authMiddleware,async(req,res)=>{
    try {
        const userInfo = await Users.findById(req.userId);
        const imageUrl = `data:${userInfo.user_image.contentType};base64,${userInfo.user_image.data.toString('base64')}`;
          return {
            ...userInfo._doc,
            user_image: imageUrl
          }
      } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
})

rootRouter.post('/post',authMiddleware,upload.single('image'),async(req,res)=>{
    const post_text = req.body.post_text
    const post_url = req.file
    const createPost = await Posts.create({
        userId:req.userId,
        post_text,
        post_url:{
            data: post_url.buffer,
            contentType: post_url.mimetype,
          }
    })
    if(createPost)
    {
        return res.status(200).json({
            msg:"post uploaded successfully"
        })
    }
})

rootRouter.get('/posts',async(req,res)=>{
    try {
        const posts = await Posts.find({});
        const postsWithImages = posts.map(post => {
          const imageUrl = `data:${post.post_url.contentType};base64,${post.post_url.data.toString('base64')}`;
          return {
            ...post._doc,
            post_url: imageUrl
          }
        });
        return res.status(200).json({ posts: postsWithImages });
      } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
})

rootRouter.get('/myposts',authMiddleware,async(req,res)=>{
    try {
        const posts = await Posts.find({
            userId:req.userId
        });
        const postsWithImages = posts.map(post => {
          const imageUrl = `data:${post.post_url.contentType};base64,${post.post_url.data.toString('base64')}`;
          return {
            ...post._doc,
            post_url: imageUrl
          }
        });
        return res.status(200).json({ posts: postsWithImages });
      } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
})