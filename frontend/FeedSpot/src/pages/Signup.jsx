import React, { useEffect, useState } from "react";
import { FaLock, FaMailBulk } from "react-icons/fa";
import bg from '../assets/bg.jpg'
import { Button, Link } from "@radix-ui/themes";
import { RiAccountBoxLine } from "react-icons/ri";
const Signup = () => {
  const[user_name,setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = (e) => {
  //   e.preventDefault();
  // };
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center brightness-175" style={{ backgroundImage: `url(${bg})` }}>
      <form className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-70 rounded-xl p-6 w-full max-w-md mx-4 sm:mx-0" onSubmit={handleLogin}>
        <h1 className="text-center text-2xl text-white mb-8">Sigup to FEEDsPOT</h1>
        <div className="space-y-5 mb-6">
        <div className="flex items-center">
          <RiAccountBoxLine className="text-white text-xl mr-3" />
          <input
              type="text"
              placeholder="User Name"
             className="w-full bg-transparent backdrop-blur-lg border outline-none border-white text-white border-opacity-70 rounded-full px-5 py-3"
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              defaultValue={""}
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
        <Button align='center' size='4' color="cyan" variant="soft"  gap='3' type="submit" className="ml-[40%]" onClick={async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/users/signup", {
                        user_name,
                        user_email,
                        password
                        });
                        localStorage.setItem("token", response.data.token);
                        navigate("/view_products");
                        } catch (error) {
                            if (error.response) {
                            if (error.response.status === 409) {
                                toast.error(error.response.data.msg);
                            } else if(error.response.status === 422){
                                toast.error(error.response.data.msg);
                            }
                            } else {
                            toast.error("Network error");
                            }
                        }
                        }}>
          Signup
        </Button>
        <div className="text-center text-sm text-white mt-4">
          Already have an account? <Link href="/signin" className="font-semibold hover:underline text-green-600">Login</Link>
        </div>
      </form>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    </div>
  );
};

export default Signup;
