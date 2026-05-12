"use client";

import { Grid, TextField } from "@mui/material";
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
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Model No"
          name="modelNo"
          value={formik.values.modelNo}
          onChange={formik.handleChange}
        />
      </Grid>
    </>
  );
}