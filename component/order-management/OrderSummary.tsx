"use client";

import { Order } from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

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

import {
  CustomCard,
  IconLine,
  InfoLine,
  SectionTitle,
  SideCard,
  SummaryLine,
} from "./order-view";

interface OrderViewProps {

  order: Order | null;
}

export default function OrderSummary({
  order,
}: OrderViewProps) {

  if (!order) {

    return (
      <Box
        sx={{
          minHeight: "100vh",

          bgcolor:
            "#F8FAFC",

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",
        }}
      >
        <CustomCard>

          <Typography
            sx={{
              fontWeight: 700,

              color:
                "#64748B",
            }}
          >
            No Order Selected
          </Typography>

        </CustomCard>

      </Box>
    );
  }

  const subtotal =
    order.subtotal ??
    order.totalAmount;

  const discount =
    order.discount ?? 0;

  const tax =
    order.tax ?? 0;

  const shippingCharge =
    order.shippingCharge ?? 0;

  const quantity =
    order.quantity ?? 1;

  const productPrice =
    order.productPrice ??
    order.totalAmount;

  const total =
    order.totalAmount;

  return (
    <Box
      sx={{
        width: "100%",

        minHeight:
          "100vh",
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          px: 3,
        }}
>
        <Box>
        <Link
          href="/orders"
          style={{
            textDecoration:
              "none",
          }}
        >
          <Button
            startIcon={
              <ArrowBackIcon />
            }
            sx={{
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back to Orders
          </Button>
        </Link>
      </Box>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          py: 4,
        }}
      >
        {/* HEADER */}
        <Box sx={{ mb: 4 }}>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems:
                "center",

              flexWrap:
                "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2rem",
                },

                fontWeight:
                  800,

                color:
                  "#2563EB",
              }}
            >
              Order #
              {
                order.orderNo
              }
            </Typography>

            {/* PAYMENT */}
            <Chip
              label={
                order.paymentStatus ??
                "Pending"
              }
              size="small"
              sx={{
                bgcolor:
                  order.paymentStatus ===
                  "Paid"

                    ? "#DCFCE7"

                    : order.paymentStatus ===
                      "Pending"

                    ? "#FEF3C7"

                    : "#FEE2E2",

                color:
                  order.paymentStatus ===
                  "Paid"

                    ? "#15803D"

                    : order.paymentStatus ===
                      "Pending"

                    ? "#B45309"

                    : "#DC2626",

                fontWeight:
                  700,

                borderRadius:
                  "8px",
              }}
            />

            {/* ORDER */}
            <Chip
              label={
                order.status ??
                "Pending"
              }
              size="small"
              sx={{
                bgcolor:
                  order.status ===
                  "Completed"

                    ? "#DCFCE7"

                    : order.status ===
                      "Pending"

                    ? "#DBEAFE"

                    : "#FEE2E2",

                color:
                  order.status ===
                  "Completed"

                    ? "#15803D"

                    : order.status ===
                      "Pending"

                    ? "#2563EB"

                    : "#DC2626",

                fontWeight:
                  700,

                borderRadius:
                  "8px",
              }}
            />

          </Stack>

          <Typography
            sx={{
              mt: 1,

              color:
                "#64748B",

              fontSize:
                14,
            }}
          >
            Order Date:
            {" "}
            {
              order.orderDate
            }
          </Typography>

        </Box>

        {/* MAIN */}
        <Box
          sx={{
            display:
              "flex",

            gap: 3,

            alignItems:
              "flex-start",

            flexDirection:
              {
                xs: "column",
                lg: "row",
              },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
            }}
          >
            <Stack spacing={2.5}>

              {/* ORDER INFO */}
              <CustomCard>

                <SectionTitle
                  title="Order Information"
                />

                <Stack>

                  <InfoLine
                    label="Order Number"
                    value={
                      order.orderNo
                    }
                  />

                  <InfoLine
                    label="Order Date"
                    value={
                      order.orderDate
                    }
                  />

                  <InfoLine
                    label="Order Status"
                    value={
                      order.status
                    }
                  />

                  <InfoLine
                    label="Payment Status"
                    value={
                      order.paymentStatus
                    }
                  />

                  <InfoLine
                    label="Delivery Status"
                    value={
                      order.deliveryStatus
                    }
                  />

                  <InfoLine
                    label="Order Source"
                    value={
                      order.orderSource
                    }
                  />

                </Stack>

              </CustomCard>

              {/* PRODUCT */}
              <CustomCard>

                <SectionTitle
                  title="Product Details"
                />

                <Stack
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  spacing={2}
                  sx={{
                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",
                  }}
                >
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
                        width: 90,

                        height: 70,

                        borderRadius:
                          "10px",

                        bgcolor:
                          "#F8FAFC",

                        border:
                          "1px solid #E2E8F0",

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",
                      }}
                    >
                      <Inventory2OutlinedIcon
                        sx={{
                          fontSize:
                            36,

                          color:
                            "#3B82F6",
                        }}
                      />

                    </Box>

                    <Box>

                      <Typography
                        sx={{
                          color:
                            "#64748B",

                          fontSize:
                            14,
                        }}
                      >
                        Product Type:
                        {" "}
                        {
                          order.productType
                        }
                      </Typography>

                      <Typography
                        sx={{
                          fontSize:
                            20,

                          fontWeight:
                            700,

                          color:
                            "#0F172A",
                        }}
                      >
                        {
                          order.productName
                        }
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "#64748B",

                          fontSize:
                            14,

                          mt: 1,
                        }}
                      >
                        SKU:
                        {" "}
                        {
                          order.productSku
                        }
                        {" | "}
                        Variant:
                        {" "}
                        {
                          order.productVariant
                        }
                      </Typography>

                    </Box>

                  </Stack>

                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                      alignItems:
                        "center",
                    }}
                  >
                    <Box
                      sx={{
                        px: 2,

                        py: 1,

                        border:
                          "1px solid #E2E8F0",

                        borderRadius:
                          "10px",

                        fontWeight:
                          600,

                        fontSize:
                          14,
                      }}
                    >
                      {
                        quantity
                      }
                      {" x ₹"}
                      {
                        productPrice.toLocaleString()
                      }
                    </Box>

                    <Typography
                      sx={{
                        fontWeight:
                          700,

                        fontSize:
                          18,
                      }}
                    >
                      ₹
                      {
                        total.toLocaleString()
                      }
                    </Typography>

                  </Stack>

                </Stack>

              </CustomCard>

              {/* PAYMENT */}
              <CustomCard>

                <SectionTitle
                  title="Payment Summary"
                />

                <Stack spacing={1.8}>

                  <SummaryLine
                    label="Subtotal"
                    middle={`${quantity} item`}
                    value={`₹${subtotal.toLocaleString()}`}
                  />

                  <SummaryLine
                    label="Discount"
                    middle="Applied"
                    value={`-₹${discount.toLocaleString()}`}
                    valueColor="#DC2626"
                  />

                  <SummaryLine
                    label="Tax"
                    middle="GST"
                    value={`₹${tax.toLocaleString()}`}
                  />

                  <SummaryLine
                    label="Shipping"
                    middle="Delivery"
                    value={`₹${shippingCharge.toLocaleString()}`}
                  />

                  <SummaryLine
                    label="Total Amount"
                    value={`₹${total.toLocaleString()}`}
                    bold
                    valueColor="#2563EB"
                  />

                </Stack>

                <Divider
                  sx={{
                    my: 3,
                  }}
                />

                <Stack spacing={1.8}>

                  <SummaryLine
                    label="Payment Method"
                    value={
                      order.paymentMethod
                    }
                  />

                  <SummaryLine
                    label="Transaction ID"
                    value={
                      order.transactionId
                    }
                  />

                  <SummaryLine
                    label="Paid Amount"
                    value={`₹${order.paidAmount?.toLocaleString()}`}
                  />

                  <SummaryLine
                    label="Payment Due"
                    value={`₹${order.paymentDue?.toLocaleString()}`}
                    valueColor="#DC2626"
                  />

                </Stack>

              </CustomCard>

              {/* SHIPPING */}
              <CustomCard>

                <SectionTitle
                  title="Shipping Information"
                />

                <Stack>

                  <InfoLine
                    label="Shipping Partner"
                    value={
                      order.shippingPartner
                    }
                  />

                  <InfoLine
                    label="Tracking Number"
                    value={
                      order.trackingNo
                    }
                  />

                  <InfoLine
                    label="Estimated Delivery"
                    value={
                      order.estimatedDeliveryDate
                    }
                  />

                </Stack>

              </CustomCard>

            </Stack>

          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "40%",
              },

              position: {
                lg: "sticky",
              },

              top: 24,

              alignSelf:
                "flex-start",
            }}
          >
            <Stack spacing={2.5}>

              {/* CUSTOMER */}
              <SideCard
                title="Customer Details"
              >
                <IconLine
                  icon={
                    <PersonOutlineOutlinedIcon />
                  }
                  text={
                    order.customerName
                  }
                />

                <IconLine
                  icon={
                    <MailOutlineOutlinedIcon />
                  }
                  text={
                    order.email
                  }
                />

                <IconLine
                  icon={
                    <PhoneOutlinedIcon />
                  }
                  text={
                    order.phone
                  }
                />

              </SideCard>

              {/* SALES */}
              <SideCard
                title="Sales Information"
              >
                <IconLine
                  icon={
                    <BadgeOutlinedIcon />
                  }
                  text={
                    order.salesPerson
                  }
                />

                <IconLine
                  icon={
                    <ReceiptLongOutlinedIcon />
                  }
                  text={
                    order.orderSource
                  }
                />

              </SideCard>

              {/* SHIPPING ADDRESS */}
              <SideCard
                title="Shipping Address"
              >
                <Typography
                  sx={{
                    color:
                      "#475569",

                    lineHeight:
                      1.8,
                  }}
                >
                  {
                    order.shippingAddress
                  }
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 2,

                    alignItems:
                      "center",
                  }}
                >
                  <LocalShippingOutlinedIcon
                    sx={{
                      color:
                        "#2563EB",

                      fontSize:
                        18,
                    }}
                  />

                  <Typography
                    sx={{
                      color:
                        "#2563EB",

                      fontWeight:
                        600,
                    }}
                  >
                    Live Tracking
                  </Typography>

                </Stack>

              </SideCard>

              {/* BILLING */}
              <SideCard
                title="Billing Address"
              >
                <Typography
                  sx={{
                    color:
                      "#475569",

                    lineHeight:
                      1.8,
                  }}
                >
                  {
                    order.billingAddress
                  }
                </Typography>

              </SideCard>

              {/* NOTES */}
              <SideCard
                title="Notes"
              >
                <Typography
                  sx={{
                    color:
                      "#475569",

                    lineHeight:
                      1.8,
                  }}
                >
                  {
                    order.notes
                  }
                </Typography>

              </SideCard>

            </Stack>

          </Box>

        </Box>

      </Container>

    </Box>
  );
}