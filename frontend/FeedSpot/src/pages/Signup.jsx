import { Button, Link } from "@radix-ui/themes";
import React, { useState } from "react";
import { FaLock, FaMailBulk } from "react-icons/fa";
import { RiAccountBoxLine, RiContactsBook3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import bg from '../assets/bg.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const [user_name, setUserName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_mobileNo, setNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/signup", {
        user_name,
        user_email,
        user_password,
        user_mobileNo,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response);
      navigate("/posts");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error(error.response.data.msg);
        } else if (error.response.status === 422) {
          toast.error(error.response.data.msg);
        }
      } else {
        toast.error("Network error");
      }
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center brightness-175" style={{ backgroundImage: `url(${bg})` }}>
      <form className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-70 rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl text-white mb-8">Signup to FeedSpot</h1>
        <div className="space-y-5 mb-6">
          <div className="flex items-center">
            <RiAccountBoxLine className="text-white text-xl mr-3" />
            <input
              type="text"
              placeholder="User Name"
              className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
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
          <div className="flex items-center">
            <RiContactsBook3Line className="text-white text-xl mr-3" />
            <input
              type="number"
              placeholder="Number"
              className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={user_mobileNo}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="ml-[30%]">
          <Button align='center' size='4' color="cyan" variant="soft" gap='3' type="submit">
            Create Account
          </Button>
        </div>
        <div className="text-center text-sm text-white mt-4">
          Already have an account? <Link href="/signin" className="font-semibold hover:underline text-green-600">Login</Link>
        </div>
      </form>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    </div>
  );
};

export default Signup;
