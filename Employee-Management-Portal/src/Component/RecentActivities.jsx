import {Card, CardContent, List, ListItem, ListItemText, Typography, Box, colors } from "@mui/material";
import { MdPersonAdd, MdCheckCircle, MdEdit, MdPersonOff,} from "react-icons/md";
import recentActivities from "../utils/recentActivities.json";
import {DataGrid} from '@mui/x-data-grid';
import CustomPagination from "./CustomPagination";

function RecentActivities(){
    const column=[
        {
            field: "employee",
            headerName: "Employee",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "activity",
            headerName: "Activity",
            flex: 1,
            minWidth: 180,
        },
        {
            field: "department",
            headerName: "Department",
            flex: 1,
            minWidth: 140,
        },
        {
            field: "time",
            headerName: "Time",
            flex: 1,
            minWidth: 140,
        }
    ]
    return(
        // <Card sx={{marginTop:3, borderRadius:3, boxShadow:3}}>
        //     <CardContent >
        //         <Typography variant="h5" sx={{fontWeight:600, marginBottom:1}} >Recent Activities</Typography>
        //         <List>
        //             {recentActivities.map((activity)=>(
        //                 <ListItem key={activity.id} sx={{borderBottom:"1px solid #eee", padding:2}}>
        //                     <ListItemText primary={activity.text} secondary={activity.time}/>
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </CardContent>
        // </Card>

        <Box sx={{backgroundColor:'#fff', padding:2, marginTop:3, width:"100%", borderRadius:2, boxShadow:3}}>
            <Typography variant="h5" sx={{fontWeight:600, marginBottom:2}}>Recent Activities</Typography>
            <DataGrid 
               rows={recentActivities} 
               columns={column} 
               initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0}}}} 
               pageSizeOptions={[5, 10]} disableRowSelectionOnClick 
               slots={{  pagination: CustomPagination, }}
               sx={{
                    "& .MuiDataGrid-columnHeader":{
                        backgroundColor:"var(--primary-color)",
                        color:"var(--white)",
                        fontSize:"17px"
                    }
                }}
            />
        </Box>

    )
}

export default RecentActivities;