"use client";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { Ledger } from "@/assets/types";
import { InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import { AddModeratorTwoTone, LocalAtm } from "@mui/icons-material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
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
    ledger: Ledger;
}

export default function LedgerDetails({ ledger }: Props) {
    const { colors, borderRadius } = themeConfig;

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/ledgers" style={{ textDecoration: "none" }}>
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
                            {ledger.ledgerName}
                        </Typography>

                        <Chip
                            label={ledger.status}
                            size="small"
                            sx={{
                                bgcolor: ledger.status === "Active" ? colors.successBg : colors.errorBg,
                                color: ledger.status === "Active" ? colors.success : colors.error,
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
                        Ledger Account ID: {ledger.ledgerGroup.substring(0, 3).toUpperCase()}-{ledger.ledgerName.substring(0, 3).toUpperCase()}
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
                            <SideCard title="Account Information">
                                <InfoLine 
                                    label="Ledger Name" 
                                    value={ledger.ledgerName} 
                                    icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                                <InfoLine 
                                    label="Parent Group" 
                                    value={ledger.ledgerGroup} 
                                    icon={<FolderOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                               
                                <InfoLine 
                                    label="Created On" 
                                    value={ledger.createdOn} 
                                    icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                                <InfoLine 
                                    label="Authorized By" 
                                    value={ledger.createdBy} 
                                    icon={<AddModeratorTwoTone sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                            </SideCard>

                            <SideCard title="Financial Overview">
                                <InfoLine 
                                    label="Opening Balance" 
                                    value={`₹${ledger.openingBalance.toLocaleString()}`} 
                                    icon={<AccountBalanceWalletOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                                <InfoLine 
                                    label="Current Balance" 
                                    value={`₹${ledger.currentBalance.toLocaleString()}`} 
                                    icon={<AccountBalanceWalletOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                                />
                            </SideCard>

                            <SideCard title="Internal Remarks">
                                <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: "center" }}>
                                    <DescriptionOutlinedIcon sx={{ color: colors.primary }} />
                                    <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.HEADING }}>
                                        Account Notes
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
                                    {ledger.notes || "No additional administrative notes recorded for this ledger."}
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
                                    <AccountBalanceWalletOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                                </Box>
                                <Typography 
                                    sx={{ 
                                        fontSize: "2rem", 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    ₹{ledger.currentBalance.toLocaleString()}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    Current Account Balance
                                </Typography>
                            </Card>

                            <SideCard title="Quick Stats">
                                <Stack spacing={2}>
                                    <Box>
                                        <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, textTransform: "uppercase", mb: 0.5 }}>
                                            Balance Type
                                        </Typography>
                                        <Typography sx={{ color: colors.textMain, fontWeight: FONT_WEIGHT.MEDIUM }}>
                                            {ledger.balanceType}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, textTransform: "uppercase", mb: 0.5 }}>
                                            Group Category
                                        </Typography>
                                        <Typography sx={{ color: colors.textMain, fontWeight: FONT_WEIGHT.MEDIUM }}>
                                            {ledger.ledgerGroup}
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