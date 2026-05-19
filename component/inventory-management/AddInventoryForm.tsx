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
import FormSection from "@/component/common/FormSection";

const validationSchema = yup.object({
  productName: yup.string().required("Product name is required"),
  sku: yup.string().required("SKU is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
  brandGroup: yup.string().required("Brand group is required"),
  material: yup.string().required("Material is required"),
  rimShape: yup.string().required("Rim shape is required"),
  branch: yup.string().required("Branch is required"),
  status: yup.string().required("Status is required"),
});

export default function AddInventoryForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: "",
      sku: "",
      barcode: "",

      category: "",
      brand: "",
      brandGroup: "",
      material: "",
      rimShape: "",

      branch: "",
      stock: 0,
      minStock: 0,
      unitOfMeasure: "",

      costPrice: 0,
      price: 0,
      currency: "INR",

      status: "",

      supplier: "",
      location: "",

      createdOn: new Date().toISOString().split("T")[0],
      updatedDate: "",
      createdBy: "Admin",

      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Inventory Data Saved Successfully:", values);
      router.push("/inventory");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/inventory" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back 
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          p: 4,
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          background: "#FFFFFF",
        }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: 700, mb: 1 }}>
          Add Inventory
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Add inventory details linked with category, brand, brand group, material, and rim shape.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <FormSection
                title="1. Product Information"
                description="Add product identity, SKU, barcode, and classification details."
              >
                {[
                  ["Product Name *", "productName", "e.g. RayBan Aviator Metal Frame"],
                  ["SKU *", "sku", "e.g. RB-AVI-MET-001"],
                  ["Barcode", "barcode", "e.g. 123456789"],
                  ["Category *", "category", "e.g. Frame"],
                  ["Brand *", "brand", "e.g. RayBan"],
                  ["Brand Group *", "brandGroup", "e.g. Premium Brands"],
                  ["Material *", "material", "e.g. Metal"],
                  ["Rim Shape *", "rimShape", "e.g. Aviator"],
                ].map(([label, name, placeholder]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
                      helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
                      placeholder={placeholder}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="2. Stock Details"
                description="Manage branch, stock quantity, and unit details."
              >
                {[
                  ["Branch *", "branch", "e.g. Delhi"],
                  ["Current Stock", "stock", "e.g. 25"],
                  ["Minimum Stock", "minStock", "e.g. 10"],
                  ["Unit of Measure", "unitOfMeasure", "e.g. Pair"],
                ].map(([label, name, placeholder]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type={name === "stock" || name === "minStock" ? "number" : "text"}
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
                      helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
                      placeholder={placeholder}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="3. Pricing Information"
                description="Add cost price, selling price, and currency."
              >
                {[
                  ["Cost Price", "costPrice", "e.g. 3200"],
                  ["Selling Price", "price", "e.g. 4500"],
                  ["Currency", "currency", "e.g. INR"],
                  ["Status *", "status", "e.g. In Stock"],
                ].map(([label, name, placeholder]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type={name === "costPrice" || name === "price" ? "number" : "text"}
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
                      helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
                      placeholder={placeholder}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="4. Supplier & Location"
                description="Add supplier, warehouse location, and internal notes."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Supplier"
                    name="supplier"
                    value={formik.values.supplier}
                    onChange={formik.handleChange}
                    placeholder="e.g. Vision Metals Pvt Ltd"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    placeholder="e.g. Delhi Warehouse - Aisle 4, Shelf B"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label="Notes"
                    name="notes"
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </FormSection>

              {formik.submitCount > 0 && !formik.isValid && (
                <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "12px",
                      bgcolor: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                    }}
                  >
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
                      Please review the highlighted red sections above.
                    </Typography>
                  </Box>
                </Grid>
              )}

              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                  }}
                >
                  <Button variant="outlined" onClick={() => router.push("/inventory")}>
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      height: 48,
                      borderRadius: "12px",
                      px: 4,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Save Inventory
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </FormikProvider>
      </Box>
    </Box>
  );
}