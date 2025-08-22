import Teacher from '../models/teacher.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerTeacher = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await Teacher.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      role: role || 'teacher'
    });

    await newTeacher.save();

    res.status(201).json({ success: true, message: 'Teacher registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

export const loginTeacher = async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Dummy token (like student controller)
     const token = jwt.sign({ id: teacher._id }, "secretkey", { expiresIn: "1h" });
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'dummy-token', // just like student controller
      role: teacher.role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
