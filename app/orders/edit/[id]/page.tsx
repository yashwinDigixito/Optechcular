"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    orders,
} from "@/assets/genericdata";

import EditOrderForm from "@/component/order-management/EditOrderForm";

export default function EditOrderPage() {

  const params =
    useParams();

  const order =
    orders.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!order) {

    return (
      <Box
        sx={{
          p: 3,
        }}
      >
        Order not found
      </Box>
    );
  }

  return (
    <EditOrderForm
      order={order}
    />
  );
}