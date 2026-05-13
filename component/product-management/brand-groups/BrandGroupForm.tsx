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
  groupName: yup.string().required("Group name is required"),
  status: yup.string().required("Status is required"),
});

export default function BrandGroupForm() {
  const formik = useFormik({
    initialValues: {
      groupName: "",
      status: "Active",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <Box
      sx={{
        p: 3,
        }}
    >
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/brand-groups"
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
        Add Brand Group
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
            {/* GROUP NAME */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Brand Group Name"
                name="groupName"
                value={formik.values.groupName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.groupName &&
                  Boolean(formik.errors.groupName)
                }
                helperText={
                  formik.touched.groupName &&
                  formik.errors.groupName
                }
              />
            </Grid>

            {/* STATUS */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* BUTTON */}
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
            Save Group
          </Button>
        </form>
      </Card>
    </Box>
  );
}