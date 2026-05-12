"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

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

import { Order } from "@/assets/types";
import { IconLine, InfoLine, SectionTitle, SideCard, SummaryLine } from "../common/ViewPage";

interface OrderViewProps {
  order: Order | null;
}

export default function OrderView({ order }: OrderViewProps) {
  if (!order) {
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
          <Typography sx={{ fontWeight: 700, color: "#64748B" }}>
            No Order Selected
          </Typography>
        </Card>
      </Box>
    );
  }

  const subtotal = order.subtotal ?? order.totalAmount;
  const discount = order.discount ?? 0;
  const tax = order.tax ?? 0;
  const shippingCharge = order.shippingCharge ?? 0;
  const quantity = order.quantity ?? 1;
  const productPrice = order.productPrice ?? order.totalAmount;
  const total = order.totalAmount;

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
      
      >
        <Container maxWidth="xl">
          <Link href="/orders" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Orders
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
              Order ID: {order.orderNo}
            </Typography>

            <Chip
              label={order.paymentStatus ?? "Payment pending"}
              size="small"
              sx={{
                bgcolor: "#FEF3C7",
                color: "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={order.status ?? "Pending"}
              size="small"
              sx={{
                bgcolor:
                  order.status === "Completed" || order.status === "Active"
                    ? "#DCFCE7"
                    : "#FEE2E2",
                color:
                  order.status === "Completed" || order.status === "Active"
                    ? "#15803D"
                    : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Order Date: {order.orderDate}
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
              <Card
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                }}
              >
                <SectionTitle title="Order Information" />

                <Stack sx={{ mt: 1 }}>
                  <InfoLine label="Order Number" value={order.orderNo} />
                  <InfoLine label="Order Date" value={order.orderDate} />
                  <InfoLine label="Order Status" value={order.status ?? "Pending"} />
                  <InfoLine
                    label="Payment Status"
                    value={order.paymentStatus ?? "Payment pending"}
                  />
                  <InfoLine
                    label="Delivery Status"
                    value={order.deliveryStatus ?? "Not shipped"}
                  />
                  <InfoLine
                    label="Order Source"
                    value={order.orderSource ?? "Draft Orders"}
                  />
                </Stack>
              </Card>

              <Card
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                }}
              >
                <SectionTitle title="Product Details" />

                <Stack
                  direction={{ xs: "column", md: "row" }}
                
                  spacing={2}
                  sx={{justifyContent: "space-between", alignItems:"center"}}
                >
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
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
                        Product Type: {order.productType}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        {order.productName ?? order.productType}
                      </Typography>

                      <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems:"center" }}>
                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          SKU: {order.productSku ?? "N/A"}
                        </Typography>

                        <Typography sx={{ color: "#64748B", fontSize: 14 }}>
                          Variant: {order.productVariant ?? "Default"}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
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
                      {quantity} x ₹{productPrice}
                    </Box>

                    <Typography sx={{ fontWeight: 700, color: "#0F172A" }}>
                      ₹{total}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>

              <Card
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                }}
              >
                <SectionTitle title="Payment Summary" />

                <Stack spacing={1.8}>
                  <SummaryLine label="Subtotal" middle={`${quantity} item`} value={`₹${subtotal}`} />
                  <SummaryLine label="Discount" middle="Applied discount" value={`-₹${discount}`} />
                  <SummaryLine label="Tax" middle="Tax amount" value={`₹${tax}`} />
                  <SummaryLine
                    label="Shipping Charge"
                    middle="Shipping"
                    value={`₹${shippingCharge}`}
                  />
                  <SummaryLine label="Total Amount" value={`₹${total}`} bold />
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Stack spacing={1.8}>
                  <SummaryLine
                    label="Payment Method"
                    value={order.paymentMethod ?? "N/A"}
                  />
                  <SummaryLine
                    label="Transaction ID"
                    value={order.transactionId ?? "N/A"}
                  />
                  <SummaryLine
                    label="Paid by Customer"
                    value={order.paidAmount ? `₹${order.paidAmount}` : "₹0.00"}
                  />
                  <SummaryLine
                    label="Payment Due"
                    value={order.paymentDue ? `₹${order.paymentDue}` : "Pending"}
                  />
                </Stack>
              </Card>

              <Card
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                }}
              >
                <SectionTitle title="Shipping Information" />

                <Stack sx={{ mt: 1 }}>
                  <InfoLine
                    label="Shipping Partner"
                    value={order.shippingPartner ?? "N/A"}
                  />
                  <InfoLine
                    label="Tracking Number"
                    value={order.trackingNo ?? "N/A"}
                  />
                  <InfoLine
                    label="Estimated Delivery"
                    value={order.estimatedDeliveryDate ?? "N/A"}
                  />
                </Stack>
              </Card>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
            <Stack spacing={3}>
              <SideCard title="Customer Details">
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={order.customerName} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={order.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={order.phone ?? "No phone number"} />
              </SideCard>

              <SideCard title="Sales Information">
                <IconLine icon={<BadgeOutlinedIcon />} text={order.salesPerson ?? "N/A"} />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Order Source: ${order.orderSource ?? "Draft Orders"}`}
                />
              </SideCard>

              <SideCard title="Shipping Address">
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={order.customerName} />

                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7, mt: 1 }}>
                  {order.shippingAddress || "No Address Available"}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems:"center" }}>
                  <LocalShippingOutlinedIcon sx={{ color: "#3B82F6", fontSize: 18 }} />
                  <Typography sx={{ color: "#3B82F6", fontWeight: 600 }}>
                    View Map
                  </Typography>
                </Stack>
              </SideCard>

              <SideCard title="Billing Address">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {order.billingAddress || "Same as shipping address"}
                </Typography>
              </SideCard>

              <SideCard title="Payment Information">
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Method: ${order.paymentMethod ?? "N/A"}`}
                />

                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7, mt: 1 }}>
                  Transaction ID: {order.transactionId ?? "N/A"}
                </Typography>
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {order.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

