import '../Styles/Dashboard.css';
import { MdAccessTime, MdBeachAccess, MdCheckCircle, MdPeople, MdPersonOff } from 'react-icons/md';
import Card from '../Component/Card';
import dashboardData from '../utils/dashboardData.json';
import recentActivities from '../utils/recentActivities.json';
import RecentActivities from '../Component/RecentActivities';

function Dashboard(){

    const iconMap = {
      MdPeople: <MdPeople />,
      MdCheckCircle: <MdCheckCircle />,
      MdPersonOff: <MdPersonOff />,
      MdBeachAccess: <MdBeachAccess />,
      MdAccessTime: <MdAccessTime />
    };

    return(
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1>DASHBOARD</h1>
                    <p>Welcome back ! Here is today's overview.</p>
                </div>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <section className='dashboard-stats'>
              {dashboardData.map((item) => (
                <div key={item.title} className={`dashboard-stat-card ${item.className}`}>
                    <div className="stat-icon">{iconMap[item.icon]}</div>
                    <div className="stat-information">
                      <p>{item.title}</p>
                      <h2>{item.value}</h2>
                    </div>
                </div>
              ))}
            </section>
            {/* <section className='recent-activities'>
                <h2>Recent Activities</h2>
                <div className="activities-list">
                  {recentActivities.map((activity) => (
                    <div className="activity-item" key={activity.id}>
                       <div className="activity-dot"></div>
                       <div className="activity-information">
                          <p>{activity.text}</p>
                          <span>{activity.time}</span>
                        </div>
                    </div>
                   ))}
                </div>
            </section> */}

            <RecentActivities />
        </div>
    )
}

export default Dashboard;