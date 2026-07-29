import {Box, Typography, Button, Chip} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function LeaveList({rows, setRows}){

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
                    <Button variant='contained' size='small' color='success' sx={{marginRight:1}} onClick={()=>updateStatus(params.row.id,"Approved")}>Approve</Button>
                    <Button variant='contained' size='small' color='error' onClick={()=>updateStatus(params.row.id,"Rejected")}>Reject</Button>
                </Box>
            )
        }
    }]

    return(
        <Box sx={{backgroundColor:'#fff', padding:2, marginTop:3, width:"100%", borderRadius:2, boxShadow:3}}>
            <Typography variant='h5' sx={{fontWeight:600, marginBottom:2}}>Leave Requests</Typography>
            <DataGrid 
               rows={rows}  
               columns={column}
               initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0}}}} 
               pageSizeOptions={[5, 10]} disableRowSelectionOnClick
            />
        </Box>
    )
}

export default LeaveList;