import { useEffect, useState } from "react";
import { DataGrid} from "@mui/x-data-grid";
import Card from "../Component/Card";
import "../Styles/Attendance.css";

function Attendance(){
    const [attendance, setAttendance] = useState(() => {
        const savedAttendance = localStorage.getItem("attendance");
        return savedAttendance ? JSON.parse(savedAttendance) : [];
    });
    useEffect(() => {
        localStorage.setItem("attendance", JSON.stringify(attendance));
    }, [attendance]);
    const[formData,setFormData]=useState({
        employee:"",
        department:"",
        date:"",
        checkIn:"",
        checkOut:"",
        status:"",
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newAttendance={
            id:Date.now(),
            ...formData,
        };
        setAttendance((prev)=>[...prev,newAttendance]);
        setFormData({
            employee:"",
            department:"",
            date:"",
            checkIn:"",
            checkOut:"",
            status:"",
        });
    };
    const present=attendance.filter((item)=>item.status==="Present");
    const absent=attendance.filter((item)=>item.status==="Absent");
    const leave=attendance.filter((item)=>item.status==="Leave");

    const summaryCards=[
        {
            title:"Total Employee",
            value:attendance.length,
        },
        {
            title:"Present",
            value:present.length,
        },
        {
            title:"Absent",
            value:absent.length,
        },
        {
            title:"Leave",
            value:leave.length,
        },
    ];

    const column=[
        {
            field:"employee",
            headerName:"Employee",
            flex:1.5,
        },
        {
            field:"department",
            headerName:"Department",
            flex:1,
        },
        {
            field:"checkIn",
            headerName:"Check In",
            flex:1.5,
        },
        {
            field:"checkOut",
            headerName:"Check Out",
            flex:1,
        },
        {
            field:"status",
            headerName:"Status",
            flex:1,
            renderCell:(params)=>{
                return (
                    <span style={{fontWeight:600,}}>{params.value}</span>
                );
            },
        },
    ];

    return (
        <div className="attendance-page">
            <h2>Attendance</h2>
            <div className="summary-cards">
                {summaryCards.map((card,index)=>(
                    <Card key={index} className="summary-card">
                        <div className="card-content">
                            <h4>{card.title}</h4>
                            <h2>{card.value}</h2>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="attendance-form-container">
                <form className="attendance-form" onSubmit={handleSubmit}>
                    <input type="text" name="employee" placeholder="Employee name" value={formData.employee} onChange={handleChange}required/>
                    <input type="text" name="department" placeholder="Department name" value={formData.department} onChange={handleChange}required/>
                    <input type="date" name="date"  value={formData.date} onChange={handleChange}required/>
                    <input type="time" name="checkIn" value={formData.checkIn} onChange={handleChange}required/>
                    <input type="time" name="checkOut"  value={formData.checkOut} onChange={handleChange}required/>
                    <select name="status" value={formData.status} onChange={handleChange}required>
                        <option value="" disabled>Select status</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                    </select>
                    <button type="submit"> Add Attendance</button>
                </form>
            </div>
            <div className="table-container">
                <DataGrid rows={attendance}columns={column}pageSizeOptions={[5,10]}initialState={
                    {
                        pagination: { 
                            paginationModel: {
                                page: 0, pageSize: 5,
                                },
                            },
                    }}
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    )
}

export default Attendance;