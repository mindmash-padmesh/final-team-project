<<<<<<< HEAD
import "./App.css";
import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./Component/Navbar";
import SideBar from "./Component/SideBar";
import Footer from "./Component/Footer";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";

function App() {
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
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
=======
import './App.css'
import AppRoutes from './Routes/AppRoutes';


function App() {
 return <><AppRoutes/></>;
>>>>>>> 5390de7a276d3c01062eeb14406195d6b2bb5f49
}

export default App;