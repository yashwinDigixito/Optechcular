import {
    Box,
    Button,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { rimShapes } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { DataNotFound, getFadeInStyle, IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default async function RimShapeViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const rimShape = rimShapes.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!rimShape) {
        return (
            <DataNotFound message="Rim Shape record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/rim-shapes" style={{ textDecoration: "none" }}>
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
                            Rim Shape: {rimShape.shapeName}
                        </Typography>

                        <StatusChip status={rimShape.status} />
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
                        Created On: {rimShape.createdOn}
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
                            <SideCard title="Shape Configuration">
                                <InfoLine label="Rim Shape ID" value={rimShape.rimShapeId} />
                                <InfoLine label="Shape Code" value={rimShape.rimShapeCode} />
                                <InfoLine label="Shape Name" value={rimShape.shapeName} />
                                <InfoLine label="Category" value={rimShape.shapeCategory} />
                                <InfoLine label="Applicable For" value={rimShape.applicableFor} />
                            </SideCard>

                            <SideCard title="Usage Statistics">
                                <InfoLine label="Total Products Linked" value={`${rimShape.totalProducts} items`} />
                                <InfoLine label="Current Status" value={rimShape.status} />
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
                                    {rimShape.description || "No specific description provided for this rim shape geometry."}
                                </Typography>
                            </SideCard>

                            <SideCard title="System Information">
                                <InfoLine label="Created By" value={rimShape.createdBy} />
                                <InfoLine label="Date Created" value={rimShape.createdOn} />
                                <InfoLine label="Last Updated" value={rimShape.updatedDate} />
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
                            {/* Visual Category Card */}
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
                                    {rimShape.shapeName}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    Category: {rimShape.shapeCategory}
                                </Typography>
                            </Card>

                            <SideCard title="Summary Insights">
                                <IconLine icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />} text={`Linked Products: ${rimShape.totalProducts}`} />
                                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Internal Code: ${rimShape.rimShapeCode}`} />
                                <IconLine icon={<VisibilityOutlinedIcon sx={{ color: colors.primary }} />} text={`Target: ${rimShape.applicableFor}`} />
                                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`Status: ${rimShape.status}`} />
                            </SideCard>

                            {rimShape.notes && (
                                <SideCard title="Admin Notes">
                                    <Typography 
                                        sx={{ 
                                            color: colors.textSecondary, 
                                            fontSize: FONT_SIZE.SMALL, 
                                            fontFamily: FONT_FAMILY.BODY,
                                            lineHeight: 1.6 
                                        }}
                                    >
                                        {rimShape.notes}
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