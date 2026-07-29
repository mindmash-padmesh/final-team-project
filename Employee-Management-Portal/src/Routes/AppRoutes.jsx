import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../Layout/Layout";

import Employees from "../Pages/Employees";
import AddEmployee from "../Pages/AddEmployee";
import EmployeeDetails from "../Pages/EmployeeDetails";
import EditEmployee from "../Pages/EditEmployee";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" replace />} />

      <Route element={<Layout />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
