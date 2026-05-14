import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import { salesTargets } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "../common/ViewPage";
import { themeConfig } from "@/assets/CommonDesign";

export default async function SalesTargetDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const target = salesTargets.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!target) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0),
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: borderRadius.large,
            border: `1px solid ${colors.border}`,
            boxShadow: "none",
          }}
        >
          <Typography sx={{ color: colors.textSecondary, fontWeight: typography.fontWeight.bold }}>
            Sales target record not found
          </Typography>
        </Card>
      </Box>
    );
  }

  const progress =
    target.targetAmount > 0
      ? Math.min(Math.round((target.achievedAmount / target.targetAmount) * 100), 100)
      : 0;

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
        <Link href="/sales-target" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: typography.fontWeight.medium,
              color: colors.primary,
            }}
          >
            Back to Targets
          </Button>
        </Link>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4, ...getFadeInStyle(0.2) }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontSize: { xs: typography.fontSize.h3, md: "1.9rem" },
                fontWeight: typography.fontWeight.extraBold,
                color: colors.primary,
              }}
            >
              Target: {target.salesPersonName}
            </Typography>

            <Chip
              label={target.month}
              size="small"
              sx={{
                bgcolor: colors.primaryLight,
                color: colors.primary,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />

            <Chip
              label={target.status}
              size="small"
              sx={{
                bgcolor: target.status === "Completed" ? colors.successBg : target.status === "Overdue" ? colors.errorBg : colors.warningBg,
                color: target.status === "Completed" ? colors.success : target.status === "Overdue" ? colors.error : colors.warning,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>
          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Last Update: {target.updatedDate}
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
          {/* Left Content */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Target Configuration">
                <InfoLine label="Target Reference" value={target.targetId} />
                <InfoLine label="Sales Personnel" value={target.salesPersonName} />
                <InfoLine label="Employee ID" value={target.salesPersonId} />
                <InfoLine label="Target Period" value={target.month} />
                <InfoLine label="Deadline Date" value={target.dueDate} />
              </SideCard>

              <SideCard title="Financial Performance">
                <InfoLine label="Assigned Quota" value={`₹${target.targetAmount.toLocaleString()}`} />
                <InfoLine label="Total Achieved" value={`₹${target.achievedAmount.toLocaleString()}`} />
                <InfoLine label="Remaining Balance" value={`₹${target.remainingAmount.toLocaleString()}`} />

                <Box sx={{ mt: 3 }}>
                  <Stack direction="row" sx={{ mb: 1.5, justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, fontWeight: typography.fontWeight.medium }}>
                      Target Achievement Rate
                    </Typography>
                    <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, fontWeight: typography.fontWeight.extraBold }}>
                      {progress}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 10,
                      borderRadius: "999px",
                      bgcolor: colors.border,
                      "& .MuiLinearProgress-bar": {
                        borderRadius: "999px",
                        bgcolor: target.status === "Completed" ? colors.success : colors.primary,
                      },
                    }}
                  />
                </Box>
              </SideCard>

              <SideCard title="Audit Log">
                <InfoLine label="Created On" value={target.createdOn} />
                <InfoLine label="Modified On" value={target.updatedDate} />
                <InfoLine label="Authorized By" value={target.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Right Content (Sticky) */}
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
                  "&:hover": { transform: "scale(1.02)" },
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
                  <TrendingUpOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  ₹{target.achievedAmount.toLocaleString()}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  Current Achievement Status
                </Typography>
              </Card>

              <SideCard title="Performance Summary">
                <IconLine icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />} text={`Total Quota: ₹${target.targetAmount.toLocaleString()}`} />
                <IconLine icon={<TrendingUpOutlinedIcon sx={{ color: colors.primary }} />} text={`Total Realized: ₹${target.achievedAmount.toLocaleString()}`} />
                <IconLine icon={<PendingActionsOutlinedIcon sx={{ color: colors.primary }} />} text={`Pending Gap: ₹${target.remainingAmount.toLocaleString()}`} />
                <IconLine icon={<AssignmentTurnedInOutlinedIcon sx={{ color: colors.primary }} />} text={`Status: ${target.status}`} />
              </SideCard>

              <SideCard title="Assignee Profile">
                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={target.salesPersonName} />
                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`ID: ${target.salesPersonId}`} />
                <IconLine icon={<CalendarMonthOutlinedIcon sx={{ color: colors.primary }} />} text={`Target Month: ${target.month}`} />
                <IconLine icon={<HistoryOutlinedIcon sx={{ color: colors.primary }} />} text={`Deadline: ${target.dueDate}`} />
              </SideCard>

              <SideCard title="Internal Remarks">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {target.notes || "No additional remarks documented for this target period."}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}