import Link from "next/link";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { expenses } from "@/assets/genericdata";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { IconLine, InfoLine, SideCard } from "../common/ViewPage";

export default async function ExpenseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const expense = expenses.find((item) => item.id === id);

  if (!expense) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "none",
          }}
        >
          <Typography sx={{ color: "#64748B", fontWeight: 700 }}>
            Expense record not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Top Navigation Bar */}
      <Box>
      
        <Container maxWidth="xl">
          <Link href="/expenses" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Expenses
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems: "center",flexWrap: "wrap"}} >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              {expense.expenseName}
            </Typography>

            <Chip
              label={expense.id}
              size="small"
              sx={{
                bgcolor: "#EFF6FF",
                color: "#3B82F6",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={expense.status}
              size="small"
              sx={{
                bgcolor:
                  expense.status === "Approved" || expense.status === "Paid"
                    ? "#DCFCE7"
                    : expense.status === "Rejected"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  expense.status === "Approved" || expense.status === "Paid"
                    ? "#15803D"
                    : expense.status === "Rejected"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Transaction Date: {expense.expenseDate}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* Main Content - Left Side */}
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Stack spacing={3}>
              <SideCard title="General Information">
                <InfoLine label="Expense ID" value={expense.id} />
                <InfoLine label="Expense Name" value={expense.expenseName} />
                <InfoLine label="Ledger/Category" value={expense.ledger} />
                <InfoLine label="Payment Method" value={expense.paymentMethod} />
                <InfoLine label="Status" value={expense.status} />
              </SideCard>

              <SideCard title="Financial Details">
                <InfoLine label="Amount" value={`${expense.currency} ${expense.amount.toLocaleString()}`} />
                <InfoLine label="Currency" value={expense.currency} />
                <InfoLine label="Expense Date" value={expense.expenseDate} />
              </SideCard>

              <SideCard title="Audit Tracking">
                <InfoLine label="Created On" value={expense.createdOn} />
                <InfoLine label="Created By" value={expense.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sidebar - Right Side */}
          <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
            <Stack spacing={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    bgcolor: "#EFF6FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AccountBalanceWalletOutlinedIcon
                    sx={{ fontSize: 40, color: "#3B82F6" }}
                  />
                </Box>

                <Typography sx={{ fontSize: 28, fontWeight: 800, color: "#0F172A" }}>
                  {expense.currency} {expense.amount.toLocaleString()}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  Total Expense Value
                </Typography>
              </Card>

              <SideCard title="Quick Summary">
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Category: ${expense.ledger}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Method: ${expense.paymentMethod}`}
                />
                <IconLine
                  icon={<CalendarMonthOutlinedIcon />}
                  text={`Date: ${expense.expenseDate}`}
                />
                <IconLine
                  icon={<PersonOutlineOutlinedIcon />}
                  text={`Raised By: ${expense.createdBy}`}
                />
              </SideCard>

              <SideCard title="Description & Notes">
                <Stack spacing={2}>
                  <Box>
                    <Typography sx={{ color: "#64748B", fontSize: 12, fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}>
                      Purpose
                    </Typography>
                    <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                      {expense.description}
                    </Typography>
                  </Box>
                  
                  {expense.notes && (
                    <Box sx={{ pt: 2, borderTop: "1px dashed #E2E8F0" }}>
                      <Typography sx={{ color: "#64748B", fontSize: 12, fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}>
                        Internal Notes
                      </Typography>
                      <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                        {expense.notes}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

