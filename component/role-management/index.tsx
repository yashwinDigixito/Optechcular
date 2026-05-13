"use client";

import {
  useState,
} from "react";

import {
  roles,
} from "@/assets/genericdata";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import TableContainerCard from "@/component/common/TableContainerCard";

import RoleFilters from "./RoleFilters";
import RoleTable from "./RoleTable";

export default function RoleManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [roleData, setRoleData] =
    useState(roles);

  const filteredRoles =
    roleData.filter(
      (role) => {

        const matchesSearch =
          search
            ? role.roleName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            : true;

        const matchesStatus =
          status
            ? role.status ===
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
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

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

            fontWeight: 700,

            color:
              "#0F172A",
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
            borderRadius:
              "12px",

            px: 3,

            height:
              "48px",

            textTransform:
              "none",

            fontWeight: 600,
          }}
        >
          Add Role
        </Button>

      </Box>

      {/* FILTERS OUTSIDE */}
      <RoleFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {/* TABLE CARD */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          {/* RESULTS */}
          <Typography
            sx={{
              color:
                "#475569",

              fontWeight: 500,

              mb: 2,
            }}
          >
            {
              filteredRoles.length
            }{" "}
            results found
          </Typography>

          {/* TABLE */}
          <RoleTable
            roles={
              filteredRoles
            }
            setRoleData={
              setRoleData
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}