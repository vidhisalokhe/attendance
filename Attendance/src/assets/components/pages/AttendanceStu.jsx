// Attendance.jsx
import React from 'react';
 import './AddAttend.css' 

const AttendanceStu= () => {
  // Sample data (can be fetched from backend later)
  const attendanceData = [
    { date: '2025-07-01', subject: 'Mathematics', status: 'Present' },
    { date: '2025-07-02', subject: 'Science', status: 'Absent' },
    { date: '2025-07-03', subject: 'English', status: 'Present' },
    { date: '2025-07-04', subject: 'Computer', status: 'Present' },
    { date: '2025-07-05', subject: 'History', status: 'Absent' },
  ];

  // Calculate attendance percentage
  const totalClasses = attendanceData.length;
  const presentCount = attendanceData.filter(item => item.status === 'Present').length;
  const attendancePercent = ((presentCount / totalClasses) * 100).toFixed(2);

  return (
    <div className="attendance-page">
      <h1>My Attendance</h1><br></br>
      <p>Total Classes: {totalClasses} | Present: {presentCount} | Attendance: {attendancePercent}%</p>
         <br></br>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index} className={record.status === 'Absent' ? 'absent' : 'present'}>
              <td>{record.date}</td>
              <td>{record.subject}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceStu;
