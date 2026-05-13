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

import UserDetails from "@/component/user-management/UserDetails";

export default function UserViewPage() {

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
      <Box sx={{ p: 3 }}>
        User not found
      </Box>
    );
  }

  return (
    <UserDetails
      user={user}
    />
  );
}