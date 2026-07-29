import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../Layout/Layout";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Timesheets from "../Pages/Timesheets";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Leave from "../Pages/Leave";
import Attendance from "../Pages/Attendance";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="leaves" element={<Leave/>}/>
        <Route path="timesheets" element={<Timesheets/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
