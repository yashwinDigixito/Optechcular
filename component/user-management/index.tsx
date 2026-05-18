"use client";

import {
    users,
} from "@/assets/genericdata";

import {
    User,
} from "@/assets/types";

import {
    FONT_FAMILY,
    FONT_SIZE,
    FONT_WEIGHT,
} from "@/assets/constants";

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

import UserFilters from "./UserFilters";

import UserTable from "./UserTable";

export default function UserManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    role,
    setRole,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    userData,
    setUserData,
  ] = useState<
    User[]
  >(
    users
  );

  /* COUNTS */
  const userCount = {

    all:
      userData.length,

    active:
      userData.filter(
        (user) =>
          user.status ===
          "Active"
      ).length,

    inactive:
      userData.filter(
        (user) =>
          user.status ===
          "Inactive"
      ).length,

    suspended:
      userData.filter(
        (user) =>
          user.status ===
          "Suspended"
      ).length,
  };

  /* FILTERED USERS */
  const filteredUsers =
    userData.filter(
      (user) => {

        const matchesSearch =
          !search ||

          user.fullName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesRole =
          role

            ? user.role ===
              role

            : true;

        const matchesStatus =
          status

            ? user.status ===
              status

            : true;

        return (

          matchesSearch &&
          matchesRole &&
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

        background:
          "#F8FAFC",
      }}
    >

      <Box
        sx={{
          maxWidth:
            "100%",

          mx:
            "auto",
        }}
      >

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

            px: 1,

            flexWrap:
              "wrap",

            gap: 2,
          }}
        >

          <Typography
            sx={{
              fontFamily:
                FONT_FAMILY.HEADING,

              fontSize:
                FONT_SIZE.PAGE_HEADING,

              fontWeight:
                FONT_WEIGHT.BOLD,

              color:
                "#0F172A",

              lineHeight:
                1.2,
            }}
          >
            User Management
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/users/add"
              )
            }

            sx={{
              borderRadius:
                "14px",

              px: 3,

              height:
                "50px",

              textTransform:
                "none",

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
            }}
          >
            Add User
          </Button>

        </Box>

        {/* MAIN CARD */}
        <Box
          sx={{
            background:
              "#FFFFFF",

            border:
              "1px solid #E2E8F0",

            borderRadius:
              "24px",

            overflow:
              "hidden",
          }}
        >

          {/* FILTERS */}
          <UserFilters
            search={search}
            setSearch={setSearch}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
            userCount={userCount}
          />

          {/* TABLE */}
          <Box
            sx={{
              p: 3,
            }}
          >

            {(

              search ||
              role ||
              status

            ) && (

              <Typography
                sx={{
                  mb: 2,

                  color:
                    "#475569",

                  fontWeight:
                    500,

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              >
                {
                  filteredUsers.length
                }{" "}
                results found
              </Typography>

            )}

            <UserTable
              users={
                filteredUsers
              }

              setUserData={
                setUserData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}