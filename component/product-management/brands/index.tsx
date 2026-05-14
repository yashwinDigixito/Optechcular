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
  brands,
} from "@/assets/genericdata";

import {
  Brand,
} from "@/assets/types";

import BrandFilters from "./BrandFilters";

import Brandtable from "./Brandtable";

export default function BrandManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [brandGroup, setBrandGroup] =
    useState("");

  const [brandData, setBrandData] =
    useState<Brand[]>(brands);

  /* COUNTS */
  const brandCount = {

    all:
      brandData.length,

    active:
      brandData.filter(
        (brand) =>
          brand.status ===
          "Active"
      ).length,

    inactive:
      brandData.filter(
        (brand) =>
          brand.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED BRANDS */
  const filteredBrands =
    brandData.filter((brand) => {

      const matchesSearch =
        !search ||

        brand.brandName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category
          ? brand.category ===
            category
          : true;

      const matchesStatus =
        status
          ? brand.status ===
            status
          : true;

      const matchesGroup =
        brandGroup
          ? brand.brandGroup ===
            brandGroup
          : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesGroup
      );
    });

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
          Brand Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/brands/add"
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
          Add Brand
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
        <BrandFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
          brandGroup={brandGroup}
          setBrandGroup={
            setBrandGroup
          }
          brandCount={
            brandCount
          }
        />

        {/* TABLE */}
        <Box sx={{ p: 3 }}>

          {(
            search ||
            category ||
            status ||
            brandGroup
          ) && (

            <Typography
              sx={{
                mb: 2,
                color: "#64748B",
                fontWeight: 600,
              }}
            >
              {
                filteredBrands.length
              }{" "}
              results found
            </Typography>

          )}

          <Brandtable
            brands={
              filteredBrands
            }
            setBrandData={
              setBrandData
            }
          />

        </Box>

      </Box>

    </Box>
  );
}