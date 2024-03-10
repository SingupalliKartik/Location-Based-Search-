import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
const ProfileCard = () => {
    const {id} = useParams();
    const [initial,final] = useState({
        Name:"",
        Email:"",
        DOB:"",
        CoreSkill:"",
        Number:"",
        Bio:""
    })
    const [initial2,final2] = useState("");
    const [ini_url, fin_url] = useState();
    const getdata  = async()=>{
        try {
           const result = await axios.get(`http://localhost:1234/sport_user_data/${id}`) ;
           const {Number,user_sport_data} = result.data;
    
           console.log(user_sport_data)
           if(user_sport_data===null || user_sport_data===undefined){
             navigate(`/sport_detail_form/${id}`)
           }  
           const storage = getStorage();
      console.log(user_sport_data.image);
      const imgref = ref(
        storage,
        `virtual_hackathone/${user_sport_data.image}`
      );
      try {
        const url = await getDownloadURL(imgref);
        fin_url(url);
      } catch (error) {
        console.log(error);
      }
           final((info)=>{
             info.Name= user_sport_data.FName;
             info.Email = user_sport_data.Email
             info.DOB = user_sport_data.DOM
             info.CoreSkill = user_sport_data.CoreSkill
             info.Bio = user_sport_data.Bio
             info.Number = Number
           })
           final2(initial)
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
console.log(initial2)
console.log(ini_url)
    useEffect(()=>{
        getdata();
    },[])
    return (<>
    <div className="flex">
        <Sidebar />
        <div className="flex justiy-center items-center w-full h-[100vh]">
        <div
    className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:min-w-[800px] lg:min-h-[600px] sm:mx-auto border border-gray-700 shadow-xl rounded-lg ">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='https://i.makeagif.com/media/1-14-2017/ytQnpt.gif' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src={ini_url} alt='Woman looking front'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">{initial2.Name}</h2>
        <p class="text-gray-500">{initial2.CoreSkill}</p>
    </div>
    <div className="flex justify-around py-6 font-semibold text-gray-200 rounded-lg bg-[#131313] my-4 w-full">
        <div className="text-lg flex flex-col gap-y-1">
            <h1>Phone : {initial2.Number}</h1>
            <h1>Email : {initial2.Email}</h1>
            <h1>Other Skills : badminton, Chess.</h1>
            <h1>Bio : {initial2.Bio}</h1>
        </div>
    </div>
    <ul class="py-4 mt-2  flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <svg class="w-8 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div className="mt-2">4.2 Rating</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <svg class="w-8 fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <div className="mt-2">10 Friends</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <svg class="w-8 fill-current text-orange-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div className="mt-2">20 Years</div>
        </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2 flex gap-x-10">
        <button class="w-1/2 inline-flex justify-center gap-x-2 items-center mx-auto rounded-full bg-green-600 hover:shadow-lg font-semibold  text-white px-6 py-2">Status : Active <img className="h-3 w-3 mt-[2px]" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Green_Dot_%28Active%29.png" alt="" /></button>
        <button class="w-1/2 block mx-auto rounded-full bg-green-700 hover:shadow-lg font-semibold text-white px-6 py-2 hover:bg-green-600">Update Profile</button>
    </div>
</div>
        </div>
        
      </div>
    </>
    


    );
};

export default ProfileCard;