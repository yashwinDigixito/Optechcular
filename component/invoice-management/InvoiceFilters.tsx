"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
    Box,
    InputAdornment,
    MenuItem,
    TextField,
} from "@mui/material";

interface Props {

  search: string;

  setSearch: (
    value: string
  ) => void;

  paymentStatus: string;

  setPaymentStatus: (
    value: string
  ) => void;

  invoiceStatus: string;

  setInvoiceStatus: (
    value: string
  ) => void;

  category: string;

  setCategory: (
    value: string
  ) => void;
}

export default function InvoiceFilters({
  search,
  setSearch,
  paymentStatus,
  setPaymentStatus,
  invoiceStatus,
  setInvoiceStatus,
  category,
  setCategory,
}: Props) {

  return (
    <Box
      sx={{
        display: "flex",

        gap: 2,

        mb: 3,

        flexWrap: "wrap",
      }}
    >
      {/* SEARCH */}
      <TextField
        placeholder="Search invoice or customer..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{
          minWidth: "280px",

          "& .MuiOutlinedInput-root":
            {
              borderRadius:
                "14px",

              background:
                "#FFFFFF",
            },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color:
                      "#94A3B8",
                  }}
                />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* PAYMENT STATUS */}
      <TextField
        select
        value={paymentStatus}
        onChange={(e) =>
          setPaymentStatus(
            e.target.value
          )
        }
        sx={{
          minWidth: "220px",

          "& .MuiOutlinedInput-root":
            {
              borderRadius:
                "14px",

              background:
                "#FFFFFF",
            },
        }}
        slotProps={{
          select: {
            displayEmpty: true,

            renderValue: (
              selected
            ) => {

              if (!selected) {

                return (
                  <Box
                    sx={{
                      color:
                        "#94A3B8",
                    }}
                  >
                    Sort by Payment
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Payments
        </MenuItem>

        <MenuItem value="Paid">
          Paid
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

        <MenuItem value="Partial">
          Partial
        </MenuItem>

      </TextField>

      {/* INVOICE STATUS */}
      <TextField
        select
        value={invoiceStatus}
        onChange={(e) =>
          setInvoiceStatus(
            e.target.value
          )
        }
        sx={{
          minWidth: "220px",

          "& .MuiOutlinedInput-root":
            {
              borderRadius:
                "14px",

              background:
                "#FFFFFF",
            },
        }}
        slotProps={{
          select: {
            displayEmpty: true,

            renderValue: (
              selected
            ) => {

              if (!selected) {

                return (
                  <Box
                    sx={{
                      color:
                        "#94A3B8",
                    }}
                  >
                    Sort by Invoice Status
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Invoice Status
        </MenuItem>

        <MenuItem value="Completed">
          Completed
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

        <MenuItem value="Processing">
          Processing
        </MenuItem>

      </TextField>

      {/* CATEGORY */}
      <TextField
        select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
        sx={{
          minWidth: "220px",

          "& .MuiOutlinedInput-root":
            {
              borderRadius:
                "14px",

              background:
                "#FFFFFF",
            },
        }}
        slotProps={{
          select: {
            displayEmpty: true,

            renderValue: (
              selected
            ) => {

              if (!selected) {

                return (
                  <Box
                    sx={{
                      color:
                        "#94A3B8",
                    }}
                  >
                    Sort by Category
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Categories
        </MenuItem>

        <MenuItem value="Frame">
          Frame
        </MenuItem>

        <MenuItem value="Contact Lens">
          Contact Lens
        </MenuItem>

        <MenuItem value="Optical Lens">
          Optical Lens
        </MenuItem>

      </TextField>

    </Box>
  );
}