"use client";

import {
  purchaseOrders,
} from "@/assets/genericdata";
import {
  PurchaseOrder,
} from "@/assets/types";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PurchaseOrderFilters from "./PurchaseOrderFilters";
import PurchaseOrderTable from "./PurchaseOrderTable";

export default function PurchaseOrderManagementPage() {
  const router = useRouter();
  const { colors } = themeConfig;

  const [search, setSearch] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [poStatus, setPoStatus] = useState("");
  const [category, setCategory] = useState("");

  const [purchaseOrderData, setStoreData] = useState<PurchaseOrder[]>(purchaseOrders);

  // Dynamic PO counts for filter tabs
  const poCount = {
    all: purchaseOrderData.length,
    received: purchaseOrderData.filter((po) => po.status === "Received").length,
    pending: purchaseOrderData.filter((po) => po.status === "Pending").length,
    processing: purchaseOrderData.filter((po) => po.status === "Processing").length,
  };

  const filteredPOs = purchaseOrderData.filter((po) => {
    const matchesSearch = !search ||
      po.purchaseNo.toLowerCase().includes(search.toLowerCase()) ||
      po.vendorName.toLowerCase().includes(search.toLowerCase());

    const matchesPayment = paymentStatus
      ? po.paymentStatus === paymentStatus
      : true;

    const matchesStatus = poStatus
      ? po.status.toLowerCase() === poStatus.toLowerCase()
      : true;

    const matchesCategory = category
      ? po.category === category
      : true;

    return (
      matchesSearch &&
      matchesPayment &&
      matchesStatus &&
      matchesCategory
    );
  });

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
        {/* HEADER SECTION */}
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
              lineHeight: 1.2,
            }}
          >
            Purchase Order Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => router.push("/purchase-orders/add")}
            sx={{
              borderRadius: "14px",
              px: 3,
              height: "50px",
              textTransform: "none",
              fontFamily: FONT_FAMILY.BUTTON,
              fontWeight: FONT_WEIGHT.BOLD,
              boxShadow: "none",
            }}
          >
            Add Purchase Order
          </Button>
        </Box>

        {/* UNIFIED DATA CARD */}
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* TABS & FILTERS */}
          <PurchaseOrderFilters
            search={search}
            setSearch={setSearch}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            poStatus={poStatus}
            setPoStatus={setPoStatus}
            category={category}
            setCategory={setCategory}
            poCount={poCount}
          />

          {/* TABLE AREA */}
          <Box sx={{ p: 3 }}>
            {(search || paymentStatus || poStatus || category) && (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: 500,
                  mb: 2,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredPOs.length} results found
              </Typography>
            )}
            <PurchaseOrderTable
              purchaseOrders={filteredPOs}
              setStoreData={setStoreData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}