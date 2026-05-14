"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import { contactLensValidation } from "@/component/product-management/contact-lens/ContactLensFormSection/validations";
import { ContactLensFormValues } from "@/component/product-management/contact-lens/ContactLensFormSection/types";
import ContactLensVariants from "@/component/product-management/contact-lens/ContactLensFormSection/ContactLensVariants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function ContactLensForm() {

  const formik = useFormik<ContactLensFormValues>({
    initialValues: {
      powerType: "Spherical",
      brand: "",
      modality: "Monthly",
      productCode: "",
      productName: "",
      baseCurve: "",
      diameter: "",
      material: "",
      productType: "",
      hsn: "",
      tax: "",
      mrp: "",
      variants: [],
    },
    validationSchema: contactLensValidation,
    onSubmit: (values) => {
      console.log("Contact Lens:", values);
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
                    <Link
                      href="/products/contact-lens"
                      style={{
                        textDecoration:
                          "none",
                      }}
                    >
                      <Button
                        startIcon={
                          <ArrowBackIcon />
                        }
                        sx={{
                          textTransform:"none",
                          fontWeight:600,
                        }}
                      >
                        Back
                      </Button>
                    </Link>
                  </Box>
      
      <Card sx={{ p: 4, borderRadius: "24px" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 3 }}>
        Add Contact Lens
        </Typography>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>

              {/* BASIC INFO */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Power Type"
                  name="powerType"
                  value={formik.values.powerType}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Spherical">Spherical</MenuItem>
                  <MenuItem value="Astigmatism">Astigmatism</MenuItem>
                  <MenuItem value="Progressive">Progressive</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Brand"
                  name="brand"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                />
              </Grid>

              {/* USAGE */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Modality"
                  name="modality"
                  value={formik.values.modality}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="BiWeekly">BiWeekly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Quarterly">Quarterly</MenuItem>
                  <MenuItem value="Yearly">Yearly</MenuItem>
                </TextField>
              </Grid>

              {/* PRODUCT INFO */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Product Code"
                  name="productCode"
                  value={formik.values.productCode}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Product Name"
                  name="productName"
                  value={formik.values.productName}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Base Curve"
                  name="baseCurve"
                  value={formik.values.baseCurve}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Diameter"
                  name="diameter"
                  value={formik.values.diameter}
                  onChange={formik.handleChange}
                />
              </Grid>

              {/* CLASSIFICATION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Material"
                  name="material"
                  value={formik.values.material}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Product Type"
                  name="productType"
                  value={formik.values.productType}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Rx">Rx</MenuItem>
                  <MenuItem value="Stock">Stock</MenuItem>
                </TextField>
              </Grid>

              {/* PRICING */}
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="HSN Code"
                  name="hsn"
                  value={formik.values.hsn}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Tax %"
                  value={formik.values.tax}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") return formik.setFieldValue("tax", "");
                    if (!isNaN(Number(val)))
                      formik.setFieldValue("tax", Number(val));
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="MRP"
                  value={formik.values.mrp}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") return formik.setFieldValue("mrp", "");
                    if (!isNaN(Number(val)))
                      formik.setFieldValue("mrp", Number(val));
                  }}
                />
              </Grid>

              {/* VARIANTS */}
              <Grid size={{ xs: 12 }}>
                <ContactLensVariants formik={formik} />
              </Grid>

              {/* SUBMIT */}
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, height: 48, borderRadius: "12px" }}
                >
                  Save Contact Lens
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}