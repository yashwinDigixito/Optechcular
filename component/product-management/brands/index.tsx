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

import TableContainerCard from "@/component/common/TableContainerCard";

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

  const filteredBrands =
    brands.filter((brand) => {

      const matchesSearch =
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
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Brand
        </Button>
      </Box>

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
              filteredBrands.length
            }{" "}
            results found
          </Typography>

          <Brandtable
            brands={
              filteredBrands
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}