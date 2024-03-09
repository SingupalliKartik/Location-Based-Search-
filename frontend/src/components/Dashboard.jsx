import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,Link, useParams } from "react-router-dom";

const Dashboard  = ()=>{
  const {id} =  useParams();
  const navigate = useNavigate();
  const [iniName,finName] = useState("");

    const getdata  = async()=>{
        try {
           const result = await axios.get(`http://localhost:1234/sport_data/${id}`) ;
           const {Name,sport_data,user_sport_data} = result.data;
           if(user_sport_data===null || user_sport_data===undefined){
          navigate(`/sport_detail_form/${id}`)
           }  
		   console.log(sport_data);
           finName(Name);   
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }


// Get My Location
const correct = (position)=>{
	console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("latitude "+latitude+"longitude "+longitude);
}
const getlocation = ()=>{
	try {
	const location =	navigator.geolocation.getCurrentPosition(correct);
	} catch (error) {
		alert(error);
		console.log(error);
	}
}

    useEffect(()=>{
        getdata();
    },[])
    return(
        <>
                <nav class="relative px-4 py-4 flex justify-between bg-blue-900 items-center ">
		<a class="text-lg sm:text-3xl text-white	  font-bold leading-none" href="#">
			DASHBOARD
		</a>
		<ul class=" absolute space-x-2 items-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><Link to={"/"} class="text-sm text-white hover:text-gray-500 whitespace-nowrap" href="#">Home</Link></li>
			<li class="text-gray-300 ">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link to={"/"} class="text-sm text-white hover:text-gray-500 whitespace-nowrap" href="#">Home</Link></li>
			<li class="text-gray-300 ">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link to={"/"} class="text-sm text-white hover:text-gray-500 whitespace-nowrap" href="#">Home</Link></li>
		</ul>

		{(iniName=="")?(<>
		<Link to={"/login"} class="hidden lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">{iniName}</Link>
		</>):(<>
		<Link to={"/login"} class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">{iniName}</Link>
		</>)}
		<button onClick={()=>{
             localStorage.removeItem("token");
			 navigate("/");
		}} class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Log Out</button>
	</nav>

	{/* My Location */}
	<button onClick={getlocation} className="p-3 px-6 border-2 border-black">My Location</button>
        </>
    )
}

export default Dashboard;