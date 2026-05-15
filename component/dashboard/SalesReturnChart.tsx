"use client";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Box,
  Card,
  Chip,
  Typography,
} from "@mui/material";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  salesReturnData,
} from "@/assets/genericdata";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";

export default function SalesReturnChart() {

  return (
    <Card
      sx={{
        mt: 2,
        p: 2.5,
        borderRadius: "28px",
        background: themeConfig.colors.white,
        boxShadow: "0px 8px 30px rgba(15,23,42,0.06)",
        overflow: "hidden",
        position: "relative",
        height: "360px",
        transition: "0.3s",
        "&:hover":
          {
            boxShadow: "0px 16px 40px rgba(15,23,42,0.1)",
          },
      }}
    >
      {/* BACKGROUND GLOW */}
      <Box
        sx={{
          position:"absolute",
          top: -80,
          right: -80,
          width: 200,
          height: 200,
          borderRadius:"50%",
          background:"linear-gradient(135deg,#2563EB,#16A34A)",
          opacity: 0.08,
          filter: "blur(40px)",
        }}
      />
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"flex-start",
          mb: 2,
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography
            sx={{
              fontSize: FONT_SIZE.SECTION_HEADING,
              fontWeight: FONT_WEIGHT.BOLD,
              color:
                themeConfig.colors.textMain,
              fontFamily: FONT_FAMILY.HEADING,
            }}
          >
            Sales vs Returns
          </Typography>
          <Typography
            sx={{
              mt: 0.5,
              fontSize: FONT_SIZE.SUB_HEADING,
              color: "#94A3B8",
              fontFamily:FONT_FAMILY.BODY,
            }}
          >
            Monthly revenue analytics
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
            label="+18.2%"
            sx={{
              mt: 1,
              background: themeConfig.colors.successBg,
              color: themeConfig.colors.success,
              fontWeight: FONT_WEIGHT.BOLD,
              borderRadius: "10px",
              fontFamily: FONT_FAMILY.BODY,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width:"100%",
          height:240,
          minWidth: 0,
        }}
      >
        <ResponsiveContainer
          width="99%"
          height={240}
        >
          <BarChart
            data={ salesReturnData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0,}}
            barGap={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={themeConfig.colors.border}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 13,
                fontWeight: FONT_WEIGHT.MEDIUM,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
            />
            {/* TOOLTIP */}
            <Tooltip
              cursor={{
                fill: "rgba(37,99,235,0.04)",
              }}

              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0px 10px 30px rgba(15,23,42,0.12)",
                fontFamily:FONT_FAMILY.BODY,
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize:"14px",
                paddingTop:"10px",
                fontFamily:FONT_FAMILY.BODY,
              }}
            />
            <Bar
              dataKey="sales"
              fill="#2563EB"
              radius={[12,12,0,0,]}
              barSize={28}
            />
            <Bar
              dataKey="returns"
              fill="#16A34A"
              radius={[12,12,0,0,]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}