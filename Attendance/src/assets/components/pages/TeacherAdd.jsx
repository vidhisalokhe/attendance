import React, { useState } from "react";
import "./TeacherAdd.css";

const TeacherAdd = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Doe", subject: "Math", status: "Absent" },
    { id: 2, name: "Jane Smith", subject: "Science", status: "Absent" },
    { id: 3, name: "Alex Johnson", subject: "English", status: "Absent" },
  ]);

  // Mark attendance
  const markAttendance = (id, status) => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === id ? { ...teacher, status } : teacher
      )
    );
  };

  return (
    <div className="attendance-container">
      <h2>Teacher Attendance System</h2>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td
                className={
                  teacher.status === "Present" ? "status-present" : "status-absent"
                }
              >
                {teacher.status}
              </td>
              <td>
                <button
                  className="present-btn"
                  onClick={() => markAttendance(teacher.id, "Present")}
                >
                  Present
                </button>
                <button
                  className="absent-btn"
                  onClick={() => markAttendance(teacher.id, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAdd;
