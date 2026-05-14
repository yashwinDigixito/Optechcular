"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  Autocomplete,
  Badge,
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  dateRange: string;
  setDateRange: (value: string) => void;

  fromDate: string;
  setFromDate: (value: string) => void;

  expenseCount?: {
    all: number;
    approved: number;
    pending: number;
  };
}

export default function ExpenseFilters({
  search,
  setSearch,
  status,
  setStatus,
  dateRange,
  setDateRange,
  fromDate,
  setFromDate,
  expenseCount,
}: Props) {

  const tabs = [
    {
      label: "All",
      value: "",
      count:
        expenseCount?.all || 0,
    },

    {
      label: "Approved",
      value: "Approved",
      count:
        expenseCount?.approved || 0,
    },

    {
      label: "Pending",
      value: "Pending",
      count:
        expenseCount?.pending || 0,
    },
  ];

  return (
    <Box>
      {/* STATUS TABS */}
      <Box
        sx={{
          px: 3,
          pt: 2,
          borderBottom:
            "1px solid #E2E8F0",
        }}
      >
        <Tabs
          value={status}
          onChange={(_, value) =>
            setStatus(value)
          }
          sx={{
            minHeight:
              "54px",

            "& .MuiTabs-indicator":
              {
                height:
                  "3px",

                borderRadius:
                  "999px",

                background:
                  status ===
                  "Approved"

                    ? "#16A34A"

                    : status ===
                      "Pending"

                    ? "#F59E0B"

                    : "#0F172A",
              },
          }}
        >
          {tabs.map((tab) => (

            <Tab
              key={tab.label}
              value={tab.value}
              disableRipple
              label={
                <Box
                  sx={{
                    display:
                      "flex",

                    alignItems:
                      "center",

                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      textTransform:
                        "none",

                      fontWeight:
                        600,

                      color:
                        status ===
                        tab.value

                          ? tab.value ===
                            "Approved"

                            ? "#16A34A"

                            : tab.value ===
                              "Pending"

                            ? "#F59E0B"

                            : "#0F172A"

                          : "#64748B",

                      fontSize:
                        "15px",
                    }}
                  >
                    {tab.label}
                  </Typography>

                  <Badge
                    badgeContent={
                      tab.count
                    }
                    sx={{
                      "& .MuiBadge-badge":
                        {
                          position:
                            "static",

                          transform:
                            "none",

                          background:
                            status ===
                            tab.value

                              ? tab.value ===
                                "Approved"

                                ? "#16A34A"

                                : tab.value ===
                                  "Pending"

                                ? "#F59E0B"

                                : "#0F172A"

                              : "#F1F5F9",

                          color:
                            status ===
                            tab.value

                              ? "#FFFFFF"

                              : "#475569",

                          borderRadius:
                            "8px",

                          minWidth:
                            "24px",

                          height:
                            "24px",

                          fontWeight:
                            700,

                          fontSize:
                            "12px",
                        },
                    }}
                  />
                </Box>
              }
              sx={{
                minHeight:
                  "54px",

                px: 0,

                mr: 5,
              }}
            />
          ))}

        </Tabs>
      </Box>

      {/* FILTERS */}
      <Box
        sx={{
          p: 3,

          display:
            "flex",

          gap: 2,

          flexWrap:
            "wrap",

          borderBottom:
            "1px solid #E2E8F0",
        }}
      >
        {/* DATE RANGE */}
        <Autocomplete
          options={[
            "Today",
            "Last 7 Days",
            "Last 30 Days",
            "This Month",
            "This Year",
          ]}
          value={
            dateRange || null
          }
          onChange={(_, value) =>
            setDateRange(
              value || ""
            )
          }
          sx={{
            minWidth:
              "220px",

            "& .MuiOutlinedInput-root":
              {
                borderRadius:
                  "16px",

                background:
                  "#FFFFFF",

                height:
                  "56px",
              },
          }}
          renderInput={(params) => (

            <TextField
              {...params}
              label="Date Range"
            />
          )}
        />

        {/* DATE */}
        <TextField
  type="date"
  value={fromDate}
  onChange={(e) =>
    setFromDate(
      e.target.value
    )
  }
  sx={{
    minWidth:
      "220px",

    "& .MuiOutlinedInput-root":
      {
        borderRadius:
          "16px",

        background:
          "#FFFFFF",

        height:
          "56px",
      },

    "& input":
      {
        color:
          "#64748B",
      },

    "& input::-webkit-calendar-picker-indicator":
      {
        opacity: 1,

        cursor:
          "pointer",

        filter:
          "invert(64%) sepia(11%) saturate(401%) hue-rotate(176deg) brightness(91%) contrast(88%)",
      },
  }}
/>

        {/* SEARCH */}
        <TextField
          placeholder="Search by expense name..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          sx={{
            flex: 1,

            minWidth:
              "320px",

            "& .MuiOutlinedInput-root":
              {
                borderRadius:
                  "16px",

                background:
                  "#FFFFFF",

                height:
                  "56px",
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
      </Box>
    </Box>
  );
}