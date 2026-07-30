import "../Styles/AppRoutes.css";
import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useState} from 'react';
import Navbar from "../Component/Navbar";
import SideBar from "../Component/SideBar";
import Footer from "../Component/Footer";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import NotFound from '../Pages/NotFound';
import Employees from "../Pages/Employees";
import Home from "../Pages/Home";
import Leaves from "../Pages/Leave";

function AppRoutes(){
    const location = useLocation();

  const showSidebar = !["/", "/login"].includes(
    location.pathname
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => window.innerWidth > 768
  );

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  return (
    <div className="app-layout">
      {showSidebar && isSidebarOpen && <SideBar />}
      <div className="page-layout">
        <Navbar onMenuClick={toggleSidebar}  />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />}/>
            <Route path="/employees" element={<Employees />} />
            <Route path="/leaves" element={<Leaves />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
    )
}

export default AppRoutes;
