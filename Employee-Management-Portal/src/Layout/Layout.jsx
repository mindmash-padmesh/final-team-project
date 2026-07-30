import { useEffect, useState } from "react";
import {Outlet,useLocation,} from "react-router-dom";
import "./Layout.css";
import SideBar from "../Component/SideBar";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Layout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => window.innerWidth > 768
  );

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

    useEffect(() => {
     const handleResize = () => {
        setIsSidebarOpen(window.innerWidth > 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
      window.removeEventListener("resize", handleResize);
     };
    }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="layout">
      {isSidebarOpen && <SideBar />}
      <div className="right">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="content"><Outlet /></main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;