"use client";

import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Card,
  Box,
} from "@mui/material";
import { FieldArray, FormikProps } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { FrameFormValues } from "./types";
import VariationImageUpload from "./ImageUpload";

type Props = {
  formik: FormikProps<FrameFormValues>;
};

export default function FrameVariationForm({ formik }: Props) {
  return (
    <>
      <FieldArray name="variations">
        {({ push, remove }) => (
          <>
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1, mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#334155" }}>
                  4. Eyewear Frame Color & Size Variations
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
              
              const vErrors = (errorsArray && typeof errorsArray === "object" && Array.isArray(errorsArray)) 
                ? (errorsArray[index] as any) 
                : undefined;
                
              const vTouched = (touchedArray && typeof touchedArray === "object" && Array.isArray(touchedArray)) 
                ? (touchedArray[index] as any) 
                : undefined;

              return (
                <Grid size={{ xs: 12 }} key={index}>
                  <Card sx={{ p: 3, border: "1px dashed #CBD5E1", borderRadius: "16px", bgcolor: "#FAFAFA", mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#475569" }}>
                        Variation #{index + 1}
                      </Typography>
                      <IconButton 
                        type="button" 
                        onClick={() => remove(index)}
                        sx={{ color: "#EF4444", "&:hover": { bgcolor: "#FEF2F2" } }}
                      >
                        <DeleteIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Box>

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
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

                      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
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

                      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <TextField
                          fullWidth
                          label="DBL *"
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

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
                        />
                      </Grid>

                      {/* Additional ERP Variation Specs */}
                      <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <TextField
                          fullWidth
                          label="Temple Length"
                          value={v.templeLength}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.templeLength`, e.target.value)
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                        <TextField
                          fullWidth
                          label="Lens Color"
                          value={v.lensColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.lensColor`, e.target.value)
                          }
                          placeholder="e.g. Green Classic"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                        <TextField
                          fullWidth
                          label="Front Color"
                          value={v.frameFrontColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.frameFrontColor`, e.target.value)
                          }
                          placeholder="e.g. Tortoise"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                        <TextField
                          fullWidth
                          label="Temple Color"
                          value={v.templeColor}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.templeColor`, e.target.value)
                          }
                          placeholder="e.g. Gold Metal"
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                        <TextField
                          fullWidth
                          label="System Barcode"
                          value={v.barcode}
                          onChange={(e) =>
                            formik.setFieldValue(`variations.${index}.barcode`, e.target.value)
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
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
    </>
  );
}