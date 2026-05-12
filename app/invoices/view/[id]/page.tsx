"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    invoices,
} from "@/assets/genericdata";

import InvoiceDetails from "@/component/invoice-management/InvoiceDetails";

export default function InvoiceViewPage() {

  const params =
    useParams();

  const invoice =
    invoices.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!invoice) {

    return (
      <Box sx={{ p: 3 }}>
        Invoice not found
      </Box>
    );
  }

  return (
    <InvoiceDetails
      invoice={invoice}
    />
  );
}