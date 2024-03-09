import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from '../hooks/useAuth';
import loginImg from '../img/losi/login.png'
import axios from "axios";
import Loading from '../components/Loading.jsx'
export default function Login() {
  const {isLogin,setIsLogin,disLogin,loading,setLoading} = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLogin){
      navigate("/");
    }
    if(disLogin){
      navigate("/");
    }
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const { email, password } = values;
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log(data);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
        return false;
      }
      if (data.status === true) {
        localStorage.setItem('authToken',data.authToken);
        setIsLogin(true);
        navigate("/");
        setLoading(false);
      }
    }
  };
  
  return (
    <div>
      {loading ? <Loading/> : ""}
      <div className={`${loading ? 'hidden' : ""}container mx-auto md:flex items-center shadow-xl pt-20`}>
        <div className="md:w-3/5">
          <div className="border p-8 m-12 rounded-lg">
            <h2 className=" text-[#2d8e84] text-4xl">Sign in</h2>
            <p className="my-4">
              And enjoy life during the time you just saved!
            </p>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
              <button className="py-3 px-5 text-2xl border w-full mt-5 rounded transition duration-300 text-white  ease-in-out  hover:bg-[#45ccbe] bg-[#2d8e84]"
                  type="submit">
                  Sign in
                </button>

              </div>
            </form>
            {/* <div className="md:flex justify-between my-8">
              <button
                onClick={handleGoogleSignIn}
                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
              >
                {googleImg} Sign in with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
              >
                {githubImg} Sign in with GitHub
              </button>
            </div> */}
            <h2 className="my-8 text-xl text-center md:text-left ">
              Haven't Account Yet?{' '}
              <Link className="text-[#2d8e84] font-bold"to="/signup">Sign Up</Link>
            </h2>

            <h2 className="my-8 text-base text-center md:text-left">
              login as doctor? {' '}
              <Link className="text-[#2d8e84] font-bold"to="/dlogin">Login</Link>
            </h2>
          </div>
        </div>
        <div className="w-2/5 hidden md:block">
          <img src={loginImg} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
