"use client";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { LedgerGroup } from "@/assets/types";
import { InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import { AccountTreeTwoTone } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
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

interface Props {
    ledgerGroup: LedgerGroup;
}

export default function LedgerGroupDetails({ ledgerGroup }: Props) {
    const { colors, borderRadius } = themeConfig;

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/ledger-groups" style={{ textDecoration: "none" }}>
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
                            {ledgerGroup.groupName}
                        </Typography>

                        <Chip
                            label={ledgerGroup.status}
                            size="small"
                            sx={{
                                bgcolor: ledgerGroup.status === "Active" ? colors.successBg : colors.errorBg,
                                color: ledgerGroup.status === "Active" ? colors.success : colors.error,
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
                        Management and categorization for accounting ledgers.
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
                    {/* Main Content - Left Side */}
                    <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
                        <Stack spacing={3}>
                            <SideCard title="Classification Details">
                                <InfoLine 
                                    label="Group Name" 
                                    value={ledgerGroup.groupName} 
                                    icon={<FolderOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                                <InfoLine 
                                    label="Creation Date" 
                                    value={ledgerGroup.createdAt} 
                                    icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                                <InfoLine 
                                    label="Account Status" 
                                    value={ledgerGroup.status} 
                                     icon={<AccountTreeTwoTone sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                            </SideCard>

                            <SideCard title="Detailed Notes">
                                <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: "center" }}>
                                    <DescriptionOutlinedIcon sx={{ color: colors.primary }} />
                                    <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.HEADING }}>
                                        Internal Documentation
                                    </Typography>
                                </Stack>
                                <Typography 
                                    sx={{ 
                                        color: colors.textMain, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.8,
                                        p: 2,
                                        bgcolor: colors.bgLight,
                                        borderRadius: borderRadius.medium,
                                        border: `1px solid ${colors.border}`
                                    }}
                                >
                                    {ledgerGroup.notes || "No additional descriptive notes provided for this group."}
                                </Typography>
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Sidebar - Right Side Summary */}
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
                                        width: 60,
                                        height: 60,
                                        mx: "auto",
                                        mb: 2,
                                        borderRadius: borderRadius.medium,
                                        bgcolor: colors.primaryLight,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <FolderOutlinedIcon sx={{ fontSize: 32, color: colors.primary }} />
                                </Box>
                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {ledgerGroup.groupName}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    Primary Ledger Group
                                </Typography>
                            </Card>

                            <SideCard title="System Summary">
                                <Stack spacing={2}>
                                    <Box>
                                        <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, textTransform: "uppercase", mb: 0.5 }}>
                                            Group Status
                                        </Typography>
                                        <Typography sx={{ color: colors.textMain, fontWeight: FONT_WEIGHT.MEDIUM }}>
                                            {ledgerGroup.status}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, textTransform: "uppercase", mb: 0.5 }}>
                                            Reference Date
                                        </Typography>
                                        <Typography sx={{ color: colors.textMain, fontWeight: FONT_WEIGHT.MEDIUM }}>
                                            {ledgerGroup.createdAt}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}