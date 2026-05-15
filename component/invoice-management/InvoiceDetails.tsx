import {
    Box,
    Button,
    Card,
    Container,
    Divider,
    Stack,
    Typography
} from "@mui/material";
import Link from "next/link";

// Icons
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { invoices } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { DataNotFound, IconLine, InfoLine, SideCard, SummaryLine, getFadeInStyle } from "@/component/common/ViewPage";

export default async function InvoiceDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const invoice = invoices.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!invoice) {
        return (
             <DataNotFound message="Invoice record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/invoices" style={{ textDecoration: "none" }}>
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
                            Invoice: {invoice.invoiceNo}
                        </Typography>

                        <StatusChip status={invoice.invoiceStatus} />
                        <StatusChip status={invoice.paymentStatus} />
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
                        Issued Date: {invoice.invoiceDate}
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
                    {/* Main Content (Left) */}
                    <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
                        <Stack spacing={3}>
                            <SideCard title="Invoice Logistics">
                                <InfoLine label="Internal ID" value={invoice.invoiceId} />
                                <InfoLine label="Linked Order" value={invoice.orderNo} />
                                <InfoLine label="Issue Date" value={invoice.invoiceDate} />
                                <InfoLine label="Due Date" value={invoice.dueDate} />
                                <InfoLine label="Lifecycle" value={invoice.invoiceStatus} />
                            </SideCard>

                            <SideCard title="Client Details">
                                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.customerName} />
                                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.email} />
                                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={invoice.phone} />
                            </SideCard>

                            <SideCard title="Billed Items">
                                <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                                        <Box sx={{ 
                                            width: 80, height: 80, borderRadius: borderRadius.medium, 
                                            bgcolor: colors.bgLight, border: `1px solid ${colors.border}`, 
                                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
                                        }}>
                                            <Inventory2OutlinedIcon sx={{ fontSize: 32, color: colors.primary }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: colors.textSecondary, fontSize: 12, fontFamily: FONT_FAMILY.BODY, textTransform: "uppercase" }}>
                                                {invoice.productType}
                                            </Typography>
                                            <Typography sx={{ fontSize: FONT_SIZE.BODY, fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.HEADING, color: colors.textMain }}>
                                                {invoice.productName}
                                            </Typography>
                                            <Stack direction="row" spacing={2} sx={{ mt: 0.5 }}>
                                                <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>Qty: {invoice.quantity}</Typography>
                                                <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>Tax: {invoice.tax}%</Typography>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                                        <Typography sx={{ fontWeight: FONT_WEIGHT.MEDIUM, color: colors.textSecondary, fontFamily: FONT_FAMILY.BODY }}>₹{invoice.unitPrice}</Typography>
                                        <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, fontSize: FONT_SIZE.SECTION_HEADING, fontFamily: FONT_FAMILY.HEADING }}>₹{invoice.lineTotal}</Typography>
                                    </Stack>
                                </Stack>
                            </SideCard>

                            <SideCard title="Financial Reconciliation">
                                <SummaryLine label="Subtotal Amount" value={`₹${invoice.subtotal}`} />
                                <SummaryLine label="Total Discounts" value={`-₹${invoice.discountAmount}`} />
                                <SummaryLine label="Applied Tax" value={`₹${invoice.taxAmount}`} />
                                <SummaryLine label="Logistics/Shipping" value={`₹${invoice.shippingCharge}`} />
                                <Divider sx={{ my: 1.5, borderColor: colors.border }} />
                                <SummaryLine label="Grand Total" value={`₹${invoice.grandTotal}`} bold />
                                <SummaryLine label="Received Payment" value={`₹${invoice.paidAmount}`} />
                                <SummaryLine label="Outstanding Balance" value={`₹${invoice.balanceDue}`} bold />
                            </SideCard>

                            <SideCard title="System Audit">
                                <InfoLine label="Entry Date" value={invoice.createdOn} />
                                <InfoLine label="Last Update" value={invoice.updatedDate} />
                                <InfoLine label="Authorized By" value={invoice.createdBy} />
                            </SideCard>
                        </Stack>
                    </Box>

                    {/* Sidebar (Right) */}
                    <Box
                        sx={{
                            width: { xs: "100%", lg: "40%" },
                            position: { lg: "sticky" },
                            top: 24,
                            alignSelf: "flex-start",
                            ...getFadeInStyle(0.4),
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
                                    "&:hover": { transform: "translateY(-4px)" },
                                }}
                            >
                                <Box sx={{ 
                                    width: 80, height: 80, mx: "auto", mb: 2, 
                                    borderRadius: borderRadius.xl, bgcolor: colors.primaryLight, 
                                    display: "flex", alignItems: "center", justifyContent: "center" 
                                }}>
                                    <ReceiptLongOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                                </Box>
                                <Typography sx={{ fontSize: FONT_SIZE.SECTION_HEADING, fontWeight: FONT_WEIGHT.BOLD, fontFamily: FONT_FAMILY.HEADING, color: colors.textMain }}>
                                    {invoice.invoiceNo}
                                </Typography>
                                <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY, mt: 0.5 }}>
                                    Total: ₹{invoice.grandTotal} • {invoice.customerName}
                                </Typography>
                            </Card>

                            <SideCard title="Payment Insights">
                                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Due Date: ${invoice.dueDate}`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Method: ${invoice.paymentMethod || "Bank Transfer"}`} />
                                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`Transaction: ${invoice.transactionId || "Pending"}`} />
                                <IconLine icon={<AccountBalanceWalletOutlinedIcon sx={{ color: colors.error }} />} text={`Due: ₹${invoice.balanceDue}`} />
                            </SideCard>

                            <SideCard title="Billing Addresses">
                                <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: 11, color: colors.textSecondary, mb: 0.5, textTransform: "uppercase" }}>
                                    Billing To
                                </Typography>
                                <Typography sx={{ color: colors.textMain, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY, mb: 2 }}>{invoice.billingAddress}</Typography>
                                
                                <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: 11, color: colors.textSecondary, mb: 0.5, textTransform: "uppercase" }}>
                                    Shipping To
                                </Typography>
                                <Typography sx={{ color: colors.textMain, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>
                                    {invoice.shippingAddress || "Matches billing address"}
                                </Typography>
                            </SideCard>

                            <SideCard title="Internal Remarks">
                                <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY, fontStyle: "italic", lineHeight: 1.6 }}>
                                    {invoice.notes || "No additional instructions recorded for this billing cycle."}
                                </Typography>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}