import React from "react";
import "./MyprofileStu.css"; // <-- Add this line

const MyprofileStu = () => {
  const studentData = {
    name: "Vidhi Rajaram Salokhe",
    email: "vidhi@example.com",
    rollNo: "25103",
    course: "CSE Computer Science Enginerring Diploma",
    year: "3rd Year",
    contact: "+91 9307207782",
  };

  return (
    <div className="profile-section">
      <h1><strong>My Profile</strong></h1><br></br>
      <div className="profile-card">
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Roll No:</strong> {studentData.rollNo}</p>
        <p><strong>Course:</strong> {studentData.course}</p>
        <p><strong>Year:</strong> {studentData.year}</p>
        <p><strong>Contact:</strong> {studentData.contact}</p>
      </div>
    </div>
  );
};

export default MyprofileStu;
