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

export default function MaterialForm() {

  return (
    <Box sx={{ p: 3 }}>
       <Box sx={{ mb: 3 }}>
        <Link
          href="/products/materials"
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
        Add Material
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
              label="Material Name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Applicable For"
              defaultValue="Frame"
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
          Save Material
        </Button>
      </Card>
    </Box>
  );
}