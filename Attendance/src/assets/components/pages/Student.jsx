 

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Student.css';

// Import Student Pages
import MyprofileStu from './MyprofileStu';
 
import AttendanceStu from './AttendanceStu';
// import Syllabus from './Syllabus';
// import Schedule from './Schedule';
// import ExamSchedule from './ExamSchedule';
// import Events from './Events';


const Student = () => {
  return (
    <div className="student-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Student Panel</h2>
        <ul>
          <li><Link to="">Dashboard</Link></li>
          <li><Link to="profile">My Profile</Link></li>
          <li><Link to="attendancestu">Attendance</Link></li>
          <li><Link to="syllabus">Syllabus</Link></li>
          <li><Link to="schedule">Schedule</Link></li>
          <li><Link to="examschedule">Exam Schedule</Link></li>
          <li><Link to="events">Events</Link></li>
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
          {/* <Route path="profile" element={<MyprofileStu />} /> */}
           <Route path="attendancestu" element={<AttendanceStu />} />
          {/* <Route path="syllabus" element={<Syllabus />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="examschedule" element={<ExamSchedule />} />
          <Route path="events" element={<Events />} /> */} 
        </Routes>
      </main>
    </div>
  );
};

export default Student;
