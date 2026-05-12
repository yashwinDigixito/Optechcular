"use client";

import { Grid, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function TaxSection({ formik }: Props) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="HSN Code"
          name="hsn"
          value={formik.values.hsn}
          onChange={formik.handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Tax %"
          name="tax"
          value={formik.values.tax}
          onChange={formik.handleChange}
        />
      </Grid>
    </>
  );
}