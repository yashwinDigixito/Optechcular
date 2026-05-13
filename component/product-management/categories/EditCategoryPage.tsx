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
  categories,
} from "@/assets/genericdata";
import Link from "next/link";

export default function EditCategoryPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      categoryName: "",
      description: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const category =
          categories.find(
            (item) =>
              item.id === id
          );

        if (category) {

          setFormData({
            categoryName:
              category.categoryName,

            description:
              category.description,

            status:
              category.status,
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
      <Box sx={{ mb: 3 }}>
        <Link
          href="/product/categories"
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
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Edit Category
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
          {/* CATEGORY NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Category Name"
              value={
                formData.categoryName
              }
              onChange={(e) =>
                handleChange(
                  "categoryName",
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

          {/* DESCRIPTION */}
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
          Update Category
        </Button>
      </Card>
    </Box>
  );
}