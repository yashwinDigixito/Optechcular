"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    purchaseOrders,
} from "@/assets/genericdata";

import PurchaseOrderDetails from "@/component/purchase-order-management/PurchaseOrderDetails";

export default function PurchaseOrderViewPage() {

  const params =
    useParams();

  const purchaseOrder =
    purchaseOrders.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!purchaseOrder) {

    return (
      <Box sx={{ p: 3 }}>
        Purchase Order not found
      </Box>
    );
  }

  return (
    <PurchaseOrderDetails
      purchaseOrder={
        purchaseOrder
      }
    />
  );
}