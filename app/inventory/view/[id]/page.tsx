"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    inventories,
} from "@/assets/genericdata";

import InventoryDetails from "@/component/inventory-management/InventoryDetails";

export default function InventoryViewPage() {

  const params =
    useParams();

  const inventory =
    inventories.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!inventory) {

    return (
      <Box sx={{ p: 3 }}>
        Inventory not found
      </Box>
    );
  }

  return (
    <InventoryDetails
      inventory={
        inventory
      }
    />
  );
}