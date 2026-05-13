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

import EditInventoryForm from "@/component/inventory-management/EditInventoryForm";

export default function EditInventoryPage() {

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
    <EditInventoryForm
      inventory={
        inventory
      }
    />
  );
}