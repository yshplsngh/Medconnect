// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { toast ,ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useAuth from '../hooks/useAuth';
// import loginImg from '../img/logindoc.gif'
// import axios from "axios";
// import Loading from '../components/Loading.jsx'
// export default function DoctorLogin(){
//   const {isLogin,disLogin,setDisLogin,loading,setLoading} = useAuth();
//   const [values, setValues] = useState({ emailAddress: "", password: "" });
//   const navigate = useNavigate();

//   useEffect(()=>{
//     if(isLogin){
//       navigate("/");
//     }
//     if(disLogin){
//       navigate("/homeDoc");
//     }
//   })

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 4000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const validateForm = () => {
//     const { emailAddress, password } = values;
//     if (emailAddress === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     } else if (password === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     if (validateForm()) {
//       const { emailAddress, password } = values;
//       const { data } = await axios.post('http://localhost:5000/api/auth/doctorlogin', {
//         emailAddress,
//         password,
//       });
//       console.log(data);
//       if (data.status === false) {
//         toast.error(data.msg, toastOptions);
//         return false;
//       }
//       if (data.status === true) {
//         localStorage.setItem('authToken',data.authToken);
//         setDisLogin(true);
//         navigate("/homeDoc");
//         setLoading(false);
//       }
//     }
//   };
  
//   const sstyle={
//     marginTop: '120px',
//   }

//   return (
//     <div>
//       {loading ? <Loading/> : ""}
//       <div className={`${loading ? 'hidden' : ""}container mx-auto md:flex items-center shadow-xl`} style={sstyle}>
//         <div className="md:w-3/5">
//           <div className="border p-8 m-12 rounded-lg">
//             <h2 className="custom-color text-4xl">Sign in</h2>
//             <p className="my-4">
//               And enjoy life during the time you just saved!
//             </p>
//             <form onSubmit={(event) => handleSubmit(event)}>
//               <div className="mb-3">
//                 <input
//                   className="w-full border-b rounded py-2 pl-4"
//                   type="email"
//                   placeholder="Email Address"
//                   name="emailAddres"
//                   value={values.emailAddress}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   className="w-full border-b rounded py-2 pl-4"
//                   type="text"
//                   placeholder="Password"
//                   name="password"
//                   value={values.password}
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//               <div>
//               <button className="py-3 px-5 text-2xl border w-full mt-5 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
//                   type="submit">
//                   Sign in
//                 </button>

//               </div>
//             </form>
//             {/* <div className="md:flex justify-between my-8">
//               <button
//                 onClick={handleGoogleSignIn}
//                 className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
//               >
//                 {googleImg} Sign in with Google
//               </button>
//               <button
//                 onClick={handleGithubSignIn}
//                 className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
//               >
//                 {githubImg} Sign in with GitHub
//               </button>
//             </div> */}
//             <h2 className="my-8 text-xl text-center md:text-left">
//               Haven't Account Yet?
//               <Link
//                 className="primary-color font-bold"
//                 to="/dsignup"
//               >
//                 Sign Up
//               </Link>
//             </h2>

//             {/* <h2 className="my-8 text-xl text-center md:text-left">
//               login as doctor?
//               <Link
//                 className="primary-color font-bold"
//                 to="/signup">
//                 Sign Up
//               </Link>
//             </h2> */}
//           </div>
//         </div>
//         <div className="w-2/5 hidden md:block">
//           <img src={loginImg} alt="" className=""/>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from '../hooks/useAuth';
import loginImg from '../img/logindoc.gif'
import axios from "axios";
import Loading from '../components/Loading.jsx'

export default function DoctorLogin() {
  const { isLogin, disLogin, setDisLogin, loading, setLoading } = useAuth();
  const [values, setValues] = useState({ emailAddress: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
    if (disLogin) {
      navigate("/homeDoc");
    }
  }, [isLogin, disLogin, navigate]);

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
    const { emailAddress, password } = values;
    if (emailAddress === "" || password === "") {
      toast.error("Email and Password are required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validateForm()) {
      const { emailAddress, password } = values;
      try {
        const response = await axios.post('http://localhost:5000/api/auth/doctorlogin', {
          emailAddress,
          password,
        });
        const data = response.data;
        console.log(data);

        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else if (data.status === true) {
          localStorage.setItem('authToken', data.authToken);
          setDisLogin(true);
          navigate("/homeDoc");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("An error occurred while logging in.", toastOptions);
      } finally {
        setLoading(false);
      }
    }
  };

  const sstyle = {
    marginTop: '120px',
  };

  return (
    <div>
      {loading ? <Loading /> : ""}
      <div className={`${loading ? 'hidden' : ""}container mx-auto md:flex items-center shadow-xl`} style={sstyle}>
        <div className="md:w-3/5">
          <div className="border p-8 m-12 rounded-lg">
            <h2 className="custom-color text-4xl">Sign in</h2>
            <p className="my-4">
              And enjoy life during the time you just saved!
            </p>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="email"
                  placeholder="Email Address"
                  name="emailAddress"
                  value={values.emailAddress}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <button className="py-3 px-5 text-2xl border w-full mt-5 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                  type="submit">
                  Sign in
                </button>
              </div>
            </form>
            <h2 className="my-8 text-xl text-center md:text-left">
              Haven't Account Yet?
              <Link
                className="primary-color font-bold"
                to="/dsignup"
              >
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
        <div className="w-2/5 hidden md:block">
          <img src={loginImg} alt="" className="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

