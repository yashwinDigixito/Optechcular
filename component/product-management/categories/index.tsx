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
    categories,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import CategoryFilters from "./CategoryFilters";
import CategoryTable from "./CategoryTable";

export default function CategoryManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const filteredCategories =
    categories.filter(
      (category) => {

        const matchesSearch =
          category.categoryName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status
            ? category.status ===
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
          Category Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/categories/add"
            )
          }
          sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Category
        </Button>
      </Box>

      {/* FILTERS */}
      <CategoryFilters
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
              filteredCategories.length
            }{" "}
            results found
          </Typography>

          <CategoryTable
            categories={
              filteredCategories
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}