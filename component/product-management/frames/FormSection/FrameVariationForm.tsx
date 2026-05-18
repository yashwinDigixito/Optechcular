"use client";

import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import { FieldArray, FormikErrors, FormikProps, FormikTouched } from "formik";
import VariationImageUpload from "./ImageUpload";
import { FrameFormValues, FrameVariation } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function FrameVariationForm({ formik }: Props) {
  // Helper to generate a random EAN-13 barcode
  const generateEANBarcode = () => {
    let result = "890"; // India prefix
    for (let i = 0; i < 9; i++) {
      result += Math.floor(Math.random() * 10);
    }
    // Calculate simple checksum digit
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += parseInt(result[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return result + checkDigit;
  };

  const defaultBranchPricing = [
    { location: "Mumbai Flagship Store", price: "" as const },
    { location: "Delhi CP Store", price: "" as const },
    { location: "Bangalore Warehouse Hub", price: "" as const },
  ];

  return (
    <>
      <FieldArray name="variations">
        {({ push, remove }) => (
          <>
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1, mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#334155" }}>
                  4. Eyewear Frame Color, Size & Price Variations
                </Typography>
                <Button
                  type="button"
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
                      subtopic11: "",
                      branchPricing: [...defaultBranchPricing],
                      images: [],
                    })
                  }
                  sx={{ borderRadius: "10px", textTransform: "none" }}
                >
                  Add Variation
                </Button>
              </Box>
            </Grid>

            {formik.values.variations.map((v, index) => {
              // Access Formik nested array error / touched helpers safely
              const errorsArray = formik.errors.variations;
              const touchedArray = formik.touched.variations;
const vErrors =
  Array.isArray(errorsArray)
    ? errorsArray[index] as
        FormikErrors<
          FrameVariation
        >
    : undefined;

const vTouched =
  Array.isArray(touchedArray)
    ? touchedArray[index] as
        FormikTouched<
          FrameVariation
        >
    : undefined;
              return (
                <Grid size={{ xs: 12 }} key={index}>
                  <Card sx={{ p: 3, border: "1px dashed #CBD5E1", borderRadius: "16px", bgcolor: "#FAFAFA", mb: 3 }}>
                    {/* Header bar */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                      <Typography sx={{ fontWeight: 800, fontSize: "15px", color: "#475569" }}>
                        Variation Specs #{index + 1}
                      </Typography>
                      <IconButton 
                        type="button" 
                        onClick={() => remove(index)}
                        sx={{ color: "#EF4444", "&:hover": { bgcolor: "#FEF2F2" } }}
                      >
                        <DeleteIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Box>

                    {/* Primary Grid Fields */}
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <TextField
                          fullWidth
                          label="Color Code *"
                          value={v.colorCode}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.colorCode`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variations.${index}.colorCode`}
                          error={Boolean(vTouched?.colorCode && vErrors?.colorCode)}
                          helperText={vTouched?.colorCode && vErrors?.colorCode}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <TextField
                          fullWidth
                          label="Size *"
                          value={v.size}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.size`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variations.${index}.size`}
                          error={Boolean(vTouched?.size && vErrors?.size)}
                          helperText={vTouched?.size && vErrors?.size}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <TextField
                          fullWidth
                          label="DBL (Bridge Size) *"
                          value={v.dbl}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.dbl`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variations.${index}.dbl`}
                          error={Boolean(vTouched?.dbl && vErrors?.dbl)}
                          helperText={vTouched?.dbl && vErrors?.dbl}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <TextField
                          fullWidth
                          label="Temple Length"
                          value={v.templeLength}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.templeLength`, e.target.value)
                          }
                          placeholder="e.g. 140"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
                        <TextField
                          fullWidth
                          label="Launch Season"
                          value={v.launchSeason}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.launchSeason`, e.target.value)
                          }
                          placeholder="e.g. Summer 2026"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                          fullWidth
                          label="Lens Color"
                          value={v.lensColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.lensColor`, e.target.value)
                          }
                          placeholder="e.g. Classic Brown"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                          fullWidth
                          label="Frame Front Color"
                          value={v.frameFrontColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.frameFrontColor`, e.target.value)
                          }
                          placeholder="e.g. Tortoise Shell"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                          fullWidth
                          label="Temple Color"
                          value={v.templeColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.templeColor`, e.target.value)
                          }
                          placeholder="e.g. Matte Black"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                          fullWidth
                          label="Subtopic 11"
                          value={v.subtopic11}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.subtopic11`, e.target.value)
                          }
                          placeholder="Subtopic tracking code"
                        />
                      </Grid>

                      {/* Stock SKU, SRP and Barcode Registry */}
                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          fullWidth
                          label="Barcoded SKU *"
                          value={v.sku}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.sku`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variations.${index}.sku`}
                          error={Boolean(vTouched?.sku && vErrors?.sku)}
                          helperText={vTouched?.sku && vErrors?.sku}
                          placeholder="e.g. SKU-RAY-MUM-01"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          fullWidth
                          label="Retail Price SRP (₹) *"
                          value={v.price}
                          onBlur={formik.handleBlur}
                          name={`variations.${index}.price`}
                          error={Boolean(vTouched?.price && vErrors?.price)}
                          helperText={vTouched?.price && vErrors?.price}
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
                          placeholder="e.g. 4500"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <TextField
                          fullWidth
                          label="Barcode Identifier"
                          value={v.barcode}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.barcode`, e.target.value)
                          }
                          slotProps={{
                            input:{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Button
                                  variant="text"
                                  onClick={() =>
                                    formik.setFieldValue(`variations.${index}.barcode`, generateEANBarcode())
                                  }
                                  startIcon={<AutoFixHighIcon />}
                                  size="small"
                                  sx={{ textTransform: "none", fontWeight: 700 }}
                                >
                                  Generate
                                </Button>
                              </InputAdornment>
                            ),
                          }
                          }}
                          placeholder="EAN check bar"
                        />
                      </Grid>

                      {/* Location Based Pricing Sub-Matrix */}
                      <Grid size={{ xs: 12 }}>
                        <Divider sx={{ my: 1.5 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#64748B", mb: 2 }}>
                          Location-Based Branch Pricing Matrix (INR)
                        </Typography>
                        <Grid container spacing={2}>
                          {v.branchPricing.map((bp, bpIdx) => (
                            <Grid size={{ xs: 12, sm: 4 }} key={bpIdx}>
                              <TextField
                                fullWidth
                                label={`${bp.location} Price`}
                                value={bp.price}
                                type="number"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  formik.setFieldValue(
                                    `variations.${index}.branchPricing.${bpIdx}.price`,
                                    val === "" ? "" : Number(val)
                                  );
                                }}
                                placeholder={`Base SRP: ₹${v.price || "N/A"}`}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>

                      {/* Multiple picture additions */}
                      <Grid size={{ xs: 12 }}>
                        <Divider sx={{ my: 1.5 }} />
                        <VariationImageUpload formik={formik} index={index} />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </>
        )}
      </FieldArray>
    </Box>
  );
}