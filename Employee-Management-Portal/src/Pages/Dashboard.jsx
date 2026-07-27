import '../Styles/Dashboard.css';
import { MdAccessTime, MdBeachAccess, MdCheckCircle, MdPeople, MdPersonOff } from 'react-icons/md';

function Dashboard(){

    const dashboardData=[
        {
            title:"Total Employee",
            value:120,
            icon:<MdPeople />,
            className:"total-employees"
        },
        {
            title:"Present Today",
            value:98,
            icon:<MdCheckCircle />,
            className:"present-employees"
        },
        {
            title:"Absent Today",
            value:22,
            icon:<MdPersonOff />,
            className:"absent-employees"
        },
        {
            title:"Pending Leaves",
            value:8,
            icon:<MdBeachAccess />,
            className:"pending-leaves"
        },
        {
            title:"Pending Timesheets",
            value:12,
            icon:<MdAccessTime />,
            className:"pending-timesheets"
        }
    ];

    return(
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1>DASHBOARD</h1>
                    <p>Welcome back ! Here is today's overview.</p>
                </div>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            
        </div>
    )
}

export default Dashboard;