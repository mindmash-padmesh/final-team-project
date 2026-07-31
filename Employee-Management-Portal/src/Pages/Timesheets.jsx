import { useEffect,useState } from "react";
import "../Styles/Timesheets.css";
import Card from "../Component/Card";
import Modal from "../Component/Modal";
import { DataGrid } from '@mui/x-data-grid';
import { FiEdit2,FiTrash2,FiUsers,FiClock,FiTrendingUp,FiCalendar } from "react-icons/fi";
import Input from "../Component/Input";
import Button from "../Component/Button";
import CustomPagination from "../Component/CustomPagination";

function Timesheets(){
  const [error, setError]=useState("");
  const[timesheets,setTimesheets]=useState(()=>{
    const saved=localStorage.getItem("timesheets");
    return saved?JSON.parse(saved):[];
  });
  const[formData,setFormData]=useState({
    employee:"",
    date:"",
    checkIn:"",
    checkOut:"",
    status:"",
  });
  const [editingId,setEditingId]=useState(null);
  const[search,setSearch]=useState("");
  useEffect(()=>{
    localStorage.setItem("timesheets",JSON.stringify(timesheets));
  },[timesheets]);
  const calculateHours=(checkIn,checkOut)=>{
    if(!checkIn||!checkOut)return"0";
    const start=new Date(`2000-01-01T${checkIn}`);
    const end=new Date(`2000-01-01T${checkOut}`);
    const diff=(end-start)/(1000*60*60);
    return diff>0?diff.toFixed(1):"0";
  };
  const handleChange=(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const employeeName = formData.employee.trim();
      if(!employeeName){
        return setError("Please fill all fields.") ;
      }
    const hours=calculateHours(
      formData.checkIn,
      formData.checkOut
    );
    if(editingId){
      setTimesheets(timesheets.map((item)=>item.id===editingId?{...formData,id:editingId,hours}:item));
      setEditingId(null);
    }else{
      const newEntry={
        id:Date.now(),
        ...formData,hours,
      };
      setTimesheets([...timesheets,newEntry]);
    }
    setFormData({
      employee:"",
      date:"",
      checkIn:"",
      checkOut:"",
      status:"",
    });
  };
  const handleEdit=(item)=>{
    setEditingId(item.id);
    setFormData({
      employee:item.employee,
      date:item.date,
      checkIn:item.checkIn,
      checkOut:item.checkOut,
      status:item.status,
    });
  };
  const[showModal, setShowModal]=useState(false);
  const[deleteId,setDeleteId]=useState(null);


  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete=()=>{
    setTimesheets(timesheets.filter((item)=>item.id !== deleteId));
    setShowModal(false);
    setDeleteId(null);
  };
  const closeModal=()=>{
    setShowModal(false);
    setDeleteId(null);
  };
  const filtered=timesheets.filter((item)=>
    item.employee.toLowerCase().includes(search.toLowerCase())
  );
  const totalHours=timesheets.reduce(
    (sum,item)=>sum+Number(item.hours),0
  );
const summaryCards=[
  {
    title:"Total Employees",
    value:timesheets.length,
    icon:<FiUsers/>,
  },
  {
    title:"Total hours",
    value:totalHours.toFixed(1),
    icon:<FiClock/>,
  },
];
const column=[
  {
    field:"employee",
    headerName:"Employee",
    flex:1,
    minWidth:180,
  },
  {
    field:"date",
    headerName:"Date",
    flex:1,
    minWidth:140,
  },
  {
    field:"checkIn",
    headerName:"Check In",
    flex:1,
    minWidth:130,
  },
  {
    field: "checkOut",
    headerName: "Check Out",
    flex: 1,
    minWidth:130,
  },
  {
    field: "hours",
    headerName: "Hours",
    flex: 1,
    minWidth:100,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth:140,
  },
  {
    field:"actions",
    headerName:"Actions",
    flex:1.2,
    minWidth:170,
    sortable:false,
    renderCell:(params)=>(
      <div className="btn">
      <Button className="edit-btn" onClick={()=>handleEdit(params.row)}><FiEdit2/></Button>
      <Button className="delete-btn"onClick={()=>handleDelete(params.row.id)}><FiTrash2/></Button>
      </div>
    ),
  },
];

return(
  <div className="timesheets-page">
    <h2>Employee Timesheets</h2>
    <div className="summaryCards">
        {summaryCards.map((card, index) => (
          <Card key={index} className="summary-card">
            <div className="card-icon">
              {card.icon}
            </div>
            <div className="card-content">
              <h4>{card.title}</h4>
              <h2>{card.value}</h2>
            </div>
          </Card>
      ))}
    </div>
    <form onSubmit={handleSubmit}className="timesheet-form">
      <Input type="text"name="employee"placeholder="Employee Name" value={formData.employee} onChange={handleChange} required/>
      <Input type="date" name="date" value={formData.date}onChange={handleChange}required/>
      <Input type="time"name="checkIn"value={formData.checkIn} onChange={handleChange} required/>
      <Input type="time"name="checkOut" value={formData.checkOut} onChange={handleChange} required/>
      <select name="status" value={formData.status} onChange={handleChange} required>
        <option value="" disabled>Work Status</option>
        <option value="50%">50%</option>
        <option value="75%">75%</option>
        <option value="100%">100%</option>
      </select>
      <Button type="submit">{editingId?"Update Timesheet":"Add Timesheet"}</Button>
      {error && <p className="error-valid">{error}</p>}
    </form>
  <div style={{height:500,
    width:"100%",
    background:"var(--white)",
    borderRadius:"10px",
    }}>
    <div className="table-container">
      <DataGrid rows={filtered} columns={column} pageSizeOptions={[5, 10, 20]} initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5,},},}} disableRowSelectionOnClick slots={{  pagination: CustomPagination, }} />
    </div>
  </div>
  {showModal&&(
    <Modal title="Delete Timesheet" message="Are you sure you want to delete this timesheet?" confirmText="Delete" onConfirm={confirmDelete} onClose={closeModal}/>
  )}
  </div>
)
}
export default Timesheets;