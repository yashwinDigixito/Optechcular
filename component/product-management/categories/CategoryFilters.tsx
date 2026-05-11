"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

interface CategoryFiltersProps {

  search: string;

  setSearch: (
    value: string
  ) => void;

  status: string;

  setStatus: (
    value: string
  ) => void;
}

export default function CategoryFilters({
  search,
  setSearch,
  status,
  setStatus,
}: CategoryFiltersProps) {

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
        placeholder="Search category..."
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

      {/* STATUS */}
      <TextField
        select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value
          )
        }
        slotProps={{
                  select: {
                    displayEmpty: true,
                    renderValue: (
                      selected
                    ) => (
                      <Box
                        sx={{
                          color: selected
                            ? "#0F172A"
                            : "#94A3B8",
                        }}
                      >
                        {(selected as string) ||
                          "Sort by Status"}
                      </Box>
                    ),
                  },
                }}
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
    </Box>
  );
}