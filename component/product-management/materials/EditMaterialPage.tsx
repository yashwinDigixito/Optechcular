"use client";

import {
    useEffect,
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
    materials,
} from "@/assets/genericdata";

export default function EditMaterialPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      materialName: "",
      applicableFor: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const material =
          materials.find(
            (item) =>
              item.id === id
          );

        if (material) {

          setFormData({
            materialName:
              material.materialName,

            applicableFor:
              material.applicableFor,

            status:
              material.status,
          });
        }
      }
    );
  }, [params]);

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
        Edit Material
      </Typography>

      {/* FORM */}
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
          {/* MATERIAL NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Material Name"
              value={
                formData.materialName
              }
              onChange={(e) =>
                handleChange(
                  "materialName",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* APPLICABLE FOR */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Applicable For"
              value={
                formData.applicableFor
              }
              onChange={(e) =>
                handleChange(
                  "applicableFor",
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

              <MenuItem value="Optical Lens">
                Optical Lens
              </MenuItem>
            </TextField>
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

        {/* BUTTON */}
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
          Update Material
        </Button>
      </Card>
    </Box>
  );
}