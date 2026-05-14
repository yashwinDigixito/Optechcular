import {
    Box,
    Button,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import { materials } from "@/assets/genericdata";

import { themeConfig } from "@/assets/constants";
import StatusChip from "@/component/common/StatusChip";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";

export default async function MaterialViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const material = materials.find((item) => item.id === id);
  const { colors, typography, borderRadius } = themeConfig;

  if (!material) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0.1),
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
            Material not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ pt: 2, ...getFadeInStyle(0.1) }}>
        <Container maxWidth="xl">
          <Link href="/products/materials" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Materials
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              Material: {material.materialName}
            </Typography>
            <StatusChip status={material.status} />
          </Stack>
          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {material.createdOn}
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
          {/* Left Column: Detailed Information */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Material Information">
                <InfoLine label="Material ID" value={material.materialId} />
                <InfoLine label="Material Code" value={material.materialCode} />
                <InfoLine label="Material Name" value={material.materialName} />
                <InfoLine label="Applicable For" value={material.applicableFor} />
                <InfoLine label="Status" value={material.status} />
              </SideCard>

              <SideCard title="Pricing Information">
                <InfoLine label="Purchase Price" value={`₹${material.purchasePrice}`} />
                <InfoLine label="Selling Price" value={`₹${material.sellingPrice}`} />
                <InfoLine label="Tax %" value={`${material.tax}%`} />
                <InfoLine label="HSN Code" value={material.hsnCode} />
              </SideCard>

              <SideCard title="Inventory Details">
                <InfoLine label="Stock Quantity" value={material.stockQuantity} />
                <InfoLine label="Minimum Stock" value={material.minimumStockLevel} />
                <InfoLine label="Warehouse Location" value={material.warehouseLocation} />
                <InfoLine label="Supplier Name" value={material.supplierName} />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {material.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={material.createdOn} />
                <InfoLine label="Updated Date" value={material.updatedDate} />
                <InfoLine label="Created By" value={material.createdBy} />
                <InfoLine label="Last Modified By" value={material.lastModifiedBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Right Column: Sticky Summary */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: { lg: "sticky" },
              top: 24,
              alignSelf: "flex-start",
              ...getFadeInStyle(0.4),
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
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    borderRadius: borderRadius.xl,
                    bgcolor: colors.primaryLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CategoryOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {material.materialName}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {material.applicableFor}
                </Typography>
              </Card>

              <SideCard title="Material Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Stock Quantity: ${material.stockQuantity}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Minimum Stock: ${material.minimumStockLevel}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Selling Price: ₹${material.sellingPrice}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Tax: ${material.tax}%`}
                />
              </SideCard>

              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                  text={material.warehouseLocation}
                />
                <IconLine
                  icon={<WarningAmberOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Minimum Stock Alert: ${material.minimumStockLevel}`}
                />
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Current Stock: ${material.stockQuantity}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {material.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}