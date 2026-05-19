"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import * as yup from "yup";
import { categories } from "@/assets/genericdata";
import FormSection from "@/component/common/FormSection";

const categoryTypes = ["Product Category"];
const parentCategories = ["Eyewear", "Vision Care"];
const priorityLevels = ["High", "Medium", "Low"];

const warehouseLocations = [
  "Delhi Warehouse",
  "Mumbai Warehouse",
  "Noida Warehouse",
  "Bangalore Warehouse",
];

const validationSchema = yup.object({
  categoryName: yup.string().required("Category name is required"),
  categoryCode: yup.string().required("Category code is required"),
  categoryType: yup.string().required("Category type is required"),
  parentCategory: yup.string().required("Parent category is required"),
  priorityLevel: yup.string().required("Priority level is required"),
  warehouseLocation: yup.string().required("Warehouse location is required"),
  status: yup.string().required("Status is required"),
});

export default function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const { id } = React.use(params);

  const category = React.useMemo(() => {
    return categories.find((item) => item.id === id);
  }, [id]);

  const formik = useFormik({
    initialValues: {
      categoryId: category?.categoryId || "",
      categoryName: category?.categoryName || "",
      categoryCode: category?.categoryCode || "",
      categoryType: category?.categoryType || "Product Category",
      parentCategory: category?.parentCategory || "",

      status: category?.status || "Active",
      displayOrder: category?.displayOrder || 1,
      priorityLevel: category?.priorityLevel || "Medium",

      totalProducts: category?.totalProducts || 0,
      activeProducts: category?.activeProducts || 0,
      totalBrands: category?.totalBrands || 0,
      revenueContribution: category?.revenueContribution || 0,

      stockQuantity: category?.stockQuantity || 0,
      lowStockProducts: category?.lowStockProducts || 0,
      warehouseLocation: category?.warehouseLocation || "",

      description: category?.description || "",
      notes: category?.notes || "",

      createdOn: category?.createdOn || "",
      updatedDate: new Date().toISOString().split("T")[0],
      createdBy: category?.createdBy || "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated Category Data Successfully:", values);
      router.push("/products/categories");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/products/categories" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Back to Categories
          </Button>
        </Link>
      </Box>

      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "none",
        }}
      >
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Edit Category
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Update category classification, inventory details, warehouse data, and business metrics.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <FormSection
                title="1. Category Information"
                description="Update category identity, classification, and operational settings."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Category ID"
                    name="categoryId"
                    value={formik.values.categoryId}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Category Name *"
                    name="categoryName"
                    value={formik.values.categoryName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.categoryName && Boolean(formik.errors.categoryName)}
                    helperText={formik.touched.categoryName && formik.errors.categoryName}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Category Code *"
                    name="categoryCode"
                    value={formik.values.categoryCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.categoryCode && Boolean(formik.errors.categoryCode)}
                    helperText={formik.touched.categoryCode && formik.errors.categoryCode}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Category Type *"
                    name="categoryType"
                    value={formik.values.categoryType}
                    onChange={formik.handleChange}
                  >
                    {categoryTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Parent Category *"
                    name="parentCategory"
                    value={formik.values.parentCategory}
                    onChange={formik.handleChange}
                  >
                    {parentCategories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Priority Level *"
                    name="priorityLevel"
                    value={formik.values.priorityLevel}
                    onChange={formik.handleChange}
                  >
                    {priorityLevels.map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Status *"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </TextField>
                </Grid>

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

              <FormSection
                title="2. Inventory & Performance"
                description="Update stock, products, brands, and revenue metrics."
              >
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

              <FormSection
                title="3. Warehouse Information"
                description="Update warehouse location and internal notes."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Warehouse Location *"
                    name="warehouseLocation"
                    value={formik.values.warehouseLocation}
                    onChange={formik.handleChange}
                  >
                    {warehouseLocations.map((location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </TextField>
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
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    height: 52,
                    borderRadius: "14px",
                    px: 4,
                    fontWeight: 700,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: "15px",
                  }}
                >
                  Update Category
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}