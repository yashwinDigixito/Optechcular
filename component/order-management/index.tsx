"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { orders } from "@/assets/genericdata";
import type { Order } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";

export default function OrderManagementPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderData, setOrderData] = useState<Order[]>(orders as Order[]);
  const ordersCount = {
    all: orderData.length,
    completed: orderData.filter((order) => order.status === "Completed").length,
    pending: orderData.filter((order) => order.status === "Pending").length,
    cancelled: orderData.filter((order) => order.status === "Cancelled").length,
    refunded: orderData.filter((order) => order.status === "Refunded").length,
  };
  const filteredOrders = orderData.filter((order) => {
    const matchesSearch = search
      ? order.orderNo.toLowerCase().includes(search.toLowerCase()) ||
        order.customerName.toLowerCase().includes(search.toLowerCase()) ||
        (order.productName || "").toLowerCase().includes(search.toLowerCase()): true;
    const matchesPayment = paymentStatus ? order.paymentStatus === paymentStatus : true;
    const matchesOrder = orderStatus ? order.status === orderStatus : true;
    return (
      matchesSearch &&
      matchesPayment &&
      matchesOrder
    );
  });
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            px: 1,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: FONT_SIZE.PAGE_HEADING,
              fontWeight: FONT_WEIGHT.BOLD,
              color: "#0F172A",
              lineHeight: 1.2,
            }}
          >
            Order Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              router.push("/orders/add")
            }
            sx={{
              borderRadius: "14px",
              px: 3,
              height: "50px",
              textTransform: "none",
              fontFamily: FONT_FAMILY.BUTTON,
              fontWeight: FONT_WEIGHT.BOLD,
              boxShadow: "none",
            }}
          >
            Add Order
          </Button>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <OrderFilters
            search={search}
            setSearch={setSearch}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
            ordersCount={ordersCount}
          />
          <Box
            sx={{ p: 3 }} >
            {(search ||
              paymentStatus ||
              orderStatus) && (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: 500,
                  mb: 2,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredOrders.length} results found
              </Typography>
            )}
            <OrderTable
              orders={filteredOrders}
              setOrderData={setOrderData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}