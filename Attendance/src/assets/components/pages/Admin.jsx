 

//  Admin.jsx
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import './Admin.css';
// import AdminReport from './AdminReport';

// Import pages
// import Students from './Students';
// import Attendance from './Attendance';
// import Reports from './Report

// const Admin = () => {
//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           {/* <li><Link to="">Dashboard</Link></li> */}
//           {/* <li><Link to="students">Students</Link></li>
//           <li><Link to="attendance">Attendance</Link></li> */}
//           {/* <li><Link to="reports">Reports</Link></li> */}
//            <li><Link to='adminreport'>AdminReport</Link></li>
//           {/* <li><Link to="/logout">Logout</Link></li> */}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <Routes>
//           <Route path="" element={
//             <>
//               <h1>Dashboard</h1>
//               <div className="stats-container">
//                 <div className="card">
//                   <h3>Total Students</h3>
//                   <p>150</p>
//                 </div>
//                 <div className="card">
//                   <h3>Present Today</h3>
//                   <p>135</p>
//                 </div>
//                 <div className="card">
//                   <h3>Absent Today</h3>
//                   <p>15</p>
//                 </div>
//               </div>
//             </>
//           } />
//           {/* <Route path="students" element={<Students />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="reports" element={<Reports />} /> */}
//          <Route path="adminreport" element={<AdminReport />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default Admin;



 



import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Admin.css';
import AddStudent from './AddStudent';
 
import AdminReport from './AdminReport';
import TeacherAdd from './TeacherAdd';


const Admin = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="">Dashboard</Link></li>
          <li><Link to="addstudent"> Student </Link></li>
          <li><Link to="teacheradd"> Manage Teacher</Link></li>
          <li><Link to="classes">Classes Schedule</Link></li>
          <li><Link to="subject">Subject</Link></li>

          
        
          <li><Link to="adminreport"> Report</Link></li>
          <li><Link to="admin profile">Admin Profile</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          {/* Dashboard (default nested route) */}
          <Route path="/" element={
            <>
              <h1>Dashboard</h1>
              <div className="stats-container">
                <div className="card"><h3>Total Students</h3><p>150</p></div>
                <div className="card"><h3>Present Today</h3><p>135</p></div>
                <div className="card"><h3>Absent Today</h3><p>15</p></div>
              </div>
            </>
          } />

          {/* AdminReport nested route */}
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="teacheradd" element={<TeacherAdd />} />
       
       
          <Route path="adminreport" element={<AdminReport />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;

