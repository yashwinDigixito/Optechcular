"use client";

import { ContactLens } from "@/assets/types";
import FormSection from "@/component/common/FormSection";
import ContactLensVariants from "@/component/common/formSection/ContactLensVariants";
import { contactLensValidation } from "@/component/common/formSection/validations";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactLensForm() {
  const router = useRouter();

  const formik = useFormik<ContactLens>({
    initialValues: {
  productCode: "",
  lensName: "",
  brand: "",
  productType: "Rx",
  powerType: "Spherical",
  modality: "Monthly",
  material: "",
  baseCurve: "",
  diameter: "",
  hsnCode: "",
  tax: "",
  mrp: "",
  sellingPrice: "",
  stock: "",
  status: "Active",
  variants: [],
},
    validationSchema: contactLensValidation,
    onSubmit: (values) => {
      console.log("Contact Lens Saved Successfully in ERP Roster:", values);
      router.push("/products/contact-lens");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Back button */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/contact-lens"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back
          </Button>
        </Link>
      </Box>

      {/* Main card */}
      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Add Contact Lens
        </Typography>
        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Register a professional contact lens brand with technical base curves, material modalities, and multi-power variation rosters.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              
              <FormSection
                title="1. Contact Lens Brand & Modality Specs"
                description="Power configuration style, modality lifespan classifications, and unique manufacturer codes."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Power Type *"
                    name="powerType"
                    value={formik.values.powerType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.powerType && Boolean(formik.errors.powerType)}
                    helperText={formik.touched.powerType && formik.errors.powerType}
                  >
                    <MenuItem value="Spherical">Spherical</MenuItem>
                    <MenuItem value="Astigmatism">Astigmatism</MenuItem>
                    <MenuItem value="Progressive">Progressive</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Select Brand *"
                    name="brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.brand && Boolean(formik.errors.brand)}
                    helperText={formik.touched.brand && formik.errors.brand}
                    placeholder="e.g. Bausch & Lomb"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Select Modality *"
                    name="modality"
                    value={formik.values.modality}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.modality && Boolean(formik.errors.modality)}
                    helperText={formik.touched.modality && formik.errors.modality}
                  >
                    <MenuItem value="Daily">Daily</MenuItem>
                    <MenuItem value="BiWeekly">BiWeekly</MenuItem>
                    <MenuItem value="Monthly">Monthly</MenuItem>
                    <MenuItem value="Quarterly">Quarterly</MenuItem>
                    <MenuItem value="Yearly">Yearly</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Product Code *"
                    name="productCode"
                    value={formik.values.productCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.productCode && Boolean(formik.errors.productCode)}
                    helperText={formik.touched.productCode && formik.errors.productCode}
                    placeholder="e.g. CL-SOFT-B2"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Product Name *"
                    name="productName"
                    value={formik.values.lensName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lensName && Boolean(formik.errors.lensName)}
                    helperText={formik.touched.lensName && formik.errors.lensName}
                    placeholder="e.g. Ultra Moisture Soft Lenses (6-Pack)"
                  />
                </Grid>
              </FormSection>

              <FormSection
                title="2. Technical & Material Parameters"
                description="Technical dimensional attributes and polymer composition tags for laboratory fittings."
              >
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    fullWidth
                    label="Base Curve (BC) *"
                    name="baseCurve"
                    value={formik.values.baseCurve}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.baseCurve && Boolean(formik.errors.baseCurve)}
                    helperText={formik.touched.baseCurve && formik.errors.baseCurve}
                    placeholder="e.g. 8.6"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    fullWidth
                    label="Diameter (DIA) *"
                    name="diameter"
                    value={formik.values.diameter}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.diameter && Boolean(formik.errors.diameter)}
                    helperText={formik.touched.diameter && formik.errors.diameter}
                    placeholder="e.g. 14.2"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    fullWidth
                    label="Select Material *"
                    name="material"
                    value={formik.values.material}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.material && Boolean(formik.errors.material)}
                    helperText={formik.touched.material && formik.errors.material}
                    placeholder="e.g. Silicone Hydrogel"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    label="Select Product Type *"
                    name="productType"
                    value={formik.values.productType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.productType && Boolean(formik.errors.productType)}
                    helperText={formik.touched.productType && formik.errors.productType}
                  >
                    <MenuItem value="Rx">Rx (Prescription)</MenuItem>
                    <MenuItem value="Stock">Stock (Over Counter)</MenuItem>
                  </TextField>
                </Grid>
              </FormSection>

              <FormSection
                title="3. Financial Compliance & MRP Limits"
                description="Government audit HSN codes, VAT percentages, and recommended retail price guidelines."
              >
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    label="HSN Code *"
                    name="hsn"
                    value={formik.values.hsnCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.hsnCode && Boolean(formik.errors.hsnCode)}
                    helperText={formik.touched.hsnCode && formik.errors.hsnCode}
                    placeholder="e.g. 90013000"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    label="Tax Rate % *"
                    value={formik.values.tax}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        formik.setFieldValue("tax", "");
                        return;
                      }
                      if (!isNaN(Number(val))) {
                        formik.setFieldValue("tax", Number(val));
                      }
                    }}
                    onBlur={formik.handleBlur}
                    name="tax"
                    error={formik.touched.tax && Boolean(formik.errors.tax)}
                    helperText={formik.touched.tax && formik.errors.tax}
                    placeholder="e.g. 18"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    fullWidth
                    label="Max Retail Price MRP (₹) *"
                    type="number"
                    value={formik.values.mrp}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        formik.setFieldValue("mrp", "");
                        return;
                      }
                      if (!isNaN(Number(val))) {
                        formik.setFieldValue("mrp", Number(val));
                      }
                    }}
                    onBlur={formik.handleBlur}
                    name="mrp"
                    error={formik.touched.mrp && Boolean(formik.errors.mrp)}
                    helperText={formik.touched.mrp && formik.errors.mrp}
                    placeholder="e.g. 1850"
                  />
                </Grid>
              </FormSection>

              <Grid size={{ xs: 12 }} sx={{ mb: 4 }}>
                <ContactLensVariants formik={formik} />
              </Grid>

              {/* Validation alert message if form has been submitted and contains errors */}
              {formik.submitCount > 0 && !formik.isValid && (
                <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
                  <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FEF2F2", border: "1px solid #FCA5A5" }}>
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
                      Make sure all variants have SPH powers, SKUs, and unique barcodes.
                    </Typography>
                  </Box>
                </Grid>
              )}

              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    height: 52,
                    borderRadius: "14px",
                    px: 4,
                    fontWeight: 700,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: "15px",
                  }}
                >
                  Save Contact Lens Record
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}