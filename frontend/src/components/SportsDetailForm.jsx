import {React,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SportDetailForm = ()=>{
    const navigate = useNavigate();
    const {id} = useParams();
      const [initial,final] = useState({
          GameName:"",
          Levels:"",
          Location:"",
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
          const { GameName,Levels,Location} = initial;
          const response = await axios.post(`http://localhost:5000/sportsDetailForm/${id}`,{
            GameName,Levels,Location
          })
           alert("Successfully Save ...")
           if(response.status = 202){
            navigate(`/dashboard/${id}`);
           }
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
                  <label className="label" for="chk" aria-hidden="true">Detail Form</label>
                  <input  className="sign_input" type="text" onChange={setdata} name="GameName" placeholder="GameName" required/>
                  <input  className="sign_input" type="text" onChange={setdata} required name="Levels" placeholder="Levels" />
                  <input  className="sign_input" type="text" onChange={setdata} required name="Location" placeholder="Locationr" />
                  <input type="submit" value={"Save"} className="signup_button bg-purple-600 text-white" ></input> 
                 </form>   
          </div>
  </div>
  </div>
          </>
      )
  }

export default SportDetailForm;