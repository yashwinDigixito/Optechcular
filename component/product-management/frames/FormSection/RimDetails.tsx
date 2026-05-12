"use client";

import { Grid, TextField, MenuItem } from "@mui/material";
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
        />
      </Grid>
    </>
  );
}