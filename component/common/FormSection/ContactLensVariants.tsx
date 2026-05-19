"use client";

import { ContactLens, ContactLensVariant } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  FieldArray,
  FormikErrors,
  FormikProps,
  FormikTouched,
} from "formik";
import FormSection from "../FormSection";

type Props = {formik: FormikProps<ContactLens>};

export default function ContactLensVariants({ formik}: Props) {

  const generateEANBarcode = () => {
      let result = "890";
      for (let i = 0;i < 9;i++) {
        result += Math.floor( Math.random() * 10);
      }
      let sum = 0;
      for ( let i = 0; i < result.length; i++) {
        sum += parseInt(result[i]) * (i % 2 === 0 ? 1 : 3);
      }
      const checkDigit = (10 - (sum % 10)) % 10;
      return ( result + checkDigit );
    };

  const defaultBranchPricing = [
    {
      location: "Mumbai Flagship Store",
      price: "" as const,
    },
    {
      location: "Delhi CP Store",
      price: "" as const,
    },
    {
      location: "Bangalore Warehouse Hub",
      price:"" as const,
    },
  ];

  const sphericalPowers:
    string[] = [];
  for ( let p = 8.0; p >= -12.0; p -= 0.25) {
    const formatted = p > 0 ? `+${p.toFixed(2)}` : p === 0 ? "Plano (0.00)" : p.toFixed(2);
    sphericalPowers.push(formatted);
  }

  const cylindricalPowers:
    string[] = ["0.00"];
  for ( let c = -0.25;c >= -4.0; c -= 0.25) {
    cylindricalPowers.push( c.toFixed(2));
  }
  const axisValues:
    string[] = ["N/A"];
  for (let a = 10;a <= 180;a += 10) {
    axisValues.push( `${a}°`);
  }

  const addPowers = ["N/A","+0.75","+1.00","+1.25","+1.50","+1.75","+2.00","+2.25","+2.50","+2.75","+3.00"];
  const clColors = ["Clear","Aqua Blue","Emerald Green","Royal Hazel","Classic Grey","Honey Brown","Sapphire Blue","Amethyst Violet",];

  return (
    <FieldArray name="variants">
      {({ push, remove}) => (
        <FormSection
          title="4. Contact Lens Power & Color Variations"
          description="Manage lens power combinations, tint colors and outlet pricing variations."
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: 3,
            }}
          >
            <Button
              type="button"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() =>
                push({
                  sku: "",
                  barcode: "",
                  sphericalPower: "Plano (0.00)",
                  cylindricalPower:"0.00",
                  axis: "N/A",
                  additional: "N/A",
                  color: "Clear",
                  branchPricing: [...defaultBranchPricing],
                })
              }

              sx={{
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "none",
              }}
            >
              Add Variant
            </Button>
          </Box>
          {(formik.values.variants || []).map(
            ( v: ContactLensVariant, index ) => {
              const errorsArray = formik.errors.variants;
              const touchedArray = formik.touched.variants;
              const vErrors = Array.isArray(errorsArray)
                  ? (errorsArray[index] as FormikErrors<ContactLensVariant>) : undefined;
              const vTouched = Array.isArray( touchedArray )
                  ? ( touchedArray[ index ] as FormikTouched<ContactLensVariant>) : undefined;
              return (
                <Grid size={{ xs: 12 }} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      border:"1px solid #E2E8F0",
                      borderRadius:"20px",
                      background:"#FFFFFF",
                      boxShadow:"none",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        mb: 3,
                      }}
                    >

                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#334155",
                        }}
                      >
                        Variant :
                        { index + 1}
                      </Typography>
                      <IconButton
                        type="button"
                        onClick={() => remove( index )}
                        sx={{
                          color: "#EF4444",
                          "&:hover":
                            {
                              bgcolor:
                                "#FEF2F2",
                            },
                        }}
                      >
                        <CloseIcon
                          sx={{fontSize: 18}}/>
                      </IconButton>
                    </Box>
                    <Grid container spacing={2}>
                      <Grid
                        size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                          fullWidth
                          label="Barcoded SKU *"
                          value={ v.sku }
                          onChange={(e) =>
                            formik.setFieldValue(`variants.${index}.sku`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variants.${index}.sku`}
                          error={Boolean(
                            vTouched?.sku &&
                              vErrors?.sku
                          )}
                          helperText={ vTouched?.sku && vErrors?.sku}
                          placeholder="e.g. CL-BAUSCH-PLN-01"
                        />
                      </Grid>
                      <Grid
                        size={{ xs: 12, sm: 6, md: 3}}>
                        <TextField
                          fullWidth
                          label="Barcode Identifier *"
                          value={v.barcode}
                          onChange={(e) =>
                            formik.setFieldValue(`variants.${index}.barcode`,e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variants.${index}.barcode`}
                          error={Boolean(
                            vTouched?.barcode &&
                              vErrors?.barcode
                          )}
                          helperText={ vTouched?.barcode && vErrors?.barcode }
                          placeholder="EAN-13"
                          slotProps={{
                            input: {
                              endAdornment:
                                (
                                  <InputAdornment position="end">
                                    <Button variant="text"
                                      onClick={() =>
                                        formik.setFieldValue(
                                          `variants.${index}.barcode`,
                                          generateEANBarcode()
                                        )
                                      }
                                      startIcon={<AutoFixHighIcon />}
                                      size="small"
                                      sx={{
                                        textTransform:"none",
                                        fontWeight:700,
                                      }}
                                    >
                                      Generate
                                    </Button>
                                  </InputAdornment>
                                ),
                            },
                          }}
                        />
                      </Grid>
                      <Grid
                        size={{ xs: 12, sm: 4, md: 2}}>
                        <TextField
                          select
                          fullWidth
                          label="Spherical (SPH) *"
                          value={ v.sphericalPower }
                          onChange={(e) =>
                            formik.setFieldValue( `variants.${index}.sphericalPower`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variants.${index}.sphericalPower`}
                          error={Boolean( vTouched?.sphericalPower && vErrors?.sphericalPower)}
                          helperText={ vTouched?.sphericalPower && vErrors?.sphericalPower}
                        >
                          {sphericalPowers.map(
                            (pow) => (
                              <MenuItem
                                key={pow}
                                value={pow}
                              >
                                {pow}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4,md: 2 }}>
                        <TextField
                          select
                          fullWidth
                          label="Cylindrical (CYL)"
                          value={
                            v.cylindricalPower ||
                            "0.00"
                          }
                          onChange={(e) =>
                            formik.setFieldValue(`variants.${index}.cylindricalPower`, e.target.value)
                          }
                        >
                          {cylindricalPowers.map(
                            (pow) => (
                              <MenuItem
                                key={pow}
                                value={pow}
                              >
                                {pow}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid size={{xs: 12,sm: 4,md: 2 }}>
                        <TextField
                          select
                          fullWidth
                          label="Axis (AX)"
                          value={ v.axis || "N/A" }
                          onChange={(e) =>
                            formik.setFieldValue( `variants.${index}.axis`, e.target.value )
                          }
                        >
                          {axisValues.map(
                            (ax) => (
                              <MenuItem
                                key={ax}
                                value={ax}
                              >
                                {ax}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField
                          select
                          fullWidth
                          label="ADD Power (Additional)"
                          value={ v.additional || "N/A" }
                          onChange={(e) =>
                            formik.setFieldValue( `variants.${index}.additional`, e.target.value)
                          }
                        >
                          {addPowers.map(
                            (add) => (
                              <MenuItem
                                key={add}
                                value={add}
                              >
                                {add}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid
                        size={{ xs: 12, sm: 6, md: 4}}>
                        <TextField
                          select
                          fullWidth
                          label="Lens Color/Tint *"
                          value={ v.color || "Clear" }
                          onChange={(e) =>
                            formik.setFieldValue( `variants.${index}.color`, e.target.value)
                          }
                          onBlur={formik.handleBlur}
                          name={`variants.${index}.color`}
                          error={Boolean( vTouched?.color && vErrors?.color)}
                          helperText={ vTouched?.color && vErrors?.color }
                        >
                          {clColors.map(
                            (col) => (
                              <MenuItem
                                key={col}
                                value={col}
                              >
                                {col}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12,md: 4}}>
                        <TextField
                          fullWidth
                          label="Retail Price SRP (₹) *"
                          value={formik.values.mrp}
                          disabled
                          placeholder="Defined at main product level"
                          helperText="Controlled by the main MRP financial limit."
                        />
                      </Grid>
                      <Grid
                        size={{ xs: 12}}>
                        <Divider
                          sx={{
                            my: 1.5,
                          }}
                        />
                        <Typography
                          sx={{
                            fontWeight:700,
                            fontSize: "13px",
                            color: "#64748B",
                            mb: 2,
                          }}
                        >
                          Location-Based Outlet Pricing Matrix (INR)
                        </Typography>
                        <Grid container spacing={2} >
                          {(v.branchPricing || defaultBranchPricing).map(
                            (
                              bp: {
                                location: string;
                                price: number | "";
                              },
                              bpIdx: number
                            ) => (
                              <Grid size={{ xs: 12, sm: 4}} key={bpIdx}>
                                <TextField
                                  fullWidth
                                  label={`${bp.location} Price`}
                                  value={ bp.price || ""}
                                  type="number"
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    formik.setFieldValue(
                                      `variants.${index}.branchPricing.${bpIdx}.price`,
                                      val === "" ? "" : Number( val )
                                    );
                                  }}
                                  placeholder={`MRP limit: ₹${formik.values.mrp || "N/A"}`}
                                />
                              </Grid>
                            )
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            }
          )}
        </FormSection>
      )}
    </FieldArray>
  );
}