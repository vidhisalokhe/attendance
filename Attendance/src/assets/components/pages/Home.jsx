import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Attendance System</h2>
        <div className="nav-links">
          <button onClick={() => navigate("/")} className="nav-btn">Home</button>
          <button onClick={goToLogin} className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1><strong>Modern Student Attendance System</strong></h1>
        <p>Manage Attendance Efficiently for Admins, Teachers & Students</p>
        <button onClick={goToLogin} className="get-started">Get Started</button>
      </div>

      {/* Role Cards */}
      <div className="cards">
        <div className="card admin">
          <h2>👤 Admin</h2>
          <ul>
            <li>Add/Edit/Delete Students</li>
            <li>Add/Edit/Delete Teachers</li>
            <li>Assign students to classes</li>
            <li>View attendance reports</li>
            <li>Manage user credentials</li>
          </ul>
        </div>

        <div className="card teacher">
          <h2>👩‍🏫 Teacher</h2>
          <ul>
            <li>Take daily attendance</li>
            <li>View/edit past attendance records</li>
          </ul>
        </div>

        <div className="card student">
          <h2>🎓 Student</h2>
          <ul>
            <li>Login to view attendance</li>
            <li>Check attendance percentage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
