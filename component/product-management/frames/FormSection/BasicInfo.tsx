"use client";

import { Grid, MenuItem, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function BasicInfo({ formik }: Props) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Brand"
          name="brand"
          value={formik.values.brand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Model No"
          name="modelNo"
          value={formik.values.modelNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.modelNo && Boolean(formik.errors.modelNo)}
          helperText={formik.touched.modelNo && formik.errors.modelNo}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Manufacturer / Supplier"
          name="manufacturer"
          value={formik.values.manufacturer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.manufacturer && Boolean(formik.errors.manufacturer)}
          helperText={formik.touched.manufacturer && formik.errors.manufacturer}
          placeholder="e.g. Luxottica India"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Target Demographic"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          <MenuItem value="Unisex">Unisex</MenuItem>
          <MenuItem value="Men">Men</MenuItem>
          <MenuItem value="Women">Women</MenuItem>
          <MenuItem value="Kids">Kids</MenuItem>
        </TextField>
      </Grid>
    </>
  );
}