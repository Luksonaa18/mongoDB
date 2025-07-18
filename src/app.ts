import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.routes";
import userRoute from "./routes/user.routes";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRoute);

export default app;
