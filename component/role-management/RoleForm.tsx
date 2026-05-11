"use client";

import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const permissions = [
  "Create",
  "Edit",
  "View",
  "Deactivate",
];

export default function RoleForm() {

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 70px)",

        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        background: "#F1F5F9",

        pt: 5,
        px: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            mb: 3,
            color: "#0F172A",
          }}
        >
          Add Role
        </Typography>

        <Card
          sx={{
            p: 4,
            borderRadius: "24px",

            boxShadow:
              "0px 10px 30px rgba(15,23,42,0.08)",
          }}
        >

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Role Name"
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

          <Typography
            sx={{
              mt: 5,
              fontSize: "24px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Permissions
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ mt: 2 }}
          >

            {permissions.map((permission) => (

              <Grid
                key={permission}
                size={{ xs: 12, md: 3 }}
              >
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "18px",
                    border:
                      "1px solid #E2E8F0",

                    boxShadow: "none",

                    transition: "0.3s",

                    "&:hover": {
                      border:
                        "1px solid #2563EB",

                      background:
                        "#EFF6FF",
                    },
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={permission}
                  />
                </Card>
              </Grid>
            ))}

          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: 5,
              height: "50px",
              borderRadius: "14px",
              px: 5,
              textTransform: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Save Role
          </Button>

        </Card>
      </Box>
    </Box>
  );
}