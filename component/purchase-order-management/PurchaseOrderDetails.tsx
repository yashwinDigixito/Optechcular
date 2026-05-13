"use client";

import {
  PurchaseOrder,
} from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

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

  purchaseOrder:
    PurchaseOrder;
}

export default function PurchaseOrderDetails({
  purchaseOrder,
}: Props) {

  return (
    <Box
      sx={{
        minHeight:
          "100vh",
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          p: 3,
        }}
      >
        <Box sx={{ mb: 3 }}>
        <Link
          href="/purchase-orders"
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
            Back to Purchase Orders
          </Button>
        </Link>
      </Box>
      </Box>

      <Container
        maxWidth="xl"
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
                purchaseOrder.poNumber
              }
            </Typography>

            {/* PAYMENT */}
            <Chip
              label={
                purchaseOrder.paymentStatus
              }
              sx={{
                bgcolor:
                  purchaseOrder.paymentStatus ===
                  "Paid"

                    ? "#DCFCE7"

                    : purchaseOrder.paymentStatus ===
                      "Pending"

                    ? "#FEF3C7"

                    : "#DBEAFE",

                color:
                  purchaseOrder.paymentStatus ===
                  "Paid"

                    ? "#15803D"

                    : purchaseOrder.paymentStatus ===
                      "Pending"

                    ? "#B45309"

                    : "#2563EB",

                fontWeight:
                  700,
              }}
            />

            {/* STATUS */}
            <Chip
              label={
                purchaseOrder.poStatus
              }
              sx={{
                bgcolor:
                  purchaseOrder.poStatus ===
                  "Delivered"

                    ? "#DCFCE7"

                    : purchaseOrder.poStatus ===
                      "Processing"

                    ? "#DBEAFE"

                    : "#FEF3C7",

                color:
                  purchaseOrder.poStatus ===
                  "Delivered"

                    ? "#15803D"

                    : purchaseOrder.poStatus ===
                      "Processing"

                    ? "#2563EB"

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
            Order Date:
            {" "}
            {
              purchaseOrder.orderDate
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

              {/* PRODUCT */}
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
                  Product Information
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                >
                  <Box
                    sx={{
                      width: 90,

                      height: 70,

                      borderRadius:
                        "12px",

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
                        fontSize:
                          "22px",

                        fontWeight:
                          700,
                      }}
                    >
                      {
                        purchaseOrder.productName
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#64748B",

                        mt: 1,
                      }}
                    >
                      SKU:
                      {" "}
                      {
                        purchaseOrder.productSku
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#64748B",

                        mt: 1,
                      }}
                    >
                      Category:
                      {" "}
                      {
                        purchaseOrder.category
                      }
                    </Typography>

                  </Box>

                </Stack>

              </Box>

              {/* PAYMENT */}
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
                  Payment Summary
                </Typography>

                <Stack spacing={2}>

                  <SummaryRow
                    label="Quantity"
                    value={
                      purchaseOrder.quantity
                    }
                  />

                  <SummaryRow
                    label="Unit Price"
                    value={`₹${purchaseOrder.unitPrice.toLocaleString()}`}
                  />

                  <SummaryRow
                    label="Tax"
                    value={`₹${purchaseOrder.tax.toLocaleString()}`}
                  />

                  <SummaryRow
                    label="Discount"
                    value={`₹${purchaseOrder.discount.toLocaleString()}`}
                  />

                  <Divider />

                  <SummaryRow
                    label="Total Amount"
                    value={`₹${purchaseOrder.totalAmount.toLocaleString()}`}
                    bold
                  />

                </Stack>

              </Box>

            </Stack>

          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "360px",
              },
            }}
          >
            <Stack spacing={3}>

              {/* VENDOR */}
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
                  Vendor Information
                </Typography>

                <Stack spacing={2}>

                  <InfoRow
                    icon={
                      <MailOutlineOutlinedIcon />
                    }
                    text={
                      purchaseOrder.vendorEmail
                    }
                  />

                  <InfoRow
                    icon={
                      <PhoneOutlinedIcon />
                    }
                    text={
                      purchaseOrder.vendorPhone
                    }
                  />

                </Stack>

              </Box>

              {/* DELIVERY */}
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
                  Delivery
                </Typography>

                <Stack spacing={2}>

                  <InfoRow
                    icon={
                      <LocalShippingOutlinedIcon />
                    }
                    text={`Expected Delivery: ${purchaseOrder.expectedDelivery}`}
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
                    purchaseOrder.notes
                  }
                </Typography>

              </Box>

            </Stack>

          </Box>

        </Box>

      </Container>

    </Box>
  );
}

function SummaryRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: string | number;
  bold?: boolean;
}) {

  return (
    <Box
      sx={{
        display:
          "flex",

        justifyContent:
          "space-between",
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
            bold ? 700 : 600,
        }}
      >
        {value}
      </Typography>

    </Box>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {

  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        alignItems:
          "center",
      }}
    >
      {icon}

      <Typography
        sx={{
          color:
            "#475569",
        }}
      >
        {text}
      </Typography>

    </Stack>
  );
}