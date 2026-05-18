"use client";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import {
  Expense,
} from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  expenses: Expense[];
  setExpenseData: React.Dispatch< React.SetStateAction< Expense[] >>;
}
export default function ExpenseTable({ expenses, setExpenseData}: Props) {
  const router = useRouter();
  const columns = [
    {
      key: "expenseName",
      label: "Expense Name",
    },
    {
      key: "ledger",
      label: "Ledger",
    },
    {
      key: "amount",
      label: "Amount",
      align: "center" as const,
    },
    {
      key: "expenseDate",
      label: "Date",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];
  const handleStatusChange = (
    id: string,
    value: string
  ) => {
    setExpenseData((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              status: value as
                | "Approved"
                | "Pending",
            }
          : expense
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={expenses}
      renderCell={( expense, key ) => {
        switch (key) {
          case "expenseName":
            return (
              <Typography
                sx={{
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { expense.expenseName }
              </Typography>
            );
          case "ledger":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { expense.ledger }
              </Typography>
            );
          case "amount":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  color: "#0F172A",
                }}
              >
                ₹{" "}
                { expense.amount.toLocaleString() }
              </Typography>
            );
          case "expenseDate":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { expense.expenseDate }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ expense.status }
                options={["Approved","Pending"]}
                onChange={(value) =>
                  handleStatusChange( expense.id, value )
                }
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() =>
                  router.push(
                    `/expenses/view/${expense.id}`
                  )
                }
                onEdit={() =>
                  router.push( `/expenses/edit/${expense.id}` )
                }
              />
            );
          default: return null;
        }
      }}
    />
  );
}