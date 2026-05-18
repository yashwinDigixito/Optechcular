"use client";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { stores } from "@/assets/genericdata";
import { DataNotFound, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import {
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function StoreViewContent({ id }: { id: string }) {
  const currentStore = stores.find((s) => s.id === id);
  const { colors, borderRadius } = themeConfig;

  if (!currentStore) {
    return (
       <DataNotFound message="Store record not found in system databases" />
    );
  }

  // Format currencies and valuations
  const inventoryLakhs = ((currentStore.inventoryValue || 0) / 100000);
  const displayInventoryValue = inventoryLakhs >= 100 
    ? `₹${(inventoryLakhs / 100).toFixed(2)} Cr` 
    : `₹${inventoryLakhs.toFixed(1)} Lakhs`;

  const target = currentStore.monthlyTarget || 1;
  const revenue = currentStore.monthlyRevenue || 0;
  const revenuePct = Math.round((revenue / target) * 100);

  const mockTimelineEvents = [
    { time: "09:30 AM", msg: "POS Billing Terminal #1 successfully initialized online", status: "success" },
    { time: "10:15 AM", msg: "Inward stock shipment sync finalized (+150 Units)", status: "info" },
    { time: "01:30 PM", msg: "Optometry lab calibration completed and certified", status: "success" },
    { time: "04:45 PM", msg: "Mid-day physical cash register count audited by Manager", status: "warning" },
  ];

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight, pb: 6 }}>
      {/* Navigation Header */}
      <Box sx={{ px: 3, pt: 2, display: "flex", justifyContent: "space-between", alignItems: "center", ...getFadeInStyle(0.1) }}>
        <Link href="/stores" style={{ textDecoration: "none" }}>
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
            Back to Register
          </Button>
        </Link>
        <Chip
          label="ERP Branch Terminal"
          variant="outlined"
          sx={{
            borderColor: colors.border,
            color: colors.textSecondary,
            fontWeight: 700,
            fontSize: "12px",
            fontFamily: FONT_FAMILY.BODY,
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ py: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: FONT_WEIGHT.BOLD,
                fontFamily: FONT_FAMILY.HEADING,
                color: colors.textMain,
              }}
            >
              {currentStore.storeName}
            </Typography>

            <Chip
              label={currentStore.status}
              sx={{
                bgcolor: currentStore.status === "Active" ? colors.successBg : colors.errorBg,
                color: currentStore.status === "Active" ? colors.success : colors.error,
                fontWeight: 800,
                fontSize: "13px",
                fontFamily: FONT_FAMILY.BODY,
                borderRadius: "10px",
                px: 1,
              }}
            />
            <Chip
              label={currentStore.storeType}
              sx={{
                bgcolor: "#EFF6FF",
                color: "#2563EB",
                border: "1px solid #BFDBFE",
                fontWeight: 700,
                fontSize: "13px",
                fontFamily: FONT_FAMILY.BODY,
                borderRadius: "10px",
                px: 1,
              }}
            />
          </Stack>
          <Typography 
            sx={{ 
                mt: 0.8, 
                color: colors.textSecondary, 
                fontSize: "14px",
                fontFamily: FONT_FAMILY.SUB_HEADING,
                fontWeight: FONT_WEIGHT.SEMI_BOLD
            }}
          >
            System Code: {currentStore.storeCode} • Registered On: {currentStore.createdOn}
          </Typography>
        </Box>

        {/* ================= ERP KPI STATS ROW ================= */}
        <Grid container spacing={3} sx={{ mb: 4, ...getFadeInStyle(0.25) }}>
          {/* Card 1: Inventory Valuation */}
          <Grid size={{xs:12,sm:6,md:3}}>
            <Card sx={{ p: 2.5, borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "none", bgcolor: "#FFFFFF" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Box>
                  <Typography sx={{ color: "#64748B", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Physical Stock Value
                  </Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, mt: 0.5, fontFamily: FONT_FAMILY.HEADING }}>
                    {displayInventoryValue}
                  </Typography>
                </Box>
                <Box sx={{ p: 1, borderRadius: "12px", bgcolor: "#F5F3FF", color: "#7C3AED" }}>
                  <Inventory2OutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
              </Stack>
              <Typography sx={{ fontSize: "12px", color: "#64748B", display: "flex", alignItems: "center", gap: 0.5 }}>
                Spread across <strong style={{ color: "#0F172A" }}>{currentStore.totalSKUs} active SKUs</strong>
              </Typography>
            </Card>
          </Grid>

          {/* Card 2: Performance Target */}
          <Grid size={{xs:12,sm:6,md:3}}>
            <Card sx={{ p: 2.5, borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "none", bgcolor: "#FFFFFF" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                <Box>
                  <Typography sx={{ color: "#64748B", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Sales Revenue Target
                  </Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, mt: 0.5, fontFamily: FONT_FAMILY.HEADING }}>
                    {revenuePct}% Achieved
                  </Typography>
                </Box>
                <Box sx={{ p: 1, borderRadius: "12px", bgcolor: "#ECFDF5", color: "#059669" }}>
                  <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
              </Stack>
              <Box sx={{ mb: 1 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={revenuePct > 100 ? 100 : revenuePct} 
                  sx={{ 
                    height: 6, 
                    borderRadius: 3, 
                    bgcolor: "#F0FDF4", 
                    "& .MuiLinearProgress-bar": { bgcolor: revenuePct >= 85 ? "#10B981" : "#F59E0B" } 
                  }} 
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#64748B" }}>
                ₹{(revenue/100000).toFixed(1)}L done of target ₹{(target/100000).toFixed(1)}L
              </Typography>
            </Card>
          </Grid>

          {/* Card 3: Workforce headcount */}
          <Grid size={{xs:12,sm:6,md:3}}>
            <Card sx={{ p: 2.5, borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "none", bgcolor: "#FFFFFF" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Box>
                  <Typography sx={{ color: "#64748B", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Workforce Count
                  </Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, mt: 0.5, fontFamily: FONT_FAMILY.HEADING }}>
                    {currentStore.totalStaff} Personnel
                  </Typography>
                </Box>
                <Box sx={{ p: 1, borderRadius: "12px", bgcolor: "#EFF6FF", color: "#3B82F6" }}>
                  <PeopleAltOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
              </Stack>
              <Typography sx={{ fontSize: "12px", color: "#16A34A", fontWeight: 700 }}>
                Roster active & fully audited
              </Typography>
            </Card>
          </Grid>

          {/* Card 4: Compliance License */}
          <Grid size={{xs:12,sm:6,md:3}}>
            <Card sx={{ p: 2.5, borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "none", bgcolor: "#FFFFFF" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Box>
                  <Typography sx={{ color: "#64748B", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    GST & Compliance
                  </Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: FONT_WEIGHT.BOLD, color: colors.textMain, mt: 0.5, fontFamily: FONT_FAMILY.HEADING }}>
                    Verified
                  </Typography>
                </Box>
                <Box sx={{ p: 1, borderRadius: "12px", bgcolor: "#FFFBEB", color: "#D97706" }}>
                  <VerifiedUserOutlinedIcon sx={{ fontSize: 24 }} />
                </Box>
              </Stack>
              <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 700, fontFamily: FONT_FAMILY.BODY }}>
                GSTIN: <span style={{ color: "#0F172A" }}>{currentStore.gstin || "N/A"}</span>
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Dual Panel Grid */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* Main Content - Left Side */}
          <Box sx={{ width: { xs: "100%", lg: "65%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              {/* Profile details */}
              <SideCard title="Operational Profile">
                <InfoLine 
                    label="Store / Warehouse Name" 
                    value={currentStore.storeName} 
                    icon={<StorefrontOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Operational Type" 
                    value={currentStore.storeType} 
                    icon={<BadgeOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Standard Operating Hours" 
                    value={currentStore.operatingHours} 
                    icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
              </SideCard>

              {/* Tax & Accounting */}
              <SideCard title="Tax & Accounting Framework">
                <InfoLine 
                    label="GSTIN Registered Identifier" 
                    value={currentStore.gstin || "Verified GSTIN Registered"} 
                    icon={<VerifiedUserOutlinedIcon sx={{ fontSize: 20, color: "#16A34A" }} />}
                />
                <InfoLine 
                    label="Settlement Currency" 
                    value="INR (Indian Rupee) - Base Currency" 
                    icon={<LocalAtmOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Primary Billing Zone" 
                    value={currentStore.location.split(",").slice(-2).join(",").trim()} 
                    icon={<LocationOnOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
              </SideCard>

              {/* Department Breakdown */}
              <Card sx={{ p: 3, borderRadius: borderRadius.large, border: `1px solid ${colors.border}`, bgcolor: colors.white, boxShadow: "none" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: FONT_WEIGHT.BOLD, mb: 3, color: colors.textMain, fontFamily: FONT_FAMILY.HEADING }}>
                  Localized ERP Department Nodes
                </Typography>
                <Grid container spacing={2}>
                  {/* Dept 1 */}
                  <Grid size={{xs:12,sm:6}}>
                    <Box sx={{ p: 2, borderRadius: "14px", border: "1px solid #F1F5F9", bgcolor: "#FAF5FF" }}>
                      <Typography sx={{ fontWeight: 850, fontSize: "14px", color: "#5B21B6" }}>Optometry Diagnostic Room</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#6D28D9", mt: 0.5 }}>Active • Certified Lab Equipment</Typography>
                    </Box>
                  </Grid>
                  {/* Dept 2 */}
                  <Grid size={{xs:12,sm:6}}>
                    <Box sx={{ p: 2, borderRadius: "14px", border: "1px solid #F1F5F9", bgcolor: "#EFF6FF" }}>
                      <Typography sx={{ fontWeight: 850, fontSize: "14px", color: "#1E40AF" }}>Lens Processing & Dispensing Clinic</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#1D4ED8", mt: 0.5 }}>Operational • Live Stock Sync</Typography>
                    </Box>
                  </Grid>
                  {/* Dept 3 */}
                  <Grid size={{xs:12,sm:6}}>
                    <Box sx={{ p: 2, borderRadius: "14px", border: "1px solid #F1F5F9", bgcolor: "#ECFDF5" }}>
                      <Typography sx={{ fontWeight: 850, fontSize: "14px", color: "#065F46" }}>POS Checkout & Billing Terminal</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#047857", mt: 0.5 }}>Terminal Online • GST Tax Zone Active</Typography>
                    </Box>
                  </Grid>
                  {/* Dept 4 */}
                  <Grid size={{xs:12,sm:6}}>
                    <Box sx={{ p: 2, borderRadius: "14px", border: "1px solid #F1F5F9", bgcolor: "#FFFBEB" }}>
                      <Typography sx={{ fontWeight: 850, fontSize: "14px", color: "#92400E" }}>Warehouse Vault Stockroom</Typography>
                      <Typography sx={{ fontSize: "12px", color: "#B45309", mt: 0.5 }}>Physical Capacity Utilization: {currentStore.capacityLimit}%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>

              {/* Roster & Contacts */}
              <SideCard title="Location Contacts">
                <InfoLine 
                    label="Assigned Branch Manager" 
                    value={currentStore.manager} 
                    icon={<PersonOutlineIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Physical Address / Directions" 
                    value={currentStore.location} 
                    icon={<LocationOnOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Registered Telephone" 
                    value={currentStore.phone} 
                    icon={<PhoneOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Corporate Store Email" 
                    value={currentStore.email} 
                    icon={<EmailOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
              </SideCard>
            </Stack>
          </Box>

          {/* Sidebar - Right Side */}
          <Box 
            sx={{ 
                width: { xs: "100%", lg: "35%" },
                position: { lg: "sticky" },
                top: 24,
                alignSelf: "flex-start",
                ...getFadeInStyle(0.4)
            }}
          >
            <Stack spacing={3}>
              {/* Manager Card */}
              <Card
                sx={{
                  p: 3,
                  borderRadius: borderRadius.large,
                  boxShadow: "none",
                  border: `1px solid ${colors.border}`,
                  bgcolor: colors.white,
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    bgcolor: colors.primaryLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <PersonOutlineIcon sx={{ fontSize: 36, color: colors.primary }} />
                </Box>
                <Typography 
                    sx={{ 
                        fontSize: "20px", 
                        fontWeight: FONT_WEIGHT.BOLD, 
                        fontFamily: FONT_FAMILY.HEADING,
                        color: colors.textMain 
                    }}
                >
                  {currentStore.manager}
                </Typography>
                <Typography 
                    sx={{ 
                        color: colors.textSecondary, 
                        fontSize: "13px", 
                        fontFamily: FONT_FAMILY.BODY,
                        mt: 0.5,
                        fontWeight: 600
                    }}
                >
                  Assigned Store Manager
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography sx={{ fontSize: "12px", color: "#64748B", fontFamily: FONT_FAMILY.BODY }}>
                  Direct line: {currentStore.phone}
                </Typography>
              </Card>

              {/* Physical Storage Capacity */}
              <Card sx={{ p: 3, borderRadius: borderRadius.large, border: `1px solid ${colors.border}`, bgcolor: colors.white, boxShadow: "none" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: FONT_WEIGHT.BOLD, mb: 3, color: colors.textMain, fontFamily: FONT_FAMILY.HEADING }}>
                  Warehouse Physical Storage Capacity
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", my: 2 }}>
                  <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
                    <CircularProgress 
                      variant="determinate" 
                      value={currentStore.capacityLimit} 
                      size={90} 
                      thickness={6} 
                      sx={{ 
                        color: currentStore.capacityLimit >= 90 ? "#DC2626" : currentStore.capacityLimit >= 75 ? "#CA8A04" : "#16A34A" 
                      }} 
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "16px", fontWeight: 800, color: "#0F172A" }}>
                        {currentStore.capacityLimit}%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "13px", color: "#475569", fontWeight: 600, textAlign: "center" }}>
                    {currentStore.capacityLimit >= 90 ? "Stockroom Full warning! Stock clearance needed." : "Adequate warehousing space available."}
                  </Typography>
                </Box>
              </Card>

              {/* Real-time ERP System Event Log */}
              <Card sx={{ p: 3, borderRadius: borderRadius.large, border: `1px solid ${colors.border}`, bgcolor: colors.white, boxShadow: "none" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: FONT_WEIGHT.BOLD, mb: 2.5, color: colors.textMain, fontFamily: FONT_FAMILY.HEADING }}>
                  Chronological Operation Event Log
                </Typography>
                <Stack spacing={2}>
                  {mockTimelineEvents.map((evt, idx) => (
                    <Box key={idx} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Typography sx={{ fontSize: "11px", fontWeight: 700, color: colors.textSecondary, minWidth: "55px", mt: 0.2 }}>
                        {evt.time}
                      </Typography>
                      <Box>
                        <Typography sx={{ fontSize: "12px", color: "#334155", lineHeight: 1.4, fontFamily: FONT_FAMILY.BODY }}>
                          {evt.msg}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
