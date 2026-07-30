import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { getEmployeeById, updateEmployee, } from "../Services/employeeServices";
import Modal from "../Component/Modal";
import { validateEmployee } from "../utils/validation";
import EmployeeForm from "../Component/EmployeeForm";
import "../Styles/AddEmployee.css";

function EditEmployee() {

    const navigate = useNavigate();
    const { id } = useParams();
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
    
    useEffect(() => {
        async function fetchEmployee() {
            try {
                const data = await getEmployeeById(id);

                setEmployee({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    department: data.company?.department || "",
                    designation: data.company?.title || "",
                    city: data.address?.city || "",
                    state: data.address?.state || "",
                    status: "Active",
                });
            } catch (error) {
                console.error(error);
            }
        }
        fetchEmployee();
    }, [id]);
    
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
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await updateEmployee(id, employee);
      console.log("Employee updated Successfully:", response);
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
      alert("Failed to update employee");
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
            <h1>Edit Employee</h1>
            <p>Fill in the employee details below</p>
          </div>
          <EmployeeForm
            employee={employee}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            onCancel={() => navigate("/employees")}
            submitText="Add Employee"
          />
        </div>
      </main>
      {showSuccessModal && (
        <Modal
          title="Success"
          message="Employee updated successfully."
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
    </>
  );
}
export default EditEmployee;
