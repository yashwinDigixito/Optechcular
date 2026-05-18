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

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import BrandFilters from "./BrandFilters";

import Brandtable from "./Brandtable";

export default function BrandManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    brandGroup,
    setBrandGroup,
  ] = useState("");

  const [
    brandData,
    setBrandData,
  ] = useState<
    Brand[]
  >(
    brands
  );

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
    brandData.filter(
      (brand) => {

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

      <Box
        sx={{
          maxWidth:
            "100%",

          mx:
            "auto",
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

            px: 1,

            flexWrap:
              "wrap",

            gap: 2,
          }}
        >

          <Typography
            sx={{
              fontFamily:
                FONT_FAMILY.HEADING,

              fontSize:
                FONT_SIZE.PAGE_HEADING,

              fontWeight:
                FONT_WEIGHT.BOLD,

              color:
                "#0F172A",

              lineHeight:
                1.2,
            }}
          >
            Brand Management
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/products/brands/add"
              )
            }

            sx={{
              height:
                "50px",

              borderRadius:
                "14px",

              textTransform:
                "none",

              px: 3,

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
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
          <Box
            sx={{
              p: 3,
            }}
          >

            {(

              search ||
              category ||
              status ||
              brandGroup

            ) && (

              <Typography
                sx={{
                  mb: 2,

                  color:
                    "#475569",

                  fontWeight:
                    500,

                  fontFamily:
                    FONT_FAMILY.BODY,
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

    </Box>
  );
}