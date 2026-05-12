"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const categories = [
  "Contact Lens",
  "Optical Lens",
  "Frame",
  "Accessories",
];

const validationSchema = yup.object({
  brandName: yup.string().required("Brand name is required"),
  categories: yup.array().min(1, "Select at least one category"),
  brandGroup: yup.string().required("Brand group is required"),
  status: yup.string().required("Status is required"),
});

export default function BrandForm() {

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
      console.log("Brand Data:", values);
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Add Brand
      </Typography>

      <Card
        sx={{
          p: 3,
          borderRadius: "20px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Brand Name"
                name="brandName"
                value={formik.values.brandName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.brandName &&
                  Boolean(formik.errors.brandName)
                }
                helperText={
                  formik.touched.brandName &&
                  formik.errors.brandName
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Category"
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
                error={
                  formik.touched.categories &&
                  Boolean(formik.errors.categories)
                }
                helperText={
                  formik.touched.categories &&
                  formik.errors.categories
                }
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    <Checkbox
                      checked={
                        formik.values.categories.indexOf(cat) > -1
                      }
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
                label="Brand Group"
                name="brandGroup"
                value={formik.values.brandGroup}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.brandGroup &&
                  Boolean(formik.errors.brandGroup)
                }
                helperText={
                  formik.touched.brandGroup &&
                  formik.errors.brandGroup
                }
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
                label="Status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
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
              textTransform: "none",
              px: 4,
            }}
          >
            Save Brand
          </Button>
        </form>
      </Card>
    </Box>
  );
}