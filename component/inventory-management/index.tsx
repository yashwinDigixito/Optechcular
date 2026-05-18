"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
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
import InventoryFilters from "./InventoryFilters";
import InventoryTable from "./InventoryTable";
export default function InventoryManagementPage() {
  const router =useRouter();
  const [search, setSearch] = useState("");
  const [ category, setCategory ] = useState("");
  const [ status, setStatus] = useState("");
  const [inventoryData, setInventoryData ] = useState< Inventory[]>( inventories);

  const inventoryCount = {
    all: inventoryData.length,
    inStock: inventoryData.filter( (item) => item.status === "In Stock" ).length,
    lowStock: inventoryData.filter( (item) => item.status === "Low Stock" ).length,
    outOfStock: inventoryData.filter((item) => item.status === "Out of Stock").length,
  };
  const filteredInventory =
    inventoryData.filter(
      (item) => {
        const matchesSearch = search
                              ? item.productName.toLowerCase().includes( search.toLowerCase() )
                              ||item.brand.toLowerCase().includes( search.toLowerCase())
                              ||item.sku.toLowerCase().includes( search.toLowerCase() ) : true;
        const matchesCategory = category ? item.category === category : true;
        const matchesStatus = status ? item.status === status : true;

        return ( matchesSearch && matchesCategory && matchesStatus );
      }
    );
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center",
            mb: 3,
            px: 1,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: FONT_SIZE.PAGE_HEADING,
              fontWeight: FONT_WEIGHT.BOLD,
              color: "#0F172A",
              lineHeight: 1.2,
            }}
          >
            Inventory Management
          </Typography>
          <Button
            variant="contained"
            startIcon={ <AddIcon /> }
            onClick={() => router.push( "/inventory/add" ) }
            sx={{
              borderRadius: "14px",
              px: 3,
              height:"50px",
              textTransform:"none",
              fontFamily:FONT_FAMILY.BUTTON,
              fontWeight:FONT_WEIGHT.BOLD,
              boxShadow:"none",
            }}
          >
            Add Inventory
          </Button>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <InventoryFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            status={status}
            setStatus={setStatus}
            inventoryCount={ inventoryCount }
          />
          <Box
            sx={{
              p: 3,
            }}
          >
            {( search || category || status) && (
              <Typography
                sx={{
                  mb: 2,
                  color: "#475569",
                  fontWeight:500,
                  fontFamily:FONT_FAMILY.BODY,
                }}
              >
                { filteredInventory.length }{" "} results found
              </Typography>
            )}
            <InventoryTable
              inventories={ filteredInventory}
              setInventoryData={setInventoryData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}