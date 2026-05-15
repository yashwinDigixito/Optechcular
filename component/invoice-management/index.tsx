"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { invoices } from "@/assets/genericdata";
import { Invoice } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InvoiceFilters from "./InvoiceFilters";
import InvoiceTable from "./InvoiceTable";

export default function InvoiceManagementPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [ paymentStatus, setPaymentStatus,] = useState("");
  const [invoiceStatus, setInvoiceStatus ] = useState("");
  const [ category, setCategory] = useState("");
  const [invoiceData, setInvoiceData] = useState<Invoice[]>(invoices);

  const invoicesCount = {
    all: invoiceData.length,
    sent: invoiceData.filter( (invoice) => invoice.invoiceStatus === "Sent" ).length,
    draft: invoiceData.filter( (invoice) => invoice.invoiceStatus === "Draft" ).length,
    cancelled: invoiceData.filter( (invoice) => invoice.invoiceStatus === "Cancelled").length,
  };
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
                ?.toLowerCase().includes( search.toLowerCase())
          );
        const matchesPayment = paymentStatus ? invoice.paymentStatus === paymentStatus : true;
        const matchesStatus = invoiceStatus ? invoice.invoiceStatus === invoiceStatus : true;
        const matchesCategory = category ? invoice.category === category : true;
        return ( matchesSearch && matchesPayment && matchesStatus && matchesCategory );
      }
    );
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            px: 1,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: FONT_SIZE.PAGE_HEADING,
              fontWeight: FONT_WEIGHT.BOLD,
              color: "#0F172A",
              lineHeight:1.2,
            }}
          >
            Invoice Management
          </Typography>
          <Button
            variant="contained"
            startIcon={ <AddIcon /> }
            onClick={() => router.push( "/invoices/create" ) }
            sx={{
              borderRadius: "14px",
              px: 3,
              height: "50px",
              textTransform: "none",
              fontFamily: FONT_FAMILY.BUTTON,
              fontWeight: FONT_WEIGHT.BOLD,
              boxShadow:"none",
            }}
          >
            Create Invoice
          </Button>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <InvoiceFilters
            search={search}
            setSearch={setSearch}
            paymentStatus={ paymentStatus }
            setPaymentStatus={ setPaymentStatus }
            invoiceStatus={ invoiceStatus }
            setInvoiceStatus={ setInvoiceStatus }
            category={category}
            setCategory={ setCategory }
            invoicesCount={{
              all: invoicesCount.all,
              completed: invoicesCount.sent,
              pending: invoicesCount.draft,
              processing: invoicesCount.cancelled,
            }}
          />
          <Box sx={{p: 3}}>
            {(
              search ||
              paymentStatus ||
              invoiceStatus ||
              category
            ) && (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: 500,
                  mb: 2,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredInvoices.length}{" "} results found
              </Typography>
            )}
            <InvoiceTable
              invoices={filteredInvoices}
              setInvoiceData={setInvoiceData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}