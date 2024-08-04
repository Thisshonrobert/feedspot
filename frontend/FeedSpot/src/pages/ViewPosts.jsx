import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Grid } from '@mui/material';
import Post from '../components/Post';
import { PostsAtom } from '../store/atoms/PostsAtom';
import ClockLoader from "react-spinners/ClockLoader";

export default function ViewPosts() {
  const PostsLoadable = useRecoilValueLoadable(PostsAtom);

  switch (PostsLoadable.state) {
    case 'loading':
      return <div className='h-screen flex justify-center items-center'><ClockLoader color="#36d7b7" /></div>;
    case 'hasValue':
      const posts = PostsLoadable.contents;

      return (
        <div className='p-5 bg-slate-200'>
          <Grid container justify="center" spacing={4}>
            {posts.map((post) => (
              <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
                <Post product={post} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    case 'hasError':
      return <div>Error loading posts</div>;
    default:
      return null; // Handle other cases if needed
  }
}
