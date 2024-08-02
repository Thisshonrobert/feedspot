import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Layout from '../src/Layout';
import NewPost from './pages/NewPost'
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/newpost" element={<Layout><NewPost /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
