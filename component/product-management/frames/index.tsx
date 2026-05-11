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

import TableContainerCard from "@/component/common/TableContainerCard";

import FrameFilters from "./FrameFilters";
import FrameTable from "./FrameTable";

export default function FrameManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const filteredFrames =
    frames.filter(
      (frame) => {

        const matchesSearch =
          frame.productName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          frame.sku
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status
            ? frame.status ===
              status
            : true;

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );

  return (
    <Box sx={{ p: 3 }}>

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
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Frame
        </Button>
      </Box>

      {/* FILTERS */}
      <FrameFilters
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
              filteredFrames.length
            }{" "}
            results found
          </Typography>

          <FrameTable
            frames={
              filteredFrames
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}