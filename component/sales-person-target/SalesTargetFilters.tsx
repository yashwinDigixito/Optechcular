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

  month: string;

  setMonth: (
    value: string
  ) => void;

  status: string;

  setStatus: (
    value: string
  ) => void;
}

export default function SalesTargetFilters({
  search,
  setSearch,
  month,
  setMonth,
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
        placeholder="Search sales person..."
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

      {/* MONTH */}
      <TextField
        select
        value={month}
        onChange={(e) =>
          setMonth(
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

            renderValue:
              (
                selected
              ) => {

                if (
                  !selected
                ) {

                  return (
                    <Box
                      sx={{
                        color:
                          "#94A3B8",
                      }}
                    >
                      Filter by Month
                    </Box>
                  );
                }

                return selected as string;
              },
          },
        }}
      >
        <MenuItem value="">
          All Months
        </MenuItem>

        <MenuItem value="January">
          January
        </MenuItem>

        <MenuItem value="February">
          February
        </MenuItem>

        <MenuItem value="March">
          March
        </MenuItem>

        <MenuItem value="April">
          April
        </MenuItem>

        <MenuItem value="May">
          May
        </MenuItem>

        <MenuItem value="June">
          June
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

            renderValue:
              (
                selected
              ) => {

                if (
                  !selected
                ) {

                  return (
                    <Box
                      sx={{
                        color:
                          "#94A3B8",
                      }}
                    >
                      Filter by Status
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

        <MenuItem value="Completed">
          Completed
        </MenuItem>

        <MenuItem value="In Progress">
          In Progress
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

      </TextField>

    </Box>
  );
}