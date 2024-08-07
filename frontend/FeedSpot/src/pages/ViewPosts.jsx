import { useRecoilValueLoadable } from 'recoil';
import Post from '../component/Post';
import { PostsAtom } from '../store/atoms/PostAtom';
import ClockLoader from "react-spinners/ClockLoader";
import ProfileCard from '@/component/ProfileCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import InputPost from '@/component/InputPost';


const ViewPosts = () => {
  const PostsLoadable = useRecoilValueLoadable(PostsAtom);

  switch (PostsLoadable.state) {
    case 'loading':
      return <div className='h-screen flex justify-center items-center'><ClockLoader color="#36d7b7" /></div>;
    case 'hasValue':
      const posts = PostsLoadable.contents;

      return (
        <div className="flex h-screen">
          <div className="w-1/4">
            <ProfileCard />
          </div>
          <div className="flex-1 p-4">
            <ScrollArea className="rounded-md border-black  h-full">
             <InputPost></InputPost>
              {/* {posts.map((post) => (
                <Post key={post._id} product={post} />
              ))} */}
            </ScrollArea>
          </div>
        </div>
      );
    case 'hasError':
      return <div>Error loading posts</div>;
    default:
      return null; // Handle other cases if needed
  }
}

export default ViewPosts;
