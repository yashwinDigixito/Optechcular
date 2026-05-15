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

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { categories } from "@/assets/genericdata";
import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
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

    const { colors, borderRadius } = themeConfig;

    if (!category) {
        return (
            <DataNotFound message="Category record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/categories" style={{ textDecoration: "none" }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            textTransform: "none",
                            fontWeight: FONT_WEIGHT.MEDIUM,
                            fontFamily: FONT_FAMILY.BUTTON,
                            fontSize: FONT_SIZE.SUB_HEADING,
                            color: colors.primary,
                        }}
                    >
                        Back 
                    </Button>
                </Link>
            </Box>

            <Container maxWidth="xl" sx={{ py: 1 }}>
                {/* Header Section */}
                <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                        <Typography
                            sx={{
                                fontSize: FONT_SIZE.PAGE_HEADING,
                                fontWeight: FONT_WEIGHT.BOLD,
                                fontFamily: FONT_FAMILY.HEADING,
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
                                fontWeight: FONT_WEIGHT.BOLD,
                                fontFamily: FONT_FAMILY.BODY,
                                borderRadius: borderRadius.small,
                            }}
                        />
                    </Stack>

                    <Typography 
                        sx={{ 
                            mt: 1, 
                            color: colors.textSecondary, 
                            fontSize: FONT_SIZE.BODY,
                            fontFamily: FONT_FAMILY.SUB_HEADING,
                            fontWeight: FONT_WEIGHT.BOLD
                        }}
                    >
                        Created On: {category.createdOn}
                    </Typography>
                </Box>

                {/* Main Content Layout */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        alignItems: "flex-start",
                        flexDirection: { xs: "column", lg: "row" },
                    }}
                >
                    {/* Left Section - Main Details */}
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
                                <Typography 
                                    sx={{ 
                                        color: colors.textMain, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
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

                            <SideCard title="Inventory Management">
                                <InfoLine label="Stock Quantity" value={category.stockQuantity} />
                                <InfoLine label="Low Stock Products" value={category.lowStockProducts} />
                                <InfoLine label="Warehouse Location" value={category.warehouseLocation} />
                            </SideCard>

                            <SideCard title="System Metadata">
                                <InfoLine label="Created On" value={category.createdOn} />
                                <InfoLine label="Updated Date" value={category.updatedDate} />
                                <InfoLine label="Created By" value={category.createdBy} />
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Right Section - Sticky Sidebar */}
                    <Box 
                        sx={{ 
                            width: { xs: "100%", lg: "40%" },
                            position: { lg: "sticky" },
                            top: 24,
                            alignSelf: "flex-start",
                            ...getFadeInStyle(0.4)
                        }}
                    >
                        <Stack spacing={3}>
                            {/* Visual Profile Card */}
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
                                    <CategoryOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                                </Box>

                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {category.categoryName}
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
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

                            <SideCard title="Stock Status">
                                <IconLine
                                    icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Available Stock: ${category.stockQuantity ?? 0}`}
                                />
                                <IconLine
                                    icon={<WarningAmberOutlinedIcon sx={{ color: colors.error }} />}
                                    text={`Low Stock Alerts: ${category.lowStockProducts ?? 0}`}
                                />
                                <IconLine
                                    icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Location: ${category.warehouseLocation || "N/A"}`}
                                />
                            </SideCard>

                            <SideCard title="Admin Notes">
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
                                    {category.notes || "No internal notes provided"}
                                </Typography>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}