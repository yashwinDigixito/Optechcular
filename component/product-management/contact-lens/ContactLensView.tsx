import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

import { contactLenses } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import { themeConfig } from "@/assets/CommonDesign";

export default async function ContactLensViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lens = contactLenses.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!lens) {
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
            Contact Lens not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        
        bgcolor: colors.bgLight,
        scrollBehavior: "smooth",
     
      }}
    >
      {/* Navigation Header */}
      <Box sx={{ pt: 2, ...getFadeInStyle(0.1) }}>
        <Container maxWidth="xl">
          <Link href="/products/contact-lens" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Contact Lenses
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
              Contact Lens: {lens.lensName}
            </Typography>

            <Chip
              label={lens.status}
              size="small"
              sx={{
                bgcolor: lens.status === "Active" ? colors.successBg : colors.errorBg,
                color: lens.status === "Active" ? colors.success : colors.error,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {lens.createdOn}
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
          {/* Main Info Column */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Contact Lens Information">
                <InfoLine label="Lens ID" value={lens.lensId} />
                <InfoLine label="Product Code" value={lens.productCode} />
                <InfoLine label="Brand" value={lens.brand} />
                <InfoLine label="Lens Name" value={lens.lensName} />
                <InfoLine label="Product Type" value={lens.productType} />
                <InfoLine label="Power Type" value={lens.powerType} />
                <InfoLine label="Modality" value={lens.modality} />
                <InfoLine label="Material" value={lens.material} />
              </SideCard>

              <SideCard title="Lens Specifications">
                <InfoLine label="Base Curve" value={lens.baseCurve} />
                <InfoLine label="Diameter" value={lens.diameter} />
                <InfoLine label="Spherical Power" value={lens.sphericalPower} />
                <InfoLine label="Cylindrical Power" value={lens.cylindricalPower} />
                <InfoLine label="Axis" value={lens.axis} />
                <InfoLine label="Additional Power" value={lens.additionalPower} />
                <InfoLine label="Color" value={lens.color} />
              </SideCard>

              <SideCard title="Pricing & Tax">
                <InfoLine label="MRP" value={`₹${lens.mrp}`} />
                <InfoLine label="Selling Price" value={`₹${lens.sellingPrice}`} />
                <InfoLine label="Discount Price" value={`₹${lens.discountPrice}`} />
                <InfoLine label="Tax" value={`${lens.tax}%`} />
                <InfoLine label="HSN Code" value={lens.hsnCode} />
              </SideCard>

              <SideCard title="Inventory Details">
                <InfoLine label="SKU Code" value={lens.skuCode} />
                <InfoLine label="Barcode" value={lens.barcode} />
                <InfoLine label="Stock Quantity" value={lens.stock} />
                <InfoLine label="Warehouse Location" value={lens.warehouseLocation} />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {lens.description || "No description available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>

          {/* Sticky Sidebar Column */}
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
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px -10px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Avatar
                  src={lens.thumbnailImage}
                  variant="rounded"
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                    borderRadius: borderRadius.xl,
                    bgcolor: colors.primaryLight,
                  }}
                />

                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {lens.brand}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {lens.lensName} • {lens.modality}
                </Typography>

                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                  <StatusChip status={lens.status} />
                </Box>
              </Card>

              <SideCard title="Lens Summary">
                <IconLine
                  icon={<VisibilityOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Power: ${lens.powerType}`}
                />
                <IconLine
                  icon={<RemoveRedEyeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Base Curve: ${lens.baseCurve}`}
                />
                <IconLine
                  icon={<ColorLensOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Color: ${lens.color}`}
                />
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Stock: ${lens.stock}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Price: ₹${lens.sellingPrice}`}
                />
              </SideCard>

              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<QrCode2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`SKU: ${lens.skuCode}`}
                />
                <IconLine
                  icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                  text={lens.warehouseLocation}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {lens.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}