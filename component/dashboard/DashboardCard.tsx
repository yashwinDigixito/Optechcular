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

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";

interface DashboardCardProps {

  title: string;

  value:
    | string
    | number;

  growth: string;
}

export default function DashboardCard({
  title,
  value,
  growth,
}: DashboardCardProps) {

  const getCardConfig =
    () => {

      switch (
        title
      ) {

        case "Total Orders":

          return {
            icon:
              <ShoppingCartCheckoutIcon />,

            bg:
              "#EEF4FF",

            color:
              "#2563EB",
          };

        case "Total Purchases":

          return {
            icon:
              <Inventory2Icon />,

            bg:
              "#ECFDF5",

            color:
              "#16A34A",
          };

        case "Total Sales":

          return {
            icon:
              <PaymentsIcon />,

            bg:
              "#FFF7ED",

            color:
              "#EA580C",
          };

        default:

          return {
            icon:
              <ShoppingCartCheckoutIcon />,

            bg:
              "#EEF4FF",

            color:
              "#2563EB",
          };
      }
    };

  const config =
    getCardConfig();

  return (
    <Card
      sx={{
        p: 3,
        borderRadius:"24px",
        backgroundColor:themeConfig.colors.white,
        boxShadow:"0px 6px 30px rgba(15,23,42,0.06)",
        transition:"all 0.3s ease",
        cursor:"pointer",
        overflow:"hidden",
        position: "relative",
        height:"180px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",

        "&:hover":
          {
            transform:"translateY(-6px)",
            boxShadow:"0px 16px 40px rgba(15,23,42,0.12)",
          },
      }}
    >

      {/* TOP BORDER */}
      <Box
        sx={{
          position:
            "absolute",
          top: 0,
          left: 0,
          width:"100%",
          height:"5px",
          background:config.color,
        }}
      />

      {/* TOP SECTION */}
      <Box
        sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"flex-start",
          gap: 2,
        }}
      >

        {/* TITLE + VALUE */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >

          <Typography
            sx={{
              fontSize:FONT_SIZE.SECTION_HEADING,
              fontWeight:FONT_WEIGHT.MEDIUM,

              color:
                themeConfig.colors.textSecondary,

              fontFamily:
                FONT_FAMILY.BODY,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs:
                  "32px",

                md:
                  "38px",
              },

              fontWeight:
                FONT_WEIGHT.BOLD,

              color:
                themeConfig.colors.textMain,

              mt: 1.5,

              lineHeight:
                1.1,

              whiteSpace:
                "nowrap",

              overflow:
                "hidden",

              textOverflow:
                "ellipsis",

              fontFamily:
                FONT_FAMILY.HEADING,
            }}
          >
            {value}
          </Typography>

        </Box>

        {/* ICON */}
        <Box
          sx={{
            width: 60,

            height: 60,

            borderRadius:
              "20px",

            background:
              config.bg,

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            color:
              config.color,

            flexShrink: 0,

            "& svg":
              {
                fontSize:
                  32,
              },
          }}
        >
          {config.icon}
        </Box>

      </Box>

      {/* BOTTOM SECTION */}
      <Box
        sx={{
          mt: 3,

          display:
            "flex",

          alignItems:
            "center",

          gap: 1,
        }}
      >

        {/* GROWTH ICON */}
        <Box
          sx={{
            width: 32,

            height: 32,

            borderRadius:
              "50%",

            backgroundColor:
              themeConfig.colors.successBg,

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",
          }}
        >

          <TrendingUpIcon
            sx={{
              color:
                themeConfig.colors.success,

              fontSize:
                18,
            }}
          />

        </Box>

        {/* GROWTH */}
        <Typography
          sx={{
            color:
              themeConfig.colors.success,

            fontWeight:
              FONT_WEIGHT.BOLD,

            fontSize:
              FONT_SIZE.TABLE_BODY,

            fontFamily:
              FONT_FAMILY.BODY,
          }}
        >
          {growth}
        </Typography>

        {/* TEXT */}
        <Typography
          sx={{
            color:
              "#94A3B8",

            fontSize:
              FONT_SIZE.TABLE_BODY,

            fontWeight:
              FONT_WEIGHT.MEDIUM,

            fontFamily:
              FONT_FAMILY.BODY,
          }}
        >
          vs last month
        </Typography>

      </Box>

    </Card>
  );
}