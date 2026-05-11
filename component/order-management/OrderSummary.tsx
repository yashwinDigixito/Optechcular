"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import {
  Order,
} from "@/assets/types";

interface OrderSummaryProps {
  order: Order | null;
}

export default function OrderSummary({
  order,
}: OrderSummaryProps) {

  if (!order) {
    return (
      <Card
        sx={{
          p: 2,
          borderRadius: "22px",
          textAlign: "center",
          maxWidth: "520px",
          mx: "auto",
          boxShadow:
            "0px 8px 24px rgba(15,23,42,0.06)",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#94A3B8",
          }}
        >
          No Order Selected
        </Typography>
      </Card>
    );
  }

  const subtotal =
    order.totalAmount - 2000;

  const tax = 2000;

  return (
    <Card
      sx={{
        p: 1.5,
        width: "100%",
        maxWidth: "500px",
        maxHeight: "calc(100vh - 120px)",
        overflow: "hidden",
        flexShrink: 0,
        borderRadius: "22px",
        background: "#FFFFFF",
        boxShadow:"0px 8px 24px rgba(15,23,42,0.06)",
        position: "relative",
        mx: "auto",
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
          background:"linear-gradient(90deg,#2563EB,#06B6D4)",
        }}
      />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Order Summary
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: "13px",
              mt: 0.3,
            }}
          >
            {order.orderNo}
          </Typography>
        </Box>

        <Chip
          label={order.status}
          size="small"
          sx={{
            background:
              order.status === "Completed"
                ? "#DCFCE7"
                : order.status === "Pending"
                ? "#FEF3C7"
                : "#FEE2E2",

            color:
              order.status === "Completed"
                ? "#16A34A"
                : order.status === "Pending"
                ? "#D97706"
                : "#DC2626",

            fontWeight: 700,
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Customer */}
      <Box
        sx={{
          mt: 2,
          p: 1.8,
          borderRadius: "18px",
          background:
            "linear-gradient(135deg,#F8FAFC,#EFF6FF)",
          border:
            "1px solid #E2E8F0",
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            {order.customerName.charAt(0)}
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "17px",
                color: "#0F172A",
              }}
            >
              {order.customerName}
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: "13px",
                mt: 0.2,
              }}
            >
              {order.email}
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Details */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
        }}
      >

        {/* Product */}
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            p: 1.5,
            borderRadius: "14px",
            background: "#F8FAFC",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <Inventory2OutlinedIcon
              sx={{
                color: "#2563EB",
                fontSize: 20,
              }}
            />

            <Typography
              sx={{
                color: "#64748B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Product Type
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              fontSize: "14px",
            }}
          >
            {order.productType}
          </Typography>
        </Box>

        {/* Sales */}
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            p: 1.5,
            borderRadius: "14px",
            background: "#F8FAFC",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <PersonOutlineOutlinedIcon
              sx={{
                color: "#2563EB",
                fontSize: 20,
              }}
            />

            <Typography
              sx={{
                color: "#64748B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Sales Person
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              fontSize: "14px",
            }}
          >
            {order.salesPerson}
          </Typography>
        </Box>

        {/* Date */}
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            p: 1.5,
            borderRadius: "14px",
            background: "#F8FAFC",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon
              sx={{
                color: "#2563EB",
                fontSize: 20,
              }}
            />

            <Typography
              sx={{
                color: "#64748B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Order Date
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              fontSize: "14px",
            }}
          >
            {order.orderDate}
          </Typography>
        </Box>

      </Box>

      {/* Billing */}
      <Box
        sx={{
          mt: 2,
          p: 1.8,
          borderRadius: "18px",
          background: "#F8FAFC",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <ReceiptLongOutlinedIcon
            sx={{
              color: "#2563EB",
              fontSize: 20,
            }}
          />

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Billing Summary
          </Typography>
        </Stack>

        <Divider sx={{ mb: 1.5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Subtotal
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            ₹{subtotal}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Tax
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            ₹{tax}
          </Typography>
        </Box>
      </Box>

      {/* Total */}
      <Box
        sx={{
          mt: 2,
          p: 2,
          borderRadius: "18px",
          background:
            "linear-gradient(135deg,#2563EB,#1D4ED8)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: -25,
            top: -25,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.08)",
          }}
        />

        <Typography
          sx={{
            fontSize: "13px",
            opacity: 0.8,
          }}
        >
          Grand Total
        </Typography>

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 800,
            mt: 0.5,
          }}
        >
          ₹{order.totalAmount}
        </Typography>
      </Box>
    </Card>
  );
}