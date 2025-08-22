// // // // server.js

// // // import express from 'express';
// // // import mongoose from 'mongoose';
// // // import cors from 'cors';

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // Connect to MongoDB
// // // mongoose.connect('mongodb://127.0.0.1:27017/attendance', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // }).then(() => console.log('✅ MongoDB connected'))
// // //   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // User Schema
// // // const UserSchema = new mongoose.Schema({
// // //   email: String,
// // //   password: String,
// // //   role: String,
// // // });
// // // const User = mongoose.model('User', UserSchema);

// // // // Login route
// // // app.post('/api/login', async (req, res) => {
// // //   const { email, password, role } = req.body;

// // //   const user = await User.findOne({ email, role });
// // //   if (!user) return res.status(404).json({ message: 'User not found' });
// // //   if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });

// // //   res.json({ message: 'Login successful', token: 'dummy-token' });
// // // });

// // // // Start the server
// // // app.listen(5000, () => {
// // //   console.log('🚀 Server started at http://localhost:5000');
// // // });

// // import express from 'express';
// // import mongoose from 'mongoose';
// //  import cors from 'cors';
// // import studentModel from "../models/student.js";

// // // const studentModel = require("./models/student");

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // Connect to MongoDB
// // mongoose
// //   .connect("mongodb://127.0.0.1:27017/student", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch((err) => console.log("MongoDB Connection Error:", err));

// // // Register Route
// // app.post("/register", async (req, res) => {
// //   try {
// //     const student = await studentModel.create(req.body);
// //     res.status(201).json({ message: "Student registered successfully", student });
// //   } catch (err) {
// //     res.status(500).json({ error: "Registration failed", details: err });
// //   }
// // });

// // // Login Route
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const student = await studentModel.findOne({ email });

// //     if (!student) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     if (student.password !== password) {
// //       return res.status(401).json({ message: "Invalid credentials" });
// //     }

// //     res.status(200).json({ message: "Login successful", student });
// //   } catch (err) {
// //     res.status(500).json({ error: "Login failed", details: err });
// //   }
// // });

// // app.listen(5000, () => {
// //   console.log("Server is running on port 5000");
// // });


// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import connectDB from '../config/db.js';  

// import studentRoutes from '../routes/studentRoutes.js';  
// import attendanceRoutes from '../routes/attendanceRoutes.js';
// import registerRoutes from '../routes/register.js'; // ✅ Naam match karaya

// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());

// // Connect DB
// connectDB();

// // Routes
// app.use('/api/student', studentRoutes);
// app.use('/api/attendance', attendanceRoutes);
// app.use('/api/register', registerRoutes); // ✅ Ab import ke naam ke saath match

// // Start server
// app.listen(5000, () => {
//   console.log(`🚀 Server running on port 5000`);
//   console.log(`🌐 API available at: http://localhost:5000`);
// });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
//  import connectDB from ""../config/db.js";  
// import studentRoutes from "../routes/studentRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/student", studentRoutes);

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/attendance", {
// })
// .then(() => {
//   console.log("MongoDB connected");
//   app.listen(5000, () => {
//     console.log("🚀 Server running on: http://localhost:5000");
//   });
// })
// .catch((err) => {
//   console.error("MongoDB connection error:", err);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "../routes/studentRoutes.js";
import teacherRoutes from "../routes/teacherRoutes.js";
import adminRoutes from "../routes/adminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/student', studentRoutes);
 app.use('/api/teacher', teacherRoutes);
 app.use('/api/admin',adminRoutes);
 


mongoose.connect(
  // "mongodb+srv://vidhisalokhe01:vidhi1216@internship1.rrryfhp.mongodb.net/attendance",
  "mongodb+srv://vidhisalokhe66:vidhi3009@internship1.rrryfhp.mongodb.net/attendance",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => {
  console.log("MongoDB connected to Atlas");
  app.listen(5000, () => {
    console.log("🚀 Server running on: http://localhost:5000");
  });
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});
