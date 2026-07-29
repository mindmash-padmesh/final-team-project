import { useNavigate } from "react-router-dom";
import '../Styles/Home.css';

import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiUsers,
} from "react-icons/fi";

import "../Styles/Home.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Employee Management",
      description:
        "Add, update, search and manage employee information.",
      icon: <FiUsers />,
    },
    {
      title: "Attendance Tracking",
      description:
        "Track daily attendance and employee working hours.",
      icon: <FiClock />,
    },
    {
      title: "Leave Management",
      description:
        "Manage employee leave requests and approvals.",
      icon: <FiCalendar />,
    },
  ];

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <Navbar/>
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-label">
            Employee Management Portal
          </span>

          <h1>
            Manage your employees easily and efficiently
          </h1>

          <p>
            A simple platform for managing employees,
            attendance, leaves and timesheets from one place.
          </p>

          <button
            className="home-login-btn"
            type="button"
            onClick={goToLogin}
          >
            Login to Dashboard
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section className="home-features">
        <div className="features-heading">
          <h2>Everything you need to manage your team</h2>
          <p>
            Important employee-management features in one
            portal.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default Home;