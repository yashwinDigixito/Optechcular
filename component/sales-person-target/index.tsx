"use client";

import {
  salesTargets,
} from "@/assets/genericdata";

import {
  SalesTarget,
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

import SalesTargetFilters from "./SalesTargetFilters";

import SalesTargetTable from "./SalesTargetTable";

export default function SalesTargetManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [month, setMonth] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [targetData] =
    useState<
      SalesTarget[]
    >(
      salesTargets
    );

  const filteredTargets =
    targetData.filter(
      (target) => {

        const matchesSearch =
          search
            ? target.salesPersonName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesMonth =
          month
            ? target.month ===
              month
            : true;

        const matchesStatus =
          status
            ? target.status ===
              status
            : true;

        return (
          matchesSearch &&
          matchesMonth &&
          matchesStatus
        );
      }
    );

  return (
    <Box sx={{ p: 3 }}>

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
          }}
        >
          Sales Person Target
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/sales-target/add"
            )
          }
          sx={{
            borderRadius:
              "12px",

            textTransform:
              "none",
          }}
        >
          Add Target
        </Button>

      </Box>

      {/* FILTERS */}
      <SalesTargetFilters
        search={search}
        setSearch={setSearch}
        month={month}
        setMonth={setMonth}
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
            }}
          >
            {
              filteredTargets.length
            }{" "}
            results found
          </Typography>

          <SalesTargetTable
            salesTargets={
              filteredTargets
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}