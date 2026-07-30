
export const validateEmployee = (employee) => {
  
  if (!employee.firstName.trim()) {
    return "First Name is required";
  }

  if (!/^[A-Za-z\s]+$/.test(employee.firstName.trim())) {
    return "First Name should contain only letters";
  }

  
  if (!employee.lastName.trim()) {
    return "Last Name is required";
  }

  if (!/^[A-Za-z\s]+$/.test(employee.lastName.trim())) {
    return "Last Name should contain only letters";
  }

  
  if (!employee.email.trim()) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(employee.email.trim())) {
    return "Please enter a valid email address";
  }


  if (!employee.phone.trim()) {
    return "Phone number is required";
  }

  if (!/^\d{10}$/.test(employee.phone.trim())) {
    return "Phone number must be exactly 10 digits";
  }

  
  if (!employee.department.trim()) {
    return "Department is required";
  }

  
  if (!employee.designation.trim()) {
    return "Designation is required";
  }

  
  if (!employee.city.trim()) {
    return "City is required";
  }

  if (!/^[A-Za-z\s]+$/.test(employee.city.trim())) {
    return "City should contain only letters";
  }

  
  if (!employee.state.trim()) {
    return "State is required";
  }

  if (!/^[A-Za-z\s]+$/.test(employee.state.trim())) {
    return "State should contain only letters";
  }


  if (!employee.status.trim()) {
    return "Status is required";
  }

  return null;
};
