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
import { inventories } from "@/assets/genericdata";
import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export default async function InventoryDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const item = inventories.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!item) {
        return (
            <DataNotFound message="Inventory record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/inventory" style={{ textDecoration: "none" }}>
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
                {/* Product Identity Section */}
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
                            {item.productName}
                        </Typography>

                        <Chip
                            label={item.sku}
                            size="small"
                            sx={{
                                bgcolor: colors.primaryLight,
                                color: colors.primary,
                                fontWeight: FONT_WEIGHT.BOLD,
                                fontFamily: FONT_FAMILY.BODY,
                                borderRadius: borderRadius.small,
                            }}
                        />

                        <Chip
                            label={item.status}
                            size="small"
                            sx={{
                                bgcolor: item.status === "In Stock" ? colors.successBg : item.status === "Out of Stock" ? colors.errorBg : colors.warningBg,
                                color: item.status === "In Stock" ? colors.success : item.status === "Out of Stock" ? colors.error : colors.warning,
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
                        Branch: {item.branch} | Warehouse Location: {item.location}
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
                    {/* Left Section - Detailed Info */}
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
                                <InfoLine label="Primary Supplier" value={item.supplier} />
                            </SideCard>

                            <SideCard title="System Audit">
                                <InfoLine label="Registered On" value={item.createdOn} />
                                <InfoLine label="Last Stock Update" value={item.updatedDate} />
                                <InfoLine label="Managed By" value={item.createdBy} />
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Right Section - Sticky Sidebar Summary */}
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
                                        width: 80,
                                        height: 80,
                                        mx: "auto",
                                        mb: 2,
                                        borderRadius: borderRadius.large,
                                        bgcolor: colors.primaryLight,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Inventory2OutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                                </Box>
                                <Typography 
                                    sx={{ 
                                        fontSize: "2rem", 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {item.stock}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    Units Currently Available
                                </Typography>
                            </Card>

                            <SideCard title="Stock Summary">
                                <IconLine icon={<QrCodeScannerOutlinedIcon sx={{ color: colors.primary }} />} text={`SKU: ${item.sku}`} />
                                <IconLine icon={<SellOutlinedIcon sx={{ color: colors.primary }} />} text={`MSRP: ${item.currency} ${item.price}`} />
                                <IconLine icon={<LocalShippingOutlinedIcon sx={{ color: colors.primary }} />} text={`Supplier: ${item.supplier}`} />
                                <IconLine icon={<MapOutlinedIcon sx={{ color: colors.primary }} />} text={`Location: ${item.location}`} />
                            </SideCard>

                            <SideCard title="Internal Remarks">
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.6,
                                        fontStyle: "italic"
                                    }}
                                >
                                    {item.notes || "No additional product instructions or notes found."}
                                </Typography>
                            </SideCard>

                            <SideCard title="Logistics Overview">
                                <IconLine icon={<StorefrontOutlinedIcon sx={{ color: colors.primary }} />} text={`Branch: ${item.branch}`} />
                                <IconLine icon={<HistoryOutlinedIcon sx={{ color: colors.primary }} />} text={`Last Check: ${item.updatedDate}`} />
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}