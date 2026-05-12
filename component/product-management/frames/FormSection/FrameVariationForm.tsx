"use client";

import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { FieldArray, FormikProps } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
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
           {formik.values.variations.length > 0 && (
            <>
            <Grid size={{ xs: 12 }}>
              <Typography sx={{ fontWeight: 600 }}>
                Variations
              </Typography>
            </Grid>
            {formik.values.variations.map((v, index) => (
              <Grid container spacing={2} key={index}>
                
                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Color Code"
                    value={v.colorCode}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.colorCode`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Size"
                    value={v.size}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.size`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="DBL"
                    value={v.dbl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.dbl`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="SKU"
                    value={v.sku}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.sku`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="SRP"
                    value={v.price}
                    onChange={(e) => {
                      const val = e.target.value;
                    
                      if (val === "") {
                        formik.setFieldValue(`variations.${index}.price`, "");
                        return;
                      }
                    
                      if (!isNaN(Number(val))) {
                        formik.setFieldValue(
                          `variations.${index}.price`,
                          Number(val)
                        );
                      }
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Temple Length"
                    value={v.templeLength}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.templeLength`,
                        e.target.value
                      )
                    }
                  />
                </Grid>
                
                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Launch Season"
                    value={v.launchSeason}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.launchSeason`,
                        e.target.value
                      )
                    }
                  />
                </Grid>
                
                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Lens Color"
                    value={v.lensColor}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.lensColor`,
                        e.target.value
                      )
                    }
                  />
                </Grid>
                
                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Frame Front Color"
                    value={v.frameFrontColor}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.frameFrontColor`,
                        e.target.value
                      )
                    }
                  />
                </Grid>
                
                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Temple Color"
                    value={v.templeColor}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.templeColor`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 2 }}>
                  <TextField
                    fullWidth
                    label="Barcode"
                    value={v.barcode}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `variations.${index}.barcode`,
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <VariationImageUpload formik={formik} index={index} />
                </Grid>

                <Grid size={{ xs: 12, md: 1 }}>
                  <IconButton type="button" onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
            </Grid>
            ))}
          </>
          )}
            <Button
              type="button"
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
              + Add Variation
            </Button>
          </>
        )}
      </FieldArray>
    </>
  );
}