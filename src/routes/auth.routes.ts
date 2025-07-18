import { Router } from "express";
import { CreateUser, logIn } from "../controller/auth.controller";

const authRouter = Router();
authRouter.post("/create", CreateUser);
authRouter.post("/logIn", logIn);

export default authRouter;
