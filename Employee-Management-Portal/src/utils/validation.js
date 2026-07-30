export const validateEmployee = (employee) => {
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
    return null;
}