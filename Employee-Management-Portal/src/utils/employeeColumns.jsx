import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const employeeColumns = (navigate, openDeleteModal) => [
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
            onClick={() => openDeleteModal(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    ),
  },
];

export default employeeColumns;
