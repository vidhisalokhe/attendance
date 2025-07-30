// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "./StudentList.css";

// // // const StudentList = () => {
// // //   const [students, setStudents] = useState([]);

// // //   useEffect(() => {
// // //     axios
// // //       .get("http://localhost:5000/api/students")
// // //       .then((res) => setStudents(res.data))
// // //       .catch((err) => console.log(err));
// // //   }, []);

// // //   return (
// // //     <div className="page-wrapper">
// // //       <div className="student-list-container">
// // //         <h2><strong>Student List</strong></h2>
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Roll No</th>
// // //               <th>Name</th>
// // //               <th>Email</th>
// // //               <th>Mobile</th>
// // //               <th>Status</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {students.map((stu, index) => (
// // //               <tr key={stu._id}>
// // //                 <td>{index + 1}</td>
// // //                 <td>{stu.name}</td>
// // //                 <td>{stu.email}</td>
// // //                 <td>{stu.mobile}</td>
// // //                 <td>{stu.isPresent ? "Present" : "Absent"}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StudentList;


// // import React from "react";
// // import "./StudentList.css";

// // const StudentList = () => {
// //   return (
// //     <div className="page-wrapper">
// //       <div className="student-list-container">
// //         <h2>Student List</h2>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Roll No</th>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Mobile</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>1</td>
// //               <td>Vidhi Salokhe</td>
// //               <td>vidhi@gmail.com</td>
// //               <td>9876543210</td>
// //               <td>Present</td>
// //             </tr>
// //             <tr>
// //               <td>2</td>
// //               <td>Raj Patel</td>
// //               <td>rajp@gmail.com</td>
// //               <td>9123456789</td>
// //               <td>Absent</td>
// //             </tr>
// //             <tr>
// //               <td>3</td>
// //               <td>Anjali Mehta</td>
// //               <td>anjali123@gmail.com</td>
// //               <td>9988776655</td>
// //               <td>Present</td>
// //             </tr>
// //             {/* Add more rows as needed */}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentList;


// import React from "react";
// import "./StudentList.css";

// const StudentList = () => {
//   return (
//     <div className="student-list-container">
//       <h2><strong>Student List</strong></h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Vidhi</td>
//             <td>vidhi@gmail.com</td>
//             <td>9876543210</td>
//             <td>Present</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Raj</td>
//             <td>raj@gmail.com</td>
//             <td>9123456789</td>
//             <td>Absent</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentList;





 