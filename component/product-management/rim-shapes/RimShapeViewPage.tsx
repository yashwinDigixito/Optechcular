import React, { ReactNode } from "react";
import Link from "next/link";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import { rimShapes } from "@/assets/genericdata";

export default async function RimShapeViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const rimShape = rimShapes.find(
    (item) => item.id === id
  );

  if (!rimShape) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "none",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontWeight: 700,
            }}
          >
            Rim Shape not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      {/* TOP BAR */}
      <Box >
        <Container maxWidth="xl">
          <Link
            href="/products/rim-shapes"
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Rim Shapes
            </Button>
          </Link>
        </Container>
      </Box>

      {/* PAGE CONTENT */}
      <Container
        maxWidth="xl"
        sx={{ py: 4 }}
      >
        {/* TITLE */}
        <Box sx={{ mb: 4 }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{alignItems:"center", flexWrap:"wrap"}}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  md: "1.9rem",
                },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Rim Shape: {rimShape.shapeName}
            </Typography>

            <Chip
              label={rimShape.status}
              size="small"
              sx={{
                bgcolor:
                  rimShape.status === "Active"
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                  rimShape.status === "Active"
                    ? "#15803D"
                    : "#B91C1C",

                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
              fontSize: 14,
            }}
          >
            Created On: {rimShape.createdOn}
          </Typography>
        </Box>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",

            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
            }}
          >
            <Stack spacing={3}>
              {/* RIM SHAPE INFO */}
              <SideCard title="Rim Shape Information">
                <InfoLine
                  label="Rim Shape ID"
                  value={rimShape.rimShapeId}
                />

                <InfoLine
                  label="Rim Shape Code"
                  value={rimShape.rimShapeCode}
                />

                <InfoLine
                  label="Shape Name"
                  value={rimShape.shapeName}
                />

                <InfoLine
                  label="Shape Category"
                  value={rimShape.shapeCategory}
                />

                <InfoLine
                  label="Applicable For"
                  value={rimShape.applicableFor}
                />

                <InfoLine
                  label="Status"
                  value={rimShape.status}
                />
              </SideCard>

              {/* PRODUCT INFORMATION */}
              <SideCard title="Product Information">
                <InfoLine
                  label="Total Products"
                  value={rimShape.totalProducts}
                />

                <InfoLine
                  label="Created By"
                  value={rimShape.createdBy}
                />
              </SideCard>

              {/* DESCRIPTION */}
              <SideCard title="Description">
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {rimShape.description ||
                    "No description available"}
                </Typography>
              </SideCard>

              {/* SYSTEM INFO */}
              <SideCard title="System Information">
                <InfoLine
                  label="Created On"
                  value={rimShape.createdOn}
                />

                <InfoLine
                  label="Updated Date"
                  value={rimShape.updatedDate}
                />

                <InfoLine
                  label="Created By"
                  value={rimShape.createdBy}
                />
              </SideCard>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "40%",
              },
            }}
          >
            <Stack spacing={3}>
              {/* SUMMARY CARD */}
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "18px",
                    bgcolor: "#EFF6FF",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CategoryOutlinedIcon
                    sx={{
                      fontSize: 46,
                      color: "#3B82F6",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#0F172A",
                  }}
                >
                  {rimShape.shapeName}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 14,
                    mt: 0.5,
                  }}
                >
                  {rimShape.applicableFor}
                </Typography>
              </Card>

              {/* SUMMARY */}
              <SideCard title="Rim Shape Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Total Products: ${rimShape.totalProducts}`}
                />

                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Status: ${rimShape.status}`}
                />

                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Code: ${rimShape.rimShapeCode}`}
                />

                <IconLine
                  icon={<VisibilityOutlinedIcon />}
                  text={`Category: ${rimShape.shapeCategory}`}
                />
              </SideCard>

              {/* NOTES */}
              <SideCard title="Notes">
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {rimShape.notes ||
                    "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

