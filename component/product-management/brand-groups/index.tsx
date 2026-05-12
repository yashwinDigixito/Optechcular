"use client";

import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
  brandGroups,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import BrandGroupFilters from "./BrandGroupFilters";
import BrandGroupTable from "./BrandGroupTable";

export default function BrandGroupManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const filteredGroups =
    brandGroups.filter((group) => {

      const matchesSearch =
        group.groupName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        status
          ? group.status ===
            status
          : true;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          Brand Group Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/brand-groups/add"
            )
          }
          sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Group
        </Button>
      </Box>

      {/* FILTERS */}
      <BrandGroupFilters
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
              color: "#64748B",
              fontWeight: 600,
            }}
          >
            {
              filteredGroups.length
            }{" "}
            results found
          </Typography>

          <BrandGroupTable
            groups={filteredGroups}
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}