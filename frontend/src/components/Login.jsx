import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ()=>{
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
          
 <div className="main_root">
  
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
  </div>
          </>
      )
  }

export default Login;