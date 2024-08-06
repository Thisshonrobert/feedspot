import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Post from '../components/Post';
import { PostsAtom } from '../store/atoms/PostAtom';
import ClockLoader from "react-spinners/ClockLoader";

const ViewPosts=()=> {
  const PostsLoadable = useRecoilValueLoadable(PostsAtom);

  switch (PostsLoadable.state) {
    case 'loading':
      return <div className='h-screen flex justify-center items-center'><ClockLoader color="#36d7b7" /></div>;
    case 'hasValue':
      const posts = PostsLoadable.contents;

      return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} product={post} />
            ))}
        </div>
      );
    case 'hasError':
      return <div>Error loading posts</div>;
    default:
      return null; // Handle other cases if needed
  }
}
export default ViewPosts;
