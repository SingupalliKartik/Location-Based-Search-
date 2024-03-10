import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./components/Router";
import Profile from "./components/Profile";
import Sidebar from "./components/sidebar";
import News from "./components/News";
import FIndplayer from "./components/FIndplayer";
import UserData from "./components/UserData";
import HireTrainee from "./components/HireTrainee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router />
      {/* <UserData></UserData> */}
      {/* <HireTrainee></HireTrainee> */}
    </>
  );
}

export default App;
