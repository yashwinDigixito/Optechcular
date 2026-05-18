"use client";

import { ContactLensFormValues } from "@/assets/types";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FieldArray, FormikProps } from "formik";

type Props = {
  formik: FormikProps<ContactLensFormValues>;
};

export default function ContactLensVariants({ formik }: Props) {
  return (
    <FieldArray name="variants">
      {({ push, remove }) => (
        <>
          {formik.values.variants.length > 0 && (
            <>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontWeight: 600 }}>
                  Contact Lens Details
                </Typography>
              </Grid>

              {formik.values.variants.map((v, index) => (
                <Grid container spacing={2} key={index}>
                  
                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="SKU"
                      value={v.sku}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.sku`, e.target.value)
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="Barcode"
                      value={v.barcode}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.barcode`, e.target.value)
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="Spherical"
                      value={v.sphericalPower}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.sphericalPower`, e.target.value)
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="Cylindrical"
                      value={v.cylindricalPower}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.cylindricalPower`, e.target.value)
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="Axis"
                      value={v.axis}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.axis`, e.target.value)
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                      fullWidth
                      label="Color"
                      value={v.color}
                      onChange={(e) =>
                        formik.setFieldValue(`variants.${index}.color`, e.target.value)
                      }
                    />
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
            sx={{ mt: 2 }}
            onClick={() =>
              push({
                sku: "",
                barcode: "",
                sphericalPower: "",
                cylindricalPower: "",
                axis: "",
                additional: "",
                color: "",
              })
            }
          >
            {formik.values.variants.length === 0
              ? "+ Add Contact Lens Details"
              : "+ Add Another Contact Lens Details"}   
          </Button>
        </>
      )}
    </FieldArray>
  );
}