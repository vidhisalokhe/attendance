import React, { useState, useEffect } from "react";
import "./AdminReport.css";

const AdminReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const sampleReports = [
      { id: 1, name: "Prathana Jadhv", totalDays: 30, presentDays: 28, absentDays: 2 },
      { id: 2, name: "Sanika Patil", totalDays: 30, presentDays: 25, absentDays: 5 },
      { id: 3, name: "Kusum Nalwade", totalDays: 30, presentDays: 29, absentDays: 1 },
      { id: 4, name: "Vidhi Salokhe", totalDays:30, presentDays:27, absentDays:2},
    ];
    setReports(sampleReports);
  }, []);

  return (
    <div className="admin-report-fullscreen">
      <h2 className="report-title">Admin Attendance Report</h2>

      <div className="table-container-full">
        <table className="report-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Total Days</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              const attendancePercentage = ((report.presentDays / report.totalDays) * 100).toFixed(2);
              return (
                <tr key={report.id}>
                  <td>{index + 1}</td>
                  <td>{report.name}</td>
                  <td>{report.totalDays}</td>
                  <td className="present">{report.presentDays}</td>
                  <td className="absent">{report.absentDays}</td>
                  <td className="percentage">{attendancePercentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReport;
