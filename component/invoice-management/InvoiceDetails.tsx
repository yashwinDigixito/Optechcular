import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

// Icons
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { invoices } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, SummaryLine, getFadeInStyle } from "../common/ViewPage";
import { themeConfig } from "@/assets/CommonDesign";
import StatusChip from "../common/StatusChip";

export default async function InvoiceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = invoices.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!invoice) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0),
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
            Invoice record not found
          </Typography>
        </Card>
      </Box>
    );
  }

  // Helper for dynamic status colors
  const getStatusColors = (status: string) => {
    switch (status) {
      case "Sent": case "Paid": return { bg: colors.successBg, text: colors.success };
      case "Cancelled": case "Overdue": return { bg: colors.errorBg, text: colors.error };
      default: return { bg: "#FEF3C7", text: "#D97706" }; // Warning/Pending
    }
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation */}
      <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
        <Link href="/invoices" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: typography.fontWeight.medium,
              color: colors.primary,
            }}
          >
            Back to Invoices
          </Button>
        </Link>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              Invoice: {invoice.invoiceNo}
            </Typography>

            
<StatusChip status={invoice.invoiceStatus} />
  <StatusChip status={invoice.paymentStatus} />
          
          </Stack>
          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Issued Date: {invoice.invoiceDate}
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
          {/* Main Content (Left) */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Invoice Core Information">
                <InfoLine label="Internal ID" value={invoice.invoiceId} />
                <InfoLine label="Invoice Reference" value={invoice.invoiceNo} />
                <InfoLine label="Linked Order" value={invoice.orderNo} />
                <InfoLine label="Issue Date" value={invoice.invoiceDate} />
                <InfoLine label="Due Date" value={invoice.dueDate} />
                <InfoLine label="Billing Lifecycle" value={invoice.invoiceStatus} />
              </SideCard>

              <SideCard title="Client Details">
                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.customerName} />
                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.email} />
                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.phone} />
              </SideCard>

              <SideCard title="Billed Items">
                <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: borderRadius.medium,
                        bgcolor: colors.bgLight,
                        border: `1px solid ${colors.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Inventory2OutlinedIcon sx={{ fontSize: 32, color: colors.primary }} />
                    </Box>

                    <Box>
                      <Typography sx={{ color: colors.textSecondary, fontSize: 12, textTransform: "uppercase" }}>
                        {invoice.productType}
                      </Typography>
                      <Typography sx={{ fontSize: 18, fontWeight: typography.fontWeight.bold, color: colors.textMain }}>
                        {invoice.productName}
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 0.5 }}>
                        <Typography sx={{ color: colors.textSecondary, fontSize: 13 }}>Qty: {invoice.quantity}</Typography>
                        <Typography sx={{ color: colors.textSecondary, fontSize: 13 }}>Tax: {invoice.tax}%</Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                    <Typography sx={{ fontWeight: typography.fontWeight.medium, color: colors.textSecondary }}>
                      ₹{invoice.unitPrice}
                    </Typography>
                    <Typography sx={{ fontWeight: typography.fontWeight.bold, color: colors.textMain, fontSize: 18 }}>
                      ₹{invoice.lineTotal}
                    </Typography>
                  </Stack>
                </Stack>
              </SideCard>

              <SideCard title="Financial Summary">
                <SummaryLine label="Subtotal Amount" value={`₹${invoice.subtotal}`} />
                <SummaryLine label="Total Discounts" value={`-₹${invoice.discountAmount}`} />
                <SummaryLine label="Applied Tax" value={`₹${invoice.taxAmount}`} />
                <SummaryLine label="Logistics/Shipping" value={`₹${invoice.shippingCharge}`} />
                <Divider sx={{ my: 2, borderColor: colors.border }} />
                <SummaryLine label="Grand Total" value={`₹${invoice.grandTotal}`} bold />
                <SummaryLine label="Received Payment" value={`₹${invoice.paidAmount}`} />
                <SummaryLine label="Outstanding Balance" value={`₹${invoice.balanceDue}`} bold />
              </SideCard>

              <SideCard title="Audit Logs">
                <InfoLine label="System Entry" value={invoice.createdOn} />
                <InfoLine label="Last Modification" value={invoice.updatedDate} />
                <InfoLine label="Authorized By" value={invoice.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sidebar (Right) */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: { lg: "sticky" },
              top: 24,
              alignSelf: "flex-start",
              ...getFadeInStyle(0.4),
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
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    borderRadius: borderRadius.xl,
                    bgcolor: colors.primaryLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ReceiptLongOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontSize: 22, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {invoice.invoiceNo}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: 14, mt: 0.5 }}>
                  Total: ₹{invoice.grandTotal} • {invoice.customerName}
                </Typography>
              </Card>

              <SideCard title="Processing Details">
                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Due: ${invoice.dueDate}`} />
                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Method: ${invoice.paymentMethod || "Bank Transfer"}`} />
                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`TXN: ${invoice.transactionId || "Pending"}`} />
                <IconLine icon={<AccountBalanceWalletOutlinedIcon sx={{ color: colors.error }} />} text={`Payable: ₹${invoice.balanceDue}`} />
              </SideCard>

              <SideCard title="Logistics & Billing">
                <Typography sx={{ fontWeight: 700, fontSize: 12, color: colors.textSecondary, mb: 1, textTransform: "uppercase" }}>
                  Billing Address
                </Typography>
                <Typography sx={{ color: colors.textMain, fontSize: 14, mb: 2 }}>{invoice.billingAddress}</Typography>
                
                <Typography sx={{ fontWeight: 700, fontSize: 12, color: colors.textSecondary, mb: 1, textTransform: "uppercase" }}>
                  Shipping Address
                </Typography>
                <Typography sx={{ color: colors.textMain, fontSize: 14 }}>
                  {invoice.shippingAddress || "Matches billing address"}
                </Typography>
              </SideCard>

              <SideCard title="Remarks">
                <Typography sx={{ color: colors.textSecondary, fontSize: 14, fontStyle: "italic" }}>
                  {invoice.notes || "No special instructions or notes found for this invoice."}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}