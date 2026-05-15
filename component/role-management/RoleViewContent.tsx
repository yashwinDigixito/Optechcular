"use client";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { roles } from "@/assets/genericdata";
import { DataNotFound, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  Card,
} from "@mui/material";
import Link from "next/link";
import { DescriptionOutlined } from "@mui/icons-material";

export default function RoleViewContent({ id }: { id: string }) {
  const currentRole = roles.find((r) => r.id === id);
  const { colors, borderRadius } = themeConfig;

  if (!currentRole) {
    return (
       <DataNotFound message="Role record not found" />
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
        <Link href="/roles" style={{ textDecoration: "none" }}>
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

      <Container maxWidth="xl" sx={{ py: 4 }}>
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
              Role: {currentRole.roleName}
            </Typography>

            <Chip
              label={currentRole.status}
              size="small"
              sx={{
                bgcolor: currentRole.status === "Active" ? colors.successBg : colors.errorBg,
                color: currentRole.status === "Active" ? colors.success : colors.error,
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
            Security Identifier: {currentRole.id}
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
              <SideCard title="Role Overview">
                <InfoLine 
                    label="Role Name" 
                    value={currentRole.roleName} 
                    icon={<ShieldOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Description" 
                    value={currentRole.description} 
                     icon={<DescriptionOutlined sx={{ fontSize: 20, color: colors.primary }} />}
                />
                <InfoLine 
                    label="Created On" 
                    value={currentRole.createdOn} 
                    icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20, color: colors.primary }} />}
                />
              </SideCard>

              <SideCard title="Access Permissions">
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {currentRole.permissions.map((permission) => (
                    <Chip
                      key={permission}
                      label={permission}
                      sx={{
                        bgcolor: colors.primaryLight,
                        color: colors.primary,
                        fontWeight: FONT_WEIGHT.MEDIUM,
                        fontFamily: FONT_FAMILY.BODY,
                        borderRadius: borderRadius.small,
                        fontSize: "0.75rem"
                      }}
                    />
                  ))}
                </Box>
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
                  <GroupOutlinedIcon sx={{ fontSize: 40, color: colors.primary }} />
                </Box>
                <Typography 
                    sx={{ 
                        fontSize: "2rem", 
                        fontWeight: FONT_WEIGHT.BOLD, 
                        fontFamily: FONT_FAMILY.HEADING,
                        color: colors.textMain 
                    }}
                >
                  {currentRole.totalUsers}
                </Typography>
                <Typography 
                    sx={{ 
                        color: colors.textSecondary, 
                        fontSize: FONT_SIZE.SMALL, 
                        fontFamily: FONT_FAMILY.BODY,
                        mt: 0.5 
                    }}
                >
                  Users assigned to this role
                </Typography>
              </Card>

              <SideCard title="Security Metadata">
                <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems:"center"}}>
                       
                        <Box>
                            <Typography sx={{ color: colors.textSecondary, fontSize: 11, fontWeight: FONT_WEIGHT.BOLD, textTransform: "uppercase" }}>
                                System ID
                            </Typography>
                            <Typography sx={{  textAlign: "center", color: colors.textMain, fontWeight: FONT_WEIGHT.MEDIUM, fontFamily: FONT_FAMILY.BODY }}>
                                {currentRole.id}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}