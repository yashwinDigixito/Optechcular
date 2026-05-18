"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function BasicInfo({ formik }: Props) {
  return (
    <Box sx={{ width: "100%"}}>
      {/* Section Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Basic Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Provide the foundational details for this frame model.
        </Typography>
      </Box>

      {/* Structured Card Container */}
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: "12px",
          backgroundColor: "#fafafa",
        }}
      >
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              size="small"
              value={formik.values.brand}
              onChange={formik.handleChange}
              error={formik.touched.brand && Boolean(formik.errors.brand)}
              helperText={formik.touched.brand && formik.errors.brand}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Model No"
              name="modelNo"
              size="small"
              value={formik.values.modelNo}
              onChange={formik.handleChange}
              error={formik.touched.modelNo && Boolean(formik.errors.modelNo)}
              helperText={formik.touched.modelNo && formik.errors.modelNo}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}