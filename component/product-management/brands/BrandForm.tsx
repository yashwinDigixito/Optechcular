"use client";

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
import * as yup from "yup";
import FormSection from "@/component/common/FormSection";

const categoriesList = [
  "Contact Lens",
  "Optical Lens",
  "Frame",
  "Accessories",
];

const brandTypes = ["Manufacturer", "Supplier", "Distributor", "Private Label"];

const brandGroups = ["Premium Brands", "Budget Brands", "Luxury Brands"];

const validationSchema = yup.object({
  brandName: yup.string().required("Brand name is required"),
  brandGroup: yup.string().required("Brand group is required"),
  category: yup.string().required("Category is required"),
  status: yup.string().required("Status is required"),
  contactPerson: yup.string().required("Contact person is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

export default function BrandForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      brandId: "",
      brandName: "",
      brandLogo: "",
      brandType: "",
      brandGroup: "",
      category: "",
      status: "Active",

      contactPerson: "",
      email: "",
      phone: "",
      website: "",

      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",

      gstNumber: "",
      panNumber: "",

      totalProducts: 0,
      activeProducts: 0,
      totalOrders: 0,
      revenue: 0,

      description: "",
      notes: "",

      createdDate: new Date().toISOString().split("T")[0],
      updatedDate: "",
      createdBy: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Brand Data Saved Successfully:", values);
      router.push("/products/brands");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/products/brands" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} sx={{ textTransform: "none", fontWeight: 600 }}>
            Back to Brands
          </Button>
        </Link>
      </Box>

      <Card sx={{ p: 4, borderRadius: "24px", border: "1px solid #E2E8F0", boxShadow: "none" }}>
        <Typography sx={{ fontSize: 32, fontWeight: 700, mb: 1, color: "#0F172A" }}>
          Add Brand
        </Typography>

        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Register brand details, contact information, address, tax details, and business statistics.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <FormSection
                title="1. Brand Identity & Classification"
                description="Add brand basic details, category, group, and status."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Brand ID"
                    name="brandId"
                    value={formik.values.brandId}
                    onChange={formik.handleChange}
                    placeholder="e.g. BRD-001"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Brand Name *"
                    name="brandName"
                    value={formik.values.brandName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.brandName && Boolean(formik.errors.brandName)}
                    helperText={formik.touched.brandName && formik.errors.brandName}
                    placeholder="e.g. RayBan"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Brand Logo URL"
                    name="brandLogo"
                    value={formik.values.brandLogo}
                    onChange={formik.handleChange}
                    placeholder="Enter logo image URL"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Brand Type"
                    name="brandType"
                    value={formik.values.brandType}
                    onChange={formik.handleChange}
                  >
                    {brandTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Brand Group *"
                    name="brandGroup"
                    value={formik.values.brandGroup}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.brandGroup && Boolean(formik.errors.brandGroup)}
                    helperText={formik.touched.brandGroup && formik.errors.brandGroup}
                  >
                    {brandGroups.map((group) => (
                      <MenuItem key={group} value={group}>
                        {group}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Category *"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.category && Boolean(formik.errors.category)}
                    helperText={formik.touched.category && formik.errors.category}
                  >
                    {categoriesList.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Status *"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </TextField>
                </Grid>
              </FormSection>

              <FormSection title="2. Contact Information" description="Add contact person and communication details.">
                {[
                  ["Contact Person *", "contactPerson"],
                  ["Email *", "email"],
                  ["Phone *", "phone"],
                  ["Website", "website"],
                ].map(([label, name]) => (
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
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection title="3. Address Information" description="Add brand office or supplier address details.">
                {[
                  ["Address", "address"],
                  ["City", "city"],
                  ["State", "state"],
                  ["Country", "country"],
                  ["Postal Code", "postalCode"],
                ].map(([label, name]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection title="4. Tax Information" description="Add GST and PAN details if applicable.">
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="GST Number"
                    name="gstNumber"
                    value={formik.values.gstNumber}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="PAN Number"
                    name="panNumber"
                    value={formik.values.panNumber}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </FormSection>

              <FormSection title="5. Business Statistics" description="These values can be auto calculated later.">
                {[
                  ["Total Products", "totalProducts"],
                  ["Active Products", "activeProducts"],
                  ["Total Orders", "totalOrders"],
                  ["Revenue", "revenue"],
                ].map(([label, name]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={name}>
                    <TextField
                      fullWidth
                      type="number"
                      label={label}
                      name={name}
                      value={(formik.values as any)[name]}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                ))}
              </FormSection>

              <FormSection title="6. Additional Information" description="Add description and internal notes.">
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
                  <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FEF2F2", border: "1px solid #FCA5A5" }}>
                    <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "14px" }}>
                      Please review the highlighted red sections above. Make sure all required fields are filled.
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
                  Save Brand
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}