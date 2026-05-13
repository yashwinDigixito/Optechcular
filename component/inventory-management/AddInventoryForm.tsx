"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
    useState,
} from "react";

import {
    Box,
    Button,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import Link from "next/link";

import { useRouter } from "next/navigation";

export default function AddInventoryForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      productName: "",

      sku: "",

      barcode: "",

      category:
        "Frame",

      brand: "",

      branch:
        "Mumbai",

      stock: 0,

      minStock: 0,

      price: 0,

      status:
        "In Stock",

      notes: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {

    console.log(
      "Inventory:",
      formData
    );

    router.push(
      "/inventory"
    );
  };

  return (
    <Box sx={{ p: 3 }}>

      {/* BACK */}
      <Box sx={{ mb: 3 }}>

        <Link
          href="/inventory"
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
              textTransform:
                "none",

              fontWeight:
                600,
            }}
          >
            Back to Inventory
          </Button>

        </Link>

      </Box>

      {/* FORM CARD */}
      <Box
        sx={{
          p: 4,

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          background:
            "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight:
              700,

            mb: 4,
          }}
        >
          Add Inventory
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* PRODUCT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              value={
                formData.productName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* SKU */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="SKU"
              name="sku"
              value={
                formData.sku
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* BARCODE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Barcode"
              name="barcode"
              value={
                formData.barcode
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Frame">
                Frame
              </MenuItem>

              <MenuItem value="Contact Lens">
                Contact Lens
              </MenuItem>

            </TextField>

          </Grid>

          {/* BRAND */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={
                formData.brand
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* BRANCH */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Branch"
              name="branch"
              value={
                formData.branch
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Mumbai">
                Mumbai
              </MenuItem>

              <MenuItem value="Delhi">
                Delhi
              </MenuItem>

            </TextField>

          </Grid>

          {/* STOCK */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Current Stock"
              name="stock"
              value={
                formData.stock
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* MIN STOCK */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Minimum Stock"
              name="minStock"
              value={
                formData.minStock
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PRICE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Price"
              name="price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={
                formData.status
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="In Stock">
                In Stock
              </MenuItem>

              <MenuItem value="Low Stock">
                Low Stock
              </MenuItem>

            </TextField>

          </Grid>

          {/* NOTES */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              name="notes"
              value={
                formData.notes
              }
              onChange={
                handleChange
              }
            />

          </Grid>

        </Grid>

        {/* BUTTONS */}
        <Box
          sx={{
            mt: 5,

            display:
              "flex",

            justifyContent:
              "flex-end",

            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/inventory"
              )
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSubmit
            }
          >
            Save Inventory
          </Button>

        </Box>

      </Box>

    </Box>
  );
}