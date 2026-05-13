"use client";

import {
  ledgers,
} from "@/assets/genericdata";

import {
  Ledger,
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

import LedgerFilters from "./LedgerFilters";

import LedgerTable from "./LedgerTable";

export default function LedgerManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [ledgerGroup,
    setLedgerGroup] =
      useState("");

  const [ledgerData] =
    useState<
      Ledger[]
    >(
      ledgers
    );

  const filteredLedgers =
    ledgerData.filter(
      (ledger) => {

        const matchesSearch =
          search
            ? ledger.ledgerName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

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
              fontSize:
                "32px",

              fontWeight:
                700,

              color:
                "#0F172A",
            }}
          >
            Ledger Management
          </Typography>

          <Typography
            sx={{
              color:
                "#64748B",

              mt: 0.5,
            }}
          >
            Manage ledger accounts and balances
          </Typography>

        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/ledgers/add"
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
          Add Ledger
        </Button>

      </Box>

      {/* FILTERS */}
      <LedgerFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        ledgerGroup={ledgerGroup}
        setLedgerGroup={setLedgerGroup}
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
              filteredLedgers.length
            }{" "}
            results found
          </Typography>

          <LedgerTable
            ledgers={
              filteredLedgers
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}