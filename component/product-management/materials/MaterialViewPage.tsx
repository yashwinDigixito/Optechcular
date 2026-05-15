import {
    Box,
    Button,
    Card,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { materials } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { DataNotFound, getFadeInStyle, IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

export default async function MaterialViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const material = materials.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!material) {
        return (
           <DataNotFound message="Material record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/materials" style={{ textDecoration: "none" }}>
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
                            Material: {material.materialName}
                        </Typography>

                        <StatusChip status={material.status} />
                    </Stack>
                    <Typography 
                        sx={{ 
                            mt: 1, 
                            color: colors.textSecondary, 
                            fontSize: FONT_SIZE.SMALL,
                            fontFamily: FONT_FAMILY.SUB_HEADING,
                            fontWeight: FONT_WEIGHT.REGULAR
                        }}
                    >
                        Created On: {material.createdOn}
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
                            <SideCard title="Material Information">
                                <InfoLine label="Material ID" value={material.materialId} />
                                <InfoLine label="Material Code" value={material.materialCode} />
                                <InfoLine label="Material Name" value={material.materialName} />
                                <InfoLine label="Applicable For" value={material.applicableFor} />
                                <InfoLine label="Supplier Name" value={material.supplierName} />
                            </SideCard>

                            <SideCard title="Pricing & Tax Details">
                                <InfoLine label="Purchase Price" value={`₹${material.purchasePrice}`} />
                                <InfoLine label="Selling Price" value={`₹${material.sellingPrice}`} />
                                <Divider sx={{ my: 1.5, borderColor: colors.border }} />
                                <InfoLine label="Applicable Tax" value={`${material.tax}%`} />
                                <InfoLine label="HSN Code" value={material.hsnCode} />
                            </SideCard>

                            <SideCard title="Inventory Control">
                                <InfoLine label="Stock Quantity" value={`${material.stockQuantity} units`} />
                                <InfoLine label="Minimum Level" value={`${material.minimumStockLevel} units`} />
                                <InfoLine label="Warehouse Location" value={material.warehouseLocation} />
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
                                    {material.description || "No detailed description available for this material."}
                                </Typography>
                            </SideCard>

                            <SideCard title="System Audit">
                                <InfoLine label="Created By" value={material.createdBy} />
                                <InfoLine label="Last Updated" value={material.updatedDate} />
                                <InfoLine label="Modified By" value={material.lastModifiedBy} />
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
                            {/* Visual Icon Card */}
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
                                        borderRadius: borderRadius.large,
                                        bgcolor: colors.bgLight,
                                        border: `1px solid ${colors.border}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <CategoryOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                                </Box>
                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {material.materialName}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.BODY,
                            fontFamily: FONT_FAMILY.SUB_HEADING,
                            fontWeight: FONT_WEIGHT.BOLD
                                    }}
                                >
                                    Used for: {material.applicableFor}
                                </Typography>
                            </Card>

                            <SideCard title="Inventory Quick View">
                                <IconLine icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />} text={`Total Stock: ${material.stockQuantity}`} />
                                <IconLine icon={<WarningAmberOutlinedIcon sx={{ color: colors.primary }} />} text={`Alert Level: ${material.minimumStockLevel}`} />
                                <IconLine icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />} text={`Storage: ${material.warehouseLocation}`} />
                            </SideCard>

                            <SideCard title="Financial Summary">
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Unit Price: ₹${material.sellingPrice}`} />
                                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Tax: ${material.tax}% (HSN: ${material.hsnCode})`} />
                                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`Supplier: ${material.supplierName}`} />
                            </SideCard>

                            {material.notes && (
                                <SideCard title="Internal Notes">
                                    <Typography 
                                        sx={{ 
                                            color: colors.textSecondary, 
                                            fontSize: FONT_SIZE.SMALL, 
                                            fontFamily: FONT_FAMILY.BODY,
                                            lineHeight: 1.6 
                                        }}
                                    >
                                        {material.notes}
                                    </Typography>
                                </SideCard>
                            )}
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}