// Teacher.jsx
import React from 'react';
import './Teacher.css';

const Teacher = () => {
  return (
    <div className="teacher-dashboard">
      <aside className="sidebar">
        <h2>Teacher Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>My Classes</li>
          <li>Attendance</li>
          <li>Assignments</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="stats-container">
          <div className="card">
            <h3>My Students</h3>
            <p>40</p>
          </div>
          <div className="card">
            <h3>Classes Today</h3>
            <p>4</p>
          </div>
          <div className="card">
            <h3>Pending Assignments</h3>
            <p>6</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teacher;
