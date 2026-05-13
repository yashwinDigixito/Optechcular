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
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

import { purchaseOrders } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, SummaryLine } from "../common/ViewPage";

export default async function PurchaseOrderViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const purchase = purchaseOrders.find((item) => item.id === id);

  if (!purchase) {
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
            Purchase order not found
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
          <Link href="/purchases" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Purchase Orders
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems:"center",flexWrap:"wrap"}}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Purchase Order: {purchase.purchaseNo}
            </Typography>

            <Chip
              label={purchase.purchaseStatus ?? purchase.status}
              size="small"
              sx={{
                bgcolor:
                  purchase.purchaseStatus === "Received"
                    ? "#DCFCE7"
                    : purchase.purchaseStatus === "Cancelled"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  purchase.purchaseStatus === "Received"
                    ? "#15803D"
                    : purchase.purchaseStatus === "Cancelled"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={purchase.paymentStatus}
              size="small"
              sx={{
                bgcolor:
                  purchase.paymentStatus === "Paid"
                    ? "#DCFCE7"
                    : purchase.paymentStatus === "Overdue"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  purchase.paymentStatus === "Paid"
                    ? "#15803D"
                    : purchase.paymentStatus === "Overdue"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
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
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
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
                <IconLine icon={<BusinessOutlinedIcon />} text={purchase.vendorName ?? purchase.supplierName} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={purchase.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={purchase.mobile ?? purchase.phone} />
                <InfoLine label="GST Number" value={purchase.gstNumber} />
                <InfoLine label="Billing Address" value={purchase.billingAddress} />
              </SideCard>

              <SideCard title="Product Details">
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  
                  spacing={2}
                  sx={{alignItems:"center", justifyContent:"center"}}
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
                        Product Type: {purchase.productType}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        {purchase.productName}
                      </Typography>

                      <Stack direction="row" spacing={1}  sx={{ mt: 1, flexWrap: "wrap", alignItems:"center" }}>
                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Brand: {purchase.brand || "N/A"}
                        </Typography>

                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Barcode: {purchase.barcode || "N/A"}
                        </Typography>

                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Details: {purchase.selectProductDetails || "N/A"}
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
                      {purchase.quantity} x ₹{purchase.unitCost}
                    </Box>

                    <Typography sx={{ fontWeight: 700, color: "#0F172A" }}>
                      ₹{purchase.lineTotal}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack sx={{ mt: 2 }}>
                  <InfoLine label="Total Quantity" value={purchase.totalQty ?? purchase.quantity} />
                  <InfoLine label="Subtopic" value={purchase.subtopic} />
                  <InfoLine label="Tax" value={`${purchase.tax}%`} />
                  <InfoLine label="Discount" value={`₹${purchase.discount}`} />
                </Stack>
              </SideCard>

              <SideCard title="Payment Summary">
                <SummaryLine label="Subtotal" value={`₹${purchase.subtotal}`} />
                <SummaryLine label="Discount Amount" value={`-₹${purchase.discountAmount}`} />
                <SummaryLine label="Tax Amount" value={`₹${purchase.taxAmount}`} />
                <SummaryLine label="Shipping Charge" value={`₹${purchase.shippingCharge}`} />

                <Divider sx={{ my: 1.5 }} />

                <SummaryLine label="Grand Total" value={`₹${purchase.grandTotal}`} bold />
                <SummaryLine label="Paid Amount" value={`₹${purchase.paidAmount}`} />
                <SummaryLine label="Balance Due" value={`₹${purchase.balanceDue}`} bold />
              </SideCard>

              <SideCard title="Inventory Information">
                <InfoLine label="Warehouse Location" value={purchase.warehouseLocation} />
                <InfoLine label="Received Quantity" value={purchase.receivedQuantity} />
                <InfoLine label="Pending Quantity" value={purchase.pendingQuantity} />
                <InfoLine label="Received Date" value={purchase.receivedDate || "N/A"} />
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={purchase.createdOn} />
                <InfoLine label="Updated Date" value={purchase.updatedDate} />
                <InfoLine label="Created By" value={purchase.createdBy} />
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
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {purchase.purchaseNo}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {purchase.vendorName ?? purchase.supplierName} • ₹{purchase.grandTotal}
                </Typography>
              </Card>

              <SideCard title="Purchase Summary">
                <IconLine icon={<ShoppingCartOutlinedIcon />} text={`PO No: ${purchase.purchaseNo}`} />
                <IconLine icon={<BadgeOutlinedIcon />} text={`Reference No: ${purchase.referenceNo || "N/A"}`} />
                <IconLine icon={<CalendarMonthOutlinedIcon />} text={`Due Date: ${purchase.dueDate}`} />
                <IconLine icon={<PaymentsOutlinedIcon />} text={`Payment: ${purchase.paymentStatus}`} />
              </SideCard>

              <SideCard title="Vendor Summary">
                <IconLine icon={<BusinessOutlinedIcon />} text={purchase.vendorName ?? purchase.supplierName} />
                <IconLine icon={<PhoneOutlinedIcon />} text={purchase.mobile ?? purchase.phone} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={purchase.email} />
              </SideCard>

              <SideCard title="Payment Information">
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Method: ${purchase.paymentMethod || "N/A"}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Transaction ID: ${purchase.transactionId || "N/A"}`}
                />
                <IconLine
                  icon={<AccountBalanceWalletOutlinedIcon />}
                  text={`Balance Due: ₹${purchase.balanceDue}`}
                />
              </SideCard>

              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<WarehouseOutlinedIcon />}
                  text={purchase.warehouseLocation || "N/A"}
                />
                <IconLine
                  icon={<LocalShippingOutlinedIcon />}
                  text={`Received Qty: ${purchase.receivedQuantity ?? 0}`}
                />
                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Pending Qty: ${purchase.pendingQuantity ?? 0}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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

