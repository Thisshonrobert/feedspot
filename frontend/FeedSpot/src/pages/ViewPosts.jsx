import InputPost from "@/component/InputPost";
import ProfileCard from "@/component/ProfileCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import ClockLoader from "react-spinners/ClockLoader";
import { useRecoilValueLoadable } from "recoil";
import { PostsAtom } from "../store/atoms/PostAtom";
import Post from "@/component/Post";
import RecentUsers from "@/component/RecentUsers";
import { Grid } from '@mui/material';


const ViewPosts = () => {
  const PostsLoadable = useRecoilValueLoadable(PostsAtom);

  switch (PostsLoadable.state) {
    case "loading":
      return (
        <div className="h-screen flex justify-center items-center">
          <ClockLoader color="#36d7b7" />
        </div>
      );
    case "hasValue":
      const posts = PostsLoadable.contents;
  
      return (
        <div className="flex h-screen ">
          <div className="w-1/4 ml-3 flex flex-col space-y-6">
            <ProfileCard />
            <RecentUsers/> 
          </div>

          <div className="flex-1 p-4">
            <ScrollArea className="rounded-md border-black  h-full">
              <InputPost />
              <Post />
              {/* {posts.map((post) => (
                <Post key={post._id}/>
              ))} */}
            <Grid container justify="center" spacing={4}>
              {posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6} md={4} lg={3}>
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>
            </ScrollArea>
          </div>
        </div>
      );
    case "hasError":
      return <div>Error loading posts</div>;
    default:
      return null; // Handle other cases if needed
  }
};

export default ViewPosts;
