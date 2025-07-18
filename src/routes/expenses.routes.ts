import { Router } from "express";
import {
  addExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../controller/expense.controller";

const expenseRoute = Router();

expenseRoute.post("/", addExpense);
expenseRoute.get("/", getAllExpenses);
expenseRoute.get("/:id", getExpenseById);
expenseRoute.put("/:id", updateExpense);
expenseRoute.delete("/:id", deleteExpense);

export default expenseRoute;
