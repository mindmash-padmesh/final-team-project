import {Box, Typography} from '@mui/material';
import IconCard from '../Component/IconCard';
import {EventNote, AccessTime, CheckCircle, Cancel} from '@mui/icons-material';
import LeaveList from '../Component/LeaveList';
import leavesData from '../utils/leavesData.json';
import { useState } from 'react';
import ApplyLeave from '../Component/ApplyLeave';

function Leave(){

    const [rows, setRows]=useState(() => {
    const savedLeaves = localStorage.getItem("leaves");
    return savedLeaves
      ? JSON.parse(savedLeaves)
      : leavesData;
    });
    
    const pendingLeaves=rows.filter((leaves)=>leaves.status==="Pending").length;

    const approvedLeaves=rows.filter((leaves)=>leaves.status==="Approved").length;

    const rejectedLeaves=rows.filter((leaves)=>leaves.status==="Rejected").length;

     const leaveCards = [
    {
      title: "Total Leaves",
      value: rows.length,
      icon: <EventNote />,
      color: "#1976d2",
    },
    {
      title: "Pending",
      value: pendingLeaves,
      icon: <AccessTime />,
      color: "#ed6c02",
    },
    {
      title: "Approved",
      value: approvedLeaves,
      icon: <CheckCircle />,
      color: "#2e7d32",
    },
    {
      title: "Rejected",
      value: rejectedLeaves,
      icon: <Cancel />,
      color: "#d32f2f",
    },
  ];

  const onApply = (formData) => {
    const newLeave = {
      ...formData,
      id: Date.now(),
      days: Number(formData.days),
      status: "Pending",
    };

    setRows((previousRows) => {
      const updatedRows = [newLeave, ...previousRows];
      localStorage.setItem(
        "leaves",
        JSON.stringify(updatedRows)
      );
      return updatedRows;
    });
  };

  return(<>
    <Box sx={{padding:3}} >
        <Typography variant='h4' sx={{marginBottom:3, fontWeight:"600"}}>Leave Management</Typography>
        <Box sx={{display:"flex", gap:2, flexWrap:"wrap"}}>
            {leaveCards.map((leave)=>(
                <IconCard key={leave.title}
                          title={leave.title}
                          value={leave.value}
                          icon={leave.icon}
                          color={leave.color} 
                />   ))}
        </Box>
        <ApplyLeave onApply={onApply} />
        <LeaveList rows={rows} setRows={setRows} />
    </Box>
    </>
  )
}

export default Leave;