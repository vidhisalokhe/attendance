// SyllabusStu.jsx
import React, { useState } from "react";
import "./SyllabusStu.css";

const syllabus = {
  "Semester 1": [
    { subject: "Engineering Mathematics‑I", hours: 60 },
    { subject: "Fundamentals of Computer & IT", hours: 45 },
    { subject: "Applied Physics / Electronics", hours: 45 },
    { subject: "Communication Skills", hours: 30 },
    { subject: "Ethics / Engineering Drawing", hours: 30 },
  ],
  "Semester 2": [
    { subject: "Engineering Mathematics‑II", hours: 60 },
    { subject: "Programming in C", hours: 60 },
    { subject: "Basic Electrical & Electronics", hours: 45 },
    { subject: "Computer Centre Management", hours: 30 },
    { subject: "Communication Skills II", hours: 30 },
  ],
  "Semester 3": [
    { subject: "Data Structures Using C", hours: 60 },
    { subject: "Digital Techniques / Logic Design", hours: 45 },
    { subject: "Object Oriented Programming (C++)", hours: 60 },
    { subject: "Database Management System", hours: 60 },
    { subject: "Computer Graphics", hours: 45 },
  ],
};

const SyllabusStu = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  return (
    <div className="syllabus-page">
      <h2>Computer Diploma Syllabus</h2>

      {/* Semester Tabs */}
      <div className="semester-tabs">
        {Object.keys(syllabus).map((sem) => (
          <button
            key={sem}
            className={selectedSemester === sem ? "active" : ""}
            onClick={() => setSelectedSemester(sem)}
          >
            {sem}
          </button>
        ))}
      </div>

      {/* Syllabus Table */}
      <table className="syllabus-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {syllabus[selectedSemester].map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusStu;
