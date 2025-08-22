import bcrypt from 'bcryptjs';

// inside register route
const hashedPassword = await bcrypt.hash(password, 10);
const newStudent = new Student({
  email,
  password: hashedPassword,
  role
});
await newStudent.save();
