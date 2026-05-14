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

  category: string;

  setCategory: (
    value: string
  ) => void;

  status: string;

  setStatus: (
    value: string
  ) => void;

  inventoryCount?: {
    all: number;
    inStock: number;
    lowStock: number;
    outOfStock: number;
  };
}

export default function InventoryFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  inventoryCount,
}: Props) {

  const tabs = [

    {
      label: "All",
      value: "",
      count:
        inventoryCount?.all || 0,
    },

    {
      label: "In Stock",
      value: "In Stock",
      count:
        inventoryCount?.inStock || 0,
    },

    {
      label: "Low Stock",
      value: "Low Stock",
      count:
        inventoryCount?.lowStock || 0,
    },

    {
      label: "Out of Stock",
      value: "Out of Stock",
      count:
        inventoryCount?.outOfStock || 0,
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
          value={status}
          onChange={(
            _,
            value
          ) =>
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
                  "In Stock"

                    ? "#16A34A"

                    : status ===
                      "Low Stock"

                    ? "#F59E0B"

                    : status ===
                      "Out of Stock"

                    ? "#DC2626"

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
                          status ===
                          tab.value

                            ? tab.value ===
                              "In Stock"

                              ? "#16A34A"

                              : tab.value ===
                                "Low Stock"

                              ? "#F59E0B"

                              : tab.value ===
                                "Out of Stock"

                              ? "#DC2626"

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
                              status ===
                              tab.value

                                ? tab.value ===
                                  "In Stock"

                                  ? "#16A34A"

                                  : tab.value ===
                                    "Low Stock"

                                  ? "#F59E0B"

                                  : tab.value ===
                                    "Out of Stock"

                                  ? "#DC2626"

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
        {/* CATEGORY */}
        <Autocomplete
          options={[
            "Frame",
            "Contact Lens",
            "Optical Lens",
            "Accessories",
          ]}
          value={
            category || null
          }
          onChange={(
            _,
            value
          ) =>
            setCategory(
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
              label="Category"
            />
          )}
        />

        {/* SEARCH */}
        <TextField
          placeholder="Search inventory..."
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