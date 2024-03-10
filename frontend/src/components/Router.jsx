import React from "react";
import { Routes,Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SportDetailForm from "./SportsDetailForm";
import Profile from "./Profile";
import News from "./News";
import CommonDashboard from "./CommonDashboard";
import Map from "./Map";

import FindPlayer from "./FIndplayer";



import MainContainer from "./Components/MainContainer";


import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import CreateGroups from "./Components/CreateGroups";
import Groups from "./Components/Groups";
import { useDispatch, useSelector } from "react-redux";
import Ongoingevents from "./Ongoingevents";
const Router = ()=>{
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
    return(
        <>
        <Routes>
        <Route exact path="/" Component={FindPlayer}></Route> 
        <Route exact path="/signup" Component={SignUp }></Route> 
        <Route exact path="/map" Component={Map }></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/Ongoingevents" Component={Ongoingevents}></Route>

        
<<<<<<< HEAD
        <Route path="/app" element={<MainContainer />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/chat/:id" element={<ChatArea />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route path="/create-groups" element={<CreateGroups />}></Route>
       
=======
        
>>>>>>> f9c50306f86e5bff40f5da53d90a1e254809e2f7
        <Route exact path="/dashboard/:id" Component={Dashboard}></Route>
        <Route exact path="/common_dashboard/:id" Component={CommonDashboard}></Route>
        {/* <Route exact path="/sport_detail_form/:id" Component={SportDetailForm}></Route> */}
        <Route exact path="/sport_detail_form/:id" Component={Profile}></Route>

<<<<<<< HEAD

=======
        <Route exact path="/headlines" Component={News}></Route>

 
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
>>>>>>> f9c50306f86e5bff40f5da53d90a1e254809e2f7
        
        </Routes>
        </>
    )
}
export default Router;