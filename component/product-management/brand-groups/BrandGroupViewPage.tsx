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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { themeConfig } from "@/assets/constants";
import { brandGroups } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";

export default async function BrandGroupViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = brandGroups.find((item) => item.id === id);

  const { colors, typography, borderRadius } = themeConfig;

  if (!group) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0.1)
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
            Brand Group not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ pt: 2, ...getFadeInStyle(0.1) }}>
        <Container maxWidth="xl">
          <Link href="/products/brand-groups" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Brand Groups
            </Button>
          </Link>
        </Container>
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
              Brand Group: {group.groupName}
            </Typography>

            <Chip
              label={group.status}
              size="small"
              sx={{
                bgcolor: group.status === "Active" ? colors.successBg : colors.errorBg,
                color: group.status === "Active" ? colors.success : colors.error,
                fontWeight: typography.fontWeight.bold,
                borderRadius: borderRadius.small,
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {group.createdOn}
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
          {/* Main Info Column (Scrollable) */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Brand Group Information">
                <InfoLine label="Group ID" value={group.groupId} />
                <InfoLine label="Group Name" value={group.groupName} />
                <InfoLine label="Group Type" value={group.groupType} />
                <InfoLine label="Status" value={group.status} />
                <InfoLine label="Parent Category" value={group.parentCategory} />
                <InfoLine label="Priority Level" value={group.priorityLevel} />
                <InfoLine label="Display Order" value={group.displayOrder} />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {group.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="Statistics">
                <InfoLine label="Total Brands" value={group.totalBrands} />
                <InfoLine label="Active Brands" value={group.activeBrands} />
                <InfoLine label="Total Products" value={group.totalProducts} />
                <InfoLine
                  label="Revenue Contribution"
                  value={`₹${group.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={group.createdOn} />
                <InfoLine label="Updated Date" value={group.updatedDate} />
                <InfoLine label="Created By" value={group.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Sticky Sidebar Column */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: { lg: "sticky" },
              top: 24, // Sticks to top with margin when scrolling
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
                  <CategoryOutlinedIcon sx={{ fontSize: 46, color: colors.primary }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: typography.fontWeight.extraBold, color: colors.textMain }}>
                  {group.groupName}
                </Typography>

                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {group.groupType} • {group.parentCategory}
                </Typography>
              </Card>

              <SideCard title="Group Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Products: ${group.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Active Brands: ${group.activeBrands ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Brands: ${group.totalBrands ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Revenue: ₹${group.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="Manager Information">
                <IconLine icon={<PersonOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerName} />
                <IconLine icon={<MailOutlineOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerEmail} />
                <IconLine icon={<PhoneOutlinedIcon sx={{ color: colors.primary }} />} text={group.managerPhone} />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {group.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}