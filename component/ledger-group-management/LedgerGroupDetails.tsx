"use client";

import {
  LedgerGroup,
} from "@/assets/types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

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

  ledgerGroup:
    LedgerGroup;
}

export default function LedgerGroupDetails({
  ledgerGroup,
}: Props) {

  return (
    <Box
      sx={{
        minHeight:
          "100vh",

        bgcolor:
          "#F8FAFC",

        py: 4,
      }}
    >
      <Container maxWidth="lg">

        {/* BACK */}
        <Box sx={{ mb: 3 }}>
        <Link
          href="/ledger-groups"
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
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back to Ledger Groups
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
                  ledgerGroup.groupName
                }
              </Typography>

              <Typography
                sx={{
                  color:
                    "#64748B",

                  mt: 0.5,
                }}
              >
                Ledger Group Details
              </Typography>

            </Box>

            <Chip
              label={
                ledgerGroup.status
              }
              sx={{
                bgcolor:
                  ledgerGroup.status ===
                  "Active"

                    ? "#DCFCE7"

                    : "#FEE2E2",

                color:
                  ledgerGroup.status ===
                  "Active"

                    ? "#15803D"

                    : "#DC2626",

                fontWeight:
                  700,
              }}
            />

          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* INFO */}
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
            {/* GROUP NAME */}
            <InfoCard
              icon={
                <FolderOutlinedIcon />
              }
              title="Ledger Group"
              value={
                ledgerGroup.groupName
              }
            />

            {/* CREATED */}
            <InfoCard
              icon={
                <CalendarMonthOutlinedIcon />
              }
              title="Created At"
              value={
                ledgerGroup.createdAt
              }
            />

          </Box>

          {/* NOTES */}
          <Box
            sx={{
              mt: 4,

              p: 3,

              borderRadius:
                "18px",

              border:
                "1px solid #E2E8F0",

              background:
                "#F8FAFC",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems:
                  "center",

                mb: 2,
              }}
            >
              <DescriptionOutlinedIcon
                sx={{
                  color:
                    "#2563EB",
                }}
              />

              <Typography
                sx={{
                  fontWeight:
                    700,

                  fontSize:
                    "18px",
                }}
              >
                Notes
              </Typography>

            </Stack>

            <Typography
              sx={{
                color:
                  "#475569",

                lineHeight:
                  1.8,
              }}
            >
              {
                ledgerGroup.notes
              }
            </Typography>

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