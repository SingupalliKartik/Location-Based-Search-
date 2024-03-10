import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import GoogleMapReact from "google-map-react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Map = () => {
  const {id} = useParams();
  const [latitude, setLatitude] = useState(23.237541);
  const [longitude, setLongitude] = useState(77.405549);
  const [initial,final] = useState([{   
    id:"",
CoreSkill:"",
latitude:"",
longitude:"",
skillLevel:"",
selectedSports:"",
FName:""
  }])
  const [initial2,final2] = useState([{   
    id:"",
CoreSkill:"",
latitude:"",
longitude:"",
skillLevel:"",
selectedSports:"",
FName:""
  }])
  const [ini_user,fin_user] = useState();
  const [ini_search,fin_search] = useState("");
    const navigate = useNavigate();
    const getdata  = async()=>{
        try {
           const result = await axios.get(`http://localhost:1234/sport_data/${id}`) ;
           const sport_data = result.data.sport_data;
           const user_sport_data = result.data.user_sport_data;
           fin_user(user_sport_data);
           sport_data.map((info)=>{
            final((data)=>[
              ...data,{
                id:info._id,
                CoreSkill:info.CoreSkill,
                latitude:info.latitude,
                longitude:info.longitude,
                skillLevel:info.skillLevel,
                selectedSports:info.selectedSports,
                FName:info.FName,
              }
            ])
           })
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

// console.log(initial)
const [selectedLocation, setSelectedLocation] = useState(null);
const [nearbyLocations, setNearbyLocations] = useState(null);

  useEffect(() => {
    getdata();
    getUserLocation();
  }, []);

  const getUserLocation = () => {
     console.log( navigator.geolocation.getCurrentPosition(showPosition,showError));
  };

  const showPosition = (position) => {
    try {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
      // filterNearbyLocations(latitude, longitude);
      // console.log(longitude);
      // console.log(latitude);
    } catch (error) {
      console.log(error);
      alert(error);
    }

  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
      default:
        console.log("An error occurred:", error.message);
    }
  };


const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    0.5 -
    Math.cos(dLat) / 2 +
    (Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      (1 - Math.cos(dLon))) /
      2;
  return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
};

const filterNearbyLocations = (lat, lon) => {
  const nearby = initial.filter((location) => {
    // console.log(location.latitude);
    if(location.id !== '' && location.id !== "" && location.latitude !=="" && location.longitude !==""){
    const distance = calculateDistance(lat, lon, location.latitude, location.longitude);
    console.log(distance);
    return distance > 10;
    }
  });


  // setNearbyLocations(nearby);

  
};

// console.log(nearbyLocations)
const pinpointLocation = (location) => {
  setSelectedLocation(location);
  const distance = calculateDistance(
    latitude,
    longitude,
    location.latitude,
    location.longitude
  );
  alert(
    `Name: ${location.name}, ID: ${location.id}, Distance: ${distance.toFixed(
      2
    )} km`
  );
};

const setsearch = (e)=>{
  fin_search(e.target.value)
}
const  searchdata = (e)=>{
  const value = e.target.value;
  console.log(value)
  initial.map((info)=>{
   if(info.FName === value || info.CoreSkill === value ){
    if(info.id === ""){
      final2((data)=>[
          {id:"",
          CoreSkill:"",
          latitude:"",
          longitude:"",
          skillLevel:"",
          selectedSports:"",
          FName:"",}
      ])
    }
    else{
    final2((data)=>[
      ...data,{
        id:info.id,
        CoreSkill:info.CoreSkill,
        latitude:info.latitude,
        longitude:info.longitude,
        skillLevel:info.skillLevel,
        selectedSports:info.selectedSports,
        FName:info.FName,
      }
    ])
  }
   }
  })
}
  const header = () => {
    return (
      // <div className="bg-transparent" style={{ backgroundColor: "white" }}>
      //   <Typography  style={{ textAlign: "center" }}>
      //     MATCHFINDER
      //   </Typography>
      //   <TextField
      //     label="Search for your match"
      //     variant="outlined"
      //     style={{ width: "95%",margin:"auto",display:"flex",height:"35px" }}
      //   />
      //   <div
      //     style={{
      //       display: "flex",
      //       flexDirection: "row",
      //       justifyContent: "space-between",
      //       alignItems: "center",
      //     }}
      //   >
      //     <Typography variant="h8" style={{ textAlign: "center" }}>
      //       Distance
      //     </Typography>
      //   </div>

      //   <Slider style={{ width: "95%" ,margin:"auto",display:"flex",}} />

      //   <div style={{margin:"auto",display:"flex", justifyContent:"space-evenly"}}>
      //     <Button variant="outlined" style={{ width: "45%",marginBottom:"10px" }}>
      //       Reset
      //     </Button>

      //     <Button variant="outlined" style={{ width: "45%",marginBottom:"10px" }}>
      //       Search
      //     </Button>
      //   </div>
      // </div>
      <div className="flex w-full mb-10 justify-center items-center pt-10">
            <div className="flex w-full justify-center lg:gap-x-20 items-center">
              <input
                className="outline-none lg:w-[800px] border-2 border-white focus:ring focus:ring-gray-800 rounded bg-[#131313] border-b-white px-8 py-2"
                placeholder="Name / Core Skill ..."
                type="text"
                onChange={searchdata}
              />
              <div>
                <select
                  onChange={setsearch}
                  name="CoreSkill"
                  class="block w-full px-4 py-2  text-gray-700 border border-white rounded-md bg-transparent dark:text-gray-300  dark:focus:border-red-600 "
                >
                  <option className="bg-[#111111] " value="">
                    Search By
                  </option>
                  <option className="bg-[#111111]" value="Name">
                    Name
                  </option>
                  {/* <option className="bg-[#111111]" value="Location">
                    Location
                  </option> */}
                  <option className="bg-[#111111]" value="age">
                    Age
                  </option>
                  <option className="bg-[#111111]" value="bycoreskill">
                    Core Skill
                  </option>
                </select>
              </div>
              {/* <button>
                {" "}
                <img
                  className="h-8  border border-opacity-40 border-gray-700 w-8 mix-blend-lighten"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpUvJgqd5Y2uFxMB3gjQpMvQHh2nrkux1CwVKv8V9rA&s"
                  alt=""
                />
              </button> */}
            </div>
          </div> 
    );
  };
  let userloction = [
    { "id": "1", "name": "Location 1", "lat": "23.237541", "lng": "77.405549" },
    { "id": "2", "name": "Location 2", "lat": "23.240698", "lng": "77.395453" },
    { "id": "3", "name": "Location 3", "lat": "23.236874", "lng": "77.421120" },
    { "id": "4", "name": "Location 4", "lat": "23.243567", "lng": "77.397823" },
    { "id": "5", "name": "Location 5", "lat": "23.252890", "lng": "77.378740" },
    { "id": "6", "name": "Location 6", "lat": "23.239640", "lng": "77.432620" },
    { "id": "7", "name": "Location 7", "lat": "23.229382", "lng": "77.412512" },
    { "id": "8", "name": "Location 8", "lat": "23.245191", "lng": "77.438478" },
    { "id": "9", "name": "Location 9", "lat": "23.255556", "lng": "77.419581" },
    { "id": "10", "name": "Location 10", "lat": "23.264987", "lng": "77.397469" }
];
  const map = () => {
   if(initial2.length>1){
    return (
      <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultZoom={14}
          center={{ lat: latitude, lng: longitude }}
        >
          {initial2.map((location) => {
            console.log(location.latitude)
            if(location.latitude!==""&&location.longitude!==""){
              return (
                <LocationOnIcon
                  color="secondary"
                  lat={location.latitude}
                  lng={location.longitude}
                  />)
            }  
          })}
   
          <LocationSearchingIcon
            color="primary"
            lat={latitude}
            lng={longitude}
            text="My Marker"
            fontSize="large"
          />
          
        </GoogleMapReact>
      </div>
    );
   }
   else{
    if(ini_search==""){
      return (
        <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultZoom={14}
            center={{ lat: latitude, lng: longitude }}
          >
            {initial.map((location) => {
              console.log(location.latitude)
              if(location.latitude!==""&&location.longitude!==""){
                return (
                  <LocationOnIcon
                    color="secondary"
                    lat={location.latitude}
                    lng={location.longitude}
                    />)
              }  
            })}
     
            <LocationSearchingIcon
              color="primary"
              lat={latitude}
              lng={longitude}
              text="My Marker"
              fontSize="large"
            />
            
          </GoogleMapReact>
        </div>
      );
    }
    else if(ini_search==="bycoreskill"){
      return (
        <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}

            defaultZoom={14}
            center={{ lat: latitude, lng: longitude }}
          >
     {  initial.map((info)=>{
      if(ini_user.CoreSkill===info.CoreSkill){
      
        return (
          <LocationOnIcon
            color="secondary"
            lat={info.latitude}
            lng={info.longitude}
            />)
      }
      else{
        return(
          <>
          </>
        )
      }
     })}

     
            <LocationSearchingIcon
              color="primary"
              lat={latitude}
              lng={longitude}
              text="My Marker"
              fontSize="large"
            />
            
          </GoogleMapReact>      
        </div>
      );
    }
    else if(ini_search==="age"){
      return (
        <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultZoom={14}
            center={{ lat: latitude, lng: longitude }}
          >
     {  initial.map((info)=>{
      if(ini_user.DOB===info.DOB){
        if(info.latitude!==""&&info.longitude!==""){
        return (
          <LocationOnIcon
            color="secondary"
            lat={info.latitude}
            lng={info.longitude}
            />)
      }
      else{
        return(
          <>
          </>
        )
      }
     }
     })}
  
     
            <LocationSearchingIcon
              color="primary"
              lat={latitude}
              lng={longitude}
              text="My Marker"
              fontSize="large"
            />
            
          </GoogleMapReact>
        </div>
      );
    }
    else if(ini_search==="Location"){
      // console.log("Hello")
          filterNearbyLocations(latitude, longitude);
      return (
        <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultZoom={14}
            center={{ lat: latitude, lng: longitude }}
          >
     {/* {  initial.map((info)=>{
      if(ini_user.FName===info.FName){
        return (
          <LocationOnIcon
            color="secondary"
            lat={info.latitude}
            lng={info.longitude}
            />)
      }
      else{
        return(
          <>
          </>
        )
      }
     })} */}
            {/* {initial.map((location) => {
              // console.log(location)
            
            })} */}
            {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
     
            <LocationSearchingIcon
              color="primary"
              lat={latitude}
              lng={longitude}
              text="My Marker"
              fontSize="large"
            />
            
          </GoogleMapReact>
        </div>
      );
    }
    else{
      return (
        <div style={{ backgroundColor: "cyan",width:"80vw", height: "83vh"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            // defaultCenter={{
            //   lat: 23.237541,
            //   lng: 77.405549,
            // }}
            defaultZoom={14}
            center={{ lat: latitude, lng: longitude }}
          >
            {initial.map((location) => {
              console.log(location.latitude)
              if(location.latitude!==""&&location.longitude!==""){
                return (
                  <LocationOnIcon
                    color="secondary"
                    lat={location.latitude}
                    lng={location.longitude}
                    />)
              }  
            })}
            {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
     
            <LocationSearchingIcon
              color="primary"
              lat={latitude}
              lng={longitude}
              text="My Marker"
              fontSize="large"
            />
            
          </GoogleMapReact>
        </div>
      );
    }
  }
  };

    return (
      <div>
        {header()}
        {map()}
      </div>
    )

};

export default Map;

