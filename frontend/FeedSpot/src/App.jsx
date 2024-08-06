import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../src/Layout';
import EditProfile from './pages/EditProfile';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home'
// import FetchPosts from './components/FetchPosts';
import { RecoilRoot } from "recoil";
import ViewPosts from "./pages/ViewPosts";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
    {/* <FetchPosts/> */}
    <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Layout><ViewPosts/></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/newpost" element={<Layout><NewPost /></Layout>} />
        <Route path='/editprofile' element={<Layout><EditProfile/></Layout>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
