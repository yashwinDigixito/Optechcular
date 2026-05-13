"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    ledgers,
} from "@/assets/genericdata";

import EditLedgerForm from "@/component/ledger-management/EditLedgerForm";

export default function EditLedgerPage() {

  const params =
    useParams();

  const ledger =
    ledgers.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!ledger) {

    return (
      <Box sx={{ p: 3 }}>
        Ledger not found
      </Box>
    );
  }

  return (
    <EditLedgerForm
      ledger={ledger}
    />
  );
}