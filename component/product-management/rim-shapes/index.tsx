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
    rimShapes,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import RimShapeFilters from "./RimShapeFilters";
import RimShapeTable from "./RimShapeTable";

export default function RimShapeManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const filteredShapes =
    rimShapes.filter(
      (shape) => {

        const matchesSearch =
          shape.shapeName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status
            ? shape.status ===
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
          Rim Shape Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/rim-shapes/add"
            )
          }
          sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Rim Shape
        </Button>
      </Box>

      {/* FILTERS */}
      <RimShapeFilters
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
              filteredShapes.length
            }{" "}
            results found
          </Typography>

          <RimShapeTable
            rimShapes={
              filteredShapes
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}