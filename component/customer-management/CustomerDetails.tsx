"use client";

import {
    Box,
    Button,
    Chip,
    Divider,
    Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Link from "next/link";

import {
    customers,
} from "@/assets/genericdata";

import StatusChip from "@/component/common/StatusChip";

export default function CustomerDetails({
  id,
}: {
  id: string;
}) {

  const currentCustomer =
    customers.find(
      (customer) =>
        customer.id === id
    );

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/customers"
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
            mb: 3,

            textTransform:
              "none",

            fontWeight: 600,
          }}
        >
          Back to Customers
        </Button>
      </Link>

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
                currentCustomer?.fullName
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
                currentCustomer?.email
              }
            </Typography>

          </Box>

          <StatusChip
            status={
              currentCustomer?.status ||
              "Inactive"
            }
          />

        </Box>

        <Divider
          sx={{
            mb: 4,
          }}
        />

        {/* DETAILS */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              {
                xs: "1fr",

                md: "1fr 1fr",
              },

            gap: 3,
          }}
        >
          {/* CUSTOMER TYPE */}
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
              CUSTOMER TYPE
            </Typography>

            <Chip
              label={
                currentCustomer?.customerType
              }
              sx={{
                background:
                  currentCustomer?.customerType ===
                  "B2B"

                    ? "#EFF6FF"

                    : "#FDF4FF",

                color:
                  currentCustomer?.customerType ===
                  "B2B"

                    ? "#2563EB"

                    : "#C026D3",

                fontWeight: 700,

                borderRadius:
                  "8px",
              }}
            />

          </Box>

          {/* PHONE */}
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
              PHONE NUMBER
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,

                color:
                  "#0F172A",
              }}
            >
              {
                currentCustomer?.phoneNumber
              }
            </Typography>

          </Box>

          {/* EMAIL */}
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
              EMAIL ADDRESS
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,

                color:
                  "#0F172A",
              }}
            >
              {
                currentCustomer?.email
              }
            </Typography>

          </Box>

          {/* CITY */}
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
              CITY
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,

                color:
                  "#0F172A",
              }}
            >
              {
                currentCustomer?.city
              }
            </Typography>

          </Box>

          {/* STATE */}
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
              STATE
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,

                color:
                  "#0F172A",
              }}
            >
              {
                currentCustomer?.state
              }
            </Typography>

          </Box>

          {/* COUNTRY */}
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
              COUNTRY
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,

                color:
                  "#0F172A",
              }}
            >
              {
                currentCustomer?.country
              }
            </Typography>

          </Box>

        </Box>

        {/* ADDRESS */}
        <Box
          sx={{
            mt: 5,

            pt: 4,

            borderTop:
              "1px solid #F1F5F9",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,

              fontSize:
                "20px",

              mb: 2,
            }}
          >
            Address Details
          </Typography>

          <Typography
            sx={{
              color:
                "#475569",

              lineHeight: 1.8,
            }}
          >
            {
              currentCustomer?.addressLine1
            }
            <br />

            {
              currentCustomer?.addressLine2
            }
            <br />

            {
              currentCustomer?.city
            },{" "}
            {
              currentCustomer?.state
            }
            <br />

            {
              currentCustomer?.country
            }
          </Typography>

        </Box>

      </Box>

    </Box>
  );
}