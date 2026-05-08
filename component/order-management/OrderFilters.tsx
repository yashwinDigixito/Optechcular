"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import {
  Box,
  InputAdornment,
  TextField
} from "@mui/material";

import SearchField from "@/component/common/SearchField";

export default function OrderFilters() {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
        flexWrap: "wrap",
      }}
    >
      {/* Start Date */}
              <TextField
  type="date"
  label="Start Date"
  size="small"
  fullWidth
  slotProps={{
    inputLabel: {
      shrink: true,
    },

    htmlInput: {
      sx: {
        "&::-webkit-calendar-picker-indicator": {
          opacity: 0,
          display: "none",
        },
      },
    },

    input: {
      endAdornment: (
        <InputAdornment position="end">
          <CalendarMonthIcon
            sx={{
              cursor: "pointer",
              color: "#64748B",
            }}
            onClick={(e) => {

              const input =
                (
                  e.currentTarget.closest(
                    ".MuiFormControl-root"
                  ) as HTMLElement
                )?.querySelector(
                  "input"
                ) as HTMLInputElement;

              input.showPicker();
                }}
              />
            </InputAdornment>
          ),
        },
      }}
        sx={{
          maxWidth: "250px",

          "& .MuiOutlinedInput-root": {
            borderRadius: "14px",
            background: "#FFFFFF",
            height: "54px",
          },
        }}
      />

      {/* End Date */}
      <TextField
          type="date"
          label="End Date"
          size="small"
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
            htmlInput: {
              sx: {
                "&::-webkit-calendar-picker-indicator": {
                  opacity: 0,
                  display: "none",
                },
              },
            },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthIcon
                    sx={{
                      cursor: "pointer",
                      color: "#64748B",
                    }}
                    onClick={(e) => {
                      const input =
                        (
                          e.currentTarget.closest(
                            ".MuiFormControl-root"
                          ) as HTMLElement
                        )?.querySelector(
                          "input"
                        ) as HTMLInputElement;
                      input.showPicker();
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        sx={{
          maxWidth: "250px",

          "& .MuiOutlinedInput-root": {
            borderRadius: "14px",
            background: "#FFFFFF",
            height: "54px",
          },
        }}
      />

      {/* Search */}
      <Box sx={{ flex: 1 }}>
        <SearchField
          placeholder="Search customer or order number..."
        />
      </Box>
    </Box>
  );
}