// Exam.jsx
import React from "react";
import "./Exam.css";

const examSchedule = [
  { date: "05-08-2025", day: "Tuesday", time: "09:00 – 12:00", subject: "Mathematics", code: "MA101", type: "Theory" },
  { date: "07-08-2025", day: "Thursday", time: "09:00 – 12:00", subject: "Programming in C", code: "CS102", type: "Theory" },
  { date: "09-08-2025", day: "Saturday", time: "09:00 – 12:00", subject: "Digital Electronics", code: "DE103", type: "Theory" },
  { date: "11-08-2025", day: "Monday", time: "02:00 – 05:00", subject: "Computer Lab (C Programming)", code: "LAB201", type: "Practical" },
  { date: "13-08-2025", day: "Wednesday", time: "02:00 – 05:00", subject: "Database Management System", code: "DBMS202", type: "Practical" },
];

const Exam = () => {
  return (
    <div className="exam-schedule-page">
      <h2>Exam Schedule</h2>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Subject / Paper</th>
            <th>Code</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {examSchedule.map((exam, index) => (
            <tr key={index}>
              <td>{exam.date}</td>
              <td>{exam.day}</td>
              <td>{exam.time}</td>
              <td>{exam.subject}</td>
              <td>{exam.code}</td>
              <td>{exam.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exam;
