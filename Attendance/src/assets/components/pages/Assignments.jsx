import React, { useState } from "react";
import "./Assignments.css";

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", subject: "Mathematics", dueDate: "2025-09-05" },
    { id: 2, title: "Science Project", subject: "Science", dueDate: "2025-09-10" },
    {id:3, title:"Java Project", subject:"java", dueDate:"2025-09-12"}
  ]);

  const [form, setForm] = useState({
    title: "",
    subject: "",
    dueDate: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Submit assignment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.subject || !form.dueDate) {
      alert("All fields are required!");
      return;
    }

    if (editId) {
      // Update assignment
      setAssignments(
        assignments.map((a) => (a.id === editId ? { ...a, ...form } : a))
      );
      setEditId(null);
    } else {
      // Add new assignment
      setAssignments([
        ...assignments,
        { id: Date.now(), ...form },
      ]);
    }

    // Reset form
    setForm({ title: "", subject: "", dueDate: "" });
  };

  // Edit assignment
  const handleEdit = (id) => {
    const assignment = assignments.find((a) => a.id === id);
    setForm({ title: assignment.title, subject: assignment.subject, dueDate: assignment.dueDate });
    setEditId(id);
  };

  // Delete assignment
  const handleDelete = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <div className="assignments-container">
      <h2>Teacher Assignments</h2>

      {/* Assignment Form */}
      <form className="assignment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={form.title}
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
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update" : "Add Assignment"}</button>
      </form>

      {/* Assignment List */}
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.subject}</td>
              <td>{a.dueDate}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(a.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
