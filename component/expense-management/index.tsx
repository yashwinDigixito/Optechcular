"use client";

import {
    expenses,
} from "@/assets/genericdata";

import {
    Expense,
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
    useState,
} from "react";

import TableContainerCard from "@/component/common/TableContainerCard";

import ExpenseFilters from "./ExpenseFilters";

import ExpenseTable from "./Expensetable";

export default function ExpenseManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [ledger, setLedger] =
    useState("");

  const [expenseData] =
    useState<
      Expense[]
    >(
      expenses
    );

  const filteredExpenses =
    expenseData.filter(
      (expense) => {

        const matchesSearch =
          search
            ? expense.expenseName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesStatus =
          status
            ? expense.status ===
              status
            : true;

        const matchesLedger =
          ledger
            ? expense.ledger ===
              ledger
            : true;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesLedger
        );
      }
    );

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight:
              700,

            color:
              "#0F172A",
          }}
        >
          Expense Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/expenses/add"
            )
          }
          sx={{
            borderRadius:
              "12px",

            px: 3,

            height:
              "48px",

            textTransform:
              "none",

            fontWeight:
              600,
          }}
        >
          Add Expense
        </Button>

      </Box>

      {/* FILTERS */}
      <ExpenseFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        ledger={ledger}
        setLedger={setLedger}
      />

      {/* TABLE */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          <Typography
            sx={{
              mb: 2,

              color:
                "#64748B",

              fontWeight:
                500,
            }}
          >
            {
              filteredExpenses.length
            }{" "}
            results found
          </Typography>

          <ExpenseTable
            expenses={
              filteredExpenses
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}