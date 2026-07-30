import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { getEmployeeById, updateEmployee, } from "../Services/employeeServices";
import "../Styles/AddEmployee.css";

function AddEmployee() {

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

    if (!employee.firstName.trim()) {
      alert("First Name is required");
      return;
    }
    if (!employee.lastName.trim()) {
      alert("Last Name is required");
      return;
    }
    if (!employee.email.trim()) {
      alert("Email is required");
      return;
    }
    if (!employee.phone.trim()) {
      alert("Phone number is required");
      return;
    }
    if (!employee.department.trim()) {
      alert("Department is required");
      return;
    }
    if (!employee.designation.trim()) {
      alert("Designation is required");
      return;
    }
    if (!employee.city.trim()) {
      alert("City is required");
      return;
    }
    if (!employee.state.trim()) {
      alert("State is required");
      return;
    }
    if (!employee.status.trim()) {
      alert("Status id required");
      return;
    }

    try {
      const response = await updateEmployee(id, employee);
      console.log("Employee updated Successfully:", response);
      alert("Employee updated Successfully");
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
      navigate("/employees");
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
          <form className="employee-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                value={employee.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lasttName">Last Name</label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                value={employee.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={employee.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                value={employee.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <Input
                type="text"
                name="department"
                id="department"
                placeholder="Enter Department"
                value={employee.department}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <Input
                type="text"
                name="designation"
                id="designation"
                placeholder="Enter Designation"
                value={employee.designation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Enter City"
                value={employee.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
                value={employee.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                className="status-select"
                value={employee.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="button-group">
              <Button text="Update Employee" type="submit" />
              <Button text="Reset" onClick={handleReset} />
              <Button text="Cancel" onClick={() => navigate("/employees")} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
export default AddEmployee;
