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

const groupTypes = [
  "Premium Brand Group",
  "Value Brand Group",
  "Luxury Brand Group",
];

const parentCategories = [
  "Frame",
  "Contact Lens",
  "Optical Lens",
  "Accessories",
];

const priorityLevels = ["High", "Medium", "Low"];

const validationSchema = yup.object({
  groupName: yup.string().required("Group name is required"),
  groupType: yup.string().required("Group type is required"),
  parentCategory: yup.string().required("Parent category is required"),
  priorityLevel: yup.string().required("Priority level is required"),
  managerName: yup.string().required("Manager name is required"),
  managerEmail: yup
    .string()
    .email("Enter valid email")
    .required("Manager email is required"),
  managerPhone: yup.string().required("Manager phone is required"),
  status: yup.string().required("Status is required"),
});

export default function BrandGroupForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      groupId: "",
      groupName: "",
      groupType: "",
      status: "Active",

      description: "",
      parentCategory: "",
      priorityLevel: "Medium",
      displayOrder: 1,

      totalBrands: 0,
      activeBrands: 0,
      totalProducts: 0,
      revenueContribution: 0,

      managerName: "",
      managerEmail: "",
      managerPhone: "",

      notes: "",

      createdOn: new Date().toISOString().split("T")[0],
      updatedDate: "",
      createdBy: "Admin",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log("Brand Group Data Saved Successfully:", values);
      router.push("/products/brand-groups");
    },
  });

  return (
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/brand-groups"
          style={{ textDecoration: "none" }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back to Brand Groups
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
          Add Brand Group
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            mb: 4,
            fontSize: "14px",
          }}
        >
          Create and manage premium, budget, and luxury brand group classifications.
        </Typography>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>

              <FormSection
                title="1. Brand Group Information"
                description="Configure group identity, classification, and operational settings."
              >
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Group ID"
                    name="groupId"
                    value={formik.values.groupId}
                    onChange={formik.handleChange}
                    placeholder="e.g. BG-1001"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Group Name *"
                    name="groupName"
                    value={formik.values.groupName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.groupName &&
                      Boolean(formik.errors.groupName)
                    }
                    helperText={
                      formik.touched.groupName &&
                      formik.errors.groupName
                    }
                    placeholder="e.g. Premium Brands"
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Group Type *"
                    name="groupType"
                    value={formik.values.groupType}
                    onChange={formik.handleChange}
                  >
                    {groupTypes.map((type) => (
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
                    label="Parent Category *"
                    name="parentCategory"
                    value={formik.values.parentCategory}
                    onChange={formik.handleChange}
                  >
                    {parentCategories.map((cat) => (
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
                    label="Priority Level *"
                    name="priorityLevel"
                    value={formik.values.priorityLevel}
                    onChange={formik.handleChange}
                  >
                    {priorityLevels.map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
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
              </FormSection>

              <FormSection
                title="2. Performance Statistics"
                description="Track group performance and business metrics."
              >
                {[
                  ["Total Brands", "totalBrands"],
                  ["Active Brands", "activeBrands"],
                  ["Total Products", "totalProducts"],
                  ["Revenue Contribution", "revenueContribution"],
                  ["Display Order", "displayOrder"],
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

              <FormSection
                title="3. Manager Information"
                description="Assign group manager and communication details."
              >
                {[
                  ["Manager Name *", "managerName"],
                  ["Manager Email *", "managerEmail"],
                  ["Manager Phone *", "managerPhone"],
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

              <FormSection
                title="4. Additional Information"
                description="Add notes and extra operational information."
              >
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
                    height: 52,
                    borderRadius: "14px",
                    px: 4,
                    fontWeight: 700,
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: "15px",
                  }}
                >
                  Save Group
                </Button>
              </Grid>

            </Grid>
          </form>
        </FormikProvider>
      </Card>
    </Box>
  );
}