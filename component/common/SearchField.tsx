"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
    InputAdornment,
    TextField,
} from "@mui/material";

interface SearchFieldProps {
  placeholder?: string;
}

export default function SearchField({
  placeholder,
}: SearchFieldProps) {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={
        placeholder ||
        "Search..."
      }
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: "#94A3B8",
                }}
              />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "14px",
          background: "#FFFFFF",
          height: "52px",
        },
      }}
    />
  );
}