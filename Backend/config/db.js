// import mongoose from 'mongoose';

// const URI ="mongodb+srv://vidhisalokhe06:vidhi7782@internship1.rrryfhp.mongodb.net/"

// export const connectDb = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };


// db.js (ESM version)
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vidhisalokhe08:vidhi2812@internship1.rrryfhp.mongodb.net/t/ ');
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectDB;
