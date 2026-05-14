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

  setSearch: (
    value: string
  ) => void;

  paymentStatus: string;

  setPaymentStatus: (
    value: string
  ) => void;

  orderStatus: string;

  setOrderStatus: (
    value: string
  ) => void;

  ordersCount?: {
    all: number;
    completed: number;
    pending: number;
    cancelled: number;
    refunded: number;
  };
}

export default function OrderFilters({
  search,
  setSearch,
  paymentStatus,
  setPaymentStatus,
  orderStatus,
  setOrderStatus,
  ordersCount,
}: Props) {

  const tabs = [

    {
      label: "All",
      value: "",
      count:
        ordersCount?.all || 0,
    },

    {
      label: "Completed",
      value: "Completed",
      count:
        ordersCount?.completed || 0,
    },

    {
      label: "Pending",
      value: "Pending",
      count:
        ordersCount?.pending || 0,
    },

    {
      label: "Cancelled",
      value: "Cancelled",
      count:
        ordersCount?.cancelled || 0,
    },

    {
      label: "Refunded",
      value: "Refunded",
      count:
        ordersCount?.refunded || 0,
    },
  ];

  return (
    <Box>
      {/* TABS */}
      <Box
        sx={{
          px: 3,

          pt: 2,

          borderBottom:
            "1px solid #E2E8F0",
        }}
      >
        <Tabs
          value={orderStatus}
          onChange={(
            _,
            value
          ) =>
            setOrderStatus(
              value
            )
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
                  orderStatus ===
                  "Completed"

                    ? "#16A34A"

                    : orderStatus ===
                      "Pending"

                    ? "#F59E0B"

                    : orderStatus ===
                      "Cancelled"

                    ? "#DC2626"

                    : orderStatus ===
                      "Refunded"

                    ? "#7C3AED"

                    : "#0F172A",
              },
          }}
        >
          {tabs.map(
            (tab) => (

              <Tab
                key={
                  tab.label
                }
                value={
                  tab.value
                }
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
                          orderStatus ===
                          tab.value

                            ? tab.value ===
                              "Completed"

                              ? "#16A34A"

                              : tab.value ===
                                "Pending"

                              ? "#F59E0B"

                              : tab.value ===
                                "Cancelled"

                              ? "#DC2626"

                              : tab.value ===
                                "Refunded"

                              ? "#7C3AED"

                              : "#0F172A"

                            : "#64748B",

                        fontSize:
                          "15px",
                      }}
                    >
                      {
                        tab.label
                      }
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
                              orderStatus ===
                              tab.value

                                ? tab.value ===
                                  "Completed"

                                  ? "#16A34A"

                                  : tab.value ===
                                    "Pending"

                                  ? "#F59E0B"

                                  : tab.value ===
                                    "Cancelled"

                                  ? "#DC2626"

                                  : tab.value ===
                                    "Refunded"

                                  ? "#7C3AED"

                                  : "#0F172A"

                                : "#F1F5F9",

                            color:
                              orderStatus ===
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
            )
          )}

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
        {/* PAYMENT STATUS */}
        <Autocomplete
          options={[
            "Paid",
            "Pending",
            "Refunded",
          ]}
          value={
            paymentStatus ||
            null
          }
          onChange={(
            _,
            value
          ) =>
            setPaymentStatus(
              value || ""
            )
          }
          sx={{
            minWidth:
              "280px",

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
          renderInput={(
            params
          ) => (

            <TextField
              {...params}
              label="Payment Status"
            />
          )}
        />

        {/* SEARCH */}
        <TextField
          placeholder="Search order or customer..."
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