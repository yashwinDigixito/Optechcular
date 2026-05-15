"use client";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Box,
  Card,
  Chip,
  Typography,
} from "@mui/material";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ReportChartProps,
} from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";

export default function ReportChart({
  title,
  data,
  color = "#F5F7FA",
  label,
}: ReportChartProps) {

  return (
    <Card
      sx={{
        mt: 2,

        p: 2,

        borderRadius:
          "22px",

        background:
          themeConfig.colors.white,

        boxShadow:
          "0px 6px 24px rgba(15,23,42,0.06)",

        overflow:
          "hidden",

        position:
          "relative",

        height:
          "320px",

        transition:
          "0.3s",

        "&:hover":
          {
            transform:
              "translateY(-4px)",

            boxShadow:
              "0px 16px 40px rgba(15,23,42,0.1)",
          },
      }}
    >

      {/* BACKGROUND BLUR */}
      <Box
        sx={{
          position:
            "absolute",

          top: -40,

          right: -40,

          width: 120,

          height: 120,

          borderRadius:
            "50%",

          background:
            color,

          opacity:
            0.08,

          filter:
            "blur(12px)",
        }}
      />

      {/* HEADER */}
      <Box
        sx={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "flex-start",

          mb: 2,
        }}
      >

        {/* LEFT */}
        <Box>

          <Typography
            sx={{
              fontSize:
                FONT_SIZE.CARD_HEADING,

              fontWeight:
                FONT_WEIGHT.BOLD,

              color:
                themeConfig.colors.textMain,

              fontFamily:
                FONT_FAMILY.HEADING,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 0.5,

              fontSize:
                FONT_SIZE.SUB_HEADING,

              color:
                "#94A3B8",

              fontFamily:
                FONT_FAMILY.BODY,
            }}
          >
            Weekly analytics overview
          </Typography>

        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            textAlign:
              "right",
          }}
        >

          <Chip
            size="small"

            icon={
              <TrendingUpIcon
                sx={{
                  fontSize:
                    "16px !important",
                }}
              />
            }
            label={label}
            sx={{
              mt: 1,
              background:
                themeConfig.colors.successBg,
              color:
                themeConfig.colors.success,
              fontWeight:
                FONT_WEIGHT.BOLD,
              borderRadius:
                "8px",
              fontFamily:
                FONT_FAMILY.BODY,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width:
            "100%",
          height:
            220,
          minWidth: 0,
        }}
      >
        <ResponsiveContainer
          width="99%"
          height={220}
        >
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -25,
              bottom: 0,
            }}
          >
            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={
                themeConfig.colors.border
              }
            />
            {/* X AXIS */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill:
                  "#94A3B8",
                fontSize: 12,
              }}
            />

            {/* Y AXIS */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill:
                  "#94A3B8",
                fontSize: 12,
              }}
            />

            {/* TOOLTIP */}
            <Tooltip
              contentStyle={{
                borderRadius:
                  "14px",
                border:
                  "none",
                boxShadow:
                  "0px 10px 30px rgba(15,23,42,0.12)",
                fontFamily:
                  FONT_FAMILY.BODY,
              }}
            />

            {/* LINE */}
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              dot={{
                r: 4,
                fill:
                  color,
                strokeWidth: 2,
                stroke:
                  "#fff",
              }}

              activeDot={{
                r: 6,
                stroke:color,
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}