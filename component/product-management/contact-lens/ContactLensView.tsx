import {
    Avatar,
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
import { contactLenses } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { DataNotFound, getFadeInStyle, IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

export default async function ContactLensViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const lens = contactLenses.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!lens) {
        return (
            <DataNotFound message="Contact lens record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/contact-lens" style={{ textDecoration: "none" }}>
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
                            Contact Lens: {lens.lensName}
                        </Typography>

                        <StatusChip status={lens.status} />
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
                        Created On: {lens.createdOn}
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
                            <SideCard title="Product Information">
                                <InfoLine label="Lens ID" value={lens.lensId} />
                                <InfoLine label="Product Code" value={lens.productCode} />
                                <InfoLine label="Brand Name" value={lens.brand} />
                                <InfoLine label="Product Type" value={lens.productType} />
                                <InfoLine label="Modality" value={lens.modality} />
                                <InfoLine label="Material" value={lens.material} />
                            </SideCard>

                            <SideCard title="Technical Specifications">
                                <InfoLine label="Power Type" value={lens.powerType} />
                                <InfoLine label="Base Curve" value={lens.baseCurve} />
                                <InfoLine label="Diameter" value={lens.diameter} />
                               
                                <InfoLine label="Spherical Power" value={lens.sphericalPower} />
                                <InfoLine label="Cylindrical Power" value={lens.cylindricalPower} />
                                <InfoLine label="Axis" value={lens.axis} />
                                <InfoLine label="Additional Power" value={lens.additionalPower} />
                            </SideCard>

                            <SideCard title="Pricing & Tax Details">
                                <InfoLine label="MRP" value={`₹${lens.mrp}`} />
                                <InfoLine label="Selling Price" value={`₹${lens.sellingPrice}`} />
                                <InfoLine label="Discount Price" value={`₹${lens.discountPrice}`} />
                              
                                <InfoLine label="Applicable Tax" value={`${lens.tax}%`} />
                                <InfoLine label="HSN Code" value={lens.hsnCode} />
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
                                    {lens.description || "No detailed description available for this contact lens."}
                                </Typography>
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
                                <Avatar
                                    src={lens.thumbnailImage}
                                    variant="rounded"
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        mx: "auto",
                                        mb: 2,
                                        borderRadius: borderRadius.large,
                                        bgcolor: colors.bgLight,
                                        border: `1px solid ${colors.border}`,
                                    }}
                                />
                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {lens.brand}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {lens.lensName} • {lens.modality}
                                </Typography>
                            </Card>

                            <SideCard title="Quick Summary">
                                <IconLine icon={<VisibilityOutlinedIcon sx={{ color: colors.primary }} />} text={`Power: ${lens.powerType}`} />
                                <IconLine icon={<RemoveRedEyeOutlinedIcon sx={{ color: colors.primary }} />} text={`Base Curve: ${lens.baseCurve}`} />
                                <IconLine icon={<ColorLensOutlinedIcon sx={{ color: colors.primary }} />} text={`Lens Color: ${lens.color}`} />
                                <IconLine icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />} text={`Stock: ${lens.stock} units`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Current Price: ₹${lens.sellingPrice}`} />
                            </SideCard>

                            <SideCard title="Warehouse & Logistics">
                                <IconLine icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />} text={`Location: ${lens.warehouseLocation}`} />
                                <InfoLine label="SKU Code" value={lens.skuCode} />
                                <InfoLine label="Barcode" value={lens.barcode} />
                            </SideCard>

                            {lens.notes && (
                                <SideCard title="Special Notes">
                                    <Typography 
                                        sx={{ 
                                            color: colors.textSecondary, 
                                            fontSize: FONT_SIZE.SMALL, 
                                            fontFamily: FONT_FAMILY.BODY,
                                            lineHeight: 1.6 
                                        }}
                                    >
                                        {lens.notes}
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