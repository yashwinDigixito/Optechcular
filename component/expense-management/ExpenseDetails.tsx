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

import { themeConfig } from "@/assets/CommonDesign";

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

  
  const { colors, typography, borderRadius } = themeConfig;

  // Reusable animation styles
  const fadeInStyles = {
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    animation: "fadeIn 0.5s ease-out forwards",
  };

  if (!expense) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...fadeInStyles,
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: borderRadius.large,
            border: `1px solid ${colors.border}`,
            boxShadow: "none",
          }}
        >
          <Typography sx={{ color: colors.textSecondary, fontWeight: typography.fontWeight.bold }}>
            Expense record not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Top Navigation Bar */}
      <Box sx={{ opacity: 0, ...fadeInStyles, animationDelay: "0.1s" }}>
        <Container maxWidth="xl" sx={{ pt: 2 }}>
          <Link href="/expenses" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: colors.textSecondary,
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Back to Expenses
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, opacity: 0, ...fadeInStyles, animationDelay: "0.2s" }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              {expense.expenseName}
            </Typography>

            <Chip
              label={expense.id}
              size="small"
              sx={{
                bgcolor: colors.primaryLight,
                color: colors.primary,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />

            <Chip
              label={expense.status}
              size="small"
              sx={{
                bgcolor:
                  expense.status === "Approved" || expense.status === "Paid"
                    ? colors.successBg
                    : expense.status === "Rejected"
                    ? colors.errorBg
                    : colors.warningBg,
                color:
                  expense.status === "Approved" || expense.status === "Paid"
                    ? colors.success
                    : expense.status === "Rejected"
                    ? colors.error
                    : colors.warning,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
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
          <Box 
            sx={{ 
                width: { xs: "100%", lg: "60%" },
                opacity: 0,
                ...fadeInStyles,
                animationDelay: "0.3s"
            }}
          >
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
          <Box 
            sx={{ 
                width: { xs: "100%", lg: "40%" },
                opacity: 0,
                ...fadeInStyles,
                animationDelay: "0.4s"
            }}
          >
            <Stack spacing={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: borderRadius.large,
                  boxShadow: "none",
                  border: `1px solid ${colors.border}`,
                  bgcolor: colors.white,
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" }
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    borderRadius: borderRadius.xl, // Circular look
                    bgcolor: colors.primaryLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AccountBalanceWalletOutlinedIcon
                    sx={{ fontSize: 40, color: colors.primary }}
                  />
                </Box>

                <Typography sx={{ fontSize: 28, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {expense.currency} {expense.amount.toLocaleString()}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  Total Expense Value
                </Typography>
              </Card>

              <SideCard title="Quick Summary">
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Category: ${expense.ledger}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Method: ${expense.paymentMethod}`}
                />
                <IconLine
                  icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Date: ${expense.expenseDate}`}
                />
                <IconLine
                  icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Raised By: ${expense.createdBy}`}
                />
              </SideCard>

              <SideCard title="Description & Notes">
                <Stack spacing={2}>
                  <Box>
                    <Typography sx={{ color: colors.textSecondary, fontSize: 12, fontWeight: typography.fontWeight.bold, textTransform: "uppercase", mb: 0.5 }}>
                      Purpose
                    </Typography>
                    <Typography sx={{ color: colors.textMain, fontSize: 14, lineHeight: 1.6 }}>
                      {expense.description}
                    </Typography>
                  </Box>
                  
                  {expense.notes && (
                    <Box sx={{ pt: 2, borderTop: `1px dashed ${colors.border}` }}>
                      <Typography sx={{ color: colors.textSecondary, fontSize: 12, fontWeight: typography.fontWeight.bold, textTransform: "uppercase", mb: 0.5 }}>
                        Internal Notes
                      </Typography>
                      <Typography sx={{ color: colors.textMain, fontSize: 14, lineHeight: 1.6 }}>
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