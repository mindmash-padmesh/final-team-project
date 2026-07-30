import { useState } from "react";
import '../Styles/ApplyLeave.css';
import Button from "./Button";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onApply(formData);
    setFormData(initialLeaveData);
  };

  return (
    <form className="apply-leave-form" onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
      <div>
        <div className="group">
          <label htmlFor="employee">Employee Name</label>
          <input type="text" id="employee" name="employee" value={formData.employee} onChange={handleChange} required />
        </div>
        <div className="group">
          <label htmlFor="leaveType">Leave Type</label>
          <select id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange} required >
            <option value="">Select leave type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Paid Leave">Paid Leave</option>
          </select>
        </div>
        <div className="group">
          <label htmlFor="from">From</label>
          <input type="date" id="from"  name="from" value={formData.from} onChange={handleChange} required />
        </div>
        <div className="group">
          <label htmlFor="to">To</label>
          <input type="date" id="to" name="to" min={formData.from} value={formData.to} onChange={handleChange} required />
        </div>
        <div className="group">
          <label htmlFor="days">Days</label>
          <input type="number"  id="days" name="days" min="1" value={formData.days} onChange={handleChange} required />
        </div>
      </div>
      <Button text="Apply Leave" type="submit" />
    </form>
  );
}

export default ApplyLeave;