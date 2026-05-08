// components/dashboard/SalesReturnChart.tsx

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

import { salesReturnData } from "@/assets/genericdata";

export default function SalesReturnChart() {

  return (
    <Card
      sx={{
        mt: 2,
        p: 2.5,
        borderRadius: "28px",
        background: "#FFFFFF",
        boxShadow:
          "0px 8px 30px rgba(15,23,42,0.06)",
        overflow: "hidden",
        position: "relative",
        height: "360px",
        transition: "0.3s",

        "&:hover": {
          boxShadow:
            "0px 16px 40px rgba(15,23,42,0.1)",
        },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#2563EB,#16A34A)",
          opacity: 0.08,
          filter: "blur(40px)",
        }}
      />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        {/* Left */}
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Sales vs Returns
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontSize: "14px",
              color: "#94A3B8",
            }}
          >
            Monthly revenue analytics
          </Typography>
        </Box>

        {/* Right */}
        <Box sx={{ textAlign: "right" }}>

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
              background: "#DCFCE7",
              color: "#16A34A",
              fontWeight: 700,
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>

      {/* Chart */}
      <Box
        sx={{
          width: "100%",
          height: 240,
          minWidth: 0,
        }}
      >
        <ResponsiveContainer
          width="99%"
          height={240}
        >
          <BarChart
            data={salesReturnData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
            barGap={8}
          >
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 13,
                fontWeight: 500,
              }}
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{
                fill: "rgba(37,99,235,0.04)",
              }}
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow:
                  "0px 10px 30px rgba(15,23,42,0.12)",
              }}
            />

            {/* Legend */}
            <Legend
              wrapperStyle={{
                fontSize: "14px",
                paddingTop: "10px",
              }}
            />

            {/* Sales */}
            <Bar
              dataKey="sales"
              fill="#2563EB"
              radius={[12, 12, 0, 0]}
              barSize={28}
            />

            {/* Returns */}
            <Bar
              dataKey="returns"
              fill="#16A34A"
              radius={[12, 12, 0, 0]}
              barSize={18}
            />

          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}