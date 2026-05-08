// components/dashboard/ReportChart.tsx

"use client";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  Box,
  Card,
  Chip,
  Typography,
} from "@mui/material";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ReportChartProps } from "@/assets/types";

export default function ReportChart({
  title,
  data,
  color = "#F5F7FA",
  label,
}: ReportChartProps) {


  return (
    <Card
      sx={{
        mt:2,
        p: 2,
        borderRadius: "22px",
        background: "#FFFFFF",
        boxShadow:
          "0px 6px 24px rgba(15,23,42,0.06)",
        overflow: "hidden",
        position: "relative",
        height: "320px",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            "0px 16px 40px rgba(15,23,42,0.1)",
        },
      }}
    >
      {/* Background Blur */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: color,
          opacity: 0.08,
          filter: "blur(12px)",
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
              fontSize: "20px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontSize: "13px",
              color: "#94A3B8",
            }}
          >
            Weekly analytics overview
          </Typography>
        </Box>

        {/* Right */}
        <Box sx={{ textAlign: "right" }}>
          <Chip
            size="small"
            icon={
              <TrendingUpIcon
                sx={{
                  fontSize: "16px !important",
                }}
              />
            }
            label={label}
            sx={{
              mt: 1,
              background: "#DCFCE7",
              color: "#16A34A",
              fontWeight: 700,
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      {/* Chart */}
      <Box
  sx={{
    width: "100%",
    height: 220,
    minWidth: 0,
  }}
>
        <ResponsiveContainer
          width="99%"
          height={220}
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -25,
              bottom: 0,
            }}
          >
            {/* Gradient */}
            <defs>
              <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={color}
                  stopOpacity={0.15}
                />
            
                <stop
                  offset="50%"
                  stopColor={color}
                  stopOpacity={0.06}
                />
            
                <stop
                  offset="100%"
                  stopColor={color}
                  stopOpacity={0.01}
                />
              </linearGradient>
            </defs>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
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
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                boxShadow:
                  "0px 10px 30px rgba(15,23,42,0.12)",
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#gradient-${title})`}
              dot={false}
              activeDot={{
                r: 5,
                stroke: color,
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}