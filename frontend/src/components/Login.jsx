import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ()=>{

  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const imageUrl =
    "https://cdn.myportfolio.com/56729858-66c3-41ad-ba43-955e45b40f78/882975a6-d4e2-40ee-ac93-31f6d2bd6504_rw_1200.gif?h=86fee523f5ee3f186ee37c6d2d3c4fdb";
    
    const navigate = useNavigate();
    const [initial,final] = useState({
      Email:"",
      Password:"",
    })
   const updatedata = (e)=>{
      const {name,value} = e.target;
      final((info)=>{
        return{
          ...info,
          [name] :value
        }
      })
   }
  
    const save =async(event)=>{
      event.preventDefault(); 
      try {
      const {Email,Password} = initial;
     const result  = await axios.post("http://localhost:1234/login",
     {Email,Password});
     console.log(result);
     const status = result.status;
     if(status == 202){
     const token = result.data.Token;
     const id = result.data.id;
     localStorage.setItem('token', token);
     axios.defaults.headers.common["Authorization"] = token;
     alert("Success");
     navigate(`/dashboard/${id}`);
     }
    } catch (error) {
        alert("Invalid Details please Sing In again...")
    }
    }
    
      return(
          <>
          
 {/* <div className="main_root">
  
  <div class="main">  	
      <div class="flex border-2 border-black w-fit p-5 items-center mx-auto justify-center mt-11">
              <form onSubmit={save} className="flex flex-col gap-3" method="POST">
                  <label className="label" for="chk" aria-hidden="true">Sign In</label>
                  <input  className="sign_input" type="email" onChange={updatedata} required name="Email" placeholder="Email" />
                  <input  className="sign_input" type="password" name="Password" required onChange={updatedata} placeholder="Password" />
                  <input type="submit" value={"Sign In"} className="signup_button bg-purple-600 text-white" ></input> 
                 </form>   
          </div>
  </div>
  </div> */}

  <div className="h-screen md:flex">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="relative bg-no-repeat bg-cover bg-center overflow-hidden md:flex w-1/2 bg-gradient-to-r from-red-800 to-[#240101] i justify-around items-center hidden"
      >
        <div className="lg:max-w-lg">
          <h1 className="text-white font-bold text-4xl lg:text-6xl font-sans lg:mb-4">
            SportZy
          </h1>
          <p className="text-white lg:text-lg mt-1">
          "Welcome to SportZy, your ultimate hub for connecting local players, hosting electrifying events, and building winning teams. Experience the thrill of sports like never before, right at your fingertips!"
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center ">
        <form className="lg:w-[500px]">
          <h1 className=" font-bold text-2xl mb-1">Welcome Champ 🏆</h1>
          <p className="text-sm font-normal  mb-7">Creative your way !!</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none bg-transparent"
              type="text"
              name=""
              id=""
              placeholder="Full name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none bg-transparent"
              type="text"
              name=""
              id=""
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none bg-transparent"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            
          <img
      src="https://i.pinimg.com/474x/6f/ac/0f/6fac0f71ff09b99ab1ecd791877ab5a5.jpg"
      alt="Eye Icon"
      className="h-5 w-5 text-gray-400 cursor-pointer mix-blend-difference"
      onClick={togglePasswordVisibility}
    />


            <input
              className="pl-2 outline-none border-none bg-transparent"
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-red-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
        </form>
      </div>
    </div>
          </>
      )
  }

export default Login;