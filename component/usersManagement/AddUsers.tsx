"use client";
import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import PhoneField from "@/component/PhoneField";

// Validation Schema
const validationSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: yup
  .string()
  .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
  .required("Phone is required"),

  role: yup.string().required("Role is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const roles = ["Admin", "Manager", "User"];

const AddUserForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      countryCode: "+91",
      fullPhone: "", 
      role: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" sx={{mb: 2}}>
        Add User
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Full Name */}
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          margin="normal"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {/* Phone */}
        <PhoneField
          value={formik.values.fullPhone}
          onChange={(full, code, number) => {
            formik.setFieldValue("fullPhone", full);
            formik.setFieldValue("countryCode", code);
            formik.setFieldValue("phone", number);
          }}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone ? formik.errors.phone : undefined}
        />

        {/* Role Dropdown */}
        <TextField
          select
          fullWidth
          label="Select Role"
          name="role"
          margin="normal"
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>

        {/* Password */}
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={formik.isSubmitting}
          sx={{ mt: 2 }}
        >
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default AddUserForm;