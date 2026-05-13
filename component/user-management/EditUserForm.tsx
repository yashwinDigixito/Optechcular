"use client";

import {
    useState,
} from "react";

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

interface Props {

  user: {
    id: string;

    fullName: string;

    email: string;

    phone: string;

    role: string;

    status: string;
  };
}

export default function EditUserForm({
  user,
}: Props) {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      fullName:
        user.fullName,

      email:
        user.email,

      phone:
        user.phone,

      role:
        user.role,

      status:
        user.status,
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
      "Updated User:",
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
      <Typography
        sx={{
          fontSize:
            "24px",

          fontWeight: 700,

          mb: 4,
        }}
      >
        Edit User
      </Typography>

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
          Update User
        </Button>

      </Box>

    </Box>
  );
}