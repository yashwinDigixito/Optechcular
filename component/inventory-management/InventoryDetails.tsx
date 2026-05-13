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
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import { inventories } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, SummaryLine } from "../common/ViewPage";
export default async function InventoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = inventories.find((item) => item.id === id);

  if (!item) {
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
          <Typography sx={{ color: "#64748B", fontWeight: 700 }}>
            Inventory item not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      {/* Navigation Header */}
      <Box>
        <Container maxWidth="xl">
          <Link href="/inventory" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Inventory
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Product Identity Section */}
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems: "center",flexWrap: "wrap"}} >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              {item.productName}
            </Typography>

            <Chip
              label={item.sku}
              size="small"
              sx={{
                bgcolor: "#EFF6FF",
                color: "#3B82F6",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={item.status}
              size="small"
              sx={{
                bgcolor:
                  item.status === "In Stock"
                    ? "#DCFCE7"
                    : item.status === "Out of Stock"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  item.status === "In Stock"
                    ? "#15803D"
                    : item.status === "Out of Stock"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Branch: {item.branch} | Warehouse Location: {item.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* Main Details Section */}
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Stack spacing={3}>
              <SideCard title="Product Specifications">
                <InfoLine label="SKU Code" value={item.sku} />
                <InfoLine label="Barcode" value={item.barcode} />
                <InfoLine label="Category" value={item.category} />
                <InfoLine label="Brand" value={item.brand} />
                <InfoLine label="Unit of Measure" value={item.unitOfMeasure} />
              </SideCard>

              <SideCard title="Stock & Inventory Levels">
                <InfoLine label="Quantity on Hand" value={`${item.stock} ${item.unitOfMeasure}(s)`} />
                <InfoLine label="Minimum Stock Level" value={`${item.minStock} ${item.unitOfMeasure}(s)`} />
                <InfoLine label="Storage Location" value={item.location} />
                <InfoLine label="Branch Office" value={item.branch} />
              </SideCard>

              <SideCard title="Financial Information">
                <InfoLine label="Cost Price" value={`${item.currency} ${item.costPrice.toLocaleString()}`} />
                <InfoLine label="Selling Price (MSRP)" value={`${item.currency} ${item.price.toLocaleString()}`} />
                <InfoLine label="Supplier" value={item.supplier} />
              </SideCard>

              <SideCard title="System Audit">
                <InfoLine label="Registered On" value={item.createdOn} />
                <InfoLine label="Last Stock Update" value={item.updatedDate} />
                <InfoLine label="Managed By" value={item.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sidebar Summary Section */}
          <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
            <Stack spacing={3}>
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
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "18px",
                    bgcolor: "#EFF6FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Inventory2OutlinedIcon
                    sx={{ fontSize: 40, color: "#3B82F6" }}
                  />
                </Box>

                <Typography sx={{ fontSize: 28, fontWeight: 800, color: "#0F172A" }}>
                  {item.stock}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  Units Currently Available
                </Typography>
              </Card>

              <SideCard title="Stock Summary">
                <IconLine
                  icon={<QrCodeScannerOutlinedIcon />}
                  text={`SKU: ${item.sku}`}
                />
                <IconLine
                  icon={<SellOutlinedIcon />}
                  text={`Price: ${item.currency} ${item.price}`}
                />
                <IconLine
                  icon={<LocalShippingOutlinedIcon />}
                  text={`Supplier: ${item.supplier}`}
                />
                <IconLine
                  icon={<MapOutlinedIcon />}
                  text={`Location: ${item.location}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {item.notes || "No additional product notes available."}
                </Typography>
              </SideCard>

              <SideCard title="Logistics Overview">
                <IconLine
                  icon={<StorefrontOutlinedIcon />}
                  text={`Branch: ${item.branch}`}
                />
                <IconLine
                  icon={<HistoryOutlinedIcon />}
                  text={`Last Inventory Check: ${item.updatedDate}`}
                />
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

