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

export default function AddUserForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      fullName: "",

      email: "",

      phoneNumber: "",

      role:
        "Sales",

      status:
        "Active",

      password: "",
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
      "User:",
      formData
    );

    router.push(
      "/users"
    );
  };

  return (
    <Box sx={{ p: 3 }}>

      {/* BACK */}
      <Box sx={{ mb: 3 }}>

        <Link
          href="/users"
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
            Back to Users
          </Button>

        </Link>

      </Box>

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
          Add User
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* FULL NAME */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={
                formData.fullName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* EMAIL */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PHONE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={
                formData.phoneNumber
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* ROLE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={
                formData.role
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Admin">
                Admin
              </MenuItem>

              <MenuItem value="Manager">
                Manager
              </MenuItem>

              <MenuItem value="Sales">
                Sales
              </MenuItem>

            </TextField>

          </Grid>

          {/* PASSWORD */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={
                formData.password
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
              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
              </MenuItem>

            </TextField>

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
                "/users"
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
            Save User
          </Button>

        </Box>

      </Box>

    </Box>
  );
}