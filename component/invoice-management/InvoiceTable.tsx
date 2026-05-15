"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { Invoice } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  invoices: Invoice[];
  setInvoiceData: React.Dispatch< React.SetStateAction< Invoice[] >>;
}

export default function InvoiceTable({ invoices, setInvoiceData}: Props) {
  const router = useRouter();
  const columns = [
    {
      key: "invoiceNo",
      label: "Invoice No",
    },
    {
      key: "customer",
      label: "Customer",
    },
    {
      key: "product",
      label: "Product",
    },
    {
      key: "category",
      label: "Category",
      align: "center" as const,
    },
    {
      key: "amount",
      label: "Amount",
      align: "center" as const,
    },
    {
      key: "payment",
      label: "Payment",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Invoice Status",
      align: "center" as const,
    },
    {
      key: "date",
      label: "Date",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];
  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setInvoiceData((prev) =>
      prev.map((invoice) =>
        invoice.id === id
          ? {
              ...invoice,
              invoiceStatus:
                value as
                  | "Draft"
                  | "Sent"
                  | "Cancelled",
            }
          : invoice
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={invoices}
      renderCell={( invoice, key ) => {
        switch (key) {
          case "invoiceNo":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#2563EB",
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { invoice.invoiceNo }
              </Typography>
            );
          case "customer":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { invoice.customerName }
              </Typography>
            );
          case "product":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { invoice.productName }
              </Typography>
            );
          case "category":
            return (
              <Chip
                label={ invoice.category }
                size="small"
                sx={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "amount":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                ₹{" "}
                { new Intl.NumberFormat( "en-IN").format( invoice.lineTotal ) }
              </Typography>
            );
case "payment":
  return (
    <Chip
      label={ invoice.paymentStatus }
      size="small"
      sx={{
        background:
          invoice.paymentStatus ===
          "Paid"
            ? "#DCFCE7"
            : invoice.paymentStatus ===
              "Pending"
            ? "#FEF3C7"
            : invoice.paymentStatus ===
              "Overdue"
            ? "#FEE2E2"
            : "#DBEAFE",
        color:
          invoice.paymentStatus ===
          "Paid"
            ? "#15803D"
            : invoice.paymentStatus ===
              "Pending"
            ? "#B45309"
            : invoice.paymentStatus ===
              "Overdue"
            ? "#DC2626"
            : "#2563EB",
        fontWeight: FONT_WEIGHT.BOLD,
        borderRadius: "8px",
        fontFamily: FONT_FAMILY.BODY,
      }}
    />
  );
          case "status":
            return (
              <StatusSelect
                value={ invoice.invoiceStatus }
                options={[ "Sent", "Draft", "Cancelled",]}
                onChange={(value) => handleStatusChange( invoice.id, value ) }
              />
            );
          case "date":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { invoice.invoiceDate}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/invoices/view/${invoice.id}` ) }
                onEdit={() => router.push( `/invoices/edit/${invoice.id}` )}
              />
            );
          default: return null;
        }
      }}
    />
  );
}