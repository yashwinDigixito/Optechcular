"use client";

import {
    ledgerGroups,
} from "@/assets/genericdata";

import {
    LedgerGroup,
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

import LedgerGroupFilters from "./LedgerGroupFilters";

import LedgerGroupTable from "./LedgerGroupTable";

export default function LedgerGroupManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [groupData] =
    useState<
      LedgerGroup[]
    >(
      ledgerGroups
    );

  const filteredGroups =
    groupData.filter(
      (group) => {

        const matchesSearch =
          search
            ? group.groupName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesStatus =
          status
            ? group.status ===
              status
            : true;

        return (
          matchesSearch &&
          matchesStatus
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
          Ledger Group Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/ledger-groups/add"
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
          Add Ledger Group
        </Button>

      </Box>

      {/* FILTERS */}
      <LedgerGroupFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
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
              filteredGroups.length
            }{" "}
            results found
          </Typography>

          <LedgerGroupTable
            ledgerGroups={
              filteredGroups
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}