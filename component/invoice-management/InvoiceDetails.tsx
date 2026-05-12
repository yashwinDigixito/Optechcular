"use client";

import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

import {
    Box,
    Button,
    Card,
    Chip,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import { Invoice } from "@/assets/types";

interface Props {

  invoice: Invoice;
}

export default function InvoiceDetails({
  invoice,
}: Props) {

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",

        background:
          "#F8FAFC",
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 4,

          flexWrap: "wrap",

          gap: 2,
        }}
      >
        {/* LEFT */}
        <Box>

          <Link
            href="/invoices"
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
                mb: 2,

                textTransform:
                  "none",
              }}
            >
              Back to Invoices
            </Button>
          </Link>

          <Typography
            sx={{
              fontSize:
                "32px",

              fontWeight: 700,

              color:
                "#0F172A",
            }}
          >
            {
              invoice.invoiceNo
            }
          </Typography>

          <Typography
            sx={{
              color:
                "#64748B",

              mt: 1,
            }}
          >
            Invoice Date:
            {" "}
            {
              invoice.invoiceDate
            }
          </Typography>

        </Box>

        {/* RIGHT */}
        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            variant="outlined"
            startIcon={
              <PrintOutlinedIcon />
            }
          >
            Print
          </Button>

          <Button
            variant="contained"
            startIcon={
              <DownloadOutlinedIcon />
            }
          >
            Download
          </Button>

        </Stack>

      </Box>

      {/* MAIN */}
      <Box
        sx={{
          display: "flex",

          gap: 3,

          flexDirection:
            {
              xs: "column",
              lg: "row",
            },
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Stack spacing={3}>

            {/* INVOICE INFO */}
            <Card
              sx={{
                p: 3,

                borderRadius:
                  "20px",

                border:
                  "1px solid #E2E8F0",

                boxShadow:
                  "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize:
                    "20px",

                  mb: 3,
                }}
              >
                Invoice Information
              </Typography>

              <Stack spacing={2}>

                <InfoRow
                  label="Invoice Number"
                  value={
                    invoice.invoiceNo
                  }
                />

                <InfoRow
                  label="Order Number"
                  value={
                    invoice.orderNo
                  }
                />

                <InfoRow
                  label="Customer"
                  value={
                    invoice.customerName
                  }
                />

                <InfoRow
                  label="Product"
                  value={
                    invoice.productName
                  }
                />

                <InfoRow
                  label="Brand"
                  value={
                    invoice.brand
                  }
                />

                <InfoRow
                  label="Category"
                  value={
                    invoice.category
                  }
                />

                <InfoRow
                  label="Created By"
                  value={
                    invoice.createdBy
                  }
                />

              </Stack>

            </Card>

            {/* PAYMENT SUMMARY */}
            <Card
              sx={{
                p: 3,

                borderRadius:
                  "20px",

                border:
                  "1px solid #E2E8F0",

                boxShadow:
                  "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize:
                    "20px",

                  mb: 3,
                }}
              >
                Payment Summary
              </Typography>

              <Stack spacing={2}>

                <InfoRow
                  label="Subtotal"
                  value={`₹${invoice.subtotal.toLocaleString()}`}
                />

                <InfoRow
                  label="Tax"
                  value={`₹${invoice.tax.toLocaleString()}`}
                />

                <InfoRow
                  label="Discount"
                  value={`₹${invoice.discount.toLocaleString()}`}
                />

                <Divider />

                <InfoRow
                  label="Total Amount"
                  value={`₹${invoice.totalAmount.toLocaleString()}`}
                  bold
                />

                <InfoRow
                  label="Paid Amount"
                  value={`₹${invoice.paidAmount.toLocaleString()}`}
                />

                <InfoRow
                  label="Due Amount"
                  value={`₹${invoice.dueAmount.toLocaleString()}`}
                />

              </Stack>

            </Card>

          </Stack>

        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "360px",
            },
          }}
        >
          <Stack spacing={3}>

            {/* STATUS */}
            <Card
              sx={{
                p: 3,

                borderRadius:
                  "20px",

                border:
                  "1px solid #E2E8F0",

                boxShadow:
                  "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize:
                    "18px",

                  mb: 3,
                }}
              >
                Status
              </Typography>

              <Stack spacing={2}>

                <Box>

                  <Typography
                    sx={{
                      fontSize:
                        "14px",

                      color:
                        "#64748B",

                      mb: 1,
                    }}
                  >
                    Payment Status
                  </Typography>

                  <Chip
                    label={
                      invoice.paymentStatus
                    }
                    sx={{
                      background:
                        invoice.paymentStatus ===
                        "Paid"

                          ? "#DCFCE7"

                          : invoice.paymentStatus ===
                            "Pending"

                          ? "#FEF3C7"

                          : "#DBEAFE",

                      color:
                        invoice.paymentStatus ===
                        "Paid"

                          ? "#15803D"

                          : invoice.paymentStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#2563EB",

                      fontWeight: 700,
                    }}
                  />

                </Box>

                <Box>

                  <Typography
                    sx={{
                      fontSize:
                        "14px",

                      color:
                        "#64748B",

                      mb: 1,
                    }}
                  >
                    Invoice Status
                  </Typography>

                  <Chip
                    label={
                      invoice.invoiceStatus
                    }
                    sx={{
                      background:
                        invoice.invoiceStatus ===
                        "Completed"

                          ? "#DCFCE7"

                          : invoice.invoiceStatus ===
                            "Pending"

                          ? "#FEF3C7"

                          : "#DBEAFE",

                      color:
                        invoice.invoiceStatus ===
                        "Completed"

                          ? "#15803D"

                          : invoice.invoiceStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#2563EB",

                      fontWeight: 700,
                    }}
                  />

                </Box>

              </Stack>

            </Card>

            {/* PAYMENT */}
            <Card
              sx={{
                p: 3,

                borderRadius:
                  "20px",

                border:
                  "1px solid #E2E8F0",

                boxShadow:
                  "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize:
                    "18px",

                  mb: 3,
                }}
              >
                Payment Details
              </Typography>

              <Stack spacing={2}>

                <InfoRow
                  label="Payment Method"
                  value={
                    invoice.paymentMethod
                  }
                />

                <InfoRow
                  label="Due Date"
                  value={
                    invoice.dueDate
                  }
                />

              </Stack>

            </Card>

            {/* NOTES */}
            <Card
              sx={{
                p: 3,

                borderRadius:
                  "20px",

                border:
                  "1px solid #E2E8F0",

                boxShadow:
                  "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize:
                    "18px",

                  mb: 2,
                }}
              >
                Notes
              </Typography>

              <Typography
                sx={{
                  color:
                    "#475569",

                  lineHeight: 1.7,
                }}
              >
                {
                  invoice.notes
                }
              </Typography>

            </Card>

          </Stack>

        </Box>

      </Box>

    </Box>
  );
}

function InfoRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {

  return (
    <Box
      sx={{
        display: "flex",

        justifyContent:
          "space-between",

        gap: 2,
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

          color:
            "#0F172A",

          textAlign:
            "right",
        }}
      >
        {value}
      </Typography>

    </Box>
  );
}