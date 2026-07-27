import { Outlet } from "react-router-dom";
import "./Layout.css"
import SideBar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
function Layout(){
    return (
        <div className="layout">
            <aside className="sidebar"><SideBar/></aside>
            <div className="right">
                <div className="navbar"><Navbar/></div>
                <main className="content"><Outlet/></main>
                <footer className="footer"><Footer/></footer>
            </div>
        </div>
    )
}

export default Layout;

