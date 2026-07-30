import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById } from "../Services/employeeServices";
import Button from "../Component/Button";
import "../Styles/EmployeeDetails.css";

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const data = await getEmployeeById(id);
        console.log(data);
        setEmployee(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <h2>Loading...</h2>;
  }
  return (
    <main className="employee-details-content">
      <div className="details-header">
        <h1>Employee Details</h1>

        <div className="details-buttons">
          <Button text="Back" onClick={() => navigate("/employees")} />

          <Button text="Edit Employee" onClick={()=>navigate(`/edit-employee/${employee.id}`)}/>
        </div>
      </div>

      <div className="employee-details-card">
        <div className="employee-profile">
          <img
            src={employee.image}
            alt={employee.firstName}
            className="employee-image"
          />

          <h2>
            {employee.firstName} {employee.lastName}
          </h2>

          <p>{employee.company?.title}</p>
        </div>

        <div className="employee-info">
          <div className="info-row">
            <span className="info-label">Employee ID</span>
            <span>{employee.id}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Email</span>
            <span>{employee.email}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Phone</span>
            <span>{employee.phone}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Age</span>
            <span>{employee.age}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Gender</span>
            <span>{employee.gender}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Department</span>
            <span>{employee.company?.department}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Designation</span>
            <span>{employee.company?.title}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Company</span>
            <span>{employee.company?.name}</span>
          </div>

          <div className="info-row">
            <span className="info-label">City</span>
            <span>{employee.address?.city}</span>
          </div>

          <div className="info-row">
            <span className="info-label">State</span>
            <span>{employee.address?.state}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Country</span>
            <span>{employee.address?.country}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default EmployeeDetails;
