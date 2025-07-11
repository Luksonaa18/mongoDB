import express from "express";
import userRoute from "./routes/userRoutes";
const app = express();
app.use(express.json());
app.use("/api/todo", userRoute);
export default app;
