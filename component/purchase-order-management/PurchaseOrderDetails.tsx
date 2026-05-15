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
import { purchaseOrders } from "@/assets/genericdata";
import { DataNotFound, getFadeInStyle, IconLine, InfoLine, SideCard, SummaryLine } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default async function PurchaseOrderViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const purchase = purchaseOrders.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!purchase) {
        return (
           <DataNotFound message="Purchase Order record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/purchase-orders" style={{ textDecoration: "none" }}>
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
                            Purchase Order: {purchase.purchaseNo}
                        </Typography>

                        <Chip
                            label={purchase.purchaseStatus ?? purchase.status}
                            size="small"
                            sx={{
                                bgcolor: purchase.purchaseStatus === "Received" ? colors.successBg : purchase.purchaseStatus === "Cancelled" ? colors.errorBg : colors.warningBg,
                                color: purchase.purchaseStatus === "Received" ? colors.success : purchase.purchaseStatus === "Cancelled" ? colors.error : colors.warning,
                                fontWeight: FONT_WEIGHT.BOLD,
                                fontFamily: FONT_FAMILY.BODY,
                                borderRadius: borderRadius.small,
                            }}
                        />

                        <Chip
                            label={purchase.paymentStatus}
                            size="small"
                            sx={{
                                bgcolor: purchase.paymentStatus === "Paid" ? colors.successBg : purchase.paymentStatus === "Overdue" ? colors.errorBg : colors.warningBg,
                                color: purchase.paymentStatus === "Paid" ? colors.success : purchase.paymentStatus === "Overdue" ? colors.error : colors.warning,
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
                        PO Date: {purchase.poDate ?? purchase.purchaseDate}
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
                    {/* Left Section - Detailed Info */}
                    <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
                        <Stack spacing={3}>
                            <SideCard title="Order Logistics">
                                <InfoLine label="Purchase ID" value={purchase.purchaseId} />
                                <InfoLine label="Supplier Invoice No" value={purchase.supplierInvoiceNo} />
                                <InfoLine label="Reference No" value={purchase.referenceNo} />
                                <InfoLine label="Due Date" value={purchase.dueDate} />
                            </SideCard>

                            <SideCard title="Vendor / Supplier Details">
                                <IconLine icon={<BusinessOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.vendorName ?? purchase.supplierName} />
                                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.email} />
                                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={purchase.mobile ?? purchase.phone} />
                                <InfoLine label="GST Number" value={purchase.gstNumber} />
                                <InfoLine label="Billing Address" value={purchase.billingAddress} />
                            </SideCard>

                            <SideCard title="Product Line Items">
                                <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                                        <Box sx={{ 
                                            width: 80, 
                                            height: 80, 
                                            borderRadius: borderRadius.medium, 
                                            bgcolor: colors.bgLight, 
                                            border: `1px solid ${colors.border}`, 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center", 
                                            flexShrink: 0 
                                        }}>
                                            <Inventory2OutlinedIcon sx={{ fontSize: 32, color: colors.primary }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: colors.textSecondary, fontSize: FONT_SIZE.SMALL, fontFamily: FONT_FAMILY.BODY }}>{purchase.productType}</Typography>
                                            <Typography sx={{ fontSize: FONT_SIZE.BODY, fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, fontFamily: FONT_FAMILY.HEADING }}>{purchase.productName}</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                                        <Box sx={{ 
                                            px: 2, 
                                            py: 0.5, 
                                            border: `1px solid ${colors.border}`, 
                                            borderRadius: borderRadius.small, 
                                            fontWeight: FONT_WEIGHT.MEDIUM, 
                                            fontSize: FONT_SIZE.SMALL, 
                                            color: colors.textMain,
                                            fontFamily: FONT_FAMILY.BODY
                                        }}>
                                            {purchase.quantity} x ₹{purchase.unitCost}
                                        </Box>
                                        <Typography sx={{ fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, fontFamily: FONT_FAMILY.BODY }}>₹{purchase.lineTotal}</Typography>
                                    </Stack>
                                </Stack>
                            </SideCard>

                            <SideCard title="Payment & Reconciliation">
                                <SummaryLine label="Subtotal" value={`₹${purchase.subtotal}`} />
                                <SummaryLine label="Grand Total" value={`₹${purchase.grandTotal}`} bold />
                                <SummaryLine label="Balance Due" value={`₹${purchase.balanceDue}`} bold />
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
                                    <ShoppingCartOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                                </Box>
                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {purchase.purchaseNo}
                                </Typography>
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {purchase.vendorName ?? purchase.supplierName} • ₹{purchase.grandTotal}
                                </Typography>
                            </Card>

                            <SideCard title="Quick Overview">
                                <IconLine icon={<ShoppingCartOutlinedIcon sx={{ color: colors.primary }} />} text={`PO Number: ${purchase.purchaseNo}`} />
                                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Due: ${purchase.dueDate}`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Payment: ${purchase.paymentStatus}`} />
                            </SideCard>

                            {purchase.notes && (
                                <SideCard title="Internal Notes">
                                    <Typography 
                                        sx={{ 
                                            color: colors.textSecondary, 
                                            fontSize: FONT_SIZE.SMALL, 
                                            fontFamily: FONT_FAMILY.BODY,
                                            lineHeight: 1.6 
                                        }}
                                    >
                                        {purchase.notes}
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