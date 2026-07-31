import {Link} from "react-router-dom";
import "../Styles/NotFound.css";
import { FaArrowLeft} from "react-icons/fa";
import Image from "../assets/images/404image.png" 

function NotFound(){
    return(
        <div className="notfound-container">
            <div className="notfound-content">
                <img src={Image} alt="NotFound image"/>
                <marquee>Oops! Page Not Found</marquee>
                <p>The page you are looking for might have been removed,renamed, or is temporarily unavailable.</p>
                <Link to="/login" onClick={() => localStorage.removeItem("authToken")} className="Back"><FaArrowLeft/><span>Go Back</span></Link>
            </div>
        </div>
    );
}

export default NotFound;