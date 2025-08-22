// // // import React, { useState } from 'react';
// // // import './Login.css';
// // // import axios from 'axios';

// // // const Login= () => {
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: '',
// // //     role: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     // setFormData(prev => ({ ...prev, [name]: value }));
// // //     axios.post('http://localhost:3001/admin',{email,password,role})
// // //     .then(result => console.log(result))
// // //     .catch(err => console.log(err))
    
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(formData); // Replace this with API call
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <form className="login-card" onSubmit={handleSubmit}>
// // //         <h2 className="login-title">LOGIN</h2>

// // //         <input
// // //           type="email"
// // //           name="email"
// // //           placeholder="Email Address"
// // //           value={formData.email}
// // //           // onChange={handleChange}
// // //           onChange={(e) =>setEmail(e.target.value)}
// // //           className="login-input"
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           name="password"
// // //           placeholder="Password"
     
// // //           value={formData.password}
// // //           // onChange={handleChange}
// // //              onChange={(e) =>setEmail(e.target.value)}
// // //           className="login-input"
// // //           required
// // //         />

// // //         <select
// // //           name="role"
// // //           value={formData.role}
// // //           onChange={handleChange}
// // //           className="login-input"
// // //           required
// // //         >
// // //           <option value="">Role</option>
// // //           <option value="student">Student</option>
// // //           <option value="teacher">Teacher</option>
// // //           <option value="admin">Admin</option>
// // //         </select>

// // //         <button type="submit" className="login-button">LOGIN</button>

// // //         <p className="forgot-password">Forgot password?</p>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React, { useState } from 'react';
// // import './Login.css';
// // import axios from 'axios';

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     role: '',
// //   });

// //   // Handle input change (Updates state)
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Handle form submit (Sends data to backend)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Form Submitted:", formData);

// //     try {
// //       await axios.post('/api/student/login', formData);

// //       const response = await axios.post('http://localhost:5000/api/student/login', formData);

// //       console.log("Login Response:", response.data);
// //       alert(response.data.message);
// //     } catch (err) {
// //       console.error("Login Failed:", err);
// //       alert("Login failed");
// //     }
// //   };

// //   return (
    
// //     <div className="login-container">
      
// //       <form className="login-card" onSubmit={handleSubmit}>
// //         <h2 className="login-title">LOGIN</h2>


// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email Address"
// //           value={formData.email}
// //           onChange={handleChange}
// //           className="login-input"
// //           required
// //         />

// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           className="login-input"
// //           required
// //         />

// //         <select
// //           name="role"
// //           value={formData.role}
// //           onChange={handleChange}
// //           className="login-input"
// //           required
// //         >
// //           <option value="">Role</option>
// //           <option value="student">Student</option>
// //           <option value="teacher">Teacher</option>
// //           <option value="admin">Admin</option>
// //         </select>

// //         <button type="submit" className="login-button">LOGIN</button>

// //         <p className="forgot-password">Forgot password?</p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

 
 



// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);

//     try {
//       const response = await axios.post('http://localhost:5000/api/student/login', formData);
//       console.log("Login Response:", response.data);
//       alert(response.data.message);
//     } catch (err) {
//       console.error("Login Failed:", err.response?.data || err.message);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-card" onSubmit={handleSubmit}>
//         <h2 className="login-title">LOGIN</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="login-input"
//           required
//         >
//           <option value="">Role</option>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" className="login-button">LOGIN</button>

//         <p className="forgot-password">Forgot password?</p>
//       </form>
//     </div>
//   );
// };

// export default Login;
 
// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // ✅ Navigation ke liye

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });

//   const navigate = useNavigate(); // ✅ Hook to navigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);

//     try {
//       const response = await axios.post('http://localhost:5000/api/student/login', formData);
//       console.log("Login Response:", response.data);
//       alert(response.data.message);

//       // ✅ Role check karke respective dashboard open karega
//       if (formData.role === 'student') {
//         navigate('/student');
//       } else if (formData.role === 'teacher') {
//         navigate('/teacher');
//       } else if (formData.role === 'admin') {
//         navigate('/admin');
//       }

//     } catch (err) {
//       console.error("Login Failed:", err.response?.data || err.message);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-card" onSubmit={handleSubmit}>
//         <h2 className="login-title">LOGIN</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="login-input"
//           required
//         >
//           <option value="">Role</option>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" className="login-button">LOGIN</button>

//         <p className="forgot-password">Forgot password?</p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);

//     try {
//       let url = '';
// if (formData.role === 'student') {
//   url = 'http://localhost:5000/api/student/login';
// } else if (formData.role === 'teacher') {
//   url = 'http://localhost:5000/api/teacher/login';
// } else if (formData.role === 'admin') {
//   url = 'http://localhost:5000/api/admin/login';
// }

// const response = await axios.post(url, formData);
      
// console.log("Login Response:", response.data);
//       alert(response.data.message);

//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token || "");
//         localStorage.setItem("role", response.data.role);

//         console.log("Before navigate, role:", response.data.role);
//         try {
//           if (response.data.role === 'student') {
//             console.log("Navigating to student dashboard");
//             navigate('/student');
//           } else if (response.data.role === 'teacher') {
//             console.log("Navigating to teacher dashboard");
//             navigate('/teacher');
//           } else if (response.data.role === 'admin') {
//             console.log("Navigating to admin dashboard");
//             navigate('/admin');
//           } else {
//             console.log("Unknown role, cannot navigate");
//           }
//         } catch(err) {
//           console.log("Navigate error:", err);
//         }
//       } else {
//         alert("Invalid credentials!");
//       }
//     } catch (err) {
//       console.error("Login Failed:", err.response?.data || err.message);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-card" onSubmit={handleSubmit}>
//         <h2 className="login-title">LOGIN</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="login-input"
//           required
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="login-input"
//           required
//         >
//           <option value="">Role</option>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit" className="login-button">LOGIN</button>

//         <p className="forgot-password">Forgot password?</p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });


  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      let url = '';
      if (formData.role === 'student') {
        url = 'http://localhost:5000/api/student/login';
      } else if (formData.role === 'teacher') {
        url = 'http://localhost:5000/api/teacher/login';
      } else if (formData.role === 'admin') {
        url = 'http://localhost:5000/api/admin/login';
      }

      const response = await axios.post(url, formData);
      console.log("Login Response:", response.data);

      if (response.data.success) {
        alert(response.data.message);

        localStorage.setItem("token", response.data.token || "");
        localStorage.setItem("role", response.data.role);

        if (response.data.role === 'student') {
          navigate('/student');
        } else if (response.data.role === 'teacher') {
          navigate('/teacher');
        } else if (response.data.role === 'admin') {
          navigate('/admin');
        }
      } else {
        alert(response.data.message || "Invalid credentials!");
      }
    } catch (err) {
      console.error("Login Failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
   <>
    <nav className="navbar">
      <div className="logo">Attendance System</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login" className="login-btn">Login</a></li>
      </ul>
    </nav>

       <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}> 
        <h2 className="login-title">LOGIN</h2>
       
    
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="login-input"
          required
        >
          <option value="">Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="login-button">LOGIN</button>

        <p className="forgot-password">Forgot password?</p>
      </form>
    </div>
    </>
  
  );
};

export default Login;
