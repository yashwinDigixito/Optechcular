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
  status: string;
  setStatus: (
    value: string
  ) => void;
}

export default function ContactLensFilters({
  search,
  setSearch,
  status,
  setStatus,
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
      <TextField
        placeholder="Search product or code..."
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
              borderRadius: "14px",
              background: "#FFFFFF",
            },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
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
        borderRadius: "14px",
        background: "#FFFFFF",
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
                color: "#94A3B8",
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
    </Box>
  );
}