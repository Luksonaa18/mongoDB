import { Router } from "express";
import {
  CreateUser,
  deleteUser,
  getUses,
  updateTask,
} from "../controller/user-controller";
const userRoute = Router();
userRoute.post("/", CreateUser);
userRoute.get("/", getUses);
userRoute.put("/:id", updateTask);
userRoute.delete("/:id", deleteUser);
export default userRoute;
