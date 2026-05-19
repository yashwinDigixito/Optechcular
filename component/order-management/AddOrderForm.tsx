"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const validationSchema = yup.object({
  orderNo: yup.string().required("Order no is required"),
  customerName: yup.string().required("Customer name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),

  productType: yup.string().required("Product type is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
  brandGroup: yup.string().required("Brand group is required"),
  material: yup.string().required("Material is required"),
  rimShape: yup.string().required("Rim shape is required"),

  productName: yup.string().required("Product name is required"),
  productSku: yup.string().required("Product SKU is required"),
  quantity: yup.number().min(1).required("Quantity is required"),
  productPrice: yup.number().min(0).required("Product price is required"),

  status: yup.string().required("Status is required"),
  paymentStatus: yup.string().required("Payment status is required"),
  deliveryStatus: yup.string().required("Delivery status is required"),
});

export default function AddOrderForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      orderNo: "",
      customerName: "",
      email: "",
      phone: "",

      salesPerson: "",
      orderSource: "",

      productType: "",
      category: "",
      brand: "",
      brandGroup: "",
      material: "",
      rimShape: "",

      productName: "",
      productSku: "",
      productVariant: "",

      quantity: 1,
      productPrice: 0,

      status: "Pending",
      paymentStatus: "Pending",
      deliveryStatus: "Processing",

      orderDate: new Date().toISOString().split("T")[0],

      subtotal: 0,
      discount: 0,
      tax: 0,
      shippingCharge: 0,
      totalAmount: 0,

      paymentMethod: "UPI",
      transactionId: "",
      paidAmount: 0,
      paymentDue: 0,

      shippingPartner: "",
      trackingNo: "",
      estimatedDeliveryDate: "",

      shippingAddress: "",
      billingAddress: "",
      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Order Data:", values);
      router.push("/orders");
    },
  });

  const textField = (
    label: string,
    name: string,
    type: string = "text",
    md: number = 6
  ) => (
    <Grid size={{ xs: 12, md }} key={name}>
      <TextField
        fullWidth
        type={type}
        label={label}
        name={name}
        value={(formik.values as any)[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
        helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
      />
    </Grid>
  );

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/orders" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} sx={{ textTransform: "none", fontWeight: 600 }}>
            Back 
          </Button>
        </Link>
      </Box>

      <Box sx={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #E2E8F0", p: 4 }}>
        <Typography sx={{ fontSize: "28px", fontWeight: 700, color: "#0F172A", mb: 1 }}>
          Add Order
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Add order details linked with brand, category, material, rim shape, and contact lens information.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>Customer Information</Typography>
              </Grid>

              {textField("Order No *", "orderNo")}
              {textField("Customer Name *", "customerName")}
              {textField("Email *", "email")}
              {textField("Phone *", "phone")}
              {textField("Sales Person", "salesPerson")}
              {textField("Order Source", "orderSource")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>Product Information</Typography>
              </Grid>

              {textField("Product Type *", "productType")}
              {textField("Category *", "category")}
              {textField("Brand *", "brand")}
              {textField("Brand Group *", "brandGroup")}
              {textField("Material *", "material")}
              {textField("Rim Shape *", "rimShape")}
              {textField("Product Name *", "productName")}
              {textField("Product SKU *", "productSku")}
              {textField("Product Variant", "productVariant")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>Pricing Information</Typography>
              </Grid>

              {textField("Quantity *", "quantity", "number", 4)}
              {textField("Product Price *", "productPrice", "number", 4)}
              {textField("Subtotal", "subtotal", "number", 4)}
              {textField("Discount", "discount", "number", 4)}
              {textField("Tax", "tax", "number", 4)}
              {textField("Shipping Charge", "shippingCharge", "number", 4)}
              {textField("Total Amount", "totalAmount", "number", 4)}
              {textField("Paid Amount", "paidAmount", "number", 4)}
              {textField("Payment Due", "paymentDue", "number", 4)}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>Order Status</Typography>
              </Grid>

              {textField("Status *", "status")}
              {textField("Payment Status *", "paymentStatus")}
              {textField("Delivery Status *", "deliveryStatus")}
              {textField("Payment Method", "paymentMethod")}
              {textField("Transaction ID", "transactionId")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>Shipping Details</Typography>
              </Grid>

              {textField("Shipping Partner", "shippingPartner")}
              {textField("Tracking No", "trackingNo")}
              {textField("Estimated Delivery Date", "estimatedDeliveryDate")}

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Shipping Address"
                  name="shippingAddress"
                  value={formik.values.shippingAddress}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Billing Address"
                  name="billingAddress"
                  value={formik.values.billingAddress}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Notes"
                  name="notes"
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 5 }}>
              <Button variant="outlined" onClick={() => router.push("/orders")}>
                Cancel
              </Button>

              <Button type="submit" variant="contained">
                Save Order
              </Button>
            </Box>
          </form>
        </FormikProvider>
      </Box>
    </Box>
  );
}