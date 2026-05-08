"use client";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Box,
  Card,
  Typography,
} from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string | number;
  growth: string;
}

export default function DashboardCard({
  title,
  value,
  growth,
}: DashboardCardProps) {

  const getCardConfig = () => {
    switch (title) {
      case "Total Orders":
        return {
          icon: <ShoppingCartCheckoutIcon />,
          bg: "#EEF4FF",
          color: "#2563EB",
        };

      case "Total Purchases":
        return {
          icon: <Inventory2Icon />,
          bg: "#ECFDF5",
          color: "#16A34A",
        };

      case "Total Sales":
        return {
          icon: <PaymentsIcon />,
          bg: "#FFF7ED",
          color: "#EA580C",
        };

      default:
        return {
          icon: <ShoppingCartCheckoutIcon />,
          bg: "#EEF4FF",
          color: "#2563EB",
        };
    }
  };

  const config = getCardConfig();

  return (
    <Card
  sx={{
    p: 3,
    borderRadius: "24px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 6px 30px rgba(15,23,42,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",

    height: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0px 16px 40px rgba(15,23,42,0.12)",
    },
  }}
>
      {/* Top Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          background: config.color,
        }}
      />

      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap:2
        }}
      >
        {/* Title */}
        <Box sx={{flex:1,minWidth:0}}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#64748B",
            }}
          >
            {title}
          </Typography>

          <Typography
                    sx={{
                      fontSize: {
                        xs: "32px",
                        md: "38px",
                      },
                      fontWeight: 700,
                      color: "#0F172A",
                      mt: 1.5,
                      lineHeight: 1.1,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {value}
          </Typography>

        </Box>

        {/* Icon */}
        <Box
  sx={{
    width: 60,
    height: 60,
    borderRadius: "20px",
    background: config.bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: config.color,
    flexShrink: 0,

    "& svg": {
      fontSize: 32,
    },
  }}
>
  {config.icon}
</Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* Growth Icon */}
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#DCFCE7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TrendingUpIcon
            sx={{
              color: "#16A34A",
              fontSize: 18,
            }}
          />
        </Box>

        {/* Growth Text */}
        <Typography
          sx={{
            color: "#16A34A",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          {growth}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          vs last month
        </Typography>
      </Box>
    </Card>
  );
}