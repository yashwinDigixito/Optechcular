"use client";

import {
    useState,
} from "react";

import {
    Box,
    Button,
    Divider,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

export default function AddPurchaseOrderForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      poNumber: "",

      vendorName: "",

      vendorEmail: "",

      vendorPhone: "",

      productName: "",

      productSku: "",

      category:
        "Frame",

      quantity: 1,

      unitPrice: 0,

      tax: 0,

      discount: 0,

      paymentStatus:
        "Pending",

      poStatus:
        "Pending",

      orderDate: "",

      expectedDelivery:
        "",

      createdBy:
        "Admin",

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
      formData.quantity
    ) *
      Number(
        formData.unitPrice
      ) +
    Number(
      formData.tax
    ) -
    Number(
      formData.discount
    );

  const handleSubmit = () => {

    console.log(
      "Purchase Order:",
      {
        ...formData,
        totalAmount,
      }
    );

    router.push(
      "/purchase-orders"
    );
  };

  return (
    <Box sx={{ p: 3 }}>

      <Box
        sx={{
          p: 4,

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          background:
            "#FFFFFF",
        }}
      >
        {/* HEADER */}
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight:
              700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Create Purchase Order
        </Typography>

        {/* FORM */}
        <Grid
          container
          spacing={3}
        >
          {/* PO NUMBER */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="PO Number"
              name="poNumber"
              value={
                formData.poNumber
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* VENDOR NAME */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Vendor Name"
              name="vendorName"
              value={
                formData.vendorName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* EMAIL */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Vendor Email"
              name="vendorEmail"
              value={
                formData.vendorEmail
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PHONE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Vendor Phone"
              name="vendorPhone"
              value={
                formData.vendorPhone
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

          {/* SKU */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Product SKU"
              name="productSku"
              value={
                formData.productSku
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Frame">
                Frame
              </MenuItem>

              <MenuItem value="Optical Lens">
                Optical Lens
              </MenuItem>

              <MenuItem value="Contact Lens">
                Contact Lens
              </MenuItem>

            </TextField>

          </Grid>

          {/* QUANTITY */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Quantity"
              name="quantity"
              value={
                formData.quantity
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* UNIT PRICE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Unit Price"
              name="unitPrice"
              value={
                formData.unitPrice
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

          {/* PO STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="PO Status"
              name="poStatus"
              value={
                formData.poStatus
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Pending">
                Pending
              </MenuItem>

              <MenuItem value="Processing">
                Processing
              </MenuItem>

              <MenuItem value="Delivered">
                Delivered
              </MenuItem>

            </TextField>

          </Grid>

          {/* ORDER DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Order Date"
              name="orderDate"
              value={
                formData.orderDate
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

          {/* DELIVERY DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Expected Delivery"
              name="expectedDelivery"
              value={
                formData.expectedDelivery
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
              "18px",

            border:
              "1px solid #E2E8F0",

            background:
              "#F8FAFC",
          }}
        >
          <Typography
            sx={{
              fontWeight:
                700,

              fontSize:
                "20px",

              mb: 2,
            }}
          >
            Purchase Summary
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display:
                "flex",

              justifyContent:
                "space-between",

              mb: 1,
            }}
          >
            <Typography>
              Product Total
            </Typography>

            <Typography
              sx={{fontWeight:700}}
            >
              ₹
              {
                (
                  Number(
                    formData.quantity
                  ) *
                  Number(
                    formData.unitPrice
                  )
                ).toLocaleString()
              }
            </Typography>

          </Box>

          <Box
            sx={{
              display:
                "flex",

              justifyContent:
                "space-between",

              mb: 1,
            }}
          >
            <Typography>
              Tax
            </Typography>

            <Typography
              sx={{fontWeight:700}}
            >
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
              display:
                "flex",

              justifyContent:
                "space-between",

              mb: 2,
            }}
          >
            <Typography>
              Discount
            </Typography>

            <Typography
              sx={{fontWeight:700}}
            >
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
              display:
                "flex",

              justifyContent:
                "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight:
                  700,

                fontSize:
                  "18px",
              }}
            >
              Total Amount
            </Typography>

            <Typography
              sx={{
                fontWeight:
                  700,

                fontSize:
                  "22px",

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
            mt: 5,

            display:
              "flex",

            justifyContent:
              "flex-end",

            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/purchase-orders"
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
            Save Purchase Order
          </Button>

        </Box>

      </Box>

    </Box>
  );
}