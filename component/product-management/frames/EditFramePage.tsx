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
      productName: "",
      sku: "",
      brand: "",
      category: "",
      material: "",
      rimShape: "",
      color: "",
      size: "",
      stock: "",
      price: "",
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
            productName:
              frame.productName,

            sku:
              frame.sku,

            brand:
              frame.brand,

            category:
              frame.category,

            material:
              frame.material,

            rimShape:
              frame.rimShape,

            color:
              frame.color,

            size:
              frame.size,

            stock:
              String(
                frame.stock
              ),

            price:
              String(
                frame.price
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
          {/* PRODUCT NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Product Name"
              value={
                formData.productName
              }
              onChange={(e) =>
                handleChange(
                  "productName",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* SKU */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="SKU"
              value={
                formData.sku
              }
              onChange={(e) =>
                handleChange(
                  "sku",
                  e.target.value
                )
              }
            />
          </Grid>

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

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 6 }}>
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

          {/* MATERIAL */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Material"
              value={
                formData.material
              }
              onChange={(e) =>
                handleChange(
                  "material",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* RIM SHAPE */}
          <Grid size={{ xs: 12, md: 6 }}>
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

          {/* COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Color"
              value={
                formData.color
              }
              onChange={(e) =>
                handleChange(
                  "color",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* SIZE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Size"
              value={
                formData.size
              }
              onChange={(e) =>
                handleChange(
                  "size",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* STOCK */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Stock"
              type="number"
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

          {/* PRICE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={
                formData.price
              }
              onChange={(e) =>
                handleChange(
                  "price",
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