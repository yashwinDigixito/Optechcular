"use client";

import {
  useState,
} from "react";

import {
  roles,
} from "@/assets/genericdata";

import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import {
  useRouter,
} from "next/navigation";

export default function AddUserForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      fullName: "",

      email: "",

      phone: "",

      role: "",

      password: "",

      status: "Active",
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
      "User Data:",
      formData
    );

    router.push("/users");
  };

  return (
    <Box
      sx={{
        background:
          "#FFFFFF",

        borderRadius:
          "24px",

        p: 4,

        border:
          "1px solid #E2E8F0",

        boxShadow:
          "0px 4px 20px rgba(15,23,42,0.04)",
      }}
    >
      {/* HEADER */}
      <Typography
        sx={{
          fontSize:
            "24px",

          fontWeight: 700,

          mb: 4,
        }}
      >
        Add User
      </Typography>

      {/* FORM */}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns:
            {
              xs: "1fr",

              md: "1fr 1fr",
            },

          gap: 3,
        }}
      >
        {/* FULL NAME */}
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

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
        />

        {/* PHONE */}
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={
            formData.phone
          }
          onChange={
            handleChange
          }
        />

        {/* ROLE */}
        <TextField
          select
          fullWidth
          label="Select Role"
          name="role"
          value={
            formData.role
          }
          onChange={
            handleChange
          }
        >
          {roles
            .filter(
              (role) =>
                role.status ===
                "Active"
            )
            .map((role) => (

              <MenuItem
                key={role.id}
                value={
                  role.roleName
                }
              >
                {
                  role.roleName
                }
              </MenuItem>

            ))}

        </TextField>

        {/* PASSWORD */}
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

        {/* STATUS */}
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

      </Box>

      {/* BUTTONS */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "flex-end",

          gap: 2,

          mt: 4,
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
  );
}