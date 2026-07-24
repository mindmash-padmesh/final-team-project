import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

import "../Styles/Employees.css";

function Employees() {
    return (
      <>
        <div className="page-layout">
          <Sidebar />

          <div className="main-section">
            <Navbar />

            <main className="employee-content">
              <h1>Employee</h1>
            </main>
          </div>
        </div>
        <Footer />
      </>
    );
}
export default Employees;