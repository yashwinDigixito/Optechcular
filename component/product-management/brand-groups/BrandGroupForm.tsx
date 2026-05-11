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

export default function BrandGroupForm() {

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Add Brand Group
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
          {/* GROUP NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Group Name"
            />
          </Grid>

          {/* STATUS */}
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

          {/* DESCRIPTION */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              placeholder="Enter group description..."
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
          Save Group
        </Button>
      </Card>
    </Box>
  );
}