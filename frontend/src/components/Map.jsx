import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import GoogleMapReact from "google-map-react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const Map = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    // You can perform further actions with the user's location here
    setLatitude(latitude);
    setLongitude(longitude);
    filterNearbyLocations(latitude, longitude);
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
    const nearby = userLocations.filter((location) => {
      const distance = calculateDistance(lat, lon, location.latitude, location.longitude);
      return distance < 10;
    });
    setNearbyLocations(nearby);
  };

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

  // const pinpointLocation = (location) => {
  //   // Display information about the clicked location
  //   alert(`Name: ${location.name}, ID: ${location.id}, Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
  // };

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

  const header = () => {
    return (
      <div className="bg-transparent" style={{ backgroundColor: "white" }}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          MATCHFINDER
        </Typography>

        <TextField
          label="Search for your match"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Distance
          </Typography>
        </div>

        <Slider />

        <div>
          <Button variant="outlined" style={{ width: "50%" }}>
            Reset
          </Button>

          <Button variant="outlined" style={{ width: "50%" }}>
            Search
          </Button>
        </div>
      </div>
    );
  };

  const userLocations = [
    { id: "1", name: "Location 1", latitude: 23.237541, longitude: 77.405549 },
    { id: "2", name: "Location 2", latitude: 23.240698, longitude: 77.395453 },
    { id: "3", name: "Location 3", latitude: 23.236874, longitude: 77.421120 },
    { id: "4", name: "Location 4", latitude: 23.243567, longitude: 77.397823 },
    { id: "5", name: "Location 5", latitude: 23.252890, longitude: 77.378740 },
    { id: "6", name: "Location 6", latitude: 23.239640, longitude: 77.432620 },
    { id: "7", name: "Location 7", latitude: 23.229382, longitude: 77.412512 },
    { id: "8", name: "Location 8", latitude: 23.245191, longitude: 77.438478 },
    { id: "9", name: "Location 9", latitude: 23.255556, longitude: 77.419581 },
    { id: "10", name: "Location 10", latitude: 23.264987, longitude: 77.397469 },
  ];

  const map = () => {
    return (
      <div style={{ backgroundColor: "cyan", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: latitude,
            lng: longitude,
          }}
          defaultZoom={5}
          center={{ lat: latitude, lng: longitude }}
        >
          <LocationSearchingIcon
            color="blue" // Set a different color for the user's location
            lat={latitude}
            lng={longitude}
            fontSize="large"
          />
          
          {userLocations.map((location) => (
            <LocationSearchingIcon
              key={location.id}
              color="primary"
              lat={location.latitude}
              lng={location.longitude}
              text={location.name}
              fontSize="large"
              onClick={() => pinpointLocation(location)}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  };

  return (
    <div>
      {header()}
      {map()}
    </div>
  );
};

export default Map;
