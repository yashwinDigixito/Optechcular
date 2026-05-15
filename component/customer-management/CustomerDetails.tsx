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
import { customers } from "@/assets/genericdata";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { DataNotFound, IconLine, InfoLine, SideCard, getFadeInStyle } from "../common/ViewPage";


export default async function CustomerViewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const customer = customers.find((item) => item.id === id);

    const { colors, borderRadius } = themeConfig;

    if (!customer) {
        return (
            <DataNotFound message="Customer record not found" />
        );
    }

    return (
        <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
            {/* Navigation Header */}
            <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
                <Link href="/customers" style={{ textDecoration: "none" }}>
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
                                fontFamily: FONT_FAMILY.HEADING,
                                color: colors.primary,
                            }}
                        >
                            Customer: {customer.customerName}
                        </Typography>

                        <Chip
                            label={customer.customerType}
                            size="small"
                            sx={{
                               bgcolor: customer.customerType === "Business" ? "#EFF6FF": "#FDF4FF",
                                color: customer.customerType === "Business"  ? "#2563EB" : "#C026D3",
                                fontWeight: FONT_WEIGHT.BOLD,
                                fontFamily: FONT_FAMILY.BODY,
                                fontSize: FONT_SIZE.SUB_HEADING,
                                borderRadius: borderRadius.small,
                            }}
                        />

                        <Chip
                            label={customer.status}
                            size="small"
                            sx={{
                                bgcolor: customer.status === "Active" ? colors.successBg : colors.errorBg,
                                color: customer.status === "Active" ? colors.success : colors.error,
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
                        Created On: {customer.createdOn}
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
                            {/* SideCard titles usually use CARD_HEADING or SECTION_HEADING */}
                            <SideCard title="Customer Information">
                                <InfoLine label="Customer ID" value={customer.customerId} />
                                <InfoLine label="Full Name" value={customer.fullName} />
                                <InfoLine label="Customer Type" value={customer.customerType} />
                                <InfoLine label="Customer Group" value={customer.customerGroup} />
                                <InfoLine label="Status" value={customer.status} />
                            </SideCard>

                            <SideCard title="Contact Information">
                                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={customer.customerName} />
                                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={customer.email} />
                                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={customer.phone} />
                                <IconLine
                                    icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />}
                                    text={`Alternate: ${customer.alternatePhone ?? "N/A"}`}
                                />
                            </SideCard>

                            <SideCard title="Address Information">
                                <InfoLine label="Address Line 1" value={customer.addressLine1} />
                                <InfoLine label="Address Line 2" value={customer.addressLine2} />
                                <InfoLine label="City" value={customer.city} />
                                <InfoLine label="State" value={customer.state} />
                                <InfoLine label="Country" value={customer.country} />
                                <InfoLine label="Postal Code" value={customer.postalCode} />

                                <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems: "center", cursor: "pointer" }}>
                                    <LocationOnOutlinedIcon sx={{ color: colors.primary, fontSize: 18 }} />
                                    <Typography 
                                        sx={{ 
                                            color: colors.primary, 
                                            fontWeight: FONT_WEIGHT.BOLD,
                                            fontFamily: FONT_FAMILY.BODY,
                                            fontSize: FONT_SIZE.BODY
                                        }}
                                    >
                                        View Map
                                    </Typography>
                                </Stack>
                            </SideCard>

                            <SideCard title="Sales Information">
                                <InfoLine label="Assigned Sales Person" value={customer.salesPerson} />
                                <InfoLine label="Total Orders" value={customer.totalOrders} />
                                <InfoLine
                                    label="Total Revenue"
                                    value={`₹${customer.totalRevenue ?? 0}`}
                                />
                                <InfoLine label="Last Order Date" value={customer.lastOrderDate} />
                            </SideCard>

                            <SideCard title="Payment Information">
                                <InfoLine label="Payment Method" value={customer.paymentMethod} />
                                <InfoLine
                                    label="Outstanding Amount"
                                    value={`₹${customer.outstandingAmount ?? 0}`}
                                />
                                <InfoLine label="Credit Limit" value={`₹${customer.creditLimit ?? 0}`} />
                                <InfoLine label="GST Number" value={customer.gstNumber} />
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
                                    <PersonOutlineOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                                </Box>

                                <Typography 
                                    sx={{ 
                                        fontSize: FONT_SIZE.SECTION_HEADING, 
                                        fontWeight: FONT_WEIGHT.BOLD, 
                                        fontFamily: FONT_FAMILY.HEADING,
                                        color: colors.textMain 
                                    }}
                                >
                                    {customer.fullName}
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.SMALL, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        mt: 0.5 
                                    }}
                                >
                                    {customer.customerType} • {customer.customerGroup}
                                </Typography>
                            </Card>

                            <SideCard title="Customer Summary">
                                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`Customer ID: ${customer.customerId}`} />
                                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Total Orders: ${customer.totalOrders ?? 0}`} />
                                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Revenue: ₹${customer.totalRevenue ?? 0}`} />
                                <IconLine icon={<AccountBalanceWalletOutlinedIcon sx={{ color: colors.primary }} />} text={`Outstanding: ₹${customer.outstandingAmount ?? 0}`} />
                            </SideCard>

                            <SideCard title="Complete Address">
                                <Typography 
                                    sx={{ 
                                        color: colors.textMain, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
                                    {customer.addressLine1}, {customer.addressLine2}
                                    <br />
                                    {customer.city}, {customer.state}
                                    <br />
                                    {customer.country} - {customer.postalCode}
                                </Typography>
                            </SideCard>

                            <SideCard title="Notes">
                                <Typography 
                                    sx={{ 
                                        color: colors.textSecondary, 
                                        fontSize: FONT_SIZE.BODY, 
                                        fontFamily: FONT_FAMILY.BODY,
                                        lineHeight: 1.7 
                                    }}
                                >
                                    {customer.notes || "No notes available"}
                                </Typography>
                            </SideCard>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}