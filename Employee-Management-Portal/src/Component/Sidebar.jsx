import { NavLink } from "react-router-dom";
import { MdAccessTime, MdBeachAccess, MdCalendarToday, MdDashboard, MdPeople, MdPerson} from "react-icons/md";
import "../Styles/Sidebar.css";

function SideBar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: <MdPeople />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <MdCalendarToday />,
    },
    {
      name: "Leaves",
      path: "/leaves",
      icon: <MdBeachAccess />,
    },
    {
      name: "Timesheets",
      path: "/timesheets",
      icon: <MdAccessTime />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <MdPerson />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <NavLink key={item.name} to={item.path} className={({ isActive }) =>  isActive ? "menu active" : "menu" }  > 
            <span>{item.icon}</span> {item.name}  
        </NavLink> ))}
      <NavLink to="/login" className="menu logout" onClick={handleLogout} >
        <span>→</span>
        Logout
      </NavLink>
    </aside>
  );
}

export default SideBar;