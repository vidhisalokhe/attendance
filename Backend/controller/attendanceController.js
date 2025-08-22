import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;
    const attendance = await Attendance.create({ student: studentId, date, status });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().populate('student');
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
