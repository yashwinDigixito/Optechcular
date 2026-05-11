"use client";

import { useState } from "react";

import { orderTabs } from "@/assets/genericdata";
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

  const [activeTab, setActiveTab] =useState("All");

  const [startDate, setStartDate] =useState("");
  const [endDate, setEndDate] =useState("");

  const [search, setSearch] =useState("");

  const filteredOrders =
  orders.filter((order) => {

    const matchesTab =activeTab === "All"? true: order.status === activeTab;
    const orderDate =new Date(order.orderDate);
    const matchesStart = startDate ? orderDate >=new Date(startDate): true;
    const matchesEnd = endDate ? orderDate <= new Date(endDate) : true;

    const matchesSearch = search ? order.customerName.toLowerCase().includes( search.toLowerCase())
          ||
          order.orderNo.toLowerCase().includes(search.toLowerCase()): true;
    return (
      matchesTab &&
      matchesStart &&
      matchesEnd &&
      matchesSearch
    );
  });

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
      }}
    >
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

      <TableContainerCard>

        <Box sx={{ p: 3 }}>
          <FilterTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={orderTabs}
            data={orders}
          />
          <OrderFilters
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          search={search}
          setSearch={setSearch}
          />
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
        <OrderTable
          orders={filteredOrders}
        />

      </TableContainerCard>

    </Box>
  );
}