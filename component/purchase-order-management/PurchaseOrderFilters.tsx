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
import { FONT_FAMILY } from "@/assets/constants";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  paymentStatus: string;
  setPaymentStatus: (value: string) => void;
  poStatus: string;
  setPoStatus: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  poCount?: {
    all: number;
    received: number;
    pending: number;
    processing: number;
  };
}

export default function PurchaseOrderFilters({
  search,
  setSearch,
  paymentStatus,
  setPaymentStatus,
  poStatus,
  setPoStatus,
  category,
  setCategory,
  poCount,
}: Props) {
  
  const tabs = [
    {
      label: "All Orders",
      value: "",
      count: poCount?.all || 0,
      color: "#0F172A",
    },
    {
      label: "Received",
      value: "Received",
      count: poCount?.received || 0,
      color: "#16A34A",
    },
    {
      label: "Pending",
      value: "Pending",
      count: poCount?.pending || 0,
      color: "#F59E0B",
    },
    {
      label: "Processing",
      value: "Processing",
      count: poCount?.processing || 0,
      color: "#3B82F6",
    },
  ];

  const getIndicatorColor = () => {
    if (poStatus === "Received") return "#16A34A";
    if (poStatus === "Pending") return "#F59E0B";
    if (poStatus === "Processing") return "#3B82F6";
    return "#0F172A";
  };

  return (
    <Box>
      {/* STATUS TABS WITH DYNAMIC COUNTS */}
      <Box
        sx={{
          px: 3,
          pt: 2,
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Tabs
          value={poStatus}
          onChange={(_, value) => setPoStatus(value)}
          sx={{
            minHeight: "54px",
            "& .MuiTabs-indicator": {
              height: "3px",
              borderRadius: "999px",
              background: getIndicatorColor(),
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
                    gap: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      fontFamily: FONT_FAMILY.HEADING,
                      color: poStatus === tab.value ? tab.color : "#64748B",
                      fontSize: "14px",
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
                        background: poStatus === tab.value ? tab.color : "#F1F5F9",
                        color: poStatus === tab.value ? "#FFFFFF" : "#475569",
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
                mr: 4,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* SEARCH AND FILTERS GRID */}
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid #E2E8F0",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr 1fr",
          },
          gap: 2,
        }}
      >
        {/* SEARCH BAR */}
        <TextField
          placeholder="Search Purchase Order by PO Number or Vendor Name..."
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

        {/* PAYMENT SELECT */}
        <TextField
          select
          label="Payment Status"
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              background: "#FFFFFF",
              height: "56px",
            },
          }}
        >
          <MenuItem value="">All Payments</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Partial">Partial</MenuItem>
        </TextField>

        {/* CATEGORY SELECT */}
        <TextField
          select
          label="Item Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              background: "#FFFFFF",
              height: "56px",
            },
          }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Frame">Frame</MenuItem>
          <MenuItem value="Optical Lens">Optical Lens</MenuItem>
          <MenuItem value="Contact Lens">Contact Lens</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
}