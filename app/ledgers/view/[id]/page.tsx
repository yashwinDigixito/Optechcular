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

import LedgerDetails from "@/component/ledger-management/LedgerDetails";

export default function LedgerViewPage() {

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
    <LedgerDetails
      ledger={ledger}
    />
  );
}