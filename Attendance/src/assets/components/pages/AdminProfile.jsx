import React, { useState } from "react";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "Sanika Patil",
    email: "sanika123@gmail.com",
    role: "Admin",
    phone: "9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile updated successfully!");
    // Here you can call axios.post('/updateAdminProfile', profile)
  };

  return (
    <div className="admin-profile-container"><br></br>
      <h2>Admin Profile</h2>

      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Admin Avatar"
          className="profile-avatar"
        />

        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Role:</strong> {profile.role}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
