import React, { useState } from "react";
import "./AddStudent.css"; // Import CSS file

const  AddStudent = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Sanika Patil", rollNo: "101", department: "Computer Science", year: "4th" },
    { id: 2, name: "Kusum Nalawade", rollNo: "102", department: "Electrical", year: "3rd" },
    { id: 3, name: "Prathna Jadhav", rollNo: "103", department: "Mechanical", year: "2nd" },
    { id: 4, name: "Vidhi Salokhe", rollNo: "104", department: "Civil", year: "1st" },
  ]);

  const [form, setForm] = useState({ name: "", rollNo: "", department: "", year: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { ...form, id: Date.now() };
    setStudents([...students, newStudent]);
    setForm({ name: "", rollNo: "", department: "", year: "" });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-management">
      <h1 className="title">Student Management</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="rollNo" value={form.rollNo} onChange={handleChange} placeholder="Roll No" required />
        <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
        <input name="year" value={form.year} onChange={handleChange} placeholder="Year" required />
        <button type="submit">Add Student</button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="5" className="empty">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  AddStudent;
