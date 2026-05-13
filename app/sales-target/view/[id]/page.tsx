"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    salesTargets,
} from "@/assets/genericdata";

import SalesTargetDetails from "@/component/sales-person-target/SalesTargetDetails";

export default function SalesTargetViewPage() {

  const params =
    useParams();

  const salesTarget =
    salesTargets.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!salesTarget) {

    return (
      <Box sx={{ p: 3 }}>
        Sales Target not found
      </Box>
    );
  }

  return (
    <SalesTargetDetails
      salesTarget={
        salesTarget
      }
    />
  );
}