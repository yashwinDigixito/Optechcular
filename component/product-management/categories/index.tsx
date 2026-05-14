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

import {
  Category,
} from "@/assets/types";

import CategoryFilters from "./CategoryFilters";

import CategoryTable from "./CategoryTable";

export default function CategoryManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [categoryData, setCategoryData] =
    useState<Category[]>(
      categories
    );

  /* COUNTS */
  const categoryCount = {

    all:
      categoryData.length,

    active:
      categoryData.filter(
        (category) =>
          category.status ===
          "Active"
      ).length,

    inactive:
      categoryData.filter(
        (category) =>
          category.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED CATEGORIES */
  const filteredCategories =
    categoryData.filter(
      (category) => {

        const matchesSearch =
          !search ||

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
        minHeight:
          "100vh",
        background:
          "#F8FAFC",
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
          flexWrap:
            "wrap",
          gap: 2,
        }}
      >

        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            color:
              "#0F172A",
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
            height: "50px",
            borderRadius: "14px",
            textTransform: "none",
            px: 3,
            fontWeight: 700,
            boxShadow: "none",
          }}
        >
          Add Category
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
        <CategoryFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          categoryCount={
            categoryCount
          }
        />

        {/* TABLE */}
        <Box sx={{ p: 3 }}>

          {(
            search ||
            status
          ) && (

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

          )}

          <CategoryTable
            categories={
              filteredCategories
            }
            setCategoryData={
              setCategoryData
            }
          />

        </Box>

      </Box>

    </Box>
  );
}