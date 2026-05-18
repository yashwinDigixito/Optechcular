"use client";

import { FrameFormValues } from "@/assets/types";
import FormSection from "@/component/common/FormSection";
import BasicInfo from "@/component/common/formSection/BasicInfo";
import FrameVariationForm from "@/component/common/formSection/FrameVariationForm";
import ProductSpecs from "@/component/common/formSection/ProductSpecs";
import RimDetails from "@/component/common/formSection/RimDetails";
import TaxSection from "@/component/common/formSection/TaxSection";
import { frameValidation } from "@/component/common/formSection/validations";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

export default function FrameForm() {
  const formik = useFormik<FrameFormValues>({
    initialValues: {
      brand: "",
      modelNo: "",
      manufacturer: "",
      gender: "Unisex",
      rimType: "Full Rim",
      rimShape: "",
      lensWidth: "",
      lensHeight: "",
      bridgeWidth: "",
      templeMaterial: "",
      category: "Optical Frame",
      material: "Acetate",
      weight: "",
      shelfLocation: "",
      hsn: "",
      tax: "",
      costPrice: "",
      minStockLevel: "",
      variations: [],
      images: [],
    },
    validationSchema: frameValidation,
    onSubmit: (values) => {
      console.log("Frame Saved Successfully in ERP Roster:", values);
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Back button */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/frames"
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
            Back to Eyewear Inventory
          </Button>
        </Link>
      </Box>

      {/* Main card */}
      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Add Eyewear Frame
        </Typography>
        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Register an eyewear frame model with custom dimensions, material specs, purchase margins, and variations.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              
              <FormSection 
                title="1. Eyewear Brand Details" 
                description="General brand attributes, manufacturer registries, and demographic target audience."
              >
                <BasicInfo formik={formik} />
              </FormSection>

              <FormSection 
                title="2. Optical & Rim Specifications" 
                description="Dimensions, sizes, and shape configurations required by custom lens laboratory cutters."
              >
                <RimDetails formik={formik} />
              </FormSection>

              <FormSection 
                title="3. Weight & Material Composition" 
                description="Physical specifications, frame compounds, and stock shelf storage locator tags."
              >
                <ProductSpecs formik={formik} />
              </FormSection>

              <FormSection 
                title="4. Tax & Financial Audit Specs" 
                description="Compliance HSN tracking codes, VAT/tax zones, purchasing cost lines, and safety stock reorder triggers."
              >
                <TaxSection formik={formik} />
              </FormSection>

              <Grid size={{xs:12}} sx={{ mb: 4 }}>
                <FrameVariationForm formik={formik} />
              </Grid>

              {/* Validation alert message if form has been submitted and contains errors */}
              {formik.submitCount > 0 && !formik.isValid && (
                <Grid size={{xs:12}} sx={{ mb: 2 }}>
                  <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FEF2F2", border: "1px solid #FCA5A5" }}>
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
                      Please review the highlighted red sections above.
                    </Typography>
                  </Box>
                </Grid>
              )}

              <Grid size={{xs:12}}>
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
                    fontSize: "15px"
                  }}
                >
                  Save Frame Record
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}