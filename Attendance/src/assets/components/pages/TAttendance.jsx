import React, { useState } from "react";
import "./TAttendance.css";

const  TAttendance = () => {
  // Sample class and students data
  const [students, setStudents] = useState([
    { id: 1, name: "Amit Kumar", present: false },
    { id: 2, name: "Sneha Sharma", present: false },
    { id: 3, name: "Rohan Singh", present: false },
    { id: 4, name: "Priya Verma", present: false },
  ]);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Toggle attendance
  const handleAttendance = (id) => {
    setStudents(
      students.map((stu) =>
        stu.id === id ? { ...stu, present: !stu.present } : stu
      )
    );
  };

  // Submit attendance
  const handleSubmit = () => {
    const attendanceData = {
      date: selectedDate,
      students: students.map((s) => ({
        name: s.name,
        status: s.present ? "Present" : "Absent",
      })),
    };
    console.log("Attendance Submitted:", attendanceData);
    alert("Attendance submitted successfully!");
    // Here you can send data to backend using axios.post("/attendance", attendanceData)
  };

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>

      {/* Select Date */}
      <div className="attendance-header">
        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
      </div>

      {/* Attendance Table */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, index) => (
            <tr key={stu.id}>
              <td>{index + 1}</td>
              <td>{stu.name}</td>
              <td>
                <button
                  className={stu.present ? "present" : "absent"}
                  onClick={() => handleAttendance(stu.id)}
                >
                  {stu.present ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Attendance
      </button>
    </div>
  );
};

export default TAttendance;
