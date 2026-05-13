"use client";

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

  customer: {

    id: string;

    customerType: string;

    fullName: string;

    phoneNumber: string;

    email: string;

    addressLine1: string;

    addressLine2: string;

    city: string;

    state: string;

    country: string;

    status: string;
  };
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
        customer.fullName,

      phoneNumber:
        customer.phoneNumber,

      email:
        customer.email,

      addressLine1:
        customer.addressLine1,

      addressLine2:
        customer.addressLine2,

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

    router.push("/customers");
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
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
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
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
          Edit Customer
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

          {/* PHONE */}
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
            Update Customer
          </Button>

        </Box>

      </Box>

    </Box>
  );
}