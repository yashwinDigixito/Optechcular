"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    expenses,
} from "@/assets/genericdata";

import ExpenseDetails from "@/component/expense-management/ExpenseDetails";

export default function ExpenseViewPage() {

  const params =
    useParams();

  const expense =
    expenses.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!expense) {

    return (
      <Box sx={{ p: 3 }}>
        Expense not found
      </Box>
    );
  }

  return (
    <ExpenseDetails
      expense={expense}
    />
  );
}