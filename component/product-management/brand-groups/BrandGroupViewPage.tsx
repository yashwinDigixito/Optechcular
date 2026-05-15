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
import { brandGroups } from "@/assets/genericdata";
import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export default async function BrandGroupViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const group = brandGroups.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!group) {
        return (
            <DataNotFound message="Brand group record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/brand-groups" style={{ textDecoration: "none" }}>
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
                                fontFamily: FONT_FAMILY.SUB_HEADING,
                                color: colors.primary,
                            }}
                        >
                            Brand Group: {group.groupName}
                        </Typography>

                        <Chip
                            label={group.status}
                            size="small"
                            sx={{
                                bgcolor: group.status === "Active" ? colors.successBg : colors.errorBg,
                                color: group.status === "Active" ? colors.success : colors.error,
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
                            fontSize: FONT_SIZE.SMALL,
                            fontFamily: FONT_FAMILY.BODY,
                            fontWeight: FONT_WEIGHT.REGULAR
                        }}
                    >
                        Created On: {group.createdOn}
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
                    {/* Left Section - Main Info */}
                    <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
                        <Stack spacing={3}>
                            <SideCard title="Brand Group Information">
                                <InfoLine label="Group ID" value={group.groupId} />
                                <InfoLine label="Group Name" value={group.groupName} />
                                <InfoLine label="Group Type" value={group.groupType} />
                                <InfoLine label="Status" value={group.status} />
                                <InfoLine label="Parent Category" value={group.parentCategory} />
                                <InfoLine label="Priority Level" value={group.priorityLevel} />
                                <InfoLine label="Display Order" value={group.displayOrder} />
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
                                    {group.description || "No description available"}
                                </Typography>
                            </SideCard>

                            <SideCard title="Statistics & Performance">
                                <InfoLine label="Total Brands" value={group.totalBrands} />
                                <InfoLine label="Active Brands" value={group.activeBrands} />
                                <InfoLine label="Total Products" value={group.totalProducts} />
                                <InfoLine
                                    label="Revenue Contribution"
                                    value={`₹${group.revenueContribution ?? 0}`}
                                />
                            </SideCard>

                            <SideCard title="System Log">
                                <InfoLine label="Created On" value={group.createdOn} />
                                <InfoLine label="Updated Date" value={group.updatedDate} />
                                <InfoLine label="Created By" value={group.createdBy} />
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
                            {/* Profile Card */}
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
                                    {group.groupName}
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {group.groupType} • {group.parentCategory}
                                </Typography>
                            </Card>

                            <SideCard title="Group Summary">
                                <IconLine
                                    icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Total Products: ${group.totalProducts ?? 0}`}
                                />
                                <IconLine
                                    icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Active Brands: ${group.activeBrands ?? 0}`}
                                />
                                <IconLine
                                    icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Total Brands: ${group.totalBrands ?? 0}`}
                                />
                                <IconLine
                                    icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Contribution: ₹${group.revenueContribution ?? 0}`}
                                />
                            </SideCard>

                            <SideCard title="Manager Details">
                                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerName} />
                                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerEmail} />
                                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerPhone} />
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
                                    {group.notes || "No internal notes available"}
                                </Typography>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}