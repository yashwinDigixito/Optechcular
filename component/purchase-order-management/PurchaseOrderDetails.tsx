import {
    Box,
    Button,
    Card,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";



import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


import { themeConfig } from "@/assets/constants";
import { purchaseOrders } from "@/assets/genericdata";
import { getFadeInStyle, IconLine, InfoLine, SideCard, SummaryLine } from "../common/ViewPage";

export default async function PurchaseOrderViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const purchase = purchaseOrders.find((item) => item.id === id);
  
  const { colors, typography, borderRadius } = themeConfig;

  if (!purchase) {
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
            Purchase order not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
     
      <Box sx={getFadeInStyle(0.1)}>
        <Container maxWidth="xl">
          <Box sx={{ pt: 2 }}>
            <Link href="/purchase-orders" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ textTransform: "none", fontWeight: typography.fontWeight.medium, color: colors.primary }}
              >
                Back
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 2 }}>
        {/* Title & Chips Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", flexWrap: "wrap" }}
          >
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: typography.fontSize.h3 },
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Purchase Order: {purchase.purchaseNo}
            </Typography>

            <Chip
              label={purchase.purchaseStatus ?? purchase.status}
              size="small"
              sx={{
                bgcolor: purchase.purchaseStatus === "Received" ? colors.successBg : purchase.purchaseStatus === "Cancelled" ? colors.errorBg : colors.warningBg,
                color: purchase.purchaseStatus === "Received" ? colors.success : purchase.purchaseStatus === "Cancelled" ? colors.error : colors.warning,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />

            <Chip
              label={purchase.paymentStatus}
              size="small"
              sx={{
                bgcolor: purchase.paymentStatus === "Paid" ? colors.successBg : purchase.paymentStatus === "Overdue" ? colors.errorBg : colors.warningBg,
                color: purchase.paymentStatus === "Paid" ? colors.success : purchase.paymentStatus === "Overdue" ? colors.error : colors.warning,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            PO Date: {purchase.poDate ?? purchase.purchaseDate}
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
          {/* LEFT SECTION */}
          <Box 
            sx={{ 
              width: { xs: "100%", lg: "60%" },
              ...getFadeInStyle(0.3)
            }}
          >
            <Stack spacing={3}>
              <SideCard title="Purchase Order Information">
                <InfoLine label="Purchase ID" value={purchase.purchaseId} />
                <InfoLine label="PO Number" value={purchase.purchaseNo} />
                <InfoLine label="Supplier Invoice No" value={purchase.supplierInvoiceNo} />
                <InfoLine label="Reference No" value={purchase.referenceNo} />
                <InfoLine label="PO Date" value={purchase.poDate ?? purchase.purchaseDate} />
                <InfoLine label="Due Date" value={purchase.dueDate} />
                <InfoLine label="Purchase Status" value={purchase.purchaseStatus ?? purchase.status} />
                <InfoLine label="Payment Status" value={purchase.paymentStatus} />
              </SideCard>

              <SideCard title="Vendor / Supplier Information">
                <IconLine icon={<BusinessOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.vendorName ?? purchase.supplierName} />
                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.email} />
                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.mobile ?? purchase.phone} />
                <InfoLine label="GST Number" value={purchase.gstNumber} />
                <InfoLine label="Billing Address" value={purchase.billingAddress} />
              </SideCard>

              <SideCard title="Product Details">
                <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Box sx={{ width: 90, height: 70, borderRadius: borderRadius.medium, bgcolor: colors.bgLight, border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Inventory2OutlinedIcon sx={{ fontSize: 36, color: colors.primary }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small }}>Product Type: {purchase.productType}</Typography>
                      <Typography sx={{ fontSize: 20, fontWeight: typography.fontWeight.bold, color: colors.textMain }}>{purchase.productName}</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                    <Box sx={{ px: 2, py: 1, border: `1px solid ${colors.border}`, borderRadius: borderRadius.medium, fontWeight: typography.fontWeight.medium, fontSize: typography.fontSize.small, color: colors.textMain }}>
                      {purchase.quantity} x ₹{purchase.unitCost}
                    </Box>
                    <Typography sx={{ fontWeight: typography.fontWeight.bold, color: colors.textMain }}>₹{purchase.lineTotal}</Typography>
                  </Stack>
                </Stack>
              </SideCard>

              <SideCard title="Payment Summary">
                <SummaryLine label="Subtotal" value={`₹${purchase.subtotal}`} />
                <SummaryLine label="Grand Total" value={`₹${purchase.grandTotal}`} bold />
                <SummaryLine label="Balance Due" value={`₹${purchase.balanceDue}`} bold />
              </SideCard>
            </Stack>
          </Box>

          {/* RIGHT SECTION (Sticky) */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: { lg: "sticky" },
              top: 24,
              ...getFadeInStyle(0.4)
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
                <Box sx={{ width: 90, height: 90, mx: "auto", mb: 2, borderRadius: borderRadius.xl, bgcolor: colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {purchase.purchaseNo}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {purchase.vendorName ?? purchase.supplierName} • ₹{purchase.grandTotal}
                </Typography>
              </Card>

              <SideCard title="Purchase Summary">
                <IconLine icon={<ShoppingCartOutlinedIcon sx={{ color: colors.primary }} />} text={`PO No: ${purchase.purchaseNo}`} />
                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Due Date: ${purchase.dueDate}`} />
                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Payment: ${purchase.paymentStatus}`} />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textMuted, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {purchase.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}