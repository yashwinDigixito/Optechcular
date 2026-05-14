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

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { themeConfig } from "@/assets/constants";
import { users } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "../common/ViewPage";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!user) {
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
            User record not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ px: 3, pt: 2, ...getFadeInStyle(0.1) }}>
        <Link href="/users" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: typography.fontWeight.medium,
              color: colors.primary,
            }}
          >
            Back to Users
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
              User: {user.fullName}
            </Typography>

            <Chip
              label={user.role}
              size="small"
              sx={{
                bgcolor: colors.primaryLight,
                color: colors.primary,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />

            <Chip
              label={user.status}
              size="small"
              sx={{
                bgcolor: user.status === "Active" ? colors.successBg : colors.errorBg,
                color: user.status === "Active" ? colors.success : colors.error,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>
          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Account Created: {user.createdOn}
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
              <SideCard title="Personal Details">
                <InfoLine label="Internal ID" value={user.userId} />
                <InfoLine label="Full Legal Name" value={user.fullName} />
                <InfoLine label="System Username" value={user.username} />
                <InfoLine label="Primary Email" value={user.email} />
                <InfoLine label="Contact Number" value={user.phone} />
                <InfoLine label="Account Status" value={user.status} />
              </SideCard>

              <SideCard title="Permissions & Workgroup">
                <InfoLine label="Assigned Role" value={user.role} />
                <InfoLine label="Department" value={user.department || "General"} />
                <InfoLine label="Security Level" value={user.accessLevel || "Standard"} />
                <InfoLine
                  label="Specific Permissions"
                  value={Array.isArray(user.permissions) ? user.permissions.join(", ") : "None"}
                />
              </SideCard>

              <SideCard title="Security & Authentication">
                <InfoLine label="Security Protocol" value={user.twoFactorEnabled ? "2FA Active" : "Standard"} />
                <InfoLine label="Current Session" value={user.loginStatus || "Inactive"} />
                <InfoLine label="Last Known Login" value={user.lastLogin || "Never"} />
              </SideCard>

              <SideCard title="Geographic Information">
                <InfoLine label="Street Address" value={user.address} />
                <InfoLine label="City / Region" value={user.city} />
                <InfoLine label="State / Province" value={user.state} />
                <InfoLine label="Country Code" value={user.country} />

                <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems: "center", cursor: "pointer" }}>
                  <LocationOnOutlinedIcon sx={{ color: colors.primary, fontSize: 18 }} />
                  <Typography sx={{ color: colors.primary, fontWeight: typography.fontWeight.bold }}>
                    View Office Location
                  </Typography>
                </Stack>
              </SideCard>

              <SideCard title="Administrative Records">
                <InfoLine label="Database Creation" value={user.createdOn} />
                <InfoLine label="Last Modified" value={user.updatedDate} />
                <InfoLine label="Created By" value={user.createdBy} />
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
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>
                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {user.fullName}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {user.role} • {user.department || "No Dept"}
                </Typography>
              </Card>

              <SideCard title="Contact Profile">
                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={user.email} />
                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={user.phone} />
                <IconLine icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />} text={`User ID: ${user.userId}`} />
              </SideCard>

              <SideCard title="Operational Metrics">
                <IconLine icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />} text={`Orders Managed: ${user.totalOrdersManaged ?? 0}`} />
                <IconLine icon={<GroupsOutlinedIcon sx={{ color: colors.primary }} />} text={`Assigned Clients: ${user.assignedCustomers ?? 0}`} />
                <IconLine icon={<LoginOutlinedIcon sx={{ color: colors.primary }} />} text={`Last Sync: ${user.lastLogin || "N/A"}`} />
                <IconLine icon={<AssignmentIndOutlinedIcon sx={{ color: colors.primary }} />} text={`Recent Activity: ${user.lastActivity || "None"}`} />
              </SideCard>

              <SideCard title="Managerial Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {user.notes || "No additional records provided for this user account."}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}