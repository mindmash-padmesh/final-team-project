import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Input from "../Component/Input";
import Button from "../Component/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MuiButton from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import { getEmployees, deleteEmployee, } from "../Services/employeeServices";
import "../Styles/Employees.css";

function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const data = await getEmployees();
        console.log(data);
        setEmployees(data.users);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    fetchEmployees();
  }, []);

  const departments = [
    ...new Set(employees.map((employee) => employee.company.department)),
  ];

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) return;
    try {
      await deleteEmployee(id);

      alert("Employee deleted Successfully");

      const data = await getEmployees();
      setEmployees(data.users);
    } catch (error) {
      console.error(error);
      alert("Failed to delete employee");
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      `${employee.firstName} ${employee.lastName}`
        .toLowerCase()
        .includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.company.department.toLowerCase().includes(search) ||
      employee.company.title.toLowerCase().includes(search);

    const matchesDepartment =
      selectedDepartment === "All" ||
      employee.company.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });


  const sortedEmployees = [...filteredEmployees];

switch (sortOption) {
  case "name-asc":
    sortedEmployees.sort((a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`
      )
    );
    break;

  case "name-desc":
    sortedEmployees.sort((a, b) =>
      `${b.firstName} ${b.lastName}`.localeCompare(
        `${a.firstName} ${a.lastName}`
      )
    );
    break;

  case "id-asc":
    sortedEmployees.sort((a, b) => a.id - b.id);
    break;

  case "id-desc":
    sortedEmployees.sort((a, b) => b.id - a.id);
    break;

  case "department-asc":
    sortedEmployees.sort((a, b) =>
      a.company.department.localeCompare(b.company.department)
    );
    break;

  case "department-desc":
    sortedEmployees.sort((a, b) =>
      b.company.department.localeCompare(a.company.department)
    );
    break;

  default:
    break;
  }
  
  const rows = sortedEmployees.map((employee) => ({
    id: employee.id,
    name: `${employee.firstName} ${employee.lastName}`,
    email: employee.email,
    department: employee.company.department,
    designation: employee.company.title,
    status: employee.role,

  }));

  const columns = [
    { field: "id", headerName: "ID", width: 80 },

    {
      field: "name",
      headerName: "Employee Name",
      flex: 1,
      minWidth: 180,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 220,
    },

    {
      field: "department",
      headerName: "Department",
      flex: 1,
      minWidth: 160,
    },

    {
      field: "designation",
      headerName: "Designation",
      flex: 1,
      minWidth: 180,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      sortable: false,
      filterable: false,

      renderCell: (params) => (
        <>
          <Tooltip title="View">
            <IconButton
              color="primary"
              onClick={() => navigate(`/employees/${params.row.id}`)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton
              color="success"
              onClick={() => navigate(`/edit-employee/${params.row.id}`)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
<<<<<<< HEAD
      <main className="employee-content">
        <div className="employee-header">
          <h1>Employees</h1>
          <div className="employee-toolbar">
            <div className="search-box">
              <TextField
                label="Search Employee"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
              />
=======
          <main className="employee-content">
            <div className="employee-header">
              <h1>Employees</h1>
              <div className="employee-toolbar">
                <div className="search-box">
                  <Input type="text" placeholder="Search employee..." />
                </div>
                <div className="toolbar-buttons">
                  <Button text="Filter" />
                  <Button text="Sort" />
                  <Button
                    text="+ Add Employee"
                    onClick={() => navigate("/add-employee")}
                  />
                </div>
              </div>
>>>>>>> 96442f6ed2aea2896eb4c255b8dedd9b22fa9312
            </div>
            <div className="toolbar-buttons">
              <FormControl size="small" sx={{ minwidth: 180 }}>
                <InputLabel>Department</InputLabel>
                <Select
                  value={selectedDepartment}
                  label="Department"
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <MenuItem value="All">All Departments</MenuItem>
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortOption}
                  label="Sort By"
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <MenuItem value="default">Default</MenuItem>
                  <MenuItem value="name-asc">(A-Z)</MenuItem>
                  <MenuItem value="name-desc">(Z-A)</MenuItem>
                  <MenuItem value="id-asc">ID(Low to High)</MenuItem>
                  <MenuItem value="id-desc">ID (High to Low)</MenuItem>
                  <MenuItem value="department-asc">Department(A-Z)</MenuItem>
                  <MenuItem value="department-desc">Department(Z-A)</MenuItem>
                </Select>
              </FormControl>

              <MuiButton
                variant="contained"
                color="primary"
                onClick={() => navigate("/add-employee")}
                sx={{
                  height: 40,
                  textTransfrom: "none",
                  borderRadius: "8px",
                  fontWeight: 500,
                  px: 2,
                }}
              >
                +Add Employee
              </MuiButton>
            </div>
<<<<<<< HEAD
          </div>
        </div>
        <div
          className="employee-table-container"
          style={{ height: 550, width: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            initialState={{
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#2563EB",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "15px",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#f5f5f5",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #e0e0e0",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#fafafa",
              },
            }}
          />
        </div>
      </main>
=======
          </main>
>>>>>>> 96442f6ed2aea2896eb4c255b8dedd9b22fa9312
    </>
  );
}
export default Employees;
