"use client";

import {
  useState,
} from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddInvoiceForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      orderNo: "",

      customerName: "",

      productName: "",

      invoiceDate: "",

      dueDate: "",

      paymentStatus:
        "Pending",

      invoiceStatus:
        "Pending",

      paymentMethod:
        "UPI",

      subtotal: 0,

      tax: 0,

      discount: 0,

      notes: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const totalAmount =
    Number(
      formData.subtotal
    ) +
    Number(
      formData.tax
    ) -
    Number(
      formData.discount
    );

  const handleSubmit = () => {

    console.log(
      "Invoice Data:",
      {
        ...formData,
        totalAmount,
      }
    );

    router.push(
      "/invoices"
    );
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box sx={{ mb: 3 }}>
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
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          background:
            "#FFFFFF",

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          p: 4,
        }}
      >
        {/* HEADER */}
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight: 700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Create Invoice
        </Typography>

        {/* FORM */}
        <Grid
          container
          spacing={3}
        >
          {/* ORDER NO */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Order Number"
              name="orderNo"
              value={
                formData.orderNo
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* CUSTOMER */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Customer Name"
              name="customerName"
              value={
                formData.customerName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PRODUCT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              value={
                formData.productName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* INVOICE DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Invoice Date"
              name="invoiceDate"
              value={
                formData.invoiceDate
              }
              onChange={
                handleChange
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

          </Grid>

          {/* DUE DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Due Date"
              name="dueDate"
              value={
                formData.dueDate
              }
              onChange={
                handleChange
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

          </Grid>

          {/* SUBTOTAL */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Subtotal"
              name="subtotal"
              value={
                formData.subtotal
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* TAX */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Tax"
              name="tax"
              value={
                formData.tax
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* DISCOUNT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Discount"
              name="discount"
              value={
                formData.discount
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PAYMENT STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Payment Status"
              name="paymentStatus"
              value={
                formData.paymentStatus
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Paid">
                Paid
              </MenuItem>

              <MenuItem value="Pending">
                Pending
              </MenuItem>

              <MenuItem value="Partial">
                Partial
              </MenuItem>

            </TextField>

          </Grid>

          {/* INVOICE STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Invoice Status"
              name="invoiceStatus"
              value={
                formData.invoiceStatus
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Completed">
                Completed
              </MenuItem>

              <MenuItem value="Pending">
                Pending
              </MenuItem>

              <MenuItem value="Processing">
                Processing
              </MenuItem>

            </TextField>

          </Grid>

          {/* PAYMENT METHOD */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Payment Method"
              name="paymentMethod"
              value={
                formData.paymentMethod
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="UPI">
                UPI
              </MenuItem>

              <MenuItem value="Cash">
                Cash
              </MenuItem>

              <MenuItem value="Card">
                Card
              </MenuItem>

              <MenuItem value="Bank Transfer">
                Bank Transfer
              </MenuItem>

            </TextField>

          </Grid>

          {/* NOTES */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              name="notes"
              value={
                formData.notes
              }
              onChange={
                handleChange
              }
            />

          </Grid>

        </Grid>

        {/* SUMMARY */}
        <Box
          sx={{
            mt: 5,

            p: 3,

            borderRadius:
              "16px",

            background:
              "#F8FAFC",

            border:
              "1px solid #E2E8F0",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,

              fontSize:
                "20px",

              mb: 2,
            }}
          >
            Invoice Summary
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              mb: 1,
            }}
          >
            <Typography>
              Subtotal
            </Typography>

            <Typography sx={{fontWeight:600}}>
              ₹
              {
                Number(
                  formData.subtotal
                ).toLocaleString()
              }
            </Typography>

          </Box>

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              mb: 1,
            }}
          >
            <Typography>
              Tax
            </Typography>

            <Typography sx={{fontWeight:600}}>
              ₹
              {
                Number(
                  formData.tax
                ).toLocaleString()
              }
            </Typography>

          </Box>

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              mb: 2,
            }}
          >
            <Typography>
              Discount
            </Typography>

            <Typography sx={{fontWeight:600}}>
              -₹
              {
                Number(
                  formData.discount
                ).toLocaleString()
              }
            </Typography>

          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,

                fontSize:
                  "18px",
              }}
            >
              Total Amount
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,

                fontSize:
                  "20px",

                color:
                  "#2563EB",
              }}
            >
              ₹
              {
                totalAmount.toLocaleString()
              }
            </Typography>

          </Box>

        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",

            justifyContent:
              "flex-end",

            gap: 2,

            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/invoices"
              )
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSubmit
            }
          >
            Save Invoice
          </Button>

        </Box>

      </Box>

    </Box>
  );
}