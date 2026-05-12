"use client";

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

interface MaterialFiltersProps {
  search: string;
  setSearch: (
    value: string
  ) => void;
  status: string;
  setStatus: (
    value: string
  ) => void;
  applicableFor: string;
  setApplicableFor: (
    value: string
  ) => void;
}

export default function MaterialFilters({
  search,
  setSearch,
  status,
  setStatus,
  applicableFor,
  setApplicableFor,
}: MaterialFiltersProps) {

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
        placeholder="Search material..."
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
      <TextField
        select
        value={applicableFor}
        onChange={(e) =>
          setApplicableFor(
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
                    Sort by Type
                  </Box>
                );
              }
              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Types
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