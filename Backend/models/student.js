// import mongoose from "mongoose";

// const studentSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   role: String, 
  
// });

// const Student = mongoose.model("Student", studentSchema);

// export default Student;  

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
