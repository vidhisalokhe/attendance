import React, { useState } from "react";
import "./AddAttend.css";

const AddAttend= () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Sanika Patil", rollNo: "101", status: "Present" },
    { id: 2, name: "Kusum Nalawde ", rollNo: "102", status: "Absent" },
    { id: 3, name: "Prathana Jadhav", rollNo: "103", status: "Present" },
    { id: 4, name: "Vidhi Salokhe", rollNo: "104", status: "Absent" },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: student.status === "Present" ? "Absent" : "Present" }
          : student
      )
    );
  };

  return (
    <div className="attendance">
      <h1 className="title">Attendance Management</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td className={student.status === "Present" ? "present" : "absent"}>
                  {student.status}
                </td>
                <td>
                  <button onClick={() => toggleAttendance(student.id)} className="toggle-btn">
                    Mark {student.status === "Present" ? "Absent" : "Present"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAttend;
