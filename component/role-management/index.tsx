"use client";
import { roles, } from "@/assets/genericdata";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { roleTabs } from "@/assets/genericdata";
import FilterTabs from "@/component/common/FilterTabs";
import TableContainerCard from "@/component/common/TableContainerCard";
import RoleFilters from "./RoleFilters";
import RoleTable from "./RoleTable";
export default function RoleManagementPage() {

  const router = useRouter();

  const [activeTab, setActiveTab] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const filteredRoles =
    roles.filter((role) => {

      const matchesTab =
        activeTab === "All"
          ? true
          : role.status === activeTab;

      const matchesSearch =
        search
          ? role.roleName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
          : true;

      return (
        matchesTab &&
        matchesSearch
      );
    });

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
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
            color: "#0F172A",
          }}
        >
          Role Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/roles/add"
            )
          }
          sx={{
            borderRadius: "12px",
            px: 3,
            height: "48px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add Role
        </Button>
      </Box>

      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          <FilterTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={roleTabs}
          data={roles}
          />

          <RoleFilters
            search={search}
            setSearch={setSearch}
          />

          <Typography
            sx={{
              mt: 3,
              color: "#475569",
              fontWeight: 500,
            }}
          >
            {filteredRoles.length} results found
          </Typography>

        </Box>

        <RoleTable
          roles={filteredRoles}
        />

      </TableContainerCard>
    </Box>
  );
}