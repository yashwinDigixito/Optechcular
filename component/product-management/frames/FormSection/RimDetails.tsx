"use client";

import { Grid, TextField, MenuItem, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function RimDetails({ formik }: Props) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Rim Type"
          name="rimType"
          value={formik.values.rimType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          value={formik.values.rimShape}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rimShape && Boolean(formik.errors.rimShape)}
          helperText={formik.touched.rimShape && formik.errors.rimShape}
          placeholder="e.g. Aviator, Round, Rectangular"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Lens Width (mm)"
          name="lensWidth"
          value={formik.values.lensWidth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lensWidth && Boolean(formik.errors.lensWidth)}
          helperText={formik.touched.lensWidth && formik.errors.lensWidth}
          placeholder="e.g. 54"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Lens Height (mm)"
          name="lensHeight"
          value={formik.values.lensHeight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lensHeight && Boolean(formik.errors.lensHeight)}
          helperText={formik.touched.lensHeight && formik.errors.lensHeight}
          placeholder="e.g. 42"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Bridge Width (mm)"
          name="bridgeWidth"
          value={formik.values.bridgeWidth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.bridgeWidth && Boolean(formik.errors.bridgeWidth)}
          helperText={formik.touched.bridgeWidth && formik.errors.bridgeWidth}
          placeholder="e.g. 18"
        />
      </Grid>
    </>
  );
}