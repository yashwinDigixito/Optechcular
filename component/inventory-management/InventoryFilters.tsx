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

  category: string;

  setCategory: (
    value: string
  ) => void;

  status: string;

  setStatus: (
    value: string
  ) => void;
}

export default function InventoryFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}: Props) {

  return (
    <Box
      sx={{
        display:
          "flex",

        gap: 2,

        mb: 3,

        flexWrap:
          "wrap",
      }}
    >
      {/* SEARCH */}
      <TextField
        placeholder="Search inventory..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{
          minWidth:
            "280px",

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
            startAdornment:
              (
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
          minWidth:
            "220px",

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
            displayEmpty:
              true,

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

      </TextField>

      {/* STATUS */}
      <TextField
        select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        sx={{
          minWidth:
            "220px",

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
            displayEmpty:
              true,

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
                    Sort by Status
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Status
        </MenuItem>

        <MenuItem value="In Stock">
          In Stock
        </MenuItem>

        <MenuItem value="Low Stock">
          Low Stock
        </MenuItem>

      </TextField>

    </Box>
  );
}