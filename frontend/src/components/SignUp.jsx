import {React ,useEffect,useState}from "react";
import { useNavigate,Link,NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = ()=>{
    const navigate = useNavigate();
      const [initial,final] = useState({
          FName:"",
          LName:"",
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
          const {FName,LName,Email,Password,Number} = initial;
          const response = await axios.post("http://localhost:1234/signup",{
              FName,LName,Email,Password,Number
          })
          localStorage.setItem("userData", JSON.stringify(response));
           const {Token,id} = response.data;
           localStorage.setItem('token', Token);
           axios.defaults.headers.common["Authorization"] = Token;
          alert("Successfully Save ...")
          navigate(`/dashboard/${id}`);
      } catch (error) {
              alert(error);
              console.log(error);
      }
      }
      
      return(
          <>
          
  
  {/* <div className="main_root">
  
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
  </div> */}
  <div className="min-w-screen min-h-screen bg-[#131313] flex items-center justify-center px-5 py-5">
            <div className=" rounded-3xl shadow-xl border w-full overflow-hidden max-w-4xl">
                <div className="md:flex w-full">
                    <div className="hidden md:block md:w-1/2 ">
                        <img className='h-full mix-blend-lighten' src="https://images.squarespace-cdn.com/content/v1/5b50d976da02bcec0ac49526/1577908619470-6G5E3FA0VK1YLN9C5SW1/kawhi.gif" />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-6">
                            <h1 className="font-bold text-3xl ">Hey Champ !  🏆</h1>
                            <p className='mt-4 text-lg'>Enter your information to register</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" name="FName"  onChange={setdata}  className="w-full bg-transparent -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="John" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" name="LName" onChange={setdata}  className="w-full bg-transparent -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="Smith" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex">
                                <div className="w-full mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Skill Level</label>
                                    <div className="flex items-center justify-center">
                                        <select  onChange={setdata} className="w-full bg-transparent pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500">
                                        <option className='bg-[#111111] ' >Select</option>
                                            <option className='bg-[#111111] ' value="beginner">Beginner</option>
                                            <option className='bg-[#111111]' value="intermediate">Intermediate</option>
                                            <option className='bg-[#111111]' value="advanced">Advanced</option>
                                            <option className='bg-[#111111]' value="master">Master</option>
                                            <option className='bg-[#111111]' value="champion">Champion</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="flex">
                                <div className="w-full mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Interests</label>
                                    <div className="flex items-center justify-center">
                                        <select  onChange={setdata} className="w-full bg-transparent pl-4 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500">
                                        <option className='bg-[#111111] ' >Select</option>
                                            <option className='bg-[#111111] ' value="beginner">Cricket</option>
                                            <option className='bg-[#111111]' value="intermediate">Football</option>
                                            <option className='bg-[#111111]' value="advanced">Badminton</option>
                                            <option className='bg-[#111111]' value="master">Chess</option>
                                            <option className='bg-[#111111]' value="champion">Hockey</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                            <div className="flex -mx-3">
    
</div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={setdata}  name="Email" type="email" className="w-full bg-transparent -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="johnsmith@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Number</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={setdata}  name="Number" type="number" className="w-full bg-transparent -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="8085951xyz" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input onChange={setdata} name="Password"  type="password" className="w-full bg-transparent -ml-10 pl-10 pr-3 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="************" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button onClick={savedata} className="block w-full max-w-xs mx-auto bg-red-700 hover:bg-red-800  text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
          </>
      )
  }

export default SignUp;