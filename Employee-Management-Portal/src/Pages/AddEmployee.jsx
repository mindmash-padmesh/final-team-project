import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { addEmployee } from "../Services/employeeServices";
import { validateEmployee } from "../utils/validation";
import EmployeeForm from "../Component/EmployeeForm";
import Modal from "../Component/Modal";
import "../Styles/AddEmployee.css";

function AddEmployee() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    city: "",
    state: "",
    status: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmployee(employee);
    console.log("Employee:", employee);
    console.log("Validation Error:", validationError);
    if (validationError) {
      alert(validationError);
      return;
    }
    console.log("Validation Passed");
    try {
      const response = await addEmployee(employee);
      console.log("Employee Added Successfully:", response);
      setShowSuccessModal(true);
      setEmployee({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        city: "",
        state: "",
        status: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add employee");
    }
  };

  const handleReset = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      city: "",
      state: "",
      status: "",
    });
  };

  return (
    <>
      <main className="add-employee-content">
        <div className="form-card">
          <div className="page-header">
            <h1>Add Employee</h1>
            <p>Fill in the employee details below</p>
          </div>
          <EmployeeForm
            employee={employee}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            onCancel={()=>navigate("/employees")}
            submitText="Add Employee"
          />
          {showSuccessModal && (
            <Modal
              title="Success"
              message="Employee added successfully"
              confirmText="OK"
              onClose={() => {
                setShowSuccessModal(false);
              }}
              onConfirm={() => {
                setShowSuccessModal(false);
                navigate("/employees");
              }}
            />
          )}
        </div>
      </main>
    </>
  );
}
export default AddEmployee;
