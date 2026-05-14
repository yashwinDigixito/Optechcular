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

  invoiceStatus: string;

  setInvoiceStatus: (
    value: string
  ) => void;

  category: string;

  setCategory: (
    value: string
  ) => void;

  invoicesCount?: {
    all: number;
    completed: number;
    pending: number;
    processing: number;
  };
}

export default function InvoiceFilters({
  search,
  setSearch,
  paymentStatus,
  setPaymentStatus,
  invoiceStatus,
  setInvoiceStatus,
  category,
  setCategory,
  invoicesCount,
}: Props) {

  const tabs = [

    {
      label: "All",
      value: "",
      count:
        invoicesCount?.all || 0,
    },

    {
      label: "Sent",
      value: "Sent",
      count:
        invoicesCount?.completed || 0,
    },

    {
      label: "Draft",
      value: "Draft",
      count:
        invoicesCount?.pending || 0,
    },

    {
      label: "Cancelled",
      value: "Cancelled",
      count:
        invoicesCount?.processing || 0,
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
          value={invoiceStatus}
          onChange={(
            _,
            value
          ) =>
            setInvoiceStatus(
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
                  invoiceStatus ===
                  "Sent"

                    ? "#16A34A"

                    : invoiceStatus ===
                      "Draft"

                    ? "#F59E0B"

                    : invoiceStatus ===
                      "Cancelled"

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
                          invoiceStatus ===
                          tab.value

                            ? tab.value ===
                              "Sent"

                              ? "#16A34A"

                              : tab.value ===
                                "Draft"

                              ? "#F59E0B"

                              : tab.value ===
                                "Cancelled"

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
                            position: "static",
                            transform: "none",
                            background: invoiceStatus === tab.value
                                ? tab.value === "Sent" ? "#16A34A"
                                  : tab.value === "Draft" ? "#F59E0B"
                                  : tab.value === "Cancelled" ? "#DC2626" : "#0F172A" : "#F1F5F9",
                            color: invoiceStatus === tab.value ? "#FFFFFF" : "#475569",
                            borderRadius: "8px",
                            minWidth:"24px",
                            height:"24px",
                            fontWeight:700,
                            fontSize:"12px",
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
            )
          )}
        </Tabs>
      </Box>
      <Box
        sx={{
          p: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* PAYMENT STATUS */}
        <Autocomplete
          options={[
            "Paid",
            "Pending",
            "Partial",
          ]}
          value={ paymentStatus || null }
          onChange={( _, value) =>
            setPaymentStatus(value || "")
          }
          sx={{
            minWidth: "240px",
            "& .MuiOutlinedInput-root":
              {
                borderRadius: "16px",
                background: "#FFFFFF",
                height:"56px",
              },
          }}
          renderInput={( params) => ( <TextField {...params}  label="Payment Status"/>)}/>

        {/* CATEGORY */}
        <Autocomplete
          options={[
            "Frame",
            "Contact Lens",
            "Optical Lens",
          ]}
          value={category || null}
          onChange={( _, value) =>
            setCategory( value || "")
          }
          sx={{
            minWidth: "240px",
            "& .MuiOutlinedInput-root":
              {
                borderRadius: "16px",
                background: "#FFFFFF",
                height: "56px",
              },
          }}
          renderInput={( params) => ( <TextField {...params}  label="Category"/>)}
        />

        {/* SEARCH */}
        <TextField
          placeholder="Search invoice or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            flex: 1,
            minWidth:"320px",
            "& .MuiOutlinedInput-root":
              {
                borderRadius:"16px",
                background:"#FFFFFF",

                height:"56px",
              },
          }}
          slotProps={{
            input: {
              startAdornment:
                (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color:"#94A3B8",
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