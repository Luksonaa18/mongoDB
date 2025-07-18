import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting", error);
    process.exit(1);
  }
};
