"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import FormSection from "@/component/common/FormSection";

const categoriesList = [
  "Contact Lens",
  "Optical Lens",
  "Frame",
  "Accessories",
];

const validationSchema = yup.object({
  brandName: yup.string().required("Brand name is required"),
  categories: yup.array().min(1, "Select at least one category").required("Category is required"),
  brandGroup: yup.string().required("Brand group is required"),
  status: yup.string().required("Status is required"),
});

export default function BrandForm() {
  const router = useRouter();

  const brandGroups = [
    "Premium Brands",
    "Budget Brands",
    "Luxury Brands",
  ];

  const formik = useFormik({
    initialValues: {
      brandName: "",
      categories: [] as string[],
      brandGroup: "",
      status: "Active",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Brand Data Saved Successfully:", values);
      router.push("/products/brands");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Back button */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/brands"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back to Brands
          </Button>
        </Link>
      </Box>

      {/* Main card */}
      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Add Brand
        </Typography>
        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Register a brand with specific classifications, category rosters, and standard operational statuses.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              
              <FormSection
                title="1. Brand Identity & Classifications"
                description="Configure brand name, associated business categories, grouping context, and operational status."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Brand Name *"
                    name="brandName"
                    value={formik.values.brandName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.brandName && Boolean(formik.errors.brandName)}
                    helperText={formik.touched.brandName && formik.errors.brandName}
                    placeholder="e.g. RayBan"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Category *"
                    name="categories"
                    slotProps={{
                      select: {
                        multiple: true,
                        renderValue: (selected: unknown) =>
                          (selected as string[]).join(", "),
                      },
                    }}
                    value={formik.values.categories}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.categories && Boolean(formik.errors.categories)}
                    helperText={formik.touched.categories && formik.errors.categories}
                  >
                    {categoriesList.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        <Checkbox
                          checked={formik.values.categories.indexOf(cat) > -1}
                        />
                        <ListItemText primary={cat} />
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Brand Group *"
                    name="brandGroup"
                    value={formik.values.brandGroup}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.brandGroup && Boolean(formik.errors.brandGroup)}
                    helperText={formik.touched.brandGroup && formik.errors.brandGroup}
                  >
                    {brandGroups.map((group, index) => (
                      <MenuItem key={index} value={group}>
                        {group}
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
                    onBlur={formik.handleBlur}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </TextField>
                </Grid>
              </FormSection>

              {/* Validation alert message if form has been submitted and contains errors */}
              {formik.submitCount > 0 && !formik.isValid && (
                <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
                  <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FEF2F2", border: "1px solid #FCA5A5" }}>
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
                      Please review the highlighted red sections above. Make sure all required fields are filled.
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
                  Save Brand
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}