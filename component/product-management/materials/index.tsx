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
    materials,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import MaterialFilters from "./MaterialFilters";
import MaterialTable from "./MaterialTable";

export default function MaterialManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [applicableFor, setApplicableFor] =
    useState("");

  const filteredMaterials =
    materials.filter(
      (material) => {

        const matchesSearch =
          material.materialName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status
            ? material.status ===
              status
            : true;

        const matchesApplicable =
          applicableFor
            ? material.applicableFor ===
              applicableFor
            : true;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesApplicable
        );
      }
    );

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
          justifyContent:
            "space-between",

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
          Material Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/materials/add"
            )
          }
          sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Material
        </Button>
      </Box>

      {/* FILTERS */}
      <MaterialFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        applicableFor={applicableFor}
        setApplicableFor={
          setApplicableFor
        }
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
              filteredMaterials.length
            }{" "}
            results found
          </Typography>

          <MaterialTable
            materials={
              filteredMaterials
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}