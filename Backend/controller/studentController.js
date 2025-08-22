import Student from '../models/student.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

export const registerStudent = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      role: role || 'student'
    });

    await newStudent.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Sirf email pe user find
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Password compare
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
       
    //  const token = jwt.sign({ id: user._id, role: user.role }, "secret");
    const token = jwt.sign({ id: student._id }, "secretkey", { expiresIn: "1h" });


    // Dummy token (JWT later add kar sakte ho)
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'dummy-token',
      role: student.role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
