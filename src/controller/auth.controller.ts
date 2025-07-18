import { Todo } from "../module/user.module";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { compare, hashString } from "../utils/bcrypt.utils";
import { generateToken } from "../utils/jwt.utils";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const { password, name, ...rest } = req.body;
    const pass = await hashString(password);
    await Todo.create({ ...rest, userName: name, password: pass });
    res.status(201).json({ message: "User Created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};
export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password doesn't exist" });
  }
  const user = await Todo.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  if (await compare(password, user.password)) {
    return res.status(200).json({
      accessToken: generateToken({ ...user }),
      refreshToken: generateToken({ ...user }),
    });
  }
};
