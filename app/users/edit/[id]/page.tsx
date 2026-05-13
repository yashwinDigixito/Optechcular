"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    users,
} from "@/assets/genericdata";

import EditUserForm from "@/component/user-management/EditUserForm";

export default function EditUserPage() {

  const params =
    useParams();

  const user =
    users.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!user) {

    return (
      <Box
        sx={{
          p: 3,
        }}
      >
        User not found
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <EditUserForm
        user={user}
      />
    </Box>
  );
}