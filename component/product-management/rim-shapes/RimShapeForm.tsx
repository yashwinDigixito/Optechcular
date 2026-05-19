"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import FormSection from "@/component/common/FormSection";

const validationSchema = yup.object({
  shapeName: yup.string().required("Shape name is required"),
  rimShapeCode: yup.string().required("Rim shape code is required"),
  shapeCategory: yup.string().required("Shape category is required"),
  applicableFor: yup.string().required("Applicable for is required"),
  categoryName: yup.string().required("Category name is required"),
  brandGroup: yup.string().required("Brand group is required"),
  status: yup.string().required("Status is required"),
});

export default function RimShapeForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      rimShapeId: "",
      rimShapeCode: "",
      shapeName: "",
      shapeCategory: "",

      applicableFor: "",
      categoryName: "",
      brandGroup: "",
      linkedBrands: "",
      materialUsed: "",

      totalProducts: 0,

      status: "",

      description: "",
      notes: "",

      createdOn: new Date().toISOString().split("T")[0],
      updatedDate: "",
      createdBy: "Admin",
    },

    validationSchema,

    onSubmit: (values) => {
      const payload = {
        ...values,
        linkedBrands: values.linkedBrands
          ? values.linkedBrands.split(",").map((item) => item.trim())
          : [],
        materialUsed: values.materialUsed
          ? values.materialUsed.split(",").map((item) => item.trim())
          : [],
      };

      console.log("Rim Shape Saved Successfully:", payload);

      router.push("/products/rim-shapes");
    },
  });

  return (
    <Box
      sx={{
        p: 3,
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/rim-shapes"
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
            Back to Rim Shapes
          </Button>
        </Link>
      </Box>

      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            mb: 1,
            color: "#0F172A",
          }}
        >
          Add Rim Shape
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            mb: 4,
            fontSize: "14px",
          }}
        >
          Add rim shape details linked with brand, brand group, category, and material information.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>

              <FormSection
                title="1. Rim Shape Information"
                description="Add rim shape identity, category, and brand group information."
              >
                {[
                  ["Rim Shape ID", "rimShapeId", "e.g. RIM-1001"],
                  ["Rim Shape Code *", "rimShapeCode", "e.g. ROUND-001"],
                  ["Shape Name *", "shapeName", "e.g. Round"],
                  ["Shape Category *", "shapeCategory", "e.g. Round"],
                  ["Applicable For *", "applicableFor", "e.g. Frame"],
                  ["Category Name *", "categoryName", "e.g. Frame"],
                  ["Brand Group *", "brandGroup", "e.g. Premium Brands"],
                  ["Status *", "status", "e.g. Active"],
                ].map(([label, name, placeholder]) => (
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    key={name}
                  >
                    <TextField
                      fullWidth
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        (formik.touched as any)[name] &&
                        Boolean((formik.errors as any)[name])
                      }
                      helperText={
                        (formik.touched as any)[name] &&
                        (formik.errors as any)[name]
                      }
                      placeholder={placeholder}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="2. Brand & Material Information"
                description="Link rim shape with brands and material types."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Linked Brands"
                    name="linkedBrands"
                    value={formik.values.linkedBrands}
                    onChange={formik.handleChange}
                    placeholder="e.g. RayBan, Police"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Material Used"
                    name="materialUsed"
                    value={formik.values.materialUsed}
                    onChange={formik.handleChange}
                    placeholder="e.g. Metal, Titanium"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Total Products"
                    name="totalProducts"
                    value={formik.values.totalProducts}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </FormSection>

              <FormSection
                title="3. Additional Information"
                description="Add description and notes for operational reference."
              >
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    label="Notes"
                    name="notes"
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </FormSection>

              {formik.submitCount > 0 && !formik.isValid && (
                <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "12px",
                      bgcolor: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#DC2626",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      Please review the highlighted red sections above.
                    </Typography>
                  </Box>
                </Grid>
              )}

              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    height: "52px",
                    borderRadius: "14px",
                    px: 4,
                    textTransform: "none",
                    fontWeight: 700,
                    boxShadow: "none",
                    fontSize: "15px",
                  }}
                >
                  Save Rim Shape
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}