import { Routes, Route, Navigate } from "react-router-dom";

import Employees from "../Pages/Employees";
import AddEmployee from "../Pages/AddEmployee";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" replace />} />

      <Route path="/employees" element={<Employees />} />

      <Route path="/add-employee" element={<AddEmployee />} />
    </Routes>
  );
}

export default AppRoutes;
