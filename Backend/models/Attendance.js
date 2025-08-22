import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Present", "Absent"], required: true }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance; // ✅ default export
