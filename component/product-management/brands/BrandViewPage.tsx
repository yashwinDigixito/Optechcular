import {
    Box,
    Button,
    Card,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

import { themeConfig } from "@/assets/constants";
import { brands } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export default async function BrandViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const brand = brands.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!brand) {
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
          <Typography sx={{ fontWeight: 700, color: colors.textSecondary }}>
            Brand not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ pt: 2, ...getFadeInStyle(0.1) }}>
        <Container maxWidth="xl">
          <Link href="/products/brands" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Brands
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Identity Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              Brand Details: {brand.brandName}
            </Typography>

            <Chip
              label={brand.status}
              size="small"
              sx={{
                bgcolor: brand.status === "Active" ? colors.successBg : colors.errorBg,
                color: brand.status === "Active" ? colors.success : colors.error,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {brand.createdDate}
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
          {/* Main Content Section (Scrollable) */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Brand Information">
                <InfoLine label="Brand ID" value={brand.brandId} />
                <InfoLine label="Brand Name" value={brand.brandName} />
                <InfoLine label="Category" value={brand.category} />
                <InfoLine label="Brand Group" value={brand.brandGroup} />
                <InfoLine label="Brand Type" value={brand.brandType} />
                <InfoLine label="Status" value={brand.status} />
              </SideCard>

              <SideCard title="Contact Information">
                <IconLine icon={<BusinessIcon sx={{ color: colors.primary }} />} text={brand.contactPerson} />
                <IconLine icon={<EmailOutlinedIcon sx={{ color: colors.primary }} />} text={brand.email} />
                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={brand.phone} />
                <IconLine icon={<LanguageOutlinedIcon sx={{ color: colors.primary }} />} text={brand.website || "N/A"} />
              </SideCard>

              <SideCard title="Address Information">
                <InfoLine label="Address" value={brand.address} />
                <InfoLine label="City" value={brand.city} />
                <InfoLine label="State" value={brand.state} />
                <InfoLine label="Country" value={brand.country} />
                <InfoLine label="Postal Code" value={brand.postalCode} />
              </SideCard>

              <SideCard title="Business Information">
                <InfoLine label="GST Number" value={brand.gstNumber} />
                <InfoLine label="PAN Number" value={brand.panNumber} />
                <InfoLine label="Created By" value={brand.createdBy} />
                <InfoLine label="Updated Date" value={brand.updatedDate} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sidebar Section (Sticky) */}
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
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" }
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
                  <BusinessIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {brand.brandName}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {brand.category} • {brand.brandGroup}
                </Typography>
              </Card>

              <SideCard title="Product Statistics">
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Products: ${brand.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Active Products: ${brand.activeProducts ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Orders: ${brand.totalOrders ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Revenue: ₹${brand.revenue ?? 0}`}
                />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {brand.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {brand.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}