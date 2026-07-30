import {useEffect, useRef, useState,} from "react";
import {useLocation, useNavigate,} from "react-router-dom";
import {FiLogIn, FiLogOut, FiMenu, FiUser,} from "react-icons/fi";
import "../Styles/Navbar.css";
import logoImage from "../assets/images/logoImg.png";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("authToken"));
  });

  const showMenuButton = isLoggedIn && !["/", "/login"].includes(location.pathname);

  const handleLogin = () => {
    setShowMenu(false);
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setShowMenu(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(Boolean(token));
  }, [location.pathname]);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener(
        "mousedown",
        closeDropdown
      );
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        {showMenuButton && (
          <button className="menu-btn" type="button" onClick={onMenuClick} aria-label="Toggle sidebar" >
            <FiMenu />
          </button>
        )}
        <div className="logo"> <img src={logoImage} alt="Employee Management Portal logo" />
          <h2>Employee Management Portal</h2>
        </div>
      </div>
      <div className="profile-menu" ref={dropdownRef} >
        <button className="profile-btn" type="button" onClick={() => setShowMenu(!showMenu)} aria-label="Open user menu" aria-expanded={showMenu} >
          <FiUser />
        </button>
        {showMenu && (
          <div className="profile-dropdown">
            <button className="dropdown-item" type="button" onClick={handleLogin} disabled={isLoggedIn} >
              <FiLogIn />
              Login
            </button>
            <button className="dropdown-item logout-item" type="button" onClick={handleLogout} disabled={!isLoggedIn} >
              <FiLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
export default Navbar;