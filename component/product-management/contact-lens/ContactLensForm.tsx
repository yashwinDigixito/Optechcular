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
import Link from "next/link";
export default function ContactLensForm() {

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
        Add Contact Lens
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
              label="Product Name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Product Code"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Power Type"
              defaultValue="Spherical"
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

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Modality"
              defaultValue="Monthly"
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

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Material"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Base Curve"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Diameter"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Stock"
              type="number"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Price"
              type="number"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
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
          Save Contact Lens
        </Button>
      </Card>
    </Box>
  );
}