import {NavLink} from "react-router-dom";
import "../Styles/SideBar.css";
import {MdDashboard,MdPeople,MdCalendarToday,MdBeachAccess,MdAccessTime,MdPerson}from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";

function SideBar(){
    const menuItems=[
        {name:"Dashboard", path:"/dashboard",icon:<MdDashboard/>},
        {name:"Employees", path:"/employees", icon:<MdPeople/>},
        {name:"Attendance", path:"/attendance", icon:<MdCalendarToday/>},
        {name:"Leaves", path:"/leaves", icon:<MdBeachAccess/>},
        {name:"Timesheets", path:"/timesheets", icon:<MdAccessTime/>},
        {name:"Profile", path:"/profile", icon:<MdPerson/>},
    ];
    return(
        <aside className="sidebar">
            {menuItems.map((item)=>(
                <NavLink key={item.name} to={item.path} className={({isActive})=>isActive?"menu active":"menu"}><span>{item.icon}</span>{item.name}</NavLink>
            ))}
            <NavLink to="/login" className="menu logout"><span> →</span>Logout</NavLink>
        </aside>
    );
}

export default SideBar;
