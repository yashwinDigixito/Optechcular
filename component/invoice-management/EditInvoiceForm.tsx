"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { Invoice } from "@/assets/types";

interface Props {
  invoice: Invoice;
}

const validationSchema = yup.object({
  invoiceNo: yup.string().required("Invoice number is required"),
  orderNo: yup.string().required("Order number is required"),
  customerName: yup.string().required("Customer name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  productName: yup.string().required("Product name is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
  material: yup.string().required("Material is required"),
  quantity: yup.number().min(1).required("Quantity is required"),
  unitPrice: yup.number().min(0).required("Unit price is required"),
  invoiceStatus: yup.string().required("Invoice status is required"),
  paymentStatus: yup.string().required("Payment status is required"),
});

export default function EditInvoiceForm({ invoice }: Props) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      invoiceId: invoice.invoiceId || "",
      invoiceNo: invoice.invoiceNo || "",
      orderNo: invoice.orderNo || "",
      customerName: invoice.customerName || "",
      email: invoice.email || "",
      phone: invoice.phone || "",
      billingAddress: invoice.billingAddress || "",
      shippingAddress: invoice.shippingAddress || "",
      invoiceDate: invoice.invoiceDate || "",
      dueDate: invoice.dueDate || "",
      invoiceStatus: invoice.invoiceStatus || "Pending",
      paymentStatus: invoice.paymentStatus || "Pending",
      productName: invoice.productName || "",
      productType: invoice.productType || "",
      category: invoice.category || "",
      brand: invoice.brand || "",
      brandGroup: invoice.brandGroup || "",
      material: invoice.material || "",
      quantity: invoice.quantity || 1,
      unitPrice: invoice.unitPrice || 0,
      tax: invoice.tax || 18,
      discount: invoice.discount || 0,
      lineTotal: invoice.lineTotal || 0,
      subtotal: invoice.subtotal || 0,
      taxAmount: invoice.taxAmount || 0,
      discountAmount: invoice.discountAmount || 0,
      shippingCharge: invoice.shippingCharge || 0,
      grandTotal: invoice.grandTotal || 0,
      paidAmount: invoice.paidAmount || 0,
      balanceDue: invoice.balanceDue || 0,
      paymentMethod: invoice.paymentMethod || "UPI",
      transactionId: invoice.transactionId || "",
      notes: invoice.notes || "",
      createdOn: invoice.createdOn || "",
      updatedDate: new Date().toISOString().split("T")[0],
      createdBy: invoice.createdBy || "Admin",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated Invoice Data:", values);
      router.push("/invoices");
    },
  });

  const grandTotal =
    Number(formik.values.subtotal) +
    Number(formik.values.taxAmount) +
    Number(formik.values.shippingCharge) -
    Number(formik.values.discountAmount);

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
        slotProps={
          type === "date"
            ? {
                inputLabel: {
                  shrink: true,
                },
              }
            : undefined
        }
        error={
          (formik.touched as any)[name] &&
          Boolean((formik.errors as any)[name])
        }
        helperText={
          (formik.touched as any)[name] &&
          (formik.errors as any)[name]
        }
      />
    </Grid>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/invoices" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Back
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0F172A",
            mb: 4,
          }}
        >
          Edit Invoice
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>
                  Invoice Details
                </Typography>
              </Grid>

              {textField("Invoice ID", "invoiceId")}
              {textField("Invoice No *", "invoiceNo")}
              {textField("Order No *", "orderNo")}
              {textField("Invoice Date", "invoiceDate", "date")}
              {textField("Due Date", "dueDate", "date")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>
                  Customer Details
                </Typography>
              </Grid>

              {textField("Customer Name *", "customerName")}
              {textField("Email *", "email")}
              {textField("Phone *", "phone")}

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
                  label="Shipping Address"
                  name="shippingAddress"
                  value={formik.values.shippingAddress}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>
                  Product Details
                </Typography>
              </Grid>

              {textField("Product Name *", "productName")}
              {textField("Product Type", "productType")}
              {textField("Category *", "category")}
              {textField("Brand *", "brand")}
              {textField("Brand Group", "brandGroup")}
              {textField("Material *", "material")}
              {textField("Quantity *", "quantity", "number")}
              {textField("Unit Price *", "unitPrice", "number")}
              {textField("Tax %", "tax", "number")}
              {textField("Discount", "discount", "number")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>
                  Amount Details
                </Typography>
              </Grid>

              {textField("Line Total", "lineTotal", "number")}
              {textField("Subtotal", "subtotal", "number")}
              {textField("Tax Amount", "taxAmount", "number")}
              {textField("Discount Amount", "discountAmount", "number")}
              {textField("Shipping Charge", "shippingCharge", "number")}
              {textField("Paid Amount", "paidAmount", "number")}
              {textField("Balance Due", "balanceDue", "number")}

              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 700, mt: 2, mb: 2 }}>
                  Payment Details
                </Typography>
              </Grid>

              {textField("Invoice Status *", "invoiceStatus")}
              {textField("Payment Status *", "paymentStatus")}
              {textField("Payment Method", "paymentMethod")}
              {textField("Transaction ID", "transactionId")}

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Notes"
                  name="notes"
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                mt: 5,
                p: 3,
                borderRadius: "16px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: 2 }}>
                Invoice Summary
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Subtotal</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  ₹{Number(formik.values.subtotal).toLocaleString()}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Tax Amount</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  ₹{Number(formik.values.taxAmount).toLocaleString()}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Shipping</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  ₹{Number(formik.values.shippingCharge).toLocaleString()}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography>Discount</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  -₹{Number(formik.values.discountAmount).toLocaleString()}
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Grand Total
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#2563EB",
                  }}
                >
                  ₹{grandTotal.toLocaleString()}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 5,
              }}
            >
              <Button variant="outlined" onClick={() => router.push("/invoices")}>
                Cancel
              </Button>

              <Button type="submit" variant="contained">
                Update Invoice
              </Button>
            </Box>
          </form>
        </FormikProvider>
      </Box>
    </Box>
  );
}