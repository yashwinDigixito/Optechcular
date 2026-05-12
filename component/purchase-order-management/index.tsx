"use client";

import {
    purchaseOrders,
} from "@/assets/genericdata";

import {
    PurchaseOrder,
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
    useState,
} from "react";

import TableContainerCard from "@/component/common/TableContainerCard";

import PurchaseOrderFilters from "./PurchaseOrderFilters";

import PurchaseOrderTable from "./PurchaseOrderTable";

export default function PurchaseOrderManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [paymentStatus,
    setPaymentStatus] =
      useState("");

  const [poStatus,
    setPoStatus] =
      useState("");

  const [category,
    setCategory] =
      useState("");

  const [purchaseOrderData] =
    useState<
      PurchaseOrder[]
    >(
      purchaseOrders
    );

  const filteredPOs =
    purchaseOrderData.filter(
      (po) => {

        const matchesSearch =
          search
            ? po.poNumber
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              po.vendorName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesPayment =
          paymentStatus
            ? po.paymentStatus ===
              paymentStatus
            : true;

        const matchesStatus =
          poStatus
            ? po.poStatus ===
              poStatus
            : true;

        const matchesCategory =
          category
            ? po.category ===
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
          display:
            "flex",

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

            fontWeight:
              700,

            color:
              "#0F172A",
          }}
        >
          Purchase Order Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/purchase-orders/add"
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

            fontWeight:
              600,
          }}
        >
          Add Purchase Order
        </Button>

      </Box>

      {/* FILTERS */}
      <PurchaseOrderFilters
        search={search}
        setSearch={setSearch}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        poStatus={poStatus}
        setPoStatus={setPoStatus}
        category={category}
        setCategory={setCategory}
      />

      {/* TABLE */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          <Typography
            sx={{
              mb: 2,

              color:
                "#64748B",

              fontWeight:
                500,
            }}
          >
            {
              filteredPOs.length
            }{" "}
            results found
          </Typography>

          <PurchaseOrderTable
            purchaseOrders={
              filteredPOs
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}