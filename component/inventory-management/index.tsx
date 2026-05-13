"use client";

import {
    inventories,
} from "@/assets/genericdata";

import {
    Inventory,
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
    useState,
} from "react";

import TableContainerCard from "@/component/common/TableContainerCard";

import InventoryFilters from "./InventoryFilters";

import InventoryTable from "./InventoryTable";

export default function InventoryManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [category,
    setCategory] =
      useState("");

  const [status,
    setStatus] =
      useState("");

  const [inventoryData] =
    useState<
      Inventory[]
    >(
      inventories
    );

  const filteredInventory =
    inventoryData.filter(
      (item) => {

        const matchesSearch =
          search
            ? item.productName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesCategory =
          category
            ? item.category ===
              category
            : true;

        const matchesStatus =
          status
            ? item.status ===
              status
            : true;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesStatus
        );
      }
    );

  return (
    <Box sx={{ p: 3 }}>

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
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight:
              700,
          }}
        >
          Inventory Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/inventory/add"
            )
          }
          sx={{
            borderRadius:
              "12px",

            textTransform:
              "none",
          }}
        >
          Add Inventory
        </Button>

      </Box>

      {/* FILTERS */}
      <InventoryFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      {/* TABLE */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          <Typography
            sx={{
              mb: 2,

              color:
                "#64748B",
            }}
          >
            {
              filteredInventory.length
            }{" "}
            results found
          </Typography>

          <InventoryTable
            inventories={
              filteredInventory
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}