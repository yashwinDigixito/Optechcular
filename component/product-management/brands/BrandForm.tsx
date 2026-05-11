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

export default function BrandForm() {

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Add Brand
      </Typography>

      <Card
        sx={{
          p: 3,
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand Name"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              select
              label="Category"
              defaultValue="Frame"
            >
              <MenuItem value="Frame">
                Frame
              </MenuItem>

              <MenuItem value="Contact Lens">
                Contact Lens
              </MenuItem>

              <MenuItem value="Accessories">
                Accessories
              </MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Brand Group"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              select
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
            textTransform: "none",
            px: 4,
          }}
        >
          Save Brand
        </Button>
      </Card>
    </Box>
  );
}