"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  useState,
} from "react";

import { useRouter } from "next/navigation";

interface Props {

  order: {

    id: string;

    orderNo: string;

    customerName: string;

    productName: string;

    quantity: number;

    productPrice: number;

    paymentStatus: string;

    status: string;

    deliveryStatus: string;

    paymentMethod: string;

    shippingAddress: string;

    billingAddress: string;

    notes: string;
  };
}

export default function EditOrderForm({
  order,
}: Props) {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      customerName:
        order.customerName,

      productName:
        order.productName,

      quantity:
        order.quantity,

      productPrice:
        order.productPrice,

      paymentStatus:
        order.paymentStatus,

      orderStatus:
        order.status,

      deliveryStatus:
        order.deliveryStatus,

      paymentMethod:
        order.paymentMethod,

      shippingAddress:
        order.shippingAddress,

      billingAddress:
        order.billingAddress,

      notes:
        order.notes,
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

  const handleSubmit = () => {

    console.log(
      "Updated Order:",
      formData
    );

    router.push("/orders");
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box sx={{ mb: 3 }}>
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
          Edit Order
        </Typography>

        {/* FORM */}
        <Grid
          container
          spacing={3}
        >
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

          {/* PRODUCT PRICE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Product Price"
              name="productPrice"
              value={
                formData.productPrice
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

              <MenuItem value="Refunded">
                Refunded
              </MenuItem>

            </TextField>

          </Grid>

          {/* ORDER STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Order Status"
              name="orderStatus"
              value={
                formData.orderStatus
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

              <MenuItem value="Cancelled">
                Cancelled
              </MenuItem>

            </TextField>

          </Grid>

          {/* DELIVERY STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Delivery Status"
              name="deliveryStatus"
              value={
                formData.deliveryStatus
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Processing">
                Processing
              </MenuItem>

              <MenuItem value="Delivered">
                Delivered
              </MenuItem>

              <MenuItem value="Returned">
                Returned
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

            </TextField>

          </Grid>

          {/* SHIPPING ADDRESS */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Shipping Address"
              name="shippingAddress"
              value={
                formData.shippingAddress
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* BILLING ADDRESS */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Billing Address"
              name="billingAddress"
              value={
                formData.billingAddress
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* NOTES */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={3}
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
                "/orders"
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
            Update Order
          </Button>

        </Box>

      </Box>

    </Box>
  );
}