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

import EditExpenseForm from "@/component/expense-management/EditExpenseForm";

export default function EditExpensePage() {

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
    <EditExpenseForm
      expense={expense}
    />
  );
}