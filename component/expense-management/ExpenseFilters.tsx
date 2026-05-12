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

  ledger: string;

  setLedger: (
    value: string
  ) => void;
}

export default function ExpenseFilters({
  search,
  setSearch,
  status,
  setStatus,
  ledger,
  setLedger,
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
        placeholder="Search expense..."
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

        <MenuItem value="Paid">
          Paid
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

      </TextField>

      {/* LEDGER */}
      <TextField
        select
        value={ledger}
        onChange={(e) =>
          setLedger(
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
                    Sort by Ledger
                  </Box>
                );
              }

              return selected as string;
            },
          },
        }}
      >
        <MenuItem value="">
          All Ledgers
        </MenuItem>

        <MenuItem value="Administrative Expense">
          Administrative Expense
        </MenuItem>

        <MenuItem value="Utility Expense">
          Utility Expense
        </MenuItem>

        <MenuItem value="Payroll">
          Payroll
        </MenuItem>

      </TextField>

    </Box>
  );
}