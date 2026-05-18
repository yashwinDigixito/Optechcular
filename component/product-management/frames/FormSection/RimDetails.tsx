"use client";

import { Grid, TextField, MenuItem, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function RimDetails({ formik }: Props) {
  return (
    <Box sx={{ width: "100%",  }}>
      {/* Section Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Rim Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specify the structural style and silhouette geometry of the frame rims.
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
              select
              fullWidth
              label="Rim Type"
              name="rimType"
              size="small"
              value={formik.values.rimType}
              onChange={formik.handleChange}
              error={formik.touched.rimType && Boolean(formik.errors.rimType)}
              helperText={formik.touched.rimType && formik.errors.rimType}
            >
              <MenuItem value="Full Rim">Full Rim</MenuItem>
              <MenuItem value="Half Rim">Half Rim</MenuItem>
              <MenuItem value="Rimless">Rimless</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Rim Shape"
              name="rimShape"
              size="small"
              value={formik.values.rimShape}
              onChange={formik.handleChange}
              error={formik.touched.rimShape && Boolean(formik.errors.rimShape)}
              helperText={formik.touched.rimShape && formik.errors.rimShape}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}