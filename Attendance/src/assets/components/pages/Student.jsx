 

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import './Student.css';

// // Import Student Pages
// import MyprofileStu from './MyprofileStu';
 
// import AttendanceStu from './AttendanceStu';
// import SyllabusStu from './SyllabusStu';
// import ScheduleStu from './ScheduleStu';
// import Exam from './Exam';
//  import Event from './Event';


// const Student = () => {
//   return (
//     <div className="student-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Student Panel</h2>
//         <ul>
//           <li><Link to="">Dashboard</Link></li>
//           <li><Link to="profile">👤 My Profile</Link></li>
//           <li><Link to="attendancestu">🗒️ Attendance</Link></li>
//           <li><Link to="syllabusstu">📚 Syllabus</Link></li>
//           <li><Link to="schedulestu">📅⏰ Schedule</Link></li>
//           <li><Link to="exam">🗓️🖊️ Exam Schedule</Link></li>
//           <li><Link to="event">🎉📅 Events</Link></li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <Routes>
//           {/* Dashboard (default route) */}
//           <Route path="/" element={
//             <>
//               <h1>Welcome, Student</h1>
//               <div className="stats-container">
//                 <div className="card"><h3>Attendance %</h3><p>92%</p></div>
//                 <div className="card"><h3>Classes Attended</h3><p>46</p></div>
//                 <div className="card"><h3>Total Classes</h3><p>50</p></div>
//               </div>
//             </>
//           } />

//           {/* Nested Routes */}
//           <Route path="profile" element={<MyprofileStu />} />
//            <Route path="attendancestu" element={<AttendanceStu />} />
//            <Route path="syllabusstu" element={<SyllabusStu />} />
//           <Route path="schedulestu" element={<ScheduleStu />} />
//            <Route path="exam" element={<Exam />} />
//           <Route path="event" element={<Event />} />    
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default Student;
 

import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Student.css';
// import { FaArrowLeft } from "react-icons/fa";

// Import Student Pages
import MyprofileStu from './MyprofileStu';
import AttendanceStu from './AttendanceStu';
import SyllabusStu from './SyllabusStu';
import ScheduleStu from './ScheduleStu';
import Exam from './Exam';
import Event from './Event';

const Student = () => {
  const navigate = useNavigate();

  return (
    <div className="student-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "15px"
          }}
          onClick={() => navigate("/student")} // Dashboard pe wapas le jane ke liye
        >
        <span style={{ marginRight: "8px" }}>⬅️</span>
          <h2 style={{ margin: 0 }}>Student Panel</h2>
        </div>

        <ul>
          <li><Link to="">Dashboard</Link></li>
          <li><Link to="profile">👤 My Profile</Link></li>
          <li><Link to="attendancestu">🗒️ Attendance</Link></li>
          <li><Link to="syllabusstu">📚 Syllabus</Link></li>
          <li><Link to="schedulestu">📅⏰ Schedule</Link></li>
          <li><Link to="exam">🗓️🖊️ Exam Schedule</Link></li>
          <li><Link to="event">🎉📅 Events</Link></li>
            <li><Link to="/">🚪 Logout</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          {/* Dashboard (default route) */}
          <Route path="/" element={
            <>
              <h1>Welcome, Student</h1>
              <div className="stats-container">
                <div className="card"><h3>Attendance %</h3><p>92%</p></div>
                <div className="card"><h3>Classes Attended</h3><p>46</p></div>
                <div className="card"><h3>Total Classes</h3><p>50</p></div>
              </div>
            </>
          } />

          {/* Nested Routes */}
          <Route path="profile" element={<MyprofileStu />} />
          <Route path="attendancestu" element={<AttendanceStu />} />
          <Route path="syllabusstu" element={<SyllabusStu />} />
          <Route path="schedulestu" element={<ScheduleStu />} />
          <Route path="exam" element={<Exam />} />
          <Route path="event" element={<Event />} />
        </Routes>
      </main>
    </div>
  );
};

export default Student;

