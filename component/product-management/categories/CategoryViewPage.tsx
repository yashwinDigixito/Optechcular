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

import { categories } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default async function CategoryViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const category = categories.find((item) => item.id === id);

  if (!category) {
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
            Category not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Container maxWidth="xl">
      <Box>
        <Link
          href="/products/categories"
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
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
        </Container>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems:"center", flexWrap:"wrap"}}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Category: {category.categoryName}
            </Typography>

            <Chip
              label={category.status}
              size="small"
              sx={{
                bgcolor: category.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: category.status === "Active" ? "#15803D" : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
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
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
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
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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
                  <CategoryOutlinedIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {category.categoryName}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {category.categoryType} • {category.parentCategory}
                </Typography>
              </Card>

              <SideCard title="Category Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Total Products: ${category.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Active Products: ${category.activeProducts ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Total Brands: ${category.totalBrands ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Revenue: ₹${category.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<WarehouseOutlinedIcon />}
                  text={`Stock Quantity: ${category.stockQuantity ?? 0}`}
                />
                <IconLine
                  icon={<WarningAmberOutlinedIcon />}
                  text={`Low Stock Products: ${category.lowStockProducts ?? 0}`}
                />
                <IconLine
                  icon={<WarehouseOutlinedIcon />}
                  text={category.warehouseLocation || "N/A"}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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

