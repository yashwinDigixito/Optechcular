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
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import { categories } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import { themeConfig } from "@/assets/CommonDesign";

export default async function CategoryViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = categories.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!category) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0.1)
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
            Category not found
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
          <Link href="/products/categories" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Categories
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
              Category: {category.categoryName}
            </Typography>

            <Chip
              label={category.status}
              size="small"
              sx={{
                bgcolor: category.status === "Active" ? colors.successBg : colors.errorBg,
                color: category.status === "Active" ? colors.success : colors.error,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {category.createdOn}
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
          {/* Main Content Column */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Category Information">
                <InfoLine label="Category ID" value={category.categoryId} />
                <InfoLine label="Category Name" value={category.categoryName} />
                <InfoLine label="Category Code" value={category.categoryCode} />
                <InfoLine label="Category Type" value={category.categoryType} />
                <InfoLine label="Parent Category" value={category.parentCategory} />
                <InfoLine label="Status" value={category.status} />
                <InfoLine label="Display Order" value={category.displayOrder} />
                <InfoLine label="Priority Level" value={category.priorityLevel} />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {category.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="Product Statistics">
                <InfoLine label="Total Products" value={category.totalProducts} />
                <InfoLine label="Active Products" value={category.activeProducts} />
                <InfoLine label="Total Brands" value={category.totalBrands} />
                <InfoLine
                  label="Revenue Contribution"
                  value={`₹${category.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="Inventory Information">
                <InfoLine label="Stock Quantity" value={category.stockQuantity} />
                <InfoLine label="Low Stock Products" value={category.lowStockProducts} />
                <InfoLine label="Warehouse Location" value={category.warehouseLocation} />
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={category.createdOn} />
                <InfoLine label="Updated Date" value={category.updatedDate} />
                <InfoLine label="Created By" value={category.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sticky Sidebar Column */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: { lg: "sticky" },
              top: 24, // Sticky position offset
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
                  "&:hover": { transform: "translateY(-4px)" }
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
                  {category.categoryName}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {category.categoryType} • {category.parentCategory}
                </Typography>
              </Card>

              <SideCard title="Category Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Products: ${category.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Active Products: ${category.activeProducts ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Brands: ${category.totalBrands ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Revenue: ₹${category.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Stock Quantity: ${category.stockQuantity ?? 0}`}
                />
                <IconLine
                  icon={<WarningAmberOutlinedIcon sx={{ color: colors.error }} />}
                  text={`Low Stock Products: ${category.lowStockProducts ?? 0}`}
                />
                <IconLine
                  icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                  text={category.warehouseLocation || "N/A"}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {category.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}