"use client";

import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
  orders,
} from "@/assets/genericdata";

import FilterTabs from "@/component/common/FilterTabs";

import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";

import TableContainerCard from "@/component/common/TableContainerCard";

export default function OrderManagementPage() {

  const router = useRouter();

  const [activeTab, setActiveTab] =
    useState("All");

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter(
          (order) =>
            order.status === activeTab
        );

  return (
    <Box
      sx={{
        p: 3,
        background: "#F1F5F9",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#0F172A",
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
            borderRadius: "12px",
            px: 3,
            height: "48px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add Order
        </Button>
      </Box>

      {/* Main Card */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          {/* Tabs */}
          <FilterTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Filters */}
          <OrderFilters />

          {/* Results */}
          <Typography
            sx={{
              mt: 3,
              color: "#475569",
              fontWeight: 500,
            }}
          >
            {filteredOrders.length} results found
          </Typography>

        </Box>

        {/* Table */}
        <OrderTable
          orders={filteredOrders}
        />

      </TableContainerCard>

    </Box>
  );
}