"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { roles } from "@/assets/genericdata";
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
import RoleFilters from "./RoleFilters";
import RoleTable from "./RoleTable";

export default function RoleManagementPage() {
  const router = useRouter();
  const [search,setSearch] = useState("");
  const [status,setStatus] = useState("");
  const [roleData,setRoleData] = useState(roles);
  const roleCount = {
    all: roleData.length,
    active: roleData.filter( (role) => role.status === "Active" ).length,
    inactive: roleData.filter( (role) => role.status === "Inactive").length,
  };
  const filteredRoles =
    roleData.filter(
      (role) => {
        const matchesSearch = !search ||role.roleName.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = status ? role.status === status: true;
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
        minHeight:"100vh",
        background:"#F8FAFC",
      }}
    >
      <Box
        sx={{
          maxWidth:"100%",
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
            Role Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => router.push("/roles/add")}
            sx={{
              borderRadius:"14px",
              px: 3,
              height:"50px",
              textTransform:"none",
              fontFamily:FONT_FAMILY.BUTTON,
              fontWeight:FONT_WEIGHT.BOLD,
              boxShadow:"none",
            }}
          >
            Add Role
          </Button>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius:"24px",
            overflow:"hidden",
          }}
        >
          <RoleFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            roleCount={roleCount}
          />
          <Box sx={{p: 3}}>
            {(
              search ||
              status
            ) && (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: 500,
                  mb: 2,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredRoles.length}{" "} results found
              </Typography>
            )}
            <RoleTable
              roles={filteredRoles}
              setRoleData={setRoleData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}