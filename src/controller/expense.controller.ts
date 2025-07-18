import { Request, Response } from "express";
import { Todo } from "../module/user.module";

export const addExpense = async (req: Request, res: Response) => {
  try {
    const newExpense = new Todo(req.body);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
};

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Todo.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

export const getExpenseById = async (req: Request, res: Response) => {
  try {
    const expense = await Todo.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const updatedExpense = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const deletedExpense = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};
