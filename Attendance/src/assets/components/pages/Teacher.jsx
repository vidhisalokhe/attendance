// // Teacher.jsx
// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./Teacher.css";

// // Import teacher pages
// import Myclass from "./Myclass";
// import TAttendance from "./TAttendance";
// import Assignments from "./Assignments";
// // import Attendance from "./Attendance";
// // import Assignments from "./Assignments";

// const Teacher = () => {
//   return (
//     <div className="teacher-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Teacher Panel</h2>
//         <ul>
//           <li><Link to="">Dashboard</Link></li>
//           <li><Link to="myclasses">🏫 My Classes</Link></li>
//           <li><Link to="tattendance">📋 Attendance</Link></li>
//           <li><Link to="assignments">📝 Assignments</Link></li>
//           <li><Link to="/">🚪Logout</Link></li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <Routes>
//           {/* Default dashboard */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <h1>Dashboard</h1>
//                 <div className="stats-container">
//                   <div className="card">
//                     <h3>My Students</h3>
//                     <p>40</p>
//                   </div>
//                   <div className="card">
//                     <h3>Classes Today</h3>
//                     <p>4</p>
//                   </div>
//                   <div className="card">
//                     <h3>Pending Assignments</h3>
//                     <p>6</p>
//                   </div>
//                 </div>
//               </>
//             }
//           />

//           {/* Nested routes */}
//           <Route path="myclasses" element={<Myclass />} />
//           <Route path="tattendance" element={<TAttendance />} />
//           <Route path="assignments" element={<Assignments />} />
           
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default Teacher;


// Teacher.jsx
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Teacher.css";

// Import teacher pages
import Myclass from "./Myclass";
import TAttendance from "./TAttendance";
import Assignments from "./Assignments";

const Teacher = () => {
  const navigate = useNavigate();

  return (
    <div className="teacher-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "15px"
          }}
          onClick={() => navigate("/teacher")} // Dashboard pe wapas le jane ke liye
        >
          <span style={{ marginRight: "8px" }}>⬅️</span>
          <h2 style={{ margin: 0 }}>Teacher Panel</h2>
        </div>

        <ul>
          <li><Link to="">📊 Dashboard</Link></li>
          <li><Link to="myclasses">🏫 My Classes</Link></li>
          <li><Link to="tattendance">📋 Attendance</Link></li>
          <li><Link to="assignments">📝 Assignments</Link></li>
          <li><Link to="/">🚪 Logout</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          {/* Default dashboard */}
          <Route
            path="/"
            element={
              <>
                <h1>Welcome, Teacher</h1>
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
              </>
            }
          />

          {/* Nested routes */}
          <Route path="myclasses" element={<Myclass />} />
          <Route path="tattendance" element={<TAttendance />} />
          <Route path="assignments" element={<Assignments />} />
        </Routes>
      </main>
    </div>
  );
};

export default Teacher;
