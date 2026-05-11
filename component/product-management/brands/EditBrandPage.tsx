"use client";

import {
    useState,
} from "react";

import {
    Box,
    Button,
    Card,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import {
    brands,
} from "@/assets/genericdata";

export default function EditBrandPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [brandData] =
    useState(brands);

  const [formData, setFormData] =
    useState({
      brandName: "",
      category: "",
      brandGroup: "",
      status: "",
    });

  useState(() => {

    params.then(
      ({ id }) => {

        const brand =
          brandData.find(
            (item) =>
              item.id === id
          );

        if (brand) {

          setFormData({
            brandName:
              brand.brandName,

            category:
              brand.category,

            brandGroup:
              brand.brandGroup,

            status:
              brand.status,
          });
        }
      }
    );
  });

  const handleChange = (
    field: string,
    value: string
  ) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Edit Brand
      </Typography>

      {/* FORM CARD */}
      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.06)",
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {/* BRAND NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand Name"
              value={
                formData.brandName
              }
              onChange={(e) =>
                handleChange(
                  "brandName",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Category"
              value={
                formData.category
              }
              onChange={(e) =>
                handleChange(
                  "category",
                  e.target.value
                )
              }
            >
              <MenuItem value="Frame">
                Frame
              </MenuItem>

              <MenuItem value="Contact Lens">
                Contact Lens
              </MenuItem>

              <MenuItem value="Accessories">
                Accessories
              </MenuItem>

              <MenuItem value="Optical Lens">
                Optical Lens
              </MenuItem>
            </TextField>
          </Grid>

          {/* BRAND GROUP */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand Group"
              value={
                formData.brandGroup
              }
              onChange={(e) =>
                handleChange(
                  "brandGroup",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Status"
              value={
                formData.status
              }
              onChange={(e) =>
                handleChange(
                  "status",
                  e.target.value
                )
              }
            >
              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* SAVE BUTTON */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            height: "48px",
            borderRadius: "12px",
            px: 4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Update Brand
        </Button>
      </Card>
    </Box>
  );
}