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
