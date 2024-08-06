import React, { useState } from "react";
import { FaLock, FaMailBulk } from "react-icons/fa";
import bg from '../assets/bg2.jpg';
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@radix-ui/themes";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
  console.log(user_email,user_password)

    // Basic validation
    if (!user_email || !user_password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/v1/signin", {
        user_email,
        user_password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/posts");
      console.log(response)
    } catch (error) {
      if (error.response && error.response.status === 422) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("There was an error logging in. Please try again.");
      }
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center brightness-175" style={{ backgroundImage: `url(${bg})` }}>
      <form className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-70 rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl text-white mb-8">Login to FeedSpot</h1>
        <div className="space-y-5 mb-6">
          <div className="flex items-center">
            <FaMailBulk className="text-white text-xl mr-3" />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <FaLock className="text-white text-xl mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="ml-[40%]">
          <Button align='center' size='4' color="cyan" variant="soft" gap='3' type="submit">
            Login
          </Button>
        </div>
        <div className="text-center text-sm text-white mt-4">
          Don't have an account? <Link href="/signup" className="font-semibold hover:underline text-red-600">Register</Link>
        </div>
      </form>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
