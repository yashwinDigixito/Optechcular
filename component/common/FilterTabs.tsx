"use client";

import {
    Box,
    Chip,
    Typography,
} from "@mui/material";

import {
    orders,
    orderTabs,
} from "@/assets/genericdata";

interface FilterTabsProps {
  activeTab: string;

  setActiveTab: (
    value: string
  ) => void;
}

export default function FilterTabs({
  activeTab,
  setActiveTab,
}: FilterTabsProps) {

  const getCount = (
    label: string
  ) => {

    if (label === "All") {
      return orders.length;
    }

    return orders.filter(
      (order) =>
        order.status === label
    ).length;
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        borderBottom:
          "1px solid #E2E8F0",
        pb: 2,
        flexWrap: "wrap",
      }}
    >
      {orderTabs.map((tab) => {

        const isActive =
          activeTab === tab.label;

        return (
          <Box
            key={tab.label}
            onClick={() =>
              setActiveTab(tab.label)
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              position: "relative",
              pb: 1,

              "&::after": isActive
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "-18px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background:
                      "#0F172A",
                    borderRadius:
                      "999px",
                  }
                : {},
            }}
          >
            <Typography
              sx={{
                fontWeight: isActive
                  ? 700
                  : 500,

                color: "#334155",
              }}
            >
              {tab.label}
            </Typography>

            <Chip
              label={getCount(tab.label)}
              size="small"
              sx={{
                background:
                  `${tab.color}15`,

                color: tab.color,

                fontWeight: 700,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}