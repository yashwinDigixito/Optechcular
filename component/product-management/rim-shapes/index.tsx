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

import {
  RimShape,
} from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import RimShapeFilters from "./RimShapeFilters";

import RimShapeTable from "./RimShapeTable";

export default function RimShapeManagementPage() {

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
    rimShapeData,
    setRimShapeData,
  ] = useState<
    RimShape[]
  >(
    rimShapes
  );

  /* COUNTS */
  const rimShapeCount = {

    all:
      rimShapeData.length,

    active:
      rimShapeData.filter(
        (shape) =>
          shape.status ===
          "Active"
      ).length,

    inactive:
      rimShapeData.filter(
        (shape) =>
          shape.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED DATA */
  const filteredShapes =
    rimShapeData.filter(
      (shape) => {

        const matchesSearch =

          shape.shapeName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          shape.rimShapeCode
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          shape.shapeCategory
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          shape.applicableFor
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          shape.description
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

          <Box>

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
              Rim Shape Management
            </Typography>

            <Typography
              sx={{
                color:
                  "#64748B",

                mt: 0.5,

                fontFamily:
                  FONT_FAMILY.BODY,

                fontSize:
                  FONT_SIZE.BODY,
              }}
            >
              Manage rim shape categories and product mapping
            </Typography>

          </Box>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/products/rim-shapes/add"
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
            Add Rim Shape
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
          <RimShapeFilters
            search={search}
            setSearch={setSearch}

            status={status}
            setStatus={setStatus}

            rimShapeCount={
              rimShapeCount
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
              status

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
                  filteredShapes.length
                }{" "}
                results found
              </Typography>

            )}

            <RimShapeTable
              rimShapes={
                filteredShapes
              }

              setRimShapeData={
                setRimShapeData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}