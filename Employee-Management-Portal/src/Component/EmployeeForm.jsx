import Input from "./Input";
import Button from "./Button";

function EmployeeForm({
    employee,
    handleChange,
    handleSubmit,
    handleReset,
    onCancel,
    submitText,
}) {
    return (
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
          <label htmlFor="lastName">Last Name</label>
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
          <Button text={submitText} type="submit" />
          <Button text="Reset" onClick={handleReset} type="button"/>
          <Button text="Cancel" type="button"  onClick={onCancel} />
        </div>
      </form>
    );
}
export default EmployeeForm;