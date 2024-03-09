import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import GoogleMapReact from "google-map-react";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
const Map = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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

  const header = () => {
    return (
      <div style={{ backgroundColor: "white" }}>
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

  const map = () => {
    return (
      <div style={{ backgroundColor: "cyan", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 50.5263596,
            lng: 75.8577258,
          }}
          defaultZoom={14}
      center={{lat: latitude, lng: longitude}}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
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
