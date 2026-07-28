import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { getEmployees } from "../Services/employeeServices";
import "../Styles/Employees.css";

function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const data = await getEmployees();
        console.log(data);
        setEmployees(data.users);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    fetchEmployees();
  }, []);

  return (
    <>
          <main className="employee-content">
            <div className="employee-header">
              <h1>Employees</h1>
              <div className="employee-toolbar">
                <div className="search-box">
                  <Input type="text" placeholder="Search employee..." />
                </div>
                <div className="toolbar-buttons">
                  <Button text="Filter" />
                  <Button text="Sort" />
                  <Button
                    text="+ Add Employee"
                    onClick={() => navigate("/add-employee")}
                  />
                </div>
              </div>
            </div>
            <div className="employee-table-container">
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>
                        {employee.firstName} {employee.lastName}
                      </td>
                      <td>{employee.email}</td>
                      <td>{employee.company.department}</td>
                      <td>{employee.company.title}</td>
                      <td>{employee.role}</td>
                      <td>
                        <Button text="View" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
    </>
  );
}
export default Employees;
