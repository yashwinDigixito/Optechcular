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
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import { materials } from "@/assets/genericdata";

export default async function MaterialViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const material = materials.find(
    (item) => item.id === id
  );

  if (!material) {
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
            Material not found
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
      <Box
       
      >
        <Container maxWidth="xl">
          <Link
            href="/products/materials"
            passHref
            style={{ textDecoration: "none" }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Materials
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
            sx ={{alignItems:"center", flexWrap:"wrap"}}
          >
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
              Material: {material.materialName}
            </Typography>

            <Chip
              label={material.status}
              size="small"
              sx={{
                bgcolor:
                  material.status === "Active"
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                  material.status === "Active"
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
            Created On: {material.createdOn}
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
              {/* MATERIAL INFO */}
              <SideCard title="Material Information">
                <InfoLine
                  label="Material ID"
                  value={material.materialId}
                />

                <InfoLine
                  label="Material Code"
                  value={material.materialCode}
                />

                <InfoLine
                  label="Material Name"
                  value={material.materialName}
                />

                <InfoLine
                  label="Applicable For"
                  value={material.applicableFor}
                />

                <InfoLine
                  label="Status"
                  value={material.status}
                />
              </SideCard>

              {/* PRICING */}
              <SideCard title="Pricing Information">
                <InfoLine
                  label="Purchase Price"
                  value={`₹${material.purchasePrice}`}
                />

                <InfoLine
                  label="Selling Price"
                  value={`₹${material.sellingPrice}`}
                />

                <InfoLine
                  label="Tax %"
                  value={`${material.tax}%`}
                />

                <InfoLine
                  label="HSN Code"
                  value={material.hsnCode}
                />
              </SideCard>

              {/* INVENTORY */}
              <SideCard title="Inventory Details">
                <InfoLine
                  label="Stock Quantity"
                  value={material.stockQuantity}
                />

                <InfoLine
                  label="Minimum Stock"
                  value={material.minimumStockLevel}
                />

                <InfoLine
                  label="Warehouse Location"
                  value={material.warehouseLocation}
                />

                <InfoLine
                  label="Supplier Name"
                  value={material.supplierName}
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
                  {material.description ||
                    "No description available"}
                </Typography>
              </SideCard>

              {/* SYSTEM INFO */}
              <SideCard title="System Information">
                <InfoLine
                  label="Created On"
                  value={material.createdOn}
                />

                <InfoLine
                  label="Updated Date"
                  value={material.updatedDate}
                />

                <InfoLine
                  label="Created By"
                  value={material.createdBy}
                />

                <InfoLine
                  label="Last Modified By"
                  value={
                    material.lastModifiedBy
                  }
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
                  {material.materialName}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 14,
                    mt: 0.5,
                  }}
                >
                  {material.applicableFor}
                </Typography>
              </Card>

              {/* MATERIAL SUMMARY */}
              <SideCard title="Material Summary">
                <IconLine
                  icon={
                    <Inventory2OutlinedIcon />
                  }
                  text={`Stock Quantity: ${material.stockQuantity}`}
                />

                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Minimum Stock: ${material.minimumStockLevel}`}
                />

                <IconLine
                  icon={
                    <PaymentsOutlinedIcon />
                  }
                  text={`Selling Price: ₹${material.sellingPrice}`}
                />

                <IconLine
                  icon={
                    <ReceiptLongOutlinedIcon />
                  }
                  text={`Tax: ${material.tax}%`}
                />
              </SideCard>

              {/* INVENTORY SUMMARY */}
              <SideCard title="Inventory Summary">
                <IconLine
                  icon={
                    <WarehouseOutlinedIcon />
                  }
                  text={
                    material.warehouseLocation
                  }
                />

                <IconLine
                  icon={
                    <WarningAmberOutlinedIcon />
                  }
                  text={`Minimum Stock Alert: ${material.minimumStockLevel}`}
                />

                <IconLine
                  icon={
                    <Inventory2OutlinedIcon />
                  }
                  text={`Current Stock: ${material.stockQuantity}`}
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
                  {material.notes ||
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

