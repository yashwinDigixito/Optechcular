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

import EditLedgerGroupForm from "@/component/ledger-group-management/EditLedgergroupForm";

export default function EditLedgerGroupPage() {

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
    <EditLedgerGroupForm
      ledgerGroup={
        ledgerGroup
      }
    />
  );
}