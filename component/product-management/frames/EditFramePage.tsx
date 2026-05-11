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
  frames,
} from "@/assets/genericdata";

export default function EditFramePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      brand: "",
      modelNo: "",
      rimType: "",
      rimShape: "",
      templeMaterial: "",
      category: "",
      hsnCode: "",
      tax: "",
      colourCode: "",
      size: "",
      dbl: "",
      templeLength: "",
      launchSeason: "",
      lensColor: "",
      frameFrontColor: "",
      templeColor: "",
      skuCode: "",
      barcode: "",
      srp: "",
      locationPricing: "",
      stock: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const frame =
          frames.find(
            (item) =>
              item.id === id
          );

        if (frame) {

          setFormData({
            brand:
              frame.brand,

            modelNo:
              frame.modelNo,

            rimType:
              frame.rimType,

            rimShape:
              frame.rimShape,

            templeMaterial:
              frame.templeMaterial,

            category:
              frame.category,

            hsnCode:
              frame.hsnCode,

            tax:
              String(
                frame.tax
              ),

            colourCode:
              frame.colourCode,

            size:
              frame.size,

            dbl:
              frame.dbl,

            templeLength:
              frame.templeLength,

            launchSeason:
              frame.launchSeason,

            lensColor:
              frame.lensColor,

            frameFrontColor:
              frame.frameFrontColor,

            templeColor:
              frame.templeColor,

            skuCode:
              frame.skuCode,

            barcode:
              frame.barcode,

            srp:
              String(
                frame.srp
              ),

            locationPricing:
              frame.locationPricing,

            stock:
              String(
                frame.stock
              ),

            status:
              frame.status,
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

      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Edit Frame
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
          {/* BRAND */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand"
              value={
                formData.brand
              }
              onChange={(e) =>
                handleChange(
                  "brand",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* MODEL NO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Model No"
              value={
                formData.modelNo
              }
              onChange={(e) =>
                handleChange(
                  "modelNo",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* RIM TYPE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Rim Type"
              value={
                formData.rimType
              }
              onChange={(e) =>
                handleChange(
                  "rimType",
                  e.target.value
                )
              }
            >
              <MenuItem value="Full Rim">
                Full Rim
              </MenuItem>

              <MenuItem value="Half Rim">
                Half Rim
              </MenuItem>

              <MenuItem value="Rim Less">
                Rim Less
              </MenuItem>
            </TextField>
          </Grid>

          {/* RIM SHAPE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Rim Shape"
              value={
                formData.rimShape
              }
              onChange={(e) =>
                handleChange(
                  "rimShape",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
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
            />
          </Grid>

          {/* SKU */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="SKU Code"
              value={
                formData.skuCode
              }
              onChange={(e) =>
                handleChange(
                  "skuCode",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* BARCODE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Barcode"
              value={
                formData.barcode
              }
              onChange={(e) =>
                handleChange(
                  "barcode",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* SRP */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              type="number"
              label="SRP"
              value={
                formData.srp
              }
              onChange={(e) =>
                handleChange(
                  "srp",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* STOCK */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              type="number"
              label="Stock"
              value={
                formData.stock
              }
              onChange={(e) =>
                handleChange(
                  "stock",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 4 }}>
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
          Update Frame
        </Button>

      </Card>

    </Box>
  );
}