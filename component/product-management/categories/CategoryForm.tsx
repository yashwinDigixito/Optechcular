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
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

const validationSchema = yup.object({
  categoryName: yup.string().required("Category name is required"),
  status: yup.string().required("Status is required"),
});

export default function CategoryForm() {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      status: "Active",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Category Data:", values);
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/product/categories"
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
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Add Category
      </Typography>

      {/* FORM */}
      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          boxShadow: "0px 10px 30px rgba(15,23,42,0.06)",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Category Name"
                name="categoryName"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.categoryName &&
                  Boolean(formik.errors.categoryName)
                }
                helperText={
                  formik.touched.categoryName &&
                  formik.errors.categoryName
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.status &&
                  Boolean(formik.errors.status)
                }
                helperText={
                  formik.touched.status &&
                  formik.errors.status
                }
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              height: "48px",
              borderRadius: "12px",
              px: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Save Category
          </Button>
        </form>
      </Card>
    </Box>
  );
}