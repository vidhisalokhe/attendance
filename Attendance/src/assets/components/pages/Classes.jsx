import React, { useState } from "react";
import "./Classes.css";

const Classes = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, className: "CO A", subject: "DSA", date: "2025-09-01", time: "10:00 AM" },
    { id: 2, className: "CSE B", subject: "JAVA", date: "2025-09-02", time: "12:00 AM" },
    {id: 3, className: "CO C", subject:"MIc", date:"2025-09-10",time:"11:00"},
  ]);

  const [form, setForm] = useState({
    className: "",
    subject: "",
    date: "",
    time: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.className || !form.subject || !form.date || !form.time) {
      alert("All fields are required");
      return;
    }

    if (editId) {
      // Update schedule
      setSchedules(
        schedules.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
      setEditId(null);
    } else {
      // Add new schedule
      setSchedules([...schedules, { id: Date.now(), ...form }]);
    }

    // Clear form
    setForm({ className: "", subject: "", date: "", time: "" });
  };

  // Edit schedule
  const handleEdit = (id) => {
    const schedule = schedules.find((item) => item.id === id);
    setForm(schedule);
    setEditId(id);
  };

  // Delete schedule
  const handleDelete = (id) => {
    setSchedules(schedules.filter((item) => item.id !== id));
  };

  return (
    <div className="schedule-container">
      <h2>Admin Class Schedule</h2>

      <form className="schedule-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="className"
          placeholder="Class Name"
          value={form.className}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Schedule" : "Add Schedule"}</button>
      </form>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((item) => (
            <tr key={item.id}>
              <td>{item.className}</td>
              <td>{item.subject}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classes;
