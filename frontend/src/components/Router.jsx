import React from "react";
import { Routes,Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SportDetailForm from "./SportsDetailForm";
import Profile from "./Profile";
import CommonDashboard from "./CommonDashboard";
const Router = ()=>{
    return(
        <>
        <Routes>
        <Route exact path="/" Component={SignUp }></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/dashboard/:id" Component={Dashboard}></Route>
        <Route exact path="/common_dashboard/:id" Component={CommonDashboard}></Route>
        {/* <Route exact path="/sport_detail_form/:id" Component={SportDetailForm}></Route> */}
        <Route exact path="/sport_detail_form/:id" Component={Profile}></Route>
        </Routes>
        </>
    )
}
export default Router;