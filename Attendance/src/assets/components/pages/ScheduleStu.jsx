// ScheduleStu.jsx
import React from "react";
import "./ScheduleStu.css";

const schedule = [
  {
    day: "Monday",
    periods: ["Maths", "Programming in C", "Break", "Electronics", "DBMS"],
  },
  {
    day: "Tuesday",
    periods: ["DBMS", "Electronics", "Programming in C", "Maths", "Computer Lab"],
  },
  {
    day: "Wednesday",
    periods: ["Computer Lab", "Maths", "Programming in C", "DBMS", "Electronics"],
  },
  {
    day: "Thursday",
    periods: ["Programming in C", "Maths", "DBMS", "Electronics", "Computer Lab"],
  },
  {
    day: "Friday",
    periods: ["DBMS", "Computer Lab", "Maths", "Programming in C", "Electronics"],
  },
  {
    day: "Saturday",
    periods: ["Project Work", "Computer Lab", "Seminar", "-", "-"],
  },
];

const ScheduleStu = () => {
  return (
    <div className="schedule-page">
      <h2>Weekly Class Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>9:00-10:00</th>
            <th>10:00-11:00</th>
            <th>11:00-12:00</th>
            <th>12:00-1:00</th>
            <th>2:00-3:00</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td>{row.day}</td>
              {row.periods.map((period, i) => (
                <td key={i}>{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleStu;
