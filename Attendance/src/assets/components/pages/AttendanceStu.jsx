// // AttendanceStu.jsx
// import React, { useState, useEffect } from "react";
// import "./AttendanceStu.css";

// const AttendanceStu = () => {
//   const [attendance, setAttendance] = useState([]);

//   // Sample Attendance Data (You will fetch from backend)
//   useEffect(() => {
//     const sampleData = [
//       { date: "2025-08-01", status: "Present" },
//       { date: "2025-08-02", status: "Absent" },
//       { date: "2025-08-03", status: "Present" },
//       { date: "2025-08-04", status: "Present" },
//     ];
//     setAttendance(sampleData);
//   }, []);

//   // Calculate Attendance Percentage
//   const totalDays = attendance.length;
//   const presentDays = attendance.filter((a) => a.status === "Present").length;
//   const percentage = totalDays > 0 ? ((presentDays / totalDays) * 100).toFixed(2) : 0;

//   return (
//     <div className="attendance-page">
//       <h2>My Attendance</h2>
//       <p>Total Attendance: {percentage}%</p>

//       <table className="attendance-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.map((item, index) => (
//             <tr key={index} className={item.status === "Absent" ? "absent" : "present"}>
//               <td>{item.date}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AttendanceStu;

 

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./AttendanceStu.css";

const AttendanceStu = () => {
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedAttendance, setSelectedAttendance] = useState(0);

  // Sample Data (Later from backend)
  useEffect(() => {
    const sampleData = [
      { date: "2025-08-01", status: "Present" },
      { date: "2025-08-02", status: "Absent" },
      { date: "2025-08-03", status: "Present" },
      { date: "2025-08-04", status: "Present" },
    ];
    setAttendance(sampleData);
  }, []);

  // Calculate Overall Percentage
  const totalDays = attendance.length;
  const presentDays = attendance.filter((a) => a.status === "Present").length;
  const overallPercentage =
    totalDays > 0 ? ((presentDays / totalDays) * 100).toFixed(2) : 0;

  // Handle Calendar Date Click
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const key = date.toISOString().split("T")[0];
    const dayRecord = attendance.find((a) => a.date === key);
    setSelectedAttendance(dayRecord ? (dayRecord.status === "Present" ? 100 : 0) : 0);
  };

  return (
    <div className="attendance-page">
      <h1>My Attendance</h1><br></br>

      {/* 1️⃣ Attendance Table at Top */}
      <p>Total Attendance: {overallPercentage}%</p>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((item, index) => (
            <tr key={index} className={item.status === "Absent" ? "absent" : "present"}>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 2️⃣ Bottom Section: Calendar + Circle */}
      <div className="calendar-stats-section">
        <div className="calendar-container">
          <Calendar value={selectedDate} onChange={handleDateChange} />
        </div>

        <div className="attendance-circle-bottom">
          <CircularProgressbar
            value={selectedAttendance || overallPercentage}
            text={`${selectedAttendance || overallPercentage}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#0D6EFD",
              trailColor: "#2a2a3a",
            })}
          />
          <span>Attendance</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStu;
