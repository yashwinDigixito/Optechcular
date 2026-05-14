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
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

import { inventories } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "../common/ViewPage";
import { themeConfig } from "@/assets/CommonDesign";

export default async function InventoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = inventories.find((item) => item.id === id);
  
  const { colors, typography, borderRadius } = themeConfig;

  if (!item) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0),
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: borderRadius.large,
            border: `1px solid ${colors.border}`,
            boxShadow: "none",
          }}
        >
          <Typography sx={{ color: colors.textSecondary, fontWeight: typography.fontWeight.bold }}>
            Inventory item not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={getFadeInStyle(0.1)}>
        <Container maxWidth="xl">
          <Link href="/inventory" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: colors.textSecondary,
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                "&:hover": { color: colors.primary }
              }}
            >
              Back to Inventory
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Product Identity Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              {item.productName}
            </Typography>

            <Chip
              label={item.sku}
              size="small"
              sx={{
                bgcolor: colors.primaryLight,
                color: colors.primary,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />

            <Chip
              label={item.status}
              size="small"
              sx={{
                bgcolor:
                  item.status === "In Stock"
                    ? colors.successBg
                    : item.status === "Out of Stock"
                    ? colors.errorBg
                    : colors.warningBg,
                color:
                  item.status === "In Stock"
                    ? colors.success
                    : item.status === "Out of Stock"
                    ? colors.error
                    : colors.warning,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
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
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
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

          {/* Sidebar Summary Section (STICKY) */}
          <Box 
            sx={{ 
              width: { xs: "100%", lg: "40%" }, 
              position: { lg: "sticky" }, 
              top: 24, // Distance from the top of the viewport when sticky
              alignSelf: "flex-start", // Necessary for sticky to work inside flex
              ...getFadeInStyle(0.4) 
            }}
          >
            <Stack spacing={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: borderRadius.large,
                  boxShadow: "none",
                  border: `1px solid ${colors.border}`,
                  bgcolor: colors.white,
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" }
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    borderRadius: borderRadius.xl,
                    bgcolor: colors.primaryLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Inventory2OutlinedIcon
                    sx={{ fontSize: 40, color: colors.primary }}
                  />
                </Box>

                <Typography sx={{ fontSize: 28, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {item.stock}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  Units Currently Available
                </Typography>
              </Card>

              <SideCard title="Stock Summary">
                <IconLine
                  icon={<QrCodeScannerOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`SKU: ${item.sku}`}
                />
                <IconLine
                  icon={<SellOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Price: ${item.currency} ${item.price}`}
                />
                <IconLine
                  icon={<LocalShippingOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Supplier: ${item.supplier}`}
                />
                <IconLine
                  icon={<MapOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Location: ${item.location}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {item.notes || "No additional product notes available."}
                </Typography>
              </SideCard>

              <SideCard title="Logistics Overview">
                <IconLine
                  icon={<StorefrontOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Branch: ${item.branch}`}
                />
                <IconLine
                  icon={<HistoryOutlinedIcon sx={{ color: colors.primary }} />}
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