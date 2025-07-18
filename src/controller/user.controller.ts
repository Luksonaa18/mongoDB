import mongoose from "mongoose";
import { Todo } from "../module/user.module";
import { Request, Response } from "express";

export const getUses = async (_: Request, res: Response) => {
  try {
    const users = await Todo.find();
    const use = users.map(({ password, ...rest }) => rest);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  mongoose.isValidObjectId(id) ||
    res.status(400).json({ message: "Invalid Id" });
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
};
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  try {
    const updatedTask = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request", error });
  }
};
