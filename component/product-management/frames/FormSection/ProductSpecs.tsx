"use client";

import {  Grid, TextField, MenuItem, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function ProductSpecs({ formik }: Props) {
  return (
    <Box sx={{ width: "100%"}}>
      {/* Section Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Product Specifications
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Define the physical material properties and classification for this frame.
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
              label="Temple Material"
              name="templeMaterial"
              size="small"
              value={formik.values.templeMaterial}
              onChange={formik.handleChange}
              error={formik.touched.templeMaterial && Boolean(formik.errors.templeMaterial)}
              helperText={formik.touched.templeMaterial && formik.errors.templeMaterial}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              size="small"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            >
              <MenuItem value="Optical Frame">Optical Frame</MenuItem>
              <MenuItem value="Sunglasses">Sunglasses</MenuItem>
              <MenuItem value="RX-able">RX-able</MenuItem>
              <MenuItem value="Clip-on">Clip-on</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}