import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { getEmployees, deleteEmployee, } from "../Services/employeeServices";
import EmployeeToolbar from "../Component/EmployeeToolbar";
import employeeColumns from "../utils/employeeColumns";
import "../Styles/Employees.css";
import Modal from "../Component/Modal";
import CustomPagination from "../Component/CustomPagination";

function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] =
    useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const data = await getEmployees();
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

  const openDeleteModal = (id) => {
    setSelectedEmployeeId(id);
    setShowDeleteModal(true);
  };
  const handleDelete = async () => {
    try {
      await deleteEmployee(selectedEmployeeId);
      
      const data = await getEmployees();
      setEmployees(data.users);

      setShowDeleteModal(false);
      setSelectedEmployeeId(null);

      setShowDeleteSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert("Failed to delete Employee");
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

  const columns = employeeColumns(navigate, openDeleteModal);

  return (
    <>
      <div className="employee-content">
        <div className="employee-header">
          <h1>Employees</h1>
          <EmployeeToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            departments={departments}
            sortOption={sortOption}
            setSortOption={setSortOption}
            onAdd={() => navigate("/add-employee")}
          />
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
            slots={{  pagination: CustomPagination, }}
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
      </div>
      {showDeleteModal && (
        <Modal
          title="Delete Employee"
          message="Are you sure you want to delete this employee?"
          confirmText="Delete"
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedEmployeeId(null);
          }}
          onConfirm={handleDelete}
        />
      )}
      {showDeleteSuccessModal && (
        <Modal
          title="Success"
          message="Employee deleted successfully"
          confirmText="OK"
          onClose={() => {
            setShowDeleteSuccessModal(false);
          }}
          onConfirm={() => {
            setShowDeleteSuccessModal(false);
          }}
        />
      )}
    </>
  );
}
export default Employees;
