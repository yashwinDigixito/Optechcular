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
import {
  useEffect,
  useState,
} from "react";

import {
  contactLenses,
} from "@/assets/genericdata";
import Link from "next/link";

export default function EditContactLensPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      productName: "",
      productCode: "",
      brand: "",
      powerType: "",
      modality: "",
      material: "",
      productType: "",
      baseCurve: "",
      diameter: "",
      stock: "",
      price: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const lens =
          contactLenses.find(
            (item) =>
              item.id === id
          );

        if (lens) {

          setFormData({
            productName:
              lens.productName,

            productCode:
              lens.productCode,

            brand:
              lens.brand,

            powerType:
              lens.powerType,

            modality:
              lens.modality,

            material:
              lens.material,

            productType:
              lens.productType,

            baseCurve:
              lens.baseCurve,

            diameter:
              lens.diameter,

            stock:
              String(
                lens.stock
              ),

            price:
              String(
                lens.mrp
              ),

            status:
              lens.status,
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
          href="/product/contact-lens"
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
        Edit Contact Lens
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

          {/* PRODUCT CODE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Product Code"
              value={
                formData.productCode
              }
              onChange={(e) =>
                handleChange(
                  "productCode",
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

          {/* POWER TYPE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Power Type"
              value={
                formData.powerType
              }
              onChange={(e) =>
                handleChange(
                  "powerType",
                  e.target.value
                )
              }
            >
              <MenuItem value="Spherical">
                Spherical
              </MenuItem>

              <MenuItem value="Astigmatism">
                Astigmatism
              </MenuItem>

              <MenuItem value="Progressive">
                Progressive
              </MenuItem>
            </TextField>
          </Grid>

          {/* MODALITY */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Modality"
              value={
                formData.modality
              }
              onChange={(e) =>
                handleChange(
                  "modality",
                  e.target.value
                )
              }
            >
              <MenuItem value="Daily">
                Daily
              </MenuItem>

              <MenuItem value="BiWeekly">
                BiWeekly
              </MenuItem>

              <MenuItem value="Monthly">
                Monthly
              </MenuItem>

              <MenuItem value="Quarterly">
                Quarterly
              </MenuItem>

              <MenuItem value="Yearly">
                Yearly
              </MenuItem>
            </TextField>
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

          {/* BASE CURVE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Base Curve"
              value={
                formData.baseCurve
              }
              onChange={(e) =>
                handleChange(
                  "baseCurve",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* DIAMETER */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Diameter"
              value={
                formData.diameter
              }
              onChange={(e) =>
                handleChange(
                  "diameter",
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
          Update Contact Lens
        </Button>
      </Card>
    </Box>
  );
}