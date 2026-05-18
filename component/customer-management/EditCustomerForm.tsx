"use client";

import {
  Customer,
} from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import {
  useState,
} from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

interface Props {
  customer: Customer;
}

export default function EditCustomerForm({
  customer,
}: Props) {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      customerType:
        customer.customerType,

      fullName:
        customer.customerName,

      phone:
        customer.phone,

      email:
        customer.email,

      addressLine1:
        customer.address,

      city:
        customer.city,

      state:
        customer.state,

      country:
        customer.country,

      status:
        customer.status,
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
      "Updated Customer:",
      formData
    );

    router.push(
      "/customers"
    );
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >

      {/* BACK BUTTON */}
      <Box sx={{ mb: 3 }}>

        <Link
          href="/customers"
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
            Back
          </Button>

        </Link>

      </Box>

      {/* MAIN CARD */}
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

            fontWeight:
              700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Edit Customer
        </Typography>

        {/* FORM */}
        <Box
          sx={{
            display:
              "grid",

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
            display:
              "flex",

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
            Update Customer
          </Button>

        </Box>

      </Box>

    </Box>
  );
}