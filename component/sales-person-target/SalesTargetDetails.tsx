import React, { ReactNode } from "react";
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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";


import { salesTargets } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, SummaryLine } from "../common/ViewPage";

export default async function SalesTargetDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Updated to look inside salesTargets
  const target = salesTargets.find((item) => item.id === id);

  if (!target) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "none",
          }}
        >
          <Typography sx={{ color: "#64748B", fontWeight: 700 }}>
            Sales person target not found
          </Typography>
        </Card>
      </Box>
    );
  }

  const progress =
    target.targetAmount > 0
      ? Math.min(
          Math.round((target.achievedAmount / target.targetAmount) * 100),
          100
        )
      : 0;

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
       
      >
        <Container maxWidth="xl">
          <Link
            href="/sales-target"
            passHref
            style={{ textDecoration: "none" }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Sales Targets
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5}   sx={{alignItems:"center", flexWrap:"wrap"}}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Target: {target.salesPersonName}
            </Typography>

            <Chip
              label={target.month}
              size="small"
              sx={{
                bgcolor: "#EFF6FF",
                color: "#3B82F6",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={target.status}
              size="small"
              sx={{
                bgcolor:
                  target.status === "Completed"
                    ? "#DCFCE7"
                    : target.status === "Overdue"
                    ? "#FEE2E2"
                    : "#FEF3C7",
                color:
                  target.status === "Completed"
                    ? "#15803D"
                    : target.status === "Overdue"
                    ? "#B91C1C"
                    : "#D97706",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Last Updated: {target.updatedDate}
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
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Stack spacing={3}>
              <SideCard title="Target Assignment">
                <InfoLine label="Target ID" value={target.targetId} />
                <InfoLine label="Sales Person ID" value={target.salesPersonId} />
                <InfoLine label="Sales Person Name" value={target.salesPersonName} />
                <InfoLine label="Target Month" value={target.month} />
                <InfoLine label="Due Date" value={target.dueDate} />
                <InfoLine label="Current Status" value={target.status} />
              </SideCard>

              <SideCard title="Achievement Metrics">
                <InfoLine
                  label="Quota Amount"
                  value={`₹${target.targetAmount.toLocaleString()}`}
                />
                <InfoLine
                  label="Amount Achieved"
                  value={`₹${target.achievedAmount.toLocaleString()}`}
                />
                <InfoLine
                  label="Balance to Target"
                  value={`₹${target.remainingAmount.toLocaleString()}`}
                />

                <Box sx={{ mt: 2 }}>
                  <Stack
                    direction="row"
                    
                    sx={{ mb: 1, justifyContent: "space-between", alignItems: "center"}}
                  >
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Completion Progress
                    </Typography>

                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: 14,
                        fontWeight: 800,
                      }}
                    >
                      {progress}%
                    </Typography>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 10,
                      borderRadius: "999px",
                      bgcolor: "#E2E8F0",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: "999px",
                        bgcolor:
                          target.status === "Completed"
                            ? "#15803D"
                            : target.status === "Overdue"
                            ? "#B91C1C"
                            : "#3B82F6",
                      },
                    }}
                  />
                </Box>
              </SideCard>

              <SideCard title="System Audit">
                <InfoLine label="Record Created" value={target.createdOn} />
                <InfoLine label="Last Modified" value={target.updatedDate} />
                <InfoLine label="Authorized By" value={target.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
            <Stack spacing={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "18px",
                    bgcolor: "#EFF6FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUpOutlinedIcon
                    sx={{ fontSize: 46, color: "#3B82F6" }}
                  />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  ₹{target.achievedAmount.toLocaleString()}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {target.month} Target Achievement
                </Typography>
              </Card>

              <SideCard title="Executive Summary">
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Goal: ₹${target.targetAmount.toLocaleString()}`}
                />
                <IconLine
                  icon={<TrendingUpOutlinedIcon />}
                  text={`Achieved: ₹${target.achievedAmount.toLocaleString()}`}
                />
                <IconLine
                  icon={<PendingActionsOutlinedIcon />}
                  text={`Gap: ₹${target.remainingAmount.toLocaleString()}`}
                />
                <IconLine
                  icon={<AssignmentTurnedInOutlinedIcon />}
                  text={`Phase: ${target.status}`}
                />
              </SideCard>

              <SideCard title="Employee Profile">
                <IconLine
                  icon={<PersonOutlineOutlinedIcon />}
                  text={target.salesPersonName}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Employee ID: ${target.salesPersonId}`}
                />
                <IconLine
                  icon={<CalendarMonthOutlinedIcon />}
                  text={`Deadline: ${target.dueDate}`}
                />
              </SideCard>

              <SideCard title="Managerial Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {target.notes || "No notes provided for this target period."}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}