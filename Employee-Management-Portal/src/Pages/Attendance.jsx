import { useEffect, useState } from "react";
import { DataGrid} from "@mui/x-data-grid";
import Card from "../Component/Card";
import "../Styles/Attendance.css";
import Modal from "../Component/Modal";
import Input from "../Component/Input";
import Button from "../Component/Button";
import CustomPagination from "../Component/CustomPagination";

function Attendance(){
    const [error, setError] = useState("");
    const[modalMessage,setModalMessage]=useState("");
    const[showModal,setShowModal]=useState(false);
    const [attendance, setAttendance] = useState(() => {
        const savedAttendance = localStorage.getItem("attendance");
        return savedAttendance ? JSON.parse(savedAttendance) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("attendance", JSON.stringify(attendance));
    }, [attendance]);
    const[formData,setFormData]=useState({
        employee:"",
        status:"",
    });
    const getCurrentDate = ()=>{
        return new Date().toISOString().split("T")[0]
    }
    const getCurrentTime = ()=>{
        return new Date().toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit",
        });
    };
    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        });
    };
    const handleMarkAttendance=()=>{
        const employeeName = formData.employee.trim();
        if(!employeeName){
            return setError("Please fill all fields.") ;
        }
        const today=getCurrentDate();
        const exists=attendance.find((item)=>item.employee.toLowerCase()===formData.employee.toLocaleLowerCase()&&item.date===today);
        if(exists){
            alert("Attendance marked already");
            return;
        }
        const newAttendance={id:Date.now(),employee:formData.employee,date:today,checkIn:getCurrentTime(),checkOut:"",status:formData.status};
        if (formData.status === "Present") {
            setModalMessage("Attendance marked successfully!");
        } else if (formData.status === "Leave") {
            setModalMessage("Leave marked successfully!");
        } else if (formData.status === "Absent") {
            setModalMessage("Absent marked successfully!");
        }
        setAttendance((prev)=>[...prev,newAttendance]);
        setShowModal(true);
        setFormData({
            employee:"",
            status:"",
        });
    };
    const handleCheckOut=(id)=>{
        const currentTime=getCurrentTime();
        setAttendance((prev)=>prev.map((item)=>item.id===id?{
            ...item,checkOut:currentTime,
        }:item));
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
            minWidth:130,
        },
        {
            field:"date",
            headerName:"Date",
            flex:1,
            minWidth:120,
        },
        {
            field:"checkIn",
            headerName:"Check In",
            flex:1.5,
            minWidth:100,
        },
        {
            field:"checkOut",
            headerName:"Check Out",
            flex:1,
            minWidth:100,
            renderCell:(params)=>params.value?params.value:"--",
        },
        {
            field:"action",
            headerName:"Action",
            minWidth:110,
            flex:1,
            sortable:false,
            renderCell:(params)=>{
                if(params.row.status==="Leave"){
                    return(<Button disabled>Leave</Button>);
                }
                if(params.row.status==="Absent"){
                    return(<Button disabled>Absent</Button>);
                }
                return params.row.checkOut?(<Button disabled>Completed</Button>):(<Button onClick={()=>handleCheckOut(params.row.id)}>Check Out</Button>)
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
                {error && <p className="valid-error">{error}</p>}
                <form className="attendance-form">
                    <Input type="text" name="employee" placeholder="Employee name" value={formData.employee} onChange={handleChange}required/>
                    <select name="status" value={formData.status} onChange={handleChange}required>
                        <option value="" disabled>Select status</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                    </select>
                    <Button onClick={handleMarkAttendance}>Mark Attendance</Button>
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
                    slots={{  pagination: CustomPagination, }}
                />
            </div>
            {showModal&&(
                <Modal
                title="Success" message={modalMessage} confirmText="OK" confirmColor="success" onConfirm={()=>setShowModal(false)}onClose={()=>setShowModal(false)}/>
            )}
        </div>
    )
}

export default Attendance;