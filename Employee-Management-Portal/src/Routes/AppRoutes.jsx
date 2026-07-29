import {Routes, Route,Navigate} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Employees from "../Pages/Employees";
import AddEmployee from "../Pages/AddEmployee";
import EmployeeDetails from "../Pages/EmployeeDetails";
import EditEmployee from "../Pages/EditEmployee";
function AppRoutes(){
  return (
    < Routes>
      <Route path="/" element={<Navigate to="/employees" replace />} />
      
      <Route element={<Layout />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/employees/edit/:id" element={<EditEmployee/>}/>
      </Route>
    </Routes>
  );  
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Timesheets from "../Pages/Timesheets";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="timesheets" element={<Timesheets/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
