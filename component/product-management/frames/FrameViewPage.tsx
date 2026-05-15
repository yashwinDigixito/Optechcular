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
import { categories, frames, frameVariants } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { DataNotFound, getFadeInStyle, IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

export default async function FrameViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const frame = frames.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!frame) {
        return (
         <DataNotFound message="Frame record not found" />
        );
    }

    const variants = frameVariants.filter((item) => item.frameId === id);
    const category = categories.find((item) => item.categoryId === frame.categoryId);

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/frames" style={{ textDecoration: "none" }}>
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
                            Frame: {frame.frameName}
                        </Typography>

                        <StatusChip status={frame.status} />
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
                        Created On: {frame.createdOn}
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
                            <SideCard title="Frame Core Information">
                                <InfoLine label="Frame ID" value={frame.frameId} />
                                <InfoLine label="Brand Name" value={frame.brand} />
                                <InfoLine label="Model Number" value={frame.modelNumber} />
                                <InfoLine label="Frame Material" value={frame.frameMaterial} />
                                <InfoLine label="Temple Material" value={frame.templeMaterial} />
                                <InfoLine label="Gender" value={frame.gender} />
                            </SideCard>

                            <SideCard title="Technical Specifications">
                                <InfoLine label="Frame Size" value={frame.frameSize} />
                                <InfoLine label="Bridge Distance (DBL)" value={frame.dbl} />
                                <InfoLine label="Temple Length" value={frame.templeLength} />
                                <InfoLine label="Frame Width" value={frame.frameWidth} />
                                <InfoLine label="Lens Dimensions" value={`${frame.lensWidth} x ${frame.lensHeight}`} />
                            </SideCard>

                            <SideCard title="Pricing & Tax Details">
                                <InfoLine label="Purchase Price" value={`₹${frame.purchasePrice}`} />
                                <InfoLine label="Selling Price" value={`₹${frame.sellingPrice}`} />
                                <InfoLine label="Discounted Price" value={`₹${frame.discountPrice}`} />
                                <Divider sx={{ my: 1.5, borderColor: colors.border }} />
                                <InfoLine label="Applicable Tax" value={`${frame.tax}%`} />
                                <InfoLine label="HSN Code" value={frame.hsnCode} />
                            </SideCard>

                            <SideCard title="Product Description">
                                <Typography 
                                    sx={{ 
                                        color: colors.textMain, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
                                    {frame.description || "No detailed description available for this frame model."}
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
                                    src={frame.thumbnailImage}
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
                                    {frame.brand}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {frame.modelNumber} • {frame.category}
                                </Typography>
                            </Card>

                            <SideCard title="Quick Summary">
                                <IconLine icon={<StyleOutlinedIcon sx={{ color: colors.primary }} />} text={`Rim: ${frame.rimType} (${frame.rimShape})`} />
                                <IconLine icon={<PaletteOutlinedIcon sx={{ color: colors.primary }} />} text={`Color: ${frame.frameFrontColor}`} />
                                <IconLine icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />} text={`Available Stock: ${frame.stockQuantity} units`} />
                                <IconLine icon={<WarehouseOutlinedIcon sx={{ color: colors.primary }} />} text={`Location: ${frame.warehouseLocation}`} />
                            </SideCard>

                            <SideCard title="Category Context">
                                <InfoLine label="Name" value={category?.categoryName} />
                                <InfoLine label="Code" value={category?.categoryCode} />
                                <InfoLine label="Type" value={category?.categoryType} />
                            </SideCard>

                            <SideCard title="Available Variants">
                                <Stack spacing={2}>
                                    {variants.map((variant) => (
                                      
                                        <Box 
                                            key={variant.id}
                                            sx={{ 
                                                p: 1.5, 
                                                borderRadius: borderRadius.medium, 
                                                border: `1px solid ${colors.border}`,
                                                bgcolor: colors.bgLight,
                                                "&:hover": { bgcolor: colors.white }
                                            }}
                                        >
                                            <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}  >
                                                <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>
                                                    {variant.color}
                                                </Typography>
                                                <StatusChip status={variant.stock > 0 ? "In Stock" : "Out of Stock"} />
                                            </Stack>
                                            <Typography sx={{ mt: 0.5, color: colors.primary, fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.BODY }}>
                                                ₹{variant.price}
                                            </Typography>
                                        </Box>
                                    ))}
                                    {variants.length === 0 && (
                                        <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>
                                            No variants listed.
                                        </Typography>
                                    )}
                                </Stack>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}