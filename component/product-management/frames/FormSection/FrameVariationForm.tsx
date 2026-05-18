"use client";

import {
 Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { FieldArray, FormikProps, getIn } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { FrameFormValues } from "./types";
import VariationImageUpload from "./ImageUpload";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function FrameVariationForm({ formik }: Props) {
  return (
    <Box sx={{ width: "100%", my: 3 }}>
      <FieldArray name="variations">
        {({ push, remove }) => (
          <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Product Variations
              </Typography>
              {formik.values.variations.length === 0 && (
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() =>
                    push({
                      colorCode: "",
                      size: "",
                      dbl: "",
                      sku: "",
                      price: "",
                      templeLength: "",
                      launchSeason: "",
                      lensColor: "",
                      frameFrontColor: "",
                      templeColor: "",
                      barcode: "",
                      images: [],
                    })
                  }
                >
                  Add Variation
                </Button>
              )}
            </Box>

            {formik.values.variations.map((v, index) => (
              <Paper
                variant="outlined"
                key={index}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  position: "relative",
                }}
              >
                {/* Variation Header Row */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                    Variation {index + 1}
                  </Typography>
                  <IconButton 
                    color="error" 
                    onClick={() => remove(index)}
                    sx={{ border: "1px solid", borderColor: "error.light" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                <Grid container spacing={2.5}>
                  {/* Row 1: Primary Stock & Identity Specs */}
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="SKU"
                      size="small"
                      value={v.sku}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.sku`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.sku`) && getIn(formik.errors, `variations.${index}.sku`))}
                      helperText={getIn(formik.touched, `variations.${index}.sku`) && getIn(formik.errors, `variations.${index}.sku`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Barcode"
                      size="small"
                      value={v.barcode}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.barcode`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.barcode`) && getIn(formik.errors, `variations.${index}.barcode`))}
                      helperText={getIn(formik.touched, `variations.${index}.barcode`) && getIn(formik.errors, `variations.${index}.barcode`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="SRP (Price)"
                      size="small"
                      value={v.price}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "") {
                          formik.setFieldValue(`variations.${index}.price`, "");
                          return;
                        }
                        if (!isNaN(Number(val))) {
                          formik.setFieldValue(`variations.${index}.price`, Number(val));
                        }
                      }}
                      error={Boolean(getIn(formik.touched, `variations.${index}.price`) && getIn(formik.errors, `variations.${index}.price`))}
                      helperText={getIn(formik.touched, `variations.${index}.price`) && getIn(formik.errors, `variations.${index}.price`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Color Code"
                      size="small"
                      value={v.colorCode}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.colorCode`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.colorCode`) && getIn(formik.errors, `variations.${index}.colorCode`))}
                      helperText={getIn(formik.touched, `variations.${index}.colorCode`) && getIn(formik.errors, `variations.${index}.colorCode`)}
                    />
                  </Grid>

                  {/* Row 2: Sizing Measurements */}
                  <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                    <TextField
                      fullWidth
                      label="Size"
                      size="small"
                      value={v.size}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.size`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.size`) && getIn(formik.errors, `variations.${index}.size`))}
                      helperText={getIn(formik.touched, `variations.${index}.size`) && getIn(formik.errors, `variations.${index}.size`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                    <TextField
                      fullWidth
                      label="DBL"
                      size="small"
                      value={v.dbl}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.dbl`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.dbl`) && getIn(formik.errors, `variations.${index}.dbl`))}
                      helperText={getIn(formik.touched, `variations.${index}.dbl`) && getIn(formik.errors, `variations.${index}.dbl`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                    <TextField
                      fullWidth
                      label="Temple Length"
                      size="small"
                      value={v.templeLength}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.templeLength`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.templeLength`) && getIn(formik.errors, `variations.${index}.templeLength`))}
                      helperText={getIn(formik.touched, `variations.${index}.templeLength`) && getIn(formik.errors, `variations.${index}.templeLength`)}
                    />
                  </Grid>

                  {/* Row 3: Styling Parameters */}
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Lens Color"
                      size="small"
                      value={v.lensColor}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.lensColor`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.lensColor`) && getIn(formik.errors, `variations.${index}.lensColor`))}
                      helperText={getIn(formik.touched, `variations.${index}.lensColor`) && getIn(formik.errors, `variations.${index}.lensColor`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Frame Front Color"
                      size="small"
                      value={v.frameFrontColor}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.frameFrontColor`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.frameFrontColor`) && getIn(formik.errors, `variations.${index}.frameFrontColor`))}
                      helperText={getIn(formik.touched, `variations.${index}.frameFrontColor`) && getIn(formik.errors, `variations.${index}.frameFrontColor`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Temple Color"
                      size="small"
                      value={v.templeColor}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.templeColor`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.templeColor`) && getIn(formik.errors, `variations.${index}.templeColor`))}
                      helperText={getIn(formik.touched, `variations.${index}.templeColor`) && getIn(formik.errors, `variations.${index}.templeColor`)}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Launch Season"
                      size="small"
                      value={v.launchSeason}
                      onChange={(e) => formik.setFieldValue(`variations.${index}.launchSeason`, e.target.value)}
                      error={Boolean(getIn(formik.touched, `variations.${index}.launchSeason`) && getIn(formik.errors, `variations.${index}.launchSeason`))}
                      helperText={getIn(formik.touched, `variations.${index}.launchSeason`) && getIn(formik.errors, `variations.${index}.launchSeason`)}
                    />
                  </Grid>

                  {/* Media Upload Area */}
                  <Grid size={{ xs: 12 }}>
                    <Divider sx={{ my: 1.5 }} />
                    <VariationImageUpload formik={formik} index={index} />
                  </Grid>
                </Grid>
              </Paper>
            ))}

            {formik.values.variations.length > 0 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() =>
                    push({
                      colorCode: "",
                      size: "",
                      dbl: "",
                      sku: "",
                      price: "",
                      templeLength: "",
                      launchSeason: "",
                      lensColor: "",
                      frameFrontColor: "",
                      templeColor: "",
                      barcode: "",
                      images: [],
                    })
                  }
                  sx={{ px: 4, py: 1, borderWidth: "2px", fontWeight: 600 }}
                >
                  Add Another Variation
                </Button>
              </Box>
            )}
          </>
        )}
      </FieldArray>
    </Box>
  );
}