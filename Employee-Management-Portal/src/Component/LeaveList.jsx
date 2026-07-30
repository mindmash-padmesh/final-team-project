import {Box, Typography, Button, Chip} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Modal from './Modal';
import {useState} from "react";

function LeaveList({rows, setRows}){

   const [confirmation, setConfirmation] = useState(null);

    const updateStatus=(id,status)=>{
        const updatedRows=rows.map((leave)=>{
            if(leave.id===id)
            {
                return{
                    ...leave,
                    status:status
                }
            }
            return leave;
        });
        setRows(updatedRows);
        localStorage.setItem(
          "leaves",
          JSON.stringify(updatedRows)
        );
    };

    const openConfirmation = (leave, status) => {
      setConfirmation({
      id: leave.id,
      employee: leave.employee,
      status,
      });
    };

    const closeConfirmation = () => {
      setConfirmation(null);
    };

    const confirmStatusUpdate = () => {
      if (!confirmation) {
        return;
      }
      updateStatus(
        confirmation.id,
        confirmation.status
       );
      closeConfirmation();
    };

    const column = [
    {
      field: "employee",
      headerName: "Employee",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "leaveType",
      headerName: "Leave Type",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "from",
      headerName: "From",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "to",
      headerName: "To",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "days",
      headerName: "Days",
      minWidth: 80,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,

    renderCell: (params) => {
    let color = "warning";

    if (params.value === "Approved") {
      color = "success";
    }

    if (params.value === "Rejected") {
      color = "error";
    }

    return (
      <Chip
        label={params.value}
        color={color}
        size="small"
      />
    );
    },
    },
    {
        field:"action",
        headerName:"Action",
        flex:1,
        minWidth:210,
        sortable:false,
        filterable:false,

        renderCell: (params)=>{
            if(params.row.status !== "Pending")
            {
                return (
                    <Typography></Typography>
                )
            }
            return(
                <Box>
                    <Button variant='contained' size='small' color='success' sx={{marginRight:1}}onClick={() => openConfirmation(params.row,"Approved")}>Approve</Button>
                    <Button variant='contained' size='small' color='error' onClick={() => openConfirmation(params.row, "Rejected" )}>Reject</Button>
                </Box>
            )
        }
    }]

    return(
      <>
        <Box sx={{backgroundColor:'#fff', padding:2, marginTop:3, width:"100%", borderRadius:2, boxShadow:3}}>
            <Typography variant='h5' sx={{fontWeight:600, marginBottom:2}}>Leave Requests</Typography>
            <DataGrid 
               rows={rows}  
               columns={column}
               initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0}}}} 
               pageSizeOptions={[5, 10]} disableRowSelectionOnClick
               showToolbar

               sx={{
                 "& .MuiDataGrid-columnHeader":{
                  backgroundColor:"var(--primary-color)",
                  color:"var(--white)",
                  fontSize:"16px",
                 }
               }}
            />
        </Box>
        {confirmation && (
      <Modal
        title={
          confirmation.status === "Approved"
            ? "Approve Leave Request"
            : "Reject Leave Request"
        }
        message={`Are you sure you want to ${
          confirmation.status === "Approved"
            ? "approve"
            : "reject"
        } ${confirmation.employee}'s leave request?`}
        confirmText={
          confirmation.status === "Approved"
            ? "Approve"
            : "Reject"
        }
        confirmColor={
          confirmation.status === "Approved"
            ? "success"
            : "danger"
        }
        onConfirm={confirmStatusUpdate}
        onClose={closeConfirmation}
      />
    )}
      </>
    )
}

export default LeaveList;