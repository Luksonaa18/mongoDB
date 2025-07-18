import { Router } from "express";
import { deleteUser, getUses, updateTask } from "../controller/user.controller";
import authMiddleware from "../middleware/auth.middleware";
const userRoute = Router();
userRoute.get("/", authMiddleware, getUses);
userRoute.put("/:id", updateTask);
userRoute.delete("/:id", deleteUser);
export default userRoute;
