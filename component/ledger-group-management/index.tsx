"use client";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { ledgerGroups } from "@/assets/genericdata";
import { LedgerGroup } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LedgerGroupFilters from "./LedgerGroupFilters";
import LedgerGroupTable from "./LedgerGroupTable";

export default function LedgerGroupManagementPage() {
  const router = useRouter();
  const [ search, setSearch,] = useState("");

  const [status,setStatus] = useState("");

  const [ groupData, setGroupData] = useState<LedgerGroup[]>(ledgerGroups);
  const ledgerGroupCount = {
    all: groupData.length,
    active: groupData.filter( (group) => group.status === "Active" ).length,
    inactive: groupData.filter( (group) => group.status === "Inactive").length,
  };
  const filteredGroups =
    groupData.filter(
      (group) => {
        const matchesSearch = !search || group.groupName.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = status ? group.status === status : true;
        return ( matchesSearch && matchesStatus );
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
            justifyContent: "space-between",
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
            Ledger Group Management
          </Typography>
          <Button
            variant="contained"
            startIcon={ <AddIcon /> }
            onClick={() => router.push( "/ledger-groups/add" ) }
            sx={{
              borderRadius: "14px",
              px: 3,
              height: "50px",
              textTransform: "none",
              fontFamily: FONT_FAMILY.BUTTON,
              fontWeight: FONT_WEIGHT.BOLD,
              boxShadow:"none",
            }}
          >
            Add Ledger Group
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
          <LedgerGroupFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            ledgerGroupCount={ ledgerGroupCount }
          />
          <Box sx={{ p: 3 }}>
            {(
              search ||
              status
            ) && (
              <Typography
                sx={{
                  mb: 2,
                  color: "#475569",
                  fontWeight: 500,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                { filteredGroups.length }{" "} results found
              </Typography>
            )}
            <LedgerGroupTable
              ledgerGroups={filteredGroups}
              setLedgerGroupData={setGroupData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}