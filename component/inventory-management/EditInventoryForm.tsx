"use client";

import {
    Inventory,
} from "@/assets/types";

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

interface Props {

  inventory:
    Inventory;
}

export default function EditInventoryForm({
  inventory,
}: Props) {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      productName:
        inventory.productName,

      sku:
        inventory.sku,

      barcode:
        inventory.barcode,

      category:
        inventory.category,

      brand:
        inventory.brand,

      branch:
        inventory.branch,

      stock:
        inventory.stock,

      minStock:
        inventory.minStock,

      price:
        inventory.price,

      status:
        inventory.status,

      notes:
        inventory.notes,
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
      "Updated Inventory:",
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
          Edit Inventory
        </Typography>

        <Grid
          container
          spacing={3}
        >
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
            Update Inventory
          </Button>

        </Box>

      </Box>

    </Box>
  );
}