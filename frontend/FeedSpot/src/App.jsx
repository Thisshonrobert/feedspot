import '@radix-ui/themes/styles.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../src/Layout';
import Dashboard from './pages/Dashboard';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/newpost" element={<Layout><NewPost /></Layout>} />
        <Route path='/editprofile' element={<Layout><EditProfile/></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
