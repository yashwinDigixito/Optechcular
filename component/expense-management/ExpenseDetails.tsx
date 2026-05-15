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
import { expenses } from "@/assets/genericdata";
import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export default async function ExpenseDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const expense = expenses.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!expense) {
        return (
            <DataNotFound message="Expense record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Top Navigation Bar */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/expenses" style={{ textDecoration: "none" }}>
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
                            {expense.expenseName}
                        </Typography>

                        <Chip
                            label={expense.id}
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
                            label={expense.status}
                            size="small"
                            sx={{
                                bgcolor: (expense.status === "Approved" || expense.status === "Paid") ? colors.successBg : expense.status === "Rejected" ? colors.errorBg : colors.warningBg,
                                color: (expense.status === "Approved" || expense.status === "Paid") ? colors.success : expense.status === "Rejected" ? colors.error : colors.warning,
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
                        Transaction Date: {expense.expenseDate}
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
                            <SideCard title="General Information">
                                <InfoLine label="Expense ID" value={expense.id} />
                                <InfoLine label="Expense Name" value={expense.expenseName} />
                                <InfoLine label="Ledger/Category" value={expense.ledger} />
                                <InfoLine label="Payment Method" value={expense.paymentMethod} />
                                <InfoLine label="Current Status" value={expense.status} />
                            </SideCard>

                            <SideCard title="Financial Details">
                                <InfoLine label="Total Amount" value={`${expense.currency} ${expense.amount.toLocaleString()}`} />
                                <InfoLine label="Currency Code" value={expense.currency} />
                                <InfoLine label="Billing Date" value={expense.expenseDate} />
                            </SideCard>

                            <SideCard title="Audit Tracking">
                                <InfoLine label="System Entry" value={expense.createdOn} />
                                <InfoLine label="Authorized By" value={expense.createdBy} />
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Sidebar - Right Side */}
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
                                    {expense.currency} {expense.amount.toLocaleString()}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    Total Expense Value
                                </Typography>
                            </Card>

                            <SideCard title="Quick Summary">
                                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Category: ${expense.ledger}`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Method: ${expense.paymentMethod}`} />
                                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Date: ${expense.expenseDate}`} />
                                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={`Raised By: ${expense.createdBy}`} />
                            </SideCard>

                            <SideCard title="Description & Notes">
                                <Stack spacing={2}>
                                    <Box>
                                        <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.BODY, textTransform: "uppercase", mb: 0.5 }}>
                                            Purpose
                                        </Typography>
                                        <Typography sx={{ color: colors.textMain, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY, lineHeight: 1.6 }}>
                                            {expense.description}
                                        </Typography>
                                    </Box>
                                    
                                    {expense.notes && (
                                        <Box sx={{ pt: 2, borderTop: `1px dashed ${colors.border}` }}>
                                            <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.BODY, textTransform: "uppercase", mb: 0.5 }}>
                                                Internal Remarks
                                            </Typography>
                                            <Typography sx={{ color: colors.textMain, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY, lineHeight: 1.6, fontStyle: "italic" }}>
                                                {expense.notes}
                                            </Typography>
                                        </Box>
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