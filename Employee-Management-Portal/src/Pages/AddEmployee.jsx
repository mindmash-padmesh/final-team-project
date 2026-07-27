import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { getEmployees } from "../Services/employeeServices";
import "../Styles/AddEmployee.css";


function AddEmployee() {
    return (
        <>
      <div>
        <div className="page-layout" >
        <Sidebar />
        <div className="main-section" >
        <Navbar />
        <main className="add-empoloyee-content">
          <div className="form-card">
            <div className="page-header">
              <h1>Add Employee</h1>
              <p>Fill in the employee details below</p>
            </div>
            <form className="employee-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lasttName">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <Input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Enter Department"
                />
              </div>

              <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <Input
                  type="text"
                  name="designation"
                  id="designation"
                  placeholder="Enter Designation"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter State"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" className="status-select">
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="button-group">
                <Button text="Save Employee" />
                <Button text="Reset" />
                <Button text="Cancel" />
                        </div>
                        
                    </form>
                    
          </div>
            </main>
            <Footer />
        </div>
                </div>
                </div>
      </>
    );
}
export default AddEmployee;