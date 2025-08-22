import React, { useState } from "react";
import "./Myclass.css";

const Myclass = () => {
  // Sample teacher class data
  const [classes, setClasses] = useState([
    { id: 1, className: "10th A", subject: "Mathematics", time: "10:00 AM - 11:00 AM" },
    { id: 2, className: "9th B", subject: "Science", time: "11:30 AM - 12:30 PM" },
    { id: 3, className: "10th B", subject: "Computer", time: "2:00 PM - 3:00 PM" },
  ]);

  // Optional: Click class to view more details
  const handleView = (cls) => {
    alert(`Class: ${cls.className}\nSubject: ${cls.subject}\nTime: ${cls.time}`);
  };

  return (
    <div className="myclasses-container">
      <h1>My Classes</h1><br></br>

      {classes.length === 0 ? (
        <p>No classes assigned yet.</p>
      ) : (
        <table className="myclasses-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id}>
                <td>{cls.className}</td>
                <td>{cls.subject}</td>
                <td>{cls.time}</td>
                <td>
                  <button className="view-btn" onClick={() => handleView(cls)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Myclass;
