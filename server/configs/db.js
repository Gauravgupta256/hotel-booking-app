import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking-app`);
    isConnected = true;
    console.log("Database Connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
    throw error;
  }
};

export default connectDB;
