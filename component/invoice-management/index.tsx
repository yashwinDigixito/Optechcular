"use client";

import {
  useState,
} from "react";

import {
  invoices,
} from "@/assets/genericdata";

import {
  Invoice,
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import InvoiceFilters from "./InvoiceFilters";

import InvoiceTable from "./InvoiceTable";

export default function InvoiceManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [
    paymentStatus,
    setPaymentStatus,
  ] = useState("");

  const [
    invoiceStatus,
    setInvoiceStatus,
  ] = useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  const [invoiceData,setInvoiceData] = useState<Invoice[]>(invoices);

  /* COUNTS */
  const invoicesCount = {

    all:
      invoiceData.length,

    sent:
      invoiceData.filter(
        (invoice) =>
          invoice.invoiceStatus ===
          "Sent"
      ).length,

    draft:
      invoiceData.filter(
        (invoice) =>
          invoice.invoiceStatus ===
          "Draft"
      ).length,

    cancelled:
      invoiceData.filter(
        (invoice) =>
          invoice.invoiceStatus ===
          "Cancelled"
      ).length,
  };

  /* FILTERED DATA */
  const filteredInvoices =
    invoiceData.filter(
      (invoice) => {

        const matchesSearch =
          !search ||

          [
            invoice.invoiceNo,
            invoice.customerName,
            invoice.productName,
          ].some(
            (field) =>
              field
                ?.toLowerCase()
                .includes(
                  search.toLowerCase()
                )
          );

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

        background:
          "#F8FAFC",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,

          flexWrap:
            "wrap",

          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight:
              700,

            color:
              "#0F172A",
          }}
        >
          Invoice Management
        </Typography>

        <Button
          variant="contained"
          startIcon={
            <AddIcon />
          }
          onClick={() =>
            router.push(
              "/invoices/create"
            )
          }
          sx={{
            borderRadius:
              "14px",

            px: 3,

            height:
              "50px",

            textTransform:
              "none",

            fontWeight:
              700,

            boxShadow:
              "none",
          }}
        >
          Create Invoice
        </Button>

      </Box>

      {/* MAIN CARD */}
      <Box
        sx={{
          background:
            "#FFFFFF",

          border:
            "1px solid #E2E8F0",

          borderRadius:
            "24px",

          overflow:
            "hidden",
        }}
      >
        {/* FILTERS */}
        <InvoiceFilters
          search={search}
          setSearch={setSearch}
          paymentStatus={
            paymentStatus
          }
          setPaymentStatus={
            setPaymentStatus
          }
          invoiceStatus={
            invoiceStatus
          }
          setInvoiceStatus={
            setInvoiceStatus
          }
          category={category}
          setCategory={
            setCategory
          }
          invoicesCount={{
            all:
              invoicesCount.all,

            completed:
              invoicesCount.sent,

            pending:
              invoicesCount.draft,

            processing:
              invoicesCount.cancelled,
          }}
        />

        {/* TABLE SECTION */}
        <Box
          sx={{
            p: 3,
          }}
        >
          {/* RESULTS */}
          {(
            search ||
            paymentStatus ||
            invoiceStatus ||
            category
          ) && (

            <Typography
              sx={{
                color:
                  "#475569",

                fontWeight:
                  500,

                mb: 2,
              }}
            >
              {
                filteredInvoices.length
              }{" "}
              results found
            </Typography>
          )}

          {/* TABLE */}
          <InvoiceTable
            invoices={
              filteredInvoices
            }
            setInvoiceData={
              setInvoiceData
            }
          />

        </Box>

      </Box>

    </Box>
  );
}