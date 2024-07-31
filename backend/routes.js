const express = require("express")
const { userValidateObj } = require("./validate")
const { Users } = require("./db")
const rootRouter = express.Router()

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
    

})