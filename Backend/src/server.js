// // server.js

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/attendance', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // User Schema
// const UserSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   role: String,
// });
// const User = mongoose.model('User', UserSchema);

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { email, password, role } = req.body;

//   const user = await User.findOne({ email, role });
//   if (!user) return res.status(404).json({ message: 'User not found' });
//   if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });

//   res.json({ message: 'Login successful', token: 'dummy-token' });
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('🚀 Server started at http://localhost:5000');
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentModel = require("./models/student");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Register Route
app.post("/register", async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.status(201).json({ message: "Student registered successfully", student });
  } catch (err) {
    res.status(500).json({ error: "Registration failed", details: err });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await studentModel.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }

    if (student.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", student });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
