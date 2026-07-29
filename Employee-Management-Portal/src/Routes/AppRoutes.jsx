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
import Employees from "../Pages/Employees";
import AddEmployee from "../Pages/AddEmployee";
import EmployeeDetails from "../Pages/EmployeeDetails";
import EditEmployee from "../Pages/EditEmployee";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="leaves" element={<Leave/>}/>
        <Route path="timesheets" element={<Timesheets/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default AppRoutes;
