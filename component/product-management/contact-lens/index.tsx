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
    contactLenses,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import ContactLensFilters from "./ContactLensFilters";
import ContactLensTable from "./ContactLensTable";

export default function ContactLensManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const filteredLenses =
    contactLenses.filter(
      (lens) => {

        const matchesSearch =
          lens.productName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          lens.productCode
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          status
            ? lens.status ===
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
          Contact Lens Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/products/contact-lens/add"
            )
          }
          sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
          }}
        >
          Add Contact Lens
        </Button>
      </Box>

      <ContactLensFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

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
              filteredLenses.length
            }{" "}
            results found
          </Typography>

          <ContactLensTable
            contactLenses={
              filteredLenses
            }
          />

        </Box>

      </TableContainerCard>
    </Box>
  );
}