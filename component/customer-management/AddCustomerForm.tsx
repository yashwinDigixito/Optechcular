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

import { useRouter } from "next/navigation";

export default function AddCustomerForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      customerType:
        "B2C",

      fullName: "",

      phoneNumber: "",

      email: "",

      addressLine1: "",

      addressLine2: "",

      city: "",

      state: "",

      country: "",

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
      "Customer Data:",
      formData
    );

    router.push("/customers");
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box
        sx={{
          background:
            "#FFFFFF",

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          p: 4,
        }}
      >
        {/* HEADER */}
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight: 700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Add Customer
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
          {/* CUSTOMER TYPE */}
          <TextField
            select
            fullWidth
            label="Customer Type"
            name="customerType"
            value={
              formData.customerType
            }
            onChange={
              handleChange
            }
          >
            <MenuItem value="B2B">
              B2B
            </MenuItem>

            <MenuItem value="B2C">
              B2C
            </MenuItem>

          </TextField>

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

          {/* PHONE NUMBER */}
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

          {/* ADDRESS LINE 1 */}
          <TextField
            fullWidth
            label="Address Line 1"
            name="addressLine1"
            value={
              formData.addressLine1
            }
            onChange={
              handleChange
            }
          />

          {/* ADDRESS LINE 2 */}
          <TextField
            fullWidth
            label="Address Line 2"
            name="addressLine2"
            value={
              formData.addressLine2
            }
            onChange={
              handleChange
            }
          />

          {/* CITY */}
          <TextField
            fullWidth
            label="City"
            name="city"
            value={
              formData.city
            }
            onChange={
              handleChange
            }
          />

          {/* STATE */}
          <TextField
            fullWidth
            label="State"
            name="state"
            value={
              formData.state
            }
            onChange={
              handleChange
            }
          />

          {/* COUNTRY */}
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={
              formData.country
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

            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/customers"
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
            Save Customer
          </Button>

        </Box>

      </Box>

    </Box>
  );
}