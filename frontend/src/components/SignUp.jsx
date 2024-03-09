import {React ,useEffect,useState}from "react";
import { useNavigate,Link,NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = ()=>{
    const navigate = useNavigate();
      const [initial,final] = useState({
          Name:"",
          Email:"",
          Password:"",
          Number:""
      })
      const setdata = (event)=>{
          const {name,value} = event.target;
          final((info)=>{
              return{
              ...info,
              [name] : value
              }
          })
      }
  
      const savedata = async(event)=>{
          event.preventDefault();
          try {
          const {Name,Email,Password,Number} = initial;
          const response = await axios.post("http://localhost:1234/signup",{
              Name,Email,Password,Number
          })
           const {Token,id} = response.data;
           localStorage.setItem('token', Token);
           axios.defaults.headers.common["Authorization"] = Token;
          alert("Successfully Save ...")
          navigate("/login");
      } catch (error) {
              alert(error);
              console.log(error);
      }
      }
      
      return(
          <>
          
  
  <div className="main_root">
  
  <div class="main">  	
      <div class="flex border-2 border-black w-fit p-5 items-center mx-auto justify-center mt-11">
              <form onSubmit={savedata} className="flex flex-col gap-3" method="POST">
                  <label className="label" for="chk" aria-hidden="true">Sign Up</label>
                  <input  className="sign_input" type="text" onChange={setdata} name="Name" placeholder="Full Name" required/>
                  <input  className="sign_input" type="email" onChange={setdata} required name="Email" placeholder="Email" />
                  <input  className="sign_input" type="number" onChange={setdata} required name="Number" placeholder="Number" />
                  <input  className="sign_input" type="password" name="Password" required onChange={setdata} placeholder="Password" />
                  <input type="submit" value={"Sign Up"} className="signup_button bg-purple-600 text-white" ></input> 
                 </form>   
          </div>
  </div>
  </div>
          </>
      )
  }

export default SignUp;