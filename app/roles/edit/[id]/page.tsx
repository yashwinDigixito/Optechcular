"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    roles,
} from "@/assets/genericdata";

import EditRoleForm from "@/component/role-management/EditRoleForm";

export default function EditRolePage() {

  const params =
    useParams();

  const role =
    roles.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!role) {

    return (
      <Box
        sx={{
          p: 3,
        }}
      >
        Role not found
      </Box>
    );
  }

  return (
    <EditRoleForm
      role={role}
    />
  );
}