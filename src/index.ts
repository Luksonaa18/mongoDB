// src/index.ts or a similar entry point (adjust path if necessary)
import app from "../src/app"; // Your Express app instance
import mongoose from "mongoose"; // Mongoose for MongoDB
import { connectDB } from "./config/db"; // DB connection function

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Once DB is connected, start the server
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Error connecting to the database or starting the server:", error);
    process.exit(1); // Exit process with a failure code
  }
};

startServer();
