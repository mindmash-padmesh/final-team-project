import "../Styles/AppRoutes.css";
import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "../Component/Navbar";
import SideBar from "../Component/SideBar";
import Footer from "../Component/Footer";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import NotFound from '../Pages/NotFound';

function AppRoutes(){
    const location = useLocation();

  const showSidebar = !["/", "/login"].includes(
    location.pathname
  );

  return (
    <div className="app-layout">
      {showSidebar && <SideBar />}
      <div className="page-layout">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>

    )
}

export default AppRoutes;
