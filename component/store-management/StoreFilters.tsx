"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  Badge,
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  storeType: string;
  setStoreType: (value: string) => void;
  storeCount?: {
    all: number;
    active: number;
    inactive: number;
  };
}

export default function StoreFilters({
  search,
  setSearch,
  status,
  setStatus,
  storeType,
  setStoreType,
  storeCount,
}: Props) {

  const tabs = [
    {
      label: "All",
      value: "",
      count: storeCount?.all || 0,
    },
    {
      label: "Active",
      value: "Active",
      count: storeCount?.active || 0,
    },
    {
      label: "Inactive",
      value: "Inactive",
      count: storeCount?.inactive || 0,
    },
  ];

  return (
    <Box>
      {/* STATUS TABS */}
      <Box
        sx={{
          px: 3,
          pt: 2,
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Tabs
          value={status}
          onChange={(_, value) => setStatus(value)}
          sx={{
            minHeight: "54px",
            "& .MuiTabs-indicator": {
              height: "3px",
              borderRadius: "999px",
              background:
                status === "Active"
                  ? "#16A34A"
                  : status === "Inactive"
                    ? "#DC2626"
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
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      color:
                        status === tab.value
                          ? tab.value === "Active"
                            ? "#16A34A"
                            : tab.value === "Inactive"
                              ? "#DC2626"
                              : "#0F172A"
                          : "#64748B",
                      fontSize: "15px",
                    }}
                  >
                    {tab.label}
                  </Typography>
                  <Badge
                    badgeContent={tab.count}
                    sx={{
                      "& .MuiBadge-badge": {
                        position: "static",
                        transform: "none",
                        background:
                          status === tab.value
                            ? tab.value === "Active"
                              ? "#16A34A"
                              : tab.value === "Inactive"
                                ? "#DC2626"
                                : "#0F172A"
                            : "#F1F5F9",
                        color:
                          status === tab.value
                            ? "#FFFFFF"
                            : "#475569",
                        borderRadius: "8px",
                        minWidth: "24px",
                        height: "24px",
                        fontWeight: 700,
                        fontSize: "12px",
                      },
                    }}
                  />
                </Box>
              }
              sx={{
                minHeight: "54px",
                px: 0,
                mr: 5,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* SEARCH & FILTERS GRID */}
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid #E2E8F0",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 2,
        }}
      >
        <TextField
          placeholder="Search Store by Name, Code, or Manager..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              background: "#FFFFFF",
              height: "56px",
            },
            "& input": {
              color: "#64748B",
            },
          }}
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
        />

        <TextField
          select
          label="Store Operational Type"
          value={storeType}
          onChange={(e) => setStoreType(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              background: "#FFFFFF",
              height: "56px",
            },
          }}
        >
          <MenuItem value="">All Operational Types</MenuItem>
          <MenuItem value="Retail Outlet">Retail Outlet</MenuItem>
          <MenuItem value="Warehouse Hub">Warehouse Hub</MenuItem>
          <MenuItem value="Mega Showroom">Mega Showroom</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
}
