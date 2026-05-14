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
  rimShapes,
} from "@/assets/genericdata";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function EditRimShapePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      shapeName: "",
      description: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const shape =
          rimShapes.find(
            (item) =>
              item.id === id
          );

        if (shape) {

          setFormData({
            shapeName:
              shape.shapeName,

            description:
              shape.description,

            status:
              shape.status,
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
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/products/rim-shapes"
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
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Edit Rim Shape
      </Typography>

      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Shape Name"
              value={
                formData.shapeName
              }
              onChange={(e) =>
                handleChange(
                  "shapeName",
                  e.target.value
                )
              }
            />
          </Grid>

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

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={
                formData.description
              }
              onChange={(e) =>
                handleChange(
                  "description",
                  e.target.value
                )
              }
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            height: "48px",
            borderRadius: "12px",
            px: 4,
            textTransform: "none",
          }}
        >
          Update Rim Shape
        </Button>
      </Card>
    </Box>
  );
}