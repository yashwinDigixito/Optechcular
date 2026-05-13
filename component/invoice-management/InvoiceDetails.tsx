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
import { IconLine, InfoLine, SideCard, SummaryLine } from "../common/ViewPage";
export default async function InvoiceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const invoice = invoices.find((item) => item.id === id);

  if (!invoice) {
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
            Invoice not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
        sx={{
          py: 2,
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="xl">
          <Link href="/invoices" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Invoices
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems:"center", flexWrap:"wrap"}}  >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Invoice: {invoice.invoiceNo}
            </Typography>

            <Chip
              label={invoice.invoiceStatus}
              size="small"
              sx={{
                bgcolor:
                  invoice.invoiceStatus === "Sent"
                    ? "#EFF6FF"
                    : invoice.invoiceStatus === "Cancelled"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  invoice.invoiceStatus === "Sent"
                    ? "#3B82F6"
                    : invoice.invoiceStatus === "Cancelled"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={invoice.paymentStatus}
              size="small"
              sx={{
                bgcolor:
                  invoice.paymentStatus === "Paid"
                    ? "#DCFCE7"
                    : invoice.paymentStatus === "Overdue"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  invoice.paymentStatus === "Paid"
                    ? "#15803D"
                    : invoice.paymentStatus === "Overdue"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Invoice Date: {invoice.invoiceDate}
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
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Stack spacing={3}>
              <SideCard title="Invoice Information">
                <InfoLine label="Invoice ID" value={invoice.invoiceId} />
                <InfoLine label="Invoice Number" value={invoice.invoiceNo} />
                <InfoLine label="Order Number" value={invoice.orderNo} />
                <InfoLine label="Invoice Date" value={invoice.invoiceDate} />
                <InfoLine label="Due Date" value={invoice.dueDate} />
                <InfoLine label="Invoice Status" value={invoice.invoiceStatus} />
                <InfoLine label="Payment Status" value={invoice.paymentStatus} />
              </SideCard>

              <SideCard title="Customer Information">
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={invoice.customerName} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={invoice.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={invoice.phone} />
              </SideCard>

              <SideCard title="Product / Item Details">
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  
                  spacing={2}
                  sx={{alignItems:"center", justifyContent:"space-between"}}
                >
                  <Stack direction="row" spacing={2} sx={{alignItems:"center"}}>
                    <Box
                      sx={{
                        width: 90,
                        height: 70,
                        borderRadius: "10px",
                        bgcolor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Inventory2OutlinedIcon sx={{ fontSize: 36, color: "#3B82F6" }} />
                    </Box>

                    <Box>
                      <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                        Product Type: {invoice.productType}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        {invoice.productName}
                      </Typography>

                      <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems:"center" }}>
                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Qty: {invoice.quantity}
                        </Typography>

                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Tax: {invoice.tax}%
                        </Typography>

                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Discount: ₹{invoice.discount}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={3} sx={{alignItems:"center"}}>
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        border: "1px solid #E2E8F0",
                        borderRadius: "10px",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#0F172A",
                      }}
                    >
                      {invoice.quantity} x ₹{invoice.unitPrice}
                    </Box>

                    <Typography sx={{ fontWeight: 700, color: "#0F172A" }}>
                      ₹{invoice.lineTotal}
                    </Typography>
                  </Stack>
                </Stack>
              </SideCard>

              <SideCard title="Payment Summary">
                <SummaryLine label="Subtotal" value={`₹${invoice.subtotal}`} />
                <SummaryLine label="Discount Amount" value={`-₹${invoice.discountAmount}`} />
                <SummaryLine label="Tax Amount" value={`₹${invoice.taxAmount}`} />
                <SummaryLine label="Shipping Charge" value={`₹${invoice.shippingCharge}`} />

                <Divider sx={{ my: 1.5 }} />

                <SummaryLine label="Grand Total" value={`₹${invoice.grandTotal}`} bold />
                <SummaryLine label="Paid Amount" value={`₹${invoice.paidAmount}`} />
                <SummaryLine label="Balance Due" value={`₹${invoice.balanceDue}`} bold />
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={invoice.createdOn} />
                <InfoLine label="Updated Date" value={invoice.updatedDate} />
                <InfoLine label="Created By" value={invoice.createdBy} />
              </SideCard>
            </Stack>
          </Box>

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
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "18px",
                    bgcolor: "#EFF6FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ReceiptLongOutlinedIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {invoice.invoiceNo}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {invoice.customerName} • ₹{invoice.grandTotal}
                </Typography>
              </Card>

              <SideCard title="Invoice Summary">
                <IconLine icon={<ReceiptLongOutlinedIcon />} text={`Invoice ID: ${invoice.invoiceId}`} />
                <IconLine icon={<BadgeOutlinedIcon />} text={`Order No: ${invoice.orderNo}`} />
                <IconLine icon={<CalendarMonthOutlinedIcon />} text={`Due Date: ${invoice.dueDate}`} />
                <IconLine icon={<PaymentsOutlinedIcon />} text={`Payment: ${invoice.paymentStatus}`} />
              </SideCard>

              <SideCard title="Payment Information">
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Method: ${invoice.paymentMethod || "N/A"}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Transaction ID: ${invoice.transactionId || "N/A"}`}
                />
                <IconLine
                  icon={<AccountBalanceWalletOutlinedIcon />}
                  text={`Balance Due: ₹${invoice.balanceDue}`}
                />
              </SideCard>

              <SideCard title="Billing Address">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {invoice.billingAddress}
                </Typography>
              </SideCard>

              <SideCard title="Shipping Address">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {invoice.shippingAddress || "Same as billing address"}
                </Typography>
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {invoice.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

