// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './assets/components/pages/Login';
//  import Admin from './assets/components/pages/Admin';
// import AdminReport from './assets/components/pages/AdminReport';
// import Teacher from './assets/components/pages/Teacher';
// import Student from './assets/components/pages/Student';
 
 
// function App() {
//   return (
//     <BrowserRouter>
//        <Routes>
//         {/* <Route path='/' element={<Login />} /> */}
//        <Route path='/admin' element={<Admin />} />
//         {/* <Route path='/' element={<Teacher />} />   */}
//         {/* <Route path="/" element={<Student />} /> */}
//         {/* <Route path='/' element={<AdminReport />} /> */}
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Admin from './assets/components/pages/Admin';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect root to /admin */}
//         <Route path="/" element={<Navigate to="/admin" />} />

//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './assets/components/pages/Login';
// import Admin from './assets/components/pages/Admin';
// import Student from './assets/components/pages/Student';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /admin */}
        {/* <Route path="/" element={<Navigate to="/admin" />} /> */}
         {/* <Route path="/" element={<Navigate to="/student" />} /> */}
         <Route path='/' element={<Login />} />

        {/* Allow nested routes */}
        {/* <Route path="/admin/*" element={<Admin />} /> */}
        {/* <Route path="/student/*" element={<Student />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
