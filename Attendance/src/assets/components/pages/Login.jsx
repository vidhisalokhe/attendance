// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';

// const Login= () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // setFormData(prev => ({ ...prev, [name]: value }));
//     axios.post('http://localhost:3001/admin',{email,password,role})
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
    
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Replace this with API call
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
//           // onChange={handleChange}
//           onChange={(e) =>setEmail(e.target.value)}
//           className="login-input"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
     
//           value={formData.password}
//           // onChange={handleChange}
//              onChange={(e) =>setEmail(e.target.value)}
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  // Handle input change (Updates state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit (Sends data to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      console.log("Login Response:", response.data);
      alert(response.data.message);
    } catch (err) {
      console.error("Login Failed:", err);
      alert("Login failed");
    }
  };

  return (
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
  );
};

export default Login;
