"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    ledgerGroups,
} from "@/assets/genericdata";

import LedgerGroupDetails from "@/component/ledger-group-management/LedgerGroupDetails";

export default function LedgerGroupViewPage() {

  const params =
    useParams();

  const ledgerGroup =
    ledgerGroups.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!ledgerGroup) {

    return (
      <Box sx={{ p: 3 }}>
        Ledger Group not found
      </Box>
    );
  }

  return (
    <LedgerGroupDetails
      ledgerGroup={
        ledgerGroup
      }
    />
  );
}