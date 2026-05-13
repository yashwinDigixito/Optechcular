"use client";

import {
    Expense,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
    Box,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {

  expenses:
    Expense[];
}

export default function ExpenseTable({
  expenses,
}: Props) {

  const router =
    useRouter();

  return (
    <TableContainer
      sx={{
        borderRadius:
          "20px",

        border:
          "1px solid #E2E8F0",
      }}
    >
      <Table>

        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Expense Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Ledger
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Amount
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Date
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {expenses.map(
            (expense) => (

              <TableRow
                key={expense.id}
                hover
              >
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#2563EB",

                      fontWeight:
                        700,
                    }}
                  >
                    {
                      expense.expenseName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    expense.ledger
                  }
                </TableCell>

                <TableCell>

                  <Typography
                    sx={{fontWeight:700}}
                  >
                    ₹
                    {
                      expense.amount.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    expense.expenseDate
                  }
                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      expense.status
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        expense.status ===
                        "Paid"

                          ? "#DCFCE7"

                          : "#FEF3C7",

                      color:
                        expense.status ===
                        "Paid"

                          ? "#15803D"

                          : "#B45309",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,
                    }}
                  >
                    <Tooltip title="View">

                      <IconButton
                        onClick={() =>
                          router.push(
                            `/expenses/view/${expense.id}`
                          )
                        }
                      >
                        <RemoveRedEyeOutlinedIcon />
                      </IconButton>

                    </Tooltip>

                    <Tooltip title="Edit">

                      <IconButton
                        onClick={() =>
                          router.push(
                            `/expenses/edit/${expense.id}`
                          )
                        }
                      >
                        <EditIcon />
                      </IconButton>

                    </Tooltip>

                  </Box>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}