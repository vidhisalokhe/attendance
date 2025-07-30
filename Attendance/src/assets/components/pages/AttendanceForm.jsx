import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    // Fetch student list from backend
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSubmit = async () => {
    const attendanceData = Object.entries(attendance).map(([studentId, status]) => ({
      studentId,
      date,
      status,
    }));

    try {
      await axios.post('http://localhost:5000/api/attendance/mark', attendanceData);
      alert('Attendance marked successfully!');
    } catch (err) {
      alert('Error submitting attendance');
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <label>Date: </label>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="radio"
                  name={`status-${student._id}`}
                  onChange={() => handleStatusChange(student._id, 'Present')}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`status-${student._id}`}
                  onChange={() => handleStatusChange(student._id, 'Absent')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit Attendance
      </button>
    </div>
  );
};

export default AttendanceForm;
