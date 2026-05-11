"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function FrameForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>
  ) => {
  const file = e.target.files?.[0];
  if (file) {
    const imageUrl =
      URL.createObjectURL(
        file
      );
    setPreview(imageUrl);
  }
  };
  return (
    <Box sx={{ p: 3 }}>

      {/* PAGE TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Add Frame
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
              select
              fullWidth
              label="Select Brand"
            >
              <MenuItem value="RayBan">
                RayBan
              </MenuItem>

              <MenuItem value="Oakley">
                Oakley
              </MenuItem>

              <MenuItem value="Vogue">
                Vogue
              </MenuItem>
            </TextField>
          </Grid>

          {/* MODEL NO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Model No"
            />
          </Grid>

          {/* RIM TYPE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Rim Type"
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
            />
          </Grid>

          {/* TEMPLE MATERIAL */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Temple Material"
            />
          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Category"
            >
              <MenuItem value="Optical Frame">
                Optical Frame
              </MenuItem>

              <MenuItem value="Sunglasses">
                Sunglasses
              </MenuItem>

              <MenuItem value="RX-able">
                RX-able
              </MenuItem>

              <MenuItem value="Clip-on">
                Clip-on
              </MenuItem>
            </TextField>
          </Grid>

          {/* HSN CODE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="HSN Code"
            />
          </Grid>

          {/* TAX */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Tax %"
              type="number"
            />
          </Grid>

          {/* COLOR CODE */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Colour Code"
            />
          </Grid>

          {/* SIZE */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Size"
            />
          </Grid>

          {/* DBL */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="DBL"
            />
          </Grid>

          {/* TEMPLE LENGTH */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Temple Length"
            />
          </Grid>

          {/* LAUNCH SEASON */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Launch Season"
            />
          </Grid>

          {/* LENS COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Lens Color"
            />
          </Grid>

          {/* FRAME FRONT COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Frame Front Color"
            />
          </Grid>

          {/* TEMPLE COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Temple Color"
            />
          </Grid>

          {/* SKU */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="SKU Code"
            />
          </Grid>

          {/* BARCODE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Barcode Generation"
            />
          </Grid>

          {/* SRP */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="SRP"
              type="number"
            />
          </Grid>

          {/* LOCATION BASED PRICING */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Location Based Pricing (Branches)"
            />
          </Grid>

          {/* FRAME PICTURES */}
          <Grid size={{ xs: 12 }}>
            <Typography
              sx={{
                mb: 1,
                fontWeight: 600,
                color: "#475569",
              }}
            >
              Upload Frame Image
            </Typography>
            <Card
              sx={{
                p: 3,
                borderRadius: "20px",
                border:"2px dashed #CBD5E1",
                background:"#F8FAFC",
              }}
            >
              {/* FILE INPUT */}
              <Button
                variant="outlined"
                component="label"
                sx={{
                  borderRadius:"12px",
                  textTransform:"none",
                }}
              >
                Choose Image
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={
                    handleImageChange
                  }
                />
              </Button>
              {/* PREVIEW */}
              {preview && (
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent:
                      "center",
                  }}
                >
                  <Box
                    component="img"
                    src={preview}
                    alt="Frame Preview"
                    sx={{
                      width: "240px",
                      height: "160px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "16px",
                      border:
                        "1px solid #E2E8F0",
                    }}
                  />
                </Box>
              )}
            </Card>
          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Status"
              defaultValue="Active"
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
          }}
        >
          Save Frame
        </Button>
      </Card>
    </Box>
  );
}