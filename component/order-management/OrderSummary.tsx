"use client";

import React from "react";
import Link from "next/link";
import { Order } from "@/assets/types";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { 
  themeConfig, 
  FONT_FAMILY, 
  FONT_SIZE, 
  FONT_WEIGHT 
} from "@/assets/constants";

import CustomCard, { 
  InfoLine, 
  SectionTitle, 
  SideCard, 
  IconLine, 
  SummaryLine, 
  getFadeInStyle, 
  DataNotFound
} from "../common/ViewPage";
import StatusChip from "../common/StatusChip";

interface OrderViewProps {
  order: Order | null;
}


export default function OrderSummary({ order }: OrderViewProps) {
  const { colors, borderRadius } = themeConfig;

  if (!order) {
    return (
       <DataNotFound message="Order record not found" />
    );
  }

  // Calculated values with fallbacks
  const subtotal = order.subtotal ?? order.totalAmount;
  const discount = order.discount ?? 0;
  const tax = order.tax ?? 0;
  const shippingCharge = order.shippingCharge ?? 0;
  const quantity = order.quantity ?? 1;
  const productPrice = order.productPrice ?? order.totalAmount;
  const total = order.totalAmount;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: colors.bgLight,
      }}
    >
      {/* Navigation Header */}
      <Box sx={{ px: 3, pt: 1, ...getFadeInStyle(0.1) }}>
        <Link href="/orders" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: FONT_WEIGHT.MEDIUM,
              fontFamily: FONT_FAMILY.BUTTON,
              fontSize: FONT_SIZE.BODY,
              color: colors.primary,
            }}
          >
            Back to Orders
          </Button>
        </Link>
      </Box>

      <Container maxWidth="xl" sx={{ py: 1}}>
        {/* Header Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", flexWrap: "wrap" }}
          >
            <Typography
              sx={{
                fontSize: FONT_SIZE.PAGE_HEADING,
                fontWeight: FONT_WEIGHT.BOLD,
                fontFamily: FONT_FAMILY.HEADING,
                color: colors.textMain,
              }}
            >
              Order #{order.orderNo}
            </Typography>

            <StatusChip status={order.paymentStatus ?? "Pending"} />
            <StatusChip status={order.status ?? "Pending"} />
          </Stack>
          <Typography
            sx={{
              mt: 1,
              color: colors.textSecondary,
               fontSize: FONT_SIZE.BODY,
                            fontFamily: FONT_FAMILY.SUB_HEADING,
                            fontWeight: FONT_WEIGHT.BOLD
            }}
          >
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
          {/* Main Content (Left) */}
          <Box
            sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}
          >
            <Stack spacing={3}>
              <CustomCard>
                <SectionTitle title="Order Information" />
                <Stack>
                  <InfoLine label="Order Number" value={order.orderNo} />
                  <InfoLine label="Order Source" value={order.orderSource} />
                  <InfoLine label="Delivery Status" value={order.deliveryStatus} />
                </Stack>
              </CustomCard>

              <CustomCard>
                <SectionTitle title="Product Details" />
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: borderRadius.medium,
                        bgcolor: colors.white,
                        border: `1px solid ${colors.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Inventory2OutlinedIcon
                        sx={{ fontSize: 36, color: colors.primary }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ 
                          color: colors.textSecondary, 
                          fontSize: FONT_SIZE.SMALL,
                          fontFamily: FONT_FAMILY.BODY 
                        }}
                      >
                        {order.productType}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: FONT_SIZE.CARD_HEADING,
                          fontWeight: FONT_WEIGHT.BOLD,
                          fontFamily: FONT_FAMILY.HEADING,
                          color: colors.textMain,
                        }}
                      >
                        {order.productName}
                      </Typography>
                      <Typography
                        sx={{ 
                          color: colors.textSecondary, 
                          fontSize: 12, 
                          mt: 0.5,
                          fontFamily: FONT_FAMILY.BODY 
                        }}
                      >
                        SKU: {order.productSku} | Variant: {order.productVariant}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        px: 2,
                        py: 0.5,
                        border: `1px solid ${colors.border}`,
                        borderRadius: borderRadius.small,
                        fontWeight: FONT_WEIGHT.SEMI_BOLD,
                        fontSize: FONT_SIZE.SMALL,
                        fontFamily: FONT_FAMILY.BODY,
                        bgcolor: colors.bgLight,
                      }}
                    >
                      {quantity} x ₹{productPrice.toLocaleString()}
                    </Box>
                    <Typography 
                      sx={{ 
                        fontWeight: FONT_WEIGHT.BOLD, 
                        fontSize: FONT_SIZE.CARD_HEADING,
                        fontFamily: FONT_FAMILY.HEADING 
                      }}
                    >
                      ₹{total.toLocaleString()}
                    </Typography>
                  </Stack>
                </Stack>
              </CustomCard>

              <CustomCard>
                <SectionTitle title="Payment Summary" />
                <Stack spacing={1.8}>
                  <SummaryLine
                    label="Subtotal"
                    middle={`${quantity} item(s)`}
                    value={`₹${subtotal.toLocaleString()}`}
                  />
                  <SummaryLine
                    label="Discount"
                    middle="Applied Promotion"
                    value={`-₹${discount.toLocaleString()}`}
                    valueColor={colors.error}
                  />
                  <SummaryLine
                    label="Tax"
                    middle="GST Included"
                    value={`₹${tax.toLocaleString()}`}
                  />
                  <SummaryLine
                    label="Shipping"
                    middle="Standard Delivery"
                    value={`₹${shippingCharge.toLocaleString()}`}
                  />
                  <Divider sx={{ my: 1 }} />
                  <SummaryLine
                    label="Total Amount"
                    value={`₹${total.toLocaleString()}`}
                    bold
                    valueColor={colors.primary}
                  />
                </Stack>
                <Divider sx={{ my: 3 }} />
                <Stack spacing={1.8}>
                  <SummaryLine label="Payment Method" value={order.paymentMethod || "N/A"} />
                  <SummaryLine label="Transaction ID" value={order.transactionId || "N/A"} />
                  <SummaryLine
                    label="Paid Amount"
                    value={`₹${order.paidAmount?.toLocaleString() || "N/A"}`}
                  />
                  <SummaryLine
                    label="Payment Due"
                    value={`₹${order.paymentDue?.toLocaleString() || "N/A"}`}
                    valueColor={colors.error}
                  />
                </Stack>
              </CustomCard>

              <CustomCard>
                <SectionTitle title="Shipping Information" />
                <Stack>
                  <InfoLine label="Shipping Partner" value={order.shippingPartner} />
                  <InfoLine label="Tracking Number" value={order.trackingNo} />
                  <InfoLine
                    label="Estimated Delivery"
                    value={order.estimatedDeliveryDate}
                  />
                </Stack>
              </CustomCard>
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
              <SideCard title="Customer Details">
                <IconLine
                  icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />}
                  text={order.customerName}
                />
                <IconLine
                  icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />}
                  text={order.email}
                />
                <IconLine
                  icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />}
                  text={order.phone}
                />
              </SideCard>

              <SideCard title="Sales Information">
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Rep: ${order.salesPerson}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Channel: ${order.orderSource}`}
                />
              </SideCard>

              <SideCard title="Shipping Address">
                <Typography 
                  sx={{ 
                    color: colors.textSecondary, 
                    lineHeight: 1.8,
                    fontSize: FONT_SIZE.BODY,
                    fontFamily: FONT_FAMILY.BODY 
                  }}
                >
                  {order.shippingAddress}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems: "center" }}>
                  <LocalShippingOutlinedIcon
                    sx={{ color: colors.primary, fontSize: 18 }}
                  />
                  <Typography 
                    sx={{ 
                      color: colors.primary, 
                      fontWeight: FONT_WEIGHT.BOLD,
                      fontFamily: FONT_FAMILY.BODY,
                      fontSize: FONT_SIZE.SMALL 
                    }}
                  >
                    Live Tracking Available
                  </Typography>
                </Stack>
              </SideCard>

              <SideCard title="Internal Notes">
                <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: FONT_SIZE.SMALL,
                    fontFamily: FONT_FAMILY.BODY,
                    lineHeight: 1.7,
                  }}
                >
                  {order.notes || "No additional notes provided for this order."}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}