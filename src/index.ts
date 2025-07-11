import app from "../src/app";
import mongoose from "mongoose";
import { connectDB } from "./config/db";
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Port is running successfully");
  });
});
