import React, { useState } from "react";
import "./Subject.css";

const Subject = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, subjectCode: "22CO31", subjectName: "Programming in C", semester: 2 },
    { id: 2, subjectCode: "22CO32", subjectName: "Data Structures", semester: 3 },
    {id: 3,subjectCode: "22CO33" , subjectName: "Java Programming" , semester:4},
  ]);

  const [form, setForm] = useState({
    subjectCode: "",
    subjectName: "",
    semester: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add or Update Subject
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.subjectCode || !form.subjectName || !form.semester) {
      alert("All fields are required!");
      return;
    }

    if (editId) {
      // Update existing subject
      setSubjects(
        subjects.map((sub) =>
          sub.id === editId ? { ...sub, ...form, semester: parseInt(form.semester) } : sub
        )
      );
      setEditId(null);
    } else {
      // Add new subject
      setSubjects([
        ...subjects,
        { id: Date.now(), ...form, semester: parseInt(form.semester) },
      ]);
    }

    // Reset form
    setForm({ subjectCode: "", subjectName: "", semester: "" });
  };

  // Edit Subject
  const handleEdit = (id) => {
    const subject = subjects.find((sub) => sub.id === id);
    setForm({ ...subject, semester: subject.semester.toString() });
    setEditId(id);
  };

  // Delete Subject
  const handleDelete = (id) => {
    setSubjects(subjects.filter((sub) => sub.id !== id));
  };

  return (
    <div className="subjects-container">
      <h2>Manage Subjects</h2><br></br>

      <form className="subject-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="subjectCode"
          placeholder="Subject Code (xEx: 22CO31)"
          value={form.subjectCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subjectName"
          placeholder="Subject Name"
          value={form.subjectName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="semester"
          placeholder="Semester (1-6)"
          value={form.semester}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Subject" : "Add Subject"}</button>
      </form>

      <table className="subjects-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((sub) => (
            <tr key={sub.id}>
              <td>{sub.subjectCode}</td>
              <td>{sub.subjectName}</td>
              <td>{sub.semester}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(sub.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(sub.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subject;
