"use client";

import {
    Expense,
} from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import Link from "next/link";

interface Props {

  expense: Expense;
}

export default function ExpenseDetails({
  expense,
}: Props) {

  return (
    <Box
      sx={{
        minHeight:
          "100vh",

        bgcolor:
          "#F8FAFC",
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          p: 3,
        }}
      >
        <Link
          href="/expenses"
          style={{
            textDecoration:
              "none",
          }}
        >
          <Button
            startIcon={
              <ArrowBackIcon />
            }
          >
            Back to Expenses
          </Button>

        </Link>

      </Box>

      <Container
        maxWidth="lg"
      >
        {/* HEADER */}
        <Box sx={{ mb: 4 }}>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems:
                "center",

              flexWrap:
                "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize:
                  "32px",

                fontWeight:
                  800,

                color:
                  "#2563EB",
              }}
            >
              {
                expense.expenseName
              }
            </Typography>

            <Chip
              label={
                expense.status
              }
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

          </Stack>

          <Typography
            sx={{
              mt: 1,

              color:
                "#64748B",
            }}
          >
            Expense Date:
            {" "}
            {
              expense.expenseDate
            }
          </Typography>

        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            display:
              "flex",

            gap: 3,

            flexDirection:
              {
                xs: "column",
                lg: "row",
              },
          }}
        >
          {/* LEFT */}
          <Box sx={{ flex: 1 }}>

            <Stack spacing={3}>

              {/* EXPENSE INFO */}
              <Box
                sx={{
                  p: 3,

                  borderRadius:
                    "20px",

                  border:
                    "1px solid #E2E8F0",

                  bgcolor:
                    "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      "20px",

                    fontWeight:
                      700,

                    mb: 3,
                  }}
                >
                  Expense Information
                </Typography>

                <Stack spacing={2}>

                  <InfoRow
                    label="Expense Name"
                    value={
                      expense.expenseName
                    }
                  />

                  <InfoRow
                    label="Ledger"
                    value={
                      expense.ledger
                    }
                  />

                  <InfoRow
                    label="Payment Method"
                    value={
                      expense.paymentMethod
                    }
                  />

                  <InfoRow
                    label="Created By"
                    value={
                      expense.createdBy
                    }
                  />

                </Stack>

              </Box>

              {/* NOTES */}
              <Box
                sx={{
                  p: 3,

                  borderRadius:
                    "20px",

                  border:
                    "1px solid #E2E8F0",

                  bgcolor:
                    "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      "20px",

                    fontWeight:
                      700,

                    mb: 2,
                  }}
                >
                  Notes
                </Typography>

                <Typography
                  sx={{
                    color:
                      "#475569",

                    lineHeight:
                      1.8,
                  }}
                >
                  {
                    expense.notes
                  }
                </Typography>

              </Box>

            </Stack>

          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "350px",
              },
            }}
          >
            <Stack spacing={3}>

              {/* SUMMARY */}
              <Box
                sx={{
                  p: 3,

                  borderRadius:
                    "20px",

                  border:
                    "1px solid #E2E8F0",

                  bgcolor:
                    "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      "20px",

                    fontWeight:
                      700,

                    mb: 3,
                  }}
                >
                  Expense Summary
                </Typography>

                <Stack spacing={2}>

                  <IconRow
                    icon={
                      <AccountBalanceWalletOutlinedIcon />
                    }
                    title="Amount"
                    value={`₹${expense.amount.toLocaleString()}`}
                  />

                  <Divider />

                  <IconRow
                    icon={
                      <PaymentsOutlinedIcon />
                    }
                    title="Payment"
                    value={
                      expense.paymentMethod
                    }
                  />

                  <Divider />

                  <IconRow
                    icon={
                      <CalendarMonthOutlinedIcon />
                    }
                    title="Date"
                    value={
                      expense.expenseDate
                    }
                  />

                  <Divider />

                  <IconRow
                    icon={
                      <PersonOutlineOutlinedIcon />
                    }
                    title="Created By"
                    value={
                      expense.createdBy
                    }
                  />

                </Stack>

              </Box>

            </Stack>

          </Box>

        </Box>

      </Container>

    </Box>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (
    <Box
      sx={{
        display:
          "flex",

        justifyContent:
          "space-between",

        gap: 2,
      }}
    >
      <Typography
        sx={{
          color:
            "#64748B",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          fontWeight:
            600,

          textAlign:
            "right",
        }}
      >
        {value}
      </Typography>

    </Box>
  );
}

function IconRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems:
          "center",
      }}
    >
      <Box
        sx={{
          width: 42,

          height: 42,

          borderRadius:
            "12px",

          bgcolor:
            "#EFF6FF",

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          color:
            "#2563EB",
        }}
      >
        {icon}
      </Box>

      <Box>

        <Typography
          sx={{
            fontSize:
              "13px",

            color:
              "#64748B",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontWeight:
              700,
          }}
        >
          {value}
        </Typography>

      </Box>

    </Stack>
  );
}