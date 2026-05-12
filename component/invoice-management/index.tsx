"use client";

import {
  useState,
} from "react";

import {
  invoices,
} from "@/assets/genericdata";

import {
  Invoice
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import TableContainerCard from "@/component/common/TableContainerCard";

import InvoiceFilters from "./InvoiceFilters";
import InvoiceTable from "./InvoiceTable";

export default function InvoiceManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [paymentStatus,
    setPaymentStatus] =
      useState("");

  const [invoiceStatus,
    setInvoiceStatus] =
      useState("");

  const [category,
    setCategory] =
      useState("");

  const [invoiceData,
    setInvoiceData] =
      useState<Invoice[]>(
        invoices
      );

  const filteredInvoices =
    invoiceData.filter(
      (invoice) => {

        const matchesSearch =
          search
            ? invoice.invoiceNo
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              invoice.customerName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesPayment =
          paymentStatus
            ? invoice.paymentStatus ===
              paymentStatus
            : true;

        const matchesStatus =
          invoiceStatus
            ? invoice.invoiceStatus ===
              invoiceStatus
            : true;

        const matchesCategory =
          category
            ? invoice.category ===
              category
            : true;

        return (
          matchesSearch &&
          matchesPayment &&
          matchesStatus &&
          matchesCategory
        );
      }
    );

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight: 700,

            color:
              "#0F172A",
          }}
        >
          Invoice Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/invoices/create"
            )
          }
          sx={{
            borderRadius:
              "12px",

            px: 3,

            height:
              "48px",

            textTransform:
              "none",

            fontWeight: 600,
          }}
        >
          Create Invoice
        </Button>

      </Box>

      {/* FILTERS */}
      <InvoiceFilters
        search={search}
        setSearch={setSearch}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        invoiceStatus={invoiceStatus}
        setInvoiceStatus={setInvoiceStatus}
        category={category}
        setCategory={setCategory}
      />

      {/* TABLE */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          <Typography
            sx={{
              color:
                "#475569",

              fontWeight: 500,

              mb: 2,
            }}
          >
            {
              filteredInvoices.length
            }{" "}
            results found
          </Typography>

          <InvoiceTable
            invoices={
              filteredInvoices
            }
            setInvoiceData={
              setInvoiceData
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}