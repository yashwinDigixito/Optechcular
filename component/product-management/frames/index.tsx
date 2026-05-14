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
  frames,
} from "@/assets/genericdata";

import {
  Frame,
} from "@/assets/types";


import FrameFilters from "./FrameFilters";

import FrameTable from "./FrameTable";

export default function FrameManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [date, setDate] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [frameData, setFrameData] =
    useState<Frame[]>(
      frames
    );

  /* COUNTS */
  const frameCount = {

    all:
      frameData.length,

    active:
      frameData.filter(
        (frame) =>
          frame.status ===
          "Active"
      ).length,

    inactive:
      frameData.filter(
        (frame) =>
          frame.status ===
          "Inactive"
      ).length,

    outOfStock:
      frameData.filter(
        (frame) =>
          frame.status ===
          "Out of Stock"
      ).length,
  };

  /* FILTERED FRAMES */
  const filteredFrames =
    frameData.filter(
      (frame) => {

        const matchesSearch =
          !search ||

          frame.frameName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesBrand =
          !brand ||

          frame.brand ===
            brand;

        const matchesDate =
          !date ||

          frame.createdOn ===
            date;

        const matchesStatus =
          status
            ? frame.status ===
              status
            : true;

        return (
          matchesSearch &&
          matchesBrand &&
          matchesDate &&
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
          Frame Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/frames/add"
            )
          }
          sx={{
            height: "50px",

            borderRadius:
              "14px",

            textTransform:
              "none",

            px: 3,

            fontWeight:
              700,

            boxShadow:
              "none",
          }}
        >
          Add Frame
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
        <FrameFilters
          search={search}
          setSearch={setSearch}

          brand={brand}
          setBrand={
            setBrand
          }

          date={date}
          setDate={
            setDate
          }

          status={status}
          setStatus={
            setStatus
          }

          frameCount={
            frameCount
          }
        />

        {/* TABLE */}
        <Box sx={{ p: 3 }}>

          {(
            search ||
            brand ||
            date ||
            status
          ) && (

            <Typography
              sx={{
                mb: 2,

                color:
                  "#64748B",

                fontWeight:
                  600,
              }}
            >
              {
                filteredFrames.length
              }{" "}
              results found
            </Typography>

          )}

          <FrameTable
            frames={
              filteredFrames
            }
            setFrameData={
              setFrameData
            }
          />

        </Box>

      </Box>

    </Box>
  );
}