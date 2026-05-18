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

import {
  BrandGroup,
} from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import BrandGroupFilters from "./BrandGroupFilters";

import BrandGroupTable from "./BrandGroupTable";

export default function BrandGroupManagementPage() {

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
    groupData,
    setGroupData,
  ] = useState<
    BrandGroup[]
  >(
    brandGroups
  );

  /* COUNTS */
  const brandGroupCount = {

    all:
      groupData.length,

    active:
      groupData.filter(
        (group) =>
          group.status ===
          "Active"
      ).length,

    inactive:
      groupData.filter(
        (group) =>
          group.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED GROUPS */
  const filteredGroups =
    groupData.filter(
      (group) => {

        const matchesSearch =
          !search ||

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
            Brand Group Management
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/products/brand-groups/add"
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
            Add Group
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
          <BrandGroupFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            brandGroupCount={
              brandGroupCount
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
                  filteredGroups.length
                }{" "}
                results found
              </Typography>

            )}

            <BrandGroupTable
              groups={
                filteredGroups
              }

              setGroupData={
                setGroupData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}