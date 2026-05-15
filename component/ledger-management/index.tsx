"use client";

import { useState } from "react";

import { ledgers } from "@/assets/genericdata";

import { Ledger } from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import LedgerFilters from "./LedgerFilters";

import LedgerTable from "./LedgerTable";

export default function LedgerManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    ledgerGroup,
    setLedgerGroup,
  ] = useState("");

  const [
    ledgerData,
    setLedgerData,
  ] = useState<
    Ledger[]
  >(
    ledgers
  );

  /* COUNTS */
  const ledgerCount = {

    all:
      ledgerData.length,

    active:
      ledgerData.filter(
        (ledger) =>
          ledger.status ===
          "Active"
      ).length,

    inactive:
      ledgerData.filter(
        (ledger) =>
          ledger.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED DATA */
  const filteredLedgers =
    ledgerData.filter(
      (ledger) => {

        const matchesSearch =
          !search ||

          ledger.ledgerName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status

            ? ledger.status ===
              status

            : true;

        const matchesGroup =
          ledgerGroup

            ? ledger.ledgerGroup ===
              ledgerGroup

            : true;

        return (

          matchesSearch &&
          matchesStatus &&
          matchesGroup
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

      <Box
        sx={{
          maxWidth:
            "100%",

          mx:
            "auto",
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

            px: 1,

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
                  "#0F172A",

                lineHeight:
                  1.2,
              }}
            >
              Ledger Management
            </Typography>

            <Typography
              sx={{
                color:
                  "#64748B",

                mt: 0.5,

                fontFamily:
                  FONT_FAMILY.BODY,

                fontSize:
                  FONT_SIZE.BODY,
              }}
            >
              Manage ledger accounts and balances
            </Typography>

          </Box>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/ledgers/add"
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

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
            }}
          >
            Add Ledger
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
          <LedgerFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            ledgerGroup={ledgerGroup}
            setLedgerGroup={setLedgerGroup}
            ledgerCount={ledgerCount}
          />

          {/* TABLE */}
          <Box
            sx={{
              p: 3,
            }}
          >

            {(

              search ||
              status ||
              ledgerGroup

            ) && (

              <Typography
                sx={{
                  mb: 2,

                  color:
                    "#475569",

                  fontWeight:
                    500,

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              >
                {
                  filteredLedgers.length
                }{" "}
                results found
              </Typography>

            )}

            <LedgerTable
              ledgers={
                filteredLedgers
              }

              setLedgerData={
                setLedgerData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}