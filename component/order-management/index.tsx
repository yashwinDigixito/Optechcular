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

import TableContainerCard from "@/component/common/TableContainerCard";

import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";

export default function OrderManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [paymentStatus,
    setPaymentStatus] =
      useState("");

  const [orderStatus,
    setOrderStatus] =
      useState("");

  const [orderData,
    setOrderData] =
      useState(orders);

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
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight: 700,

            color:
              "#0F172A",
          }}
        >
          Order Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/orders/add"
            )
          }
          sx={{
            borderRadius:
              "12px",

            px: 3,

            height:
              "48px",

            textTransform:
              "none",

            fontWeight: 600,
          }}
        >
          Add Order
        </Button>

      </Box>

      {/* FILTERS */}
      <OrderFilters
        search={search}
        setSearch={setSearch}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />

      {/* TABLE CARD */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          {/* RESULTS */}
          <Typography
            sx={{
              color:
                "#475569",

              fontWeight: 500,

              mb: 2,
            }}
          >
            {
              filteredOrders.length
            }{" "}
            results found
          </Typography>

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

      </TableContainerCard>

    </Box>
  );
}