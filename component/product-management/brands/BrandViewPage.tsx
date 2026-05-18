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
import { brands } from "@/assets/genericdata";
import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
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
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const brand = brands.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!brand) {
        return (
            <DataNotFound message="Brand record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/products/brands" style={{ textDecoration: "none" }}>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            textTransform: "none",
                            fontWeight: FONT_WEIGHT.MEDIUM,
                            fontFamily: FONT_FAMILY.BUTTON,
                            fontSize: FONT_SIZE.SUB_HEADING,
                            color: colors.primary
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
                            Brand: {brand.brandName}
                        </Typography>

                        <Chip
                            label={brand.status}
                            size="small"
                            sx={{
                                bgcolor: brand.status === "Active" ? colors.successBg : colors.errorBg,
                                color: brand.status === "Active" ? colors.success : colors.error,
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
                        Created On: {brand.createdDate}
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
                    {/* Left Section */}
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

                            <SideCard title="Contact Details">
                                <IconLine icon={<BusinessIcon sx={{ color: colors.primary }} />} text={brand.contactPerson} />
                                <IconLine icon={<EmailOutlinedIcon sx={{ color: colors.primary }} />} text={brand.email} />
                                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={brand.phone} />
                                <IconLine icon={<LanguageOutlinedIcon sx={{ color: colors.primary }} />} text={brand.website || "No website listed"} />
                            </SideCard>

                            <SideCard title="Address Information">
                                <InfoLine label="Address" value={brand.address} />
                                <InfoLine label="City" value={brand.city} />
                                <InfoLine label="State" value={brand.state} />
                                <InfoLine label="Country" value={brand.country} />
                                <InfoLine label="Postal Code" value={brand.postalCode} />
                            </SideCard>

                            <SideCard title="Tax & Metadata">
                                <InfoLine label="GST Number" value={brand.gstNumber} />
                                <InfoLine label="PAN Number" value={brand.panNumber} />
                                <InfoLine label="Created By" value={brand.createdBy} />
                                <InfoLine label="Updated Date" value={brand.updatedDate} />
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Right Section (Sticky Component) */}
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

                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {brand.brandName}
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {brand.category} • {brand.brandGroup}
                                </Typography>
                            </Card>

                            <SideCard title="Performance Summary">
                                <IconLine icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />} text={`Total Products: ${brand.totalProducts ?? 0}`} />
                                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`Active Products: ${brand.activeProducts ?? 0}`} />
                                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Orders: ${brand.totalOrders ?? 0}`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Revenue: ₹${brand.revenue ?? 0}`} />
                            </SideCard>

                            <SideCard title="Brand Description">
                                <Typography 
                                    sx={{ 
                                        color: colors.textMain, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
                                    {brand.description || "No description available"}
                                </Typography>
                            </SideCard>

                            <SideCard title="Internal Notes">
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
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