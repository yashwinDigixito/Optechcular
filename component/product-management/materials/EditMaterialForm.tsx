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
import * as React from "react";
import * as yup from "yup";
import { materials } from "@/assets/genericdata";
import FormSection from "@/component/common/FormSection";

const validationSchema = yup.object({
  materialName: yup.string().required("Material name is required"),
  materialCode: yup.string().required("Material code is required"),
  applicableFor: yup.string().required("Applicable for is required"),
  categoryName: yup.string().required("Category name is required"),
  brandGroup: yup.string().required("Brand group is required"),
  supplierName: yup.string().required("Supplier name is required"),
  warehouseLocation: yup.string().required("Warehouse location is required"),
  status: yup.string().required("Status is required"),
});

export default function EditMaterialPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const router = useRouter();

  const { id } = React.use(params);

  const material = React.useMemo(() => {
    return materials.find((item) => item.id === id);
  }, [id]);

  const formik = useFormik({
    initialValues: {
      materialId: material?.materialId || "",
      materialCode: material?.materialCode || "",
      materialName: material?.materialName || "",

      applicableFor: material?.applicableFor || "",
      categoryName: material?.categoryName || "",
      brandGroup: material?.brandGroup || "",
      linkedBrands: material?.linkedBrands?.join(", ") || "",

      purchasePrice: material?.purchasePrice || 0,
      sellingPrice: material?.sellingPrice || 0,
      tax: material?.tax || 0,
      hsnCode: material?.hsnCode || "",

      stockQuantity: material?.stockQuantity || 0,
      minimumStockLevel: material?.minimumStockLevel || 0,
      warehouseLocation: material?.warehouseLocation || "",

      supplierName: material?.supplierName || "",
      status: material?.status || "",

      description: material?.description || "",
      notes: material?.notes || "",

      createdOn: material?.createdOn || "",
      updatedDate: new Date().toISOString().split("T")[0],
      createdBy: material?.createdBy || "",
      lastModifiedBy: material?.lastModifiedBy || "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        ...values,
        linkedBrands: values.linkedBrands
          ? values.linkedBrands.split(",").map((item) => item.trim())
          : [],
      };

      console.log("Updated Material Data Successfully:", payload);
      router.push("/products/materials");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/products/materials" style={{ textDecoration: "none" }}>
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

      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "none",
        }}
      >
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Edit Material
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Update material details linked with brand, brand group, category, pricing, and stock information.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <FormSection
                title="1. Material Information"
                description="Update material identity, category, brand group, and applicable product type."
              >
                {[
                  ["Material ID", "materialId", "e.g. MAT-1001"],
                  ["Material Code *", "materialCode", "e.g. METAL-001"],
                  ["Material Name *", "materialName", "e.g. Metal"],
                  ["Applicable For *", "applicableFor", "e.g. Frame"],
                  ["Category Name *", "categoryName", "e.g. Frame"],
                  ["Brand Group *", "brandGroup", "e.g. Premium Brands"],
                  ["Linked Brands", "linkedBrands", "e.g. RayBan, Police"],
                  ["Status *", "status", "e.g. Active"],
                ].map(([label, name, placeholder]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
                      helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
                      placeholder={placeholder}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="2. Pricing & Tax Information"
                description="Update purchase, selling price, tax, and HSN code."
              >
                {[
                  ["Purchase Price", "purchasePrice"],
                  ["Selling Price", "sellingPrice"],
                  ["Tax %", "tax"],
                  ["HSN Code", "hsnCode"],
                ].map(([label, name]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type={name === "hsnCode" ? "text" : "number"}
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="3. Stock & Supplier Information"
                description="Update stock quantity, minimum level, warehouse, and supplier."
              >
                {[
                  ["Stock Quantity", "stockQuantity"],
                  ["Minimum Stock Level", "minimumStockLevel"],
                  ["Warehouse Location *", "warehouseLocation"],
                  ["Supplier Name *", "supplierName"],
                ].map(([label, name]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type={
                        name === "stockQuantity" || name === "minimumStockLevel"
                          ? "number"
                          : "text"
                      }
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={(formik.touched as any)[name] && Boolean((formik.errors as any)[name])}
                      helperText={(formik.touched as any)[name] && (formik.errors as any)[name]}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection
                title="4. Additional Information"
                description="Update description, notes, and modification information."
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

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Modified By"
                    name="lastModifiedBy"
                    value={formik.values.lastModifiedBy}
                    onChange={formik.handleChange}
                    placeholder="e.g. Manager"
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
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
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
                    height: 52,
                    borderRadius: "14px",
                    px: 4,
                    fontWeight: 700,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: "15px",
                  }}
                >
                  Update Material
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}