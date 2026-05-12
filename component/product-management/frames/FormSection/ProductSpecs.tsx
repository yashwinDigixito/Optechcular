"use client";

import { Grid, TextField, MenuItem } from "@mui/material";
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
        >
          <MenuItem value="Optical Frame">Optical Frame</MenuItem>
          <MenuItem value="Sunglasses">Sunglasses</MenuItem>
          <MenuItem value="RX-able">RX-able</MenuItem>
          <MenuItem value="Clip-on">Clip-on</MenuItem>
        </TextField>
      </Grid>
    </>
  );
}