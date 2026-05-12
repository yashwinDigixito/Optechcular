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

  orderStatus: string;

  setOrderStatus: (
    value: string
  ) => void;
}

export default function OrderFilters({
  search,
  setSearch,
  paymentStatus,
  setPaymentStatus,
  orderStatus,
  setOrderStatus,
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
        placeholder="Search order or customer..."
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

        <MenuItem value="Refunded">
          Refunded
        </MenuItem>

      </TextField>

      {/* ORDER STATUS */}
      <TextField
        select
        value={orderStatus}
        onChange={(e) =>
          setOrderStatus(
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
                    Sort by Order Status
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Orders
        </MenuItem>

        <MenuItem value="Completed">
          Completed
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

        <MenuItem value="Cancelled">
          Cancelled
        </MenuItem>

        <MenuItem value="Refunded">
          Refunded
        </MenuItem>

      </TextField>

    </Box>
  );
}