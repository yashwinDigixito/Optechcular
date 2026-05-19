"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
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
  categoryName: yup.string().required("Category name is required"),
  categoryCode: yup.string().required("Category code is required"),
  categoryType: yup.string().required("Category type is required"),
  parentCategory: yup.string().required("Parent category is required"),
  priorityLevel: yup.string().required("Priority level is required"),
  warehouseLocation: yup.string().required("Warehouse location is required"),
  status: yup.string().required("Status is required"),
});

export default function CategoryForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      categoryName: "",
      categoryCode: "",
      categoryType: "",
      parentCategory: "",

      status: "",
      displayOrder: 1,
      priorityLevel: "",

      totalProducts: 0,
      activeProducts: 0,
      totalBrands: 0,
      revenueContribution: 0,

      stockQuantity: 0,
      lowStockProducts: 0,
      warehouseLocation: "",

      description: "",
      notes: "",

      createdOn: new Date().toISOString().split("T")[0],
      updatedDate: "",
      createdBy: "Admin",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Category Data Saved Successfully:", values);
      router.push("/products/categories");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/products/categories" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} sx={{ textTransform: "none", fontWeight: 600 }}>
            Back 
          </Button>
        </Link>
      </Box>

      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Add Category
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Create and manage optical product categories, stock information, and business metrics.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <FormSection title="1. Category Information" description="Configure category identity and operational settings.">
                {[
                  ["Category ID", "categoryId", "e.g. CAT-1001"],
                  ["Category Name *", "categoryName", "e.g. Frame"],
                  ["Category Code *", "categoryCode", "e.g. FRAME"],
                  ["Category Type *", "categoryType", "e.g. Product Category"],
                  ["Parent Category *", "parentCategory", "e.g. Eyewear"],
                  ["Priority Level *", "priorityLevel", "e.g. High"],
                  ["Status *", "status", "e.g. Active"],
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

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </FormSection>

              <FormSection title="2. Inventory & Performance" description="Track stock, products, and revenue metrics.">
                {[
                  ["Total Products", "totalProducts"],
                  ["Active Products", "activeProducts"],
                  ["Total Brands", "totalBrands"],
                  ["Revenue Contribution", "revenueContribution"],
                  ["Stock Quantity", "stockQuantity"],
                  ["Low Stock Products", "lowStockProducts"],
                  ["Display Order", "displayOrder"],
                ].map(([label, name]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type="number"
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection title="3. Warehouse Information" description="Manage warehouse and notes.">
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Warehouse Location *"
                    name="warehouseLocation"
                    value={formik.values.warehouseLocation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.warehouseLocation && Boolean(formik.errors.warehouseLocation)}
                    helperText={formik.touched.warehouseLocation && formik.errors.warehouseLocation}
                    placeholder="e.g. Delhi Warehouse"
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

              <Grid size={{ xs: 12 }}>
                <Button type="submit" variant="contained" sx={{ height: 52, borderRadius: "14px", px: 4, fontWeight: 700, boxShadow: "none", textTransform: "none" }}>
                  Save Category
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}