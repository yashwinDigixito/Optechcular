"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  InputAdornment,
  TextField,
} from "@mui/material";

interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (
    value: string
  ) => void;
}

export default function SearchField({
  placeholder,
  value,
  onChange,
}: SearchFieldProps) {

  return (
    <TextField
      fullWidth
      size="small"
      value={value}
      onChange={(e) =>
        onChange?.(
          e.target.value
        )
      }
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
        "& .MuiOutlinedInput-root":
          {
            borderRadius:
              "14px",
            background:
              "#FFFFFF",
            height: "52px",
          },
      }}
    />
  );
}