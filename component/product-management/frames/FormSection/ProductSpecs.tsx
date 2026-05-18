"use client";

import {  Grid, TextField, MenuItem, Typography, Box, Paper } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function ProductSpecs({ formik }: Props) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Temple Material"
          name="templeMaterial"
          value={formik.values.templeMaterial}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.templeMaterial && Boolean(formik.errors.templeMaterial)}
          helperText={formik.touched.templeMaterial && formik.errors.templeMaterial}
          placeholder="e.g. Beta-Titanium, TR90"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        >
          <MenuItem value="Optical Frame">Optical Frame</MenuItem>
          <MenuItem value="Sunglasses">Sunglasses</MenuItem>
          <MenuItem value="RX-able">RX-able</MenuItem>
          <MenuItem value="Clip-on">Clip-on</MenuItem>
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          select
          fullWidth
          label="Frame Material"
          name="material"
          value={formik.values.material}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.material && Boolean(formik.errors.material)}
          helperText={formik.touched.material && formik.errors.material}
        >
          <MenuItem value="Acetate">Acetate</MenuItem>
          <MenuItem value="Titanium">Titanium</MenuItem>
          <MenuItem value="Metal">Metal</MenuItem>
          <MenuItem value="Ultem">Ultem</MenuItem>
          <MenuItem value="TR90">TR90</MenuItem>
          <MenuItem value="Carbon Fiber">Carbon Fiber</MenuItem>
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Frame Weight (g)"
          name="weight"
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
          placeholder="e.g. 14"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Shelf / Warehouse Location"
          name="shelfLocation"
          value={formik.values.shelfLocation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.shelfLocation && Boolean(formik.errors.shelfLocation)}
          helperText={formik.touched.shelfLocation && formik.errors.shelfLocation}
          placeholder="e.g. Rack A-3, Shelf 2"
        />
      </Grid>
    </>
  );
}