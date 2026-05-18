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

import {
  useState,
} from "react";

import PurchaseOrderFilters from "./PurchaseOrderFilters";

import PurchaseOrderTable from "./PurchaseOrderTable";

export default function PurchaseOrderManagementPage() {

  const router =
    useRouter();

  const { colors } =
    themeConfig;

  const [search, setSearch] =
    useState("");

  const [
    paymentStatus,
    setPaymentStatus,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  const [
    purchaseOrderData,
  ] = useState<
    PurchaseOrder[]
  >(
    purchaseOrders
  );

  /* COUNTS */
  const poCounts = {

    all:
      purchaseOrderData.length,

    received:
      purchaseOrderData.filter(
        (po) =>
          po.status ===
          "Received"
      ).length,

    pending:
      purchaseOrderData.filter(
        (po) =>
          po.status ===
            "Pending" ||

          po.status ===
            "Processing"
      ).length,

    delivered:
      purchaseOrderData.filter(
        (po) =>
          po.status ===
          "Delivered"
      ).length,
  };

  /* FILTERED DATA */
  const filteredPOs =
    purchaseOrderData.filter(
      (po) => {

        const matchesSearch =
          search

            ? po.purchaseNo
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              po.vendorName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              po.productName
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
          status

            ? po.status
                .toLowerCase()
                .includes(
                  status.toLowerCase()
                )

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

        background:
          colors.bgLight,
      }}
    >

      <Box
        sx={{
          maxWidth:
            "100%",

          mx: "auto",
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

          <Box>

            <Typography
              sx={{
                fontFamily:
                  FONT_FAMILY.HEADING,

                fontSize:
                  FONT_SIZE.PAGE_HEADING,

                fontWeight:
                  FONT_WEIGHT.BOLD,

                color:
                  colors.textMain,
              }}
            >
              Purchase Orders
            </Typography>

            <Typography
              sx={{
                fontFamily:
                  FONT_FAMILY.BODY,

                fontSize:
                  "13px",

                color:
                  colors.textSecondary,

                mt: 0.5,
              }}
            >
              Manage procurement,
              delivery tracking
              and purchase
              settlements.
            </Typography>

          </Box>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/purchase-orders/add"
              )
            }

            sx={{
              height:
                "50px",

              borderRadius:
                "14px",

              textTransform:
                "none",

              px: 3,

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
            }}
          >
            Add Purchase Order
          </Button>

        </Box>

        {/* MAIN CARD */}
        <Box
          sx={{
            background:
              "#FFFFFF",

            border:
              `1px solid ${colors.border}`,

            borderRadius:
              "24px",

            overflow:
              "hidden",
          }}
        >

          {/* FILTERS */}
          <PurchaseOrderFilters
            search={search}
            setSearch={
              setSearch
            }

            paymentStatus={
              paymentStatus
            }

            setPaymentStatus={
              setPaymentStatus
            }

            Status={status}

            setStatus={
              setStatus
            }

            category={
              category
            }

            setCategory={
              setCategory
            }

            poCounts={
              poCounts
            }
          />

          {/* TABLE SECTION */}
          <Box
            sx={{
              p: 3,
            }}
          >

            {(

              search ||

              paymentStatus ||

              status ||

              category

            ) && (

              <Typography
                sx={{
                  mb: 2,

                  color:
                    colors.textSecondary,

                  fontWeight:
                    600,

                  fontSize:
                    "13px",

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              >
                {
                  filteredPOs.length
                }{" "}
                purchase orders
                found
              </Typography>

            )}

            {/* STATUS INFO */}
            <Box
              sx={{
                display:
                  "flex",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",

                flexWrap:
                  "wrap",

                gap: 1.5,

                mb: 2,
              }}
            >

              <Typography
                sx={{
                  fontSize:
                    "12px",

                  color:
                    colors.textSecondary,

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              >
                Received:
                {" "}

                <Box
                  component="span"
                  sx={{
                    color:
                      colors.success,

                    fontWeight:
                      700,
                  }}
                >
                  {
                    poCounts.received
                  }
                </Box>

                {" "}•{" "}

                Pending:
                {" "}

                <Box
                  component="span"
                  sx={{
                    color:
                      colors.warning,

                    fontWeight:
                      700,
                  }}
                >
                  {
                    poCounts.pending
                  }
                </Box>

                {" "}•{" "}

                Delivered:
                {" "}

                <Box
                  component="span"
                  sx={{
                    color:
                      colors.primary,

                    fontWeight:
                      700,
                    }}
                  >
                    {
                      poCounts.delivered
                    }
                  </Box>

              </Typography>

            </Box>

            {/* TABLE */}
            <PurchaseOrderTable
              purchaseOrders={
                filteredPOs
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}