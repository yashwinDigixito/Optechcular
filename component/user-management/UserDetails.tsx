"use client";

import {
  User,
} from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import Link from "next/link";

interface Props {

  user:
    User;
}

export default function UserDetails({
  user,
}: Props) {

  return (
    <Box
      sx={{
        minHeight:"100vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">

        {/* BACK */}
        <Box sx={{ mb: 3 }}>

          <Link
            href="/users"
            style={{
              textDecoration:
                "none",
            }}
          >
            <Button
              startIcon={
                <ArrowBackIcon />
              }
              sx={{
                textTransform:
                  "none",

                fontWeight:
                  600,
              }}
            >
              Back to Users
            </Button>

          </Link>

        </Box>

        {/* CARD */}
        <Box
          sx={{
            background:
              "#FFFFFF",

            borderRadius:
              "24px",

            border:
              "1px solid #E2E8F0",

            p: 4,
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

              flexWrap:
                "wrap",

              gap: 2,

              mb: 3,
            }}
          >
            <Box>

              <Typography
                sx={{
                  fontSize:
                    "30px",

                  fontWeight:
                    700,

                  color:
                    "#2563EB",
                }}
              >
                {
                  user.fullName
                }
              </Typography>

              <Typography
                sx={{
                  color:
                    "#64748B",

                  mt: 0.5,
                }}
              >
                User Details
              </Typography>

            </Box>

            <Chip
              label={
                user.status
              }
              sx={{
                bgcolor:
                  user.status ===
                  "Active"

                    ? "#DCFCE7"

                    : "#FEE2E2",

                color:
                  user.status ===
                  "Active"

                    ? "#15803D"

                    : "#DC2626",

                fontWeight:
                  700,
              }}
            />

          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* INFO GRID */}
          <Box
            sx={{
              display:
                "grid",

              gridTemplateColumns:
                {
                  xs: "1fr",

                  md: "1fr 1fr",
                },

              gap: 3,
            }}
          >
            {/* FULL NAME */}
            <InfoCard
              icon={
                <PersonOutlineOutlinedIcon />
              }
              title="Full Name"
              value={
                user.fullName
              }
            />

            {/* EMAIL */}
            <InfoCard
              icon={
                <EmailOutlinedIcon />
              }
              title="Email"
              value={
                user.email
              }
            />

            {/* PHONE */}
            <InfoCard
              icon={
                <LocalPhoneOutlinedIcon />
              }
              title="Phone Number"
              value={
                user.phoneNumber
              }
            />

            {/* ROLE */}
            <InfoCard
              icon={
                <ShieldOutlinedIcon />
              }
              title="Role"
              value={
                user.role
              }
            />

            {/* CREATED */}
            <InfoCard
              icon={
                <CalendarMonthOutlinedIcon />
              }
              title="Created On"
              value={
                user.createdOn
              }
            />

          </Box>

        </Box>

      </Container>

    </Box>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (
    <Box
      sx={{
        p: 3,

        borderRadius:
          "18px",

        border:
          "1px solid #E2E8F0",

        background:
          "#FFFFFF",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems:
            "center",

          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 42,

            height: 42,

            borderRadius:
              "12px",

            bgcolor:
              "#EFF6FF",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color:
              "#2563EB",
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            color:
              "#64748B",

            fontWeight:
              600,
          }}
        >
          {title}
        </Typography>

      </Stack>

      <Typography
        sx={{
          fontSize:
            "20px",

          fontWeight:
            700,

          color:
            "#0F172A",
        }}
      >
        {value}
      </Typography>

    </Box>
  );
}