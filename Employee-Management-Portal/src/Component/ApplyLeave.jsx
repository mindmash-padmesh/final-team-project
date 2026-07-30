import { useState } from "react";
import '../Styles/ApplyLeave.css';
import Button from "./Button";
import Input from './Input';

const initialLeaveData = {
  employee: "",
  leaveType: "",
  from: "",
  to: "",
  days: "",
  status: "Pending",
};

function ApplyLeave({ onApply }) {
  const [formData, setFormData] = useState(initialLeaveData);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const employeeName = formData.employee.trim();
    const namePattern = /^[A-Za-z][A-Za-z\s.'-]{2,49}$/;
    if (!namePattern.test(employeeName)) {
      setError( "Enter a valid employee name with at least 3 characters." );
      return;
    }
    if (!formData.leaveType) {
      setError("Please select a leave type.");
      return;
    }

    setError("");
    onApply(formData);
    setFormData(initialLeaveData);
  };

  return (
    <form className="apply-leave-form" onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
       {error && ( <p className="validation-error" > {error} </p> )}
      <div>
        <div className="group">
          <label htmlFor="employee">Employee Name</label>
          <Input type="text" id="employee" name="employee" value={formData.employee} onChange={handleChange} placeholder="Enter name" required />
        </div>
        <div className="group">
          <label htmlFor="leaveType">Leave Type</label>
          <select id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange} required >
            <option value="" disabled>Select leave type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Paid Leave">Paid Leave</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="from">From</label>
          <Input type="date" id="from"  name="from" value={formData.from} onChange={handleChange} required />
        </div>
        <div className="group">
          <label htmlFor="to">To</label>
          <Input type="date" id="to" name="to" min={formData.from} value={formData.to} onChange={handleChange}  required />
        </div>
        <div className="group">
          <label htmlFor="days">Days</label>
          <Input type="number"  id="days" name="days" min="1" value={formData.days} onChange={handleChange} required placeholder="Enter days" />
        </div>
      </div>
      <Button text="Apply Leave" type="submit" />
    </form>
  );
}

export default ApplyLeave;