"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function TaxSection({ formik }: Props) {
  return (
    <Box sx={{ width: "100%"}}>
      {/* Section Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Taxation & Compliance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enter the appropriate HSN codes and commercial tax percentages for financial processing.
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
              label="HSN Code"
              name="hsn"
              size="small"
              value={formik.values.hsn}
              onChange={formik.handleChange}
              error={formik.touched.hsn && Boolean(formik.errors.hsn)}
              helperText={formik.touched.hsn && formik.errors.hsn}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Tax %"
              name="tax"
              size="small"
              value={formik.values.tax}
              onChange={formik.handleChange}
              error={formik.touched.tax && Boolean(formik.errors.tax)}
              helperText={formik.touched.tax && formik.errors.tax}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}