import React, { useState } from "react";
import { FaLock, FaMailBulk } from "react-icons/fa";
import bg from '../assets/bg2.jpg'
 
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center brightness-175" style={{ backgroundImage: `url(${bg})` }}>
      <form className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-70 rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0" onSubmit={handleLogin}>
        <h1 className="text-center text-2xl text-white mb-8">Login</h1>
        <div className="space-y-5 mb-6">
          <div className="flex items-center">
          <FaMailBulk className="text-white text-xl mr-3" />
          <input
              type="email"
              placeholder="Email ID"
             className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={""}
              required
            />
          </div>
          <div className="flex items-center">
            <FaLock className="text-white text-xl mr-3" />
            <input type="password"
              placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={""}
              required className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3" />
          </div>

        </div>
        <button type="submit" className="w-6/12 py-3 ml-[25%] bg-white text-black font-semibold rounded-full border border-black">
          Login
        </button>
        <div className="text-center text-sm text-white mt-4">
          Don't have an account? <a href="#" className="font-semibold hover:underline text-red-600">Register</a>
        </div>
      </form>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    </div>
  );
};

export default Signin;
