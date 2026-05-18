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
          onBlur={formik.handleBlur}
          error={formik.touched.hsn && Boolean(formik.errors.hsn)}
          helperText={formik.touched.hsn && formik.errors.hsn}
          placeholder="e.g. 9003"
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
          onBlur={formik.handleBlur}
          error={formik.touched.tax && Boolean(formik.errors.tax)}
          helperText={formik.touched.tax && formik.errors.tax}
          placeholder="e.g. 18"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Purchase Cost Price (₹)"
          name="costPrice"
          value={formik.values.costPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.costPrice && Boolean(formik.errors.costPrice)}
          helperText={formik.touched.costPrice && formik.errors.costPrice}
          placeholder="e.g. 1200"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Minimum Safety Stock (Low alert)"
          name="minStockLevel"
          value={formik.values.minStockLevel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.minStockLevel && Boolean(formik.errors.minStockLevel)}
          helperText={formik.touched.minStockLevel && formik.errors.minStockLevel}
          placeholder="e.g. 5"
        />
      </Grid>
    </>
  );
}