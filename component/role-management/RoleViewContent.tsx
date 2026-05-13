"use client";

import { roles } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Link from "next/link";
export default function RoleViewContent({
  id,
}: {
  id: string;
}) {

  const currentRole =
    roles.find(
      (r) => r.id === id
    );

  return (
    <Box
    sx={{
    width: "100%",
    height: "100vh",
    background: "#F8FAFC",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    }}
>
      {/* TOP NAVIGATION */}
    <Box
        sx={{
        py: 2,
        background: "#FFFFFF",
        borderBottom:
            "1px solid #E2E8F0",
        }}
    >
        <Container maxWidth="lg">

        <Link
            href="/roles"
            passHref
            style={{
            textDecoration: "none",
            }}
        >
            <Button
            startIcon={
                <ArrowBackIcon />
            }
            sx={{
                color: "#64748B",
                textTransform:
                "none",
                fontWeight: 600,
            }}
            >
            Back to Roles
            </Button>
        </Link>
        </Container>
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
            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            mb: 3,
          }}
        >
          <Box>

            <Typography
              sx={{
                fontSize:
                  "28px",

                fontWeight: 700,

                color:
                  "#2563EB",
              }}
            >
              {
                currentRole?.roleName
              }
            </Typography>

            <Typography
              sx={{
                color:
                  "#64748B",

                mt: 0.5,
              }}
            >
              {
                currentRole?.description
              }
            </Typography>

          </Box>

          <StatusChip
            status={
              currentRole?.status ||
              "Inactive"
            }
          />

        </Box>

        <Divider
          sx={{
            mb: 4,
          }}
        />

        {/* PERMISSIONS */}
        <Typography
          sx={{
            fontWeight: 700,

            fontSize:
              "20px",

            mb: 2,
          }}
        >
          Permissions
        </Typography>

        <Box
          sx={{
            display: "flex",

            flexWrap:
              "wrap",

            gap: 1.5,

            mb: 5,
          }}
        >
          {currentRole?.permissions.map(
            (
              permission
            ) => (

              <Chip
                key={
                  permission
                }
                label={
                  permission
                }
                sx={{
                  background:
                    "#EFF6FF",

                  color:
                    "#2563EB",

                  fontWeight: 600,

                  borderRadius:
                    "10px",
                }}
              />
            )
          )}

        </Box>

        {/* DETAILS */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              {
                xs: "1fr",

                md: "1fr 1fr 1fr",
              },

            gap: 3,

            borderTop:
              "1px solid #F1F5F9",

            pt: 4,
          }}
        >
          {/* ROLE ID */}
          <Box>

            <Typography
              sx={{
                fontSize:
                  "13px",

                color:
                  "#94A3B8",

                fontWeight: 700,

                mb: 1,
              }}
            >
              ROLE ID
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,

                color:
                  "#0F172A",
              }}
            >
              {id}
            </Typography>

          </Box>

          {/* CREATED DATE */}
          <Box>

            <Typography
              sx={{
                fontSize:
                  "13px",

                color:
                  "#94A3B8",

                fontWeight: 700,

                mb: 1,
              }}
            >
              CREATED ON
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,

                color:
                  "#0F172A",
              }}
            >
              {
                currentRole?.createdOn
              }
            </Typography>

          </Box>

          {/* USERS */}
          <Box>

            <Typography
              sx={{
                fontSize:
                  "13px",

                color:
                  "#94A3B8",

                fontWeight: 700,

                mb: 1,
              }}
            >
              TOTAL USERS
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,

                color:
                  "#0F172A",
              }}
            >
              {
                currentRole?.totalUsers
              }
            </Typography>

          </Box>

        </Box>

      </Box>

    </Box>
  );
}