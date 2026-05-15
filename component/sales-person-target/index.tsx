"use client";

import { useState } from "react";

import { salesTargets } from "@/assets/genericdata";

import { SalesTarget } from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import SalesTargetFilters from "./SalesTargetFilters";

import SalesTargetTable from "./SalesTargetTable";

export default function SalesTargetManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    month,
    setMonth,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    targetData,
    setTargetData,
  ] = useState<
    SalesTarget[]
  >(
    salesTargets
  );

  /* COUNTS */
  const salesTargetCount = {

    all:
      targetData.length,

    completed:
      targetData.filter(
        (target) =>
          target.status ===
          "Completed"
      ).length,

    inProgress:
      targetData.filter(
        (target) =>
          target.status ===
          "In Progress"
      ).length,

    pending:
      targetData.filter(
        (target) =>
          target.status ===
          "Pending"
      ).length,

    overdue:
      targetData.filter(
        (target) =>
          target.status ===
          "Overdue"
      ).length,
  };

  /* FILTERED DATA */
  const filteredTargets =
    targetData.filter(
      (target) => {

        const matchesSearch =
          !search ||

          target.salesPersonName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesMonth =
          month

            ? target.month ===
              month

            : true;

        const matchesStatus =
          status

            ? target.status ===
              status

            : true;

        return (

          matchesSearch &&
          matchesMonth &&
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
            Sales Person Target
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/sales-target/add"
              )
            }

            sx={{
              borderRadius:
                "14px",

              px: 3,

              height:
                "50px",

              textTransform:
                "none",

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
            }}
          >
            Add Target
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
          <SalesTargetFilters
            search={search}
            setSearch={setSearch}
            month={month}
            setMonth={setMonth}
            status={status}
            setStatus={setStatus}
            salesTargetCount={
              salesTargetCount
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
              month ||
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
                  filteredTargets.length
                }{" "}
                results found
              </Typography>

            )}

            <SalesTargetTable
              salesTargets={
                filteredTargets
              }

              setSalesTargetData={
                setTargetData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}