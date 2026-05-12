"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

interface BrandFiltersProps {

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

  brandGroup: string;

  setBrandGroup: (
    value: string
  ) => void;
}

export default function BrandFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  brandGroup,
  setBrandGroup,
}: BrandFiltersProps) {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        mb: 3,
      }}
    >
      {/* SEARCH */}
      <TextField
        placeholder="Search brand..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{
          minWidth: "260px",

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

        <MenuItem value="Accessories">
          Accessories
        </MenuItem>

        <MenuItem value="Optical Lens">
          Optical Lens
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

        <MenuItem value="Active">
          Active
        </MenuItem>

        <MenuItem value="Inactive">
          Inactive
        </MenuItem>

      </TextField>

      {/* BRAND GROUP */}
      <TextField
        select
        value={brandGroup}
        onChange={(e) =>
          setBrandGroup(
            e.target.value
          )
        }
        sx={{
          minWidth: "240px",

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
                    Sort by Brand Group
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Groups
        </MenuItem>

        <MenuItem value="Premium">
          Premium
        </MenuItem>

        <MenuItem value="Budget">
          Budget
        </MenuItem>

        <MenuItem value="Luxury">
          Luxury
        </MenuItem>

        <MenuItem value="Imported">
          Imported
        </MenuItem>

      </TextField>

    </Box>
  );
}