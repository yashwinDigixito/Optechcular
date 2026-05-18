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

import {
  Material,
} from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import MaterialFilters from "./MaterialFilters";

import MaterialTable from "./MaterialTable";

export default function MaterialManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    applicableFor,
    setApplicableFor,
  ] = useState("");

  const [
    materialData,
    setMaterialData,
  ] = useState<
    Material[]
  >(
    materials
  );

  /* COUNTS */
  const materialCount = {

    all:
      materialData.length,

    active:
      materialData.filter(
        (material) =>
          material.status ===
          "Active"
      ).length,

    inactive:
      materialData.filter(
        (material) =>
          material.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED DATA */
  const filteredMaterials =
    materialData.filter(
      (material) => {

        const matchesSearch =

          material.materialName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          material.materialCode
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          material.hsnCode
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
            Material Management
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/products/materials/add"
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
            Add Material
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
          <MaterialFilters
            search={search}
            setSearch={setSearch}

            status={status}
            setStatus={setStatus}

            applicableFor={
              applicableFor
            }

            setApplicableFor={
              setApplicableFor
            }

            materialCount={
              materialCount
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
              status ||
              applicableFor

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
                  filteredMaterials.length
                }{" "}
                results found
              </Typography>

            )}

            <MaterialTable
              materials={
                filteredMaterials
              }

              setMaterialData={
                setMaterialData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}