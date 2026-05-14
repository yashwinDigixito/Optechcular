"use client";

import {
  useState,
} from "react";

import {
  orders,
} from "@/assets/genericdata";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import OrderFilters from "./OrderFilters";

import OrderTable from "./OrderTable";

export default function OrderManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [
    paymentStatus,
    setPaymentStatus,
  ] = useState("");

  const [
    orderStatus,
    setOrderStatus,
  ] = useState("");

  const [
    orderData,
    setOrderData,
  ] = useState(
    orders
  );

  /* COUNTS */
  const ordersCount = {

    all:
      orderData.length,

    completed:
      orderData.filter(
        (order) =>
          order.status ===
          "Completed"
      ).length,

    pending:
      orderData.filter(
        (order) =>
          order.status ===
          "Pending"
      ).length,

    cancelled:
      orderData.filter(
        (order) =>
          order.status ===
          "Cancelled"
      ).length,

    refunded:
      orderData.filter(
        (order) =>
          order.status ===
          "Refunded"
      ).length,
  };

  /* FILTERED DATA */
  const filteredOrders =
    orderData.filter(
      (order) => {

        const matchesSearch =
          search
            ? order.orderNo
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              order.customerName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              order.productName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesPayment =
          paymentStatus
            ? order.paymentStatus ===
              paymentStatus
            : true;

        const matchesOrder =
          orderStatus
            ? order.status ===
              orderStatus
            : true;

        return (
          matchesSearch &&
          matchesPayment &&
          matchesOrder
        );
      }
    );

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",

        background:
          "#F8FAFC",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,

          flexWrap:
            "wrap",

          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight:
              700,

            color:
              "#0F172A",
          }}
        >
          Order Management
        </Typography>

        <Button
          variant="contained"
          startIcon={
            <AddIcon />
          }
          onClick={() =>
            router.push(
              "/orders/add"
            )
          }
          sx={{
            borderRadius:
              "14px",

            px: 3,

            height:
              "50px",

            textTransform:
              "none",

            fontWeight:
              700,

            boxShadow:
              "none",
          }}
        >
          Add Order
        </Button>

      </Box>

      {/* MAIN CARD */}
      <Box
        sx={{
          background:
            "#FFFFFF",

          border:
            "1px solid #E2E8F0",

          borderRadius:
            "24px",

          overflow:
            "hidden",
        }}
      >
        {/* FILTERS */}
        <OrderFilters
          search={search}
          setSearch={setSearch}
          paymentStatus={
            paymentStatus
          }
          setPaymentStatus={
            setPaymentStatus
          }
          orderStatus={
            orderStatus
          }
          setOrderStatus={
            setOrderStatus
          }
          ordersCount={
            ordersCount
          }
        />

        {/* TABLE SECTION */}
        <Box
          sx={{
            p: 3,
          }}
        >
          {/* RESULTS */}
          {(
            search ||
            paymentStatus ||
            orderStatus
          ) && (

            <Typography
              sx={{
                color:
                  "#475569",

                fontWeight:
                  500,

                mb: 2,
              }}
            >
              {
                filteredOrders.length
              }{" "}
              results found
            </Typography>
          )}

          {/* TABLE */}
          <OrderTable
            orders={
              filteredOrders
            }
            setOrderData={
              setOrderData
            }
          />

        </Box>

      </Box>

    </Box>
  );
}