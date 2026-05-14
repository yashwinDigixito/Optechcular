"use client";

import BasicInfo from "@/component/product-management/frames/FormSection/BasicInfo";
import FrameVariationForm from "@/component/product-management/frames/FormSection/FrameVariationForm";
import ProductSpecs from "@/component/product-management/frames/FormSection/ProductSpecs";
import RimDetails from "@/component/product-management/frames/FormSection/RimDetails";
import TaxSection from "@/component/product-management/frames/FormSection/TaxSection";
import { frameValidation } from "@/component/product-management/frames/FormSection/validations";
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
import { FrameFormValues } from "./FormSection/types";
export default function FrameForm() {

  const formik = useFormik<FrameFormValues>({
    initialValues: {
      brand: "",
      modelNo: "",
      rimType: "Full Rim",
      rimShape: "",
      templeMaterial: "",
      category: "",
      hsn: "",
      tax: "",
      variations: [],
      images: [],
    },
    validationSchema: frameValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
              <Link
                href="/product/frames"
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
        Add Frame
        </Typography>
        <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>

            <BasicInfo formik={formik} />
            <RimDetails formik={formik} />
            <ProductSpecs formik={formik} />
            <TaxSection formik={formik} />
            <FrameVariationForm formik={formik} />

            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, height: 48, borderRadius: "12px" }}
              >
                Save Frame
              </Button>
            </Grid>

          </Grid>
        </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}