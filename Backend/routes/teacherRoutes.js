import express from 'express';
import { registerTeacher, loginTeacher } from '../controller/teacherController.js';

const router = express.Router();

// router.post('/register', registerTeacher);
router.post('/login', loginTeacher);

export default router;  // ✅ default export
