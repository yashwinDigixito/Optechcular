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
import { brandGroups } from "@/assets/genericdata";
import FormSection from "@/component/common/FormSection";

const validationSchema = yup.object({
  groupName: yup.string().required("Group name is required"),
  status: yup.string().required("Status is required"),
  description: yup.string().optional(),
});

export default function EditBrandGroupPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const router = useRouter();

  // Synchronously resolve async next.js 15 route parameters using React 19 use() hook
  const { id } = React.use(params);

  const group = React.useMemo(() => {
    return brandGroups.find((item) => item.id === id);
  }, [id]);

  const formik = useFormik({
    initialValues: {
      groupName: group?.groupName || "",
      status: group?.status || "Active",
      description: group?.description || "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated Brand Group Data Successfully:", values);
      router.push("/products/brand-groups");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Back button */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/brand-groups"
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
            Back to Brand Groups
          </Button>
        </Link>
      </Box>

      {/* Main card */}
      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Edit Brand Group
        </Typography>
        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Modify your brand group metadata, description details, and cataloging statuses.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              
              <FormSection
                title="1. Brand Group Details"
                description="Define the brand group name, its visual/operational status, and an optional narrative description."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Brand Group Name *"
                    name="groupName"
                    value={formik.values.groupName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.groupName && Boolean(formik.errors.groupName)}
                    helperText={formik.touched.groupName && formik.errors.groupName}
                  />
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

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                  />
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
                  Update Group
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}