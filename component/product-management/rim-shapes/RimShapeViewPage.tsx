import {
    Box,
    Button,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { themeConfig } from "@/assets/constants";
import { rimShapes } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { IconLine, InfoLine, SideCard, getFadeInStyle } from "@/component/common/ViewPage";

export default async function RimShapeViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rimShape = rimShapes.find((item) => item.id === id);
  const { colors, typography, borderRadius } = themeConfig;

  if (!rimShape) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: colors.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...getFadeInStyle(0.1),
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
            Rim Shape not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", bgcolor: colors.bgLight }}>
      {/* Navigation Header */}
      <Box sx={{ pt: 2, ...getFadeInStyle(0.1) }}>
        <Container maxWidth="xl">
          <Link href="/products/rim-shapes" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                textTransform: "none",
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
              }}
            >
              Back to Rim Shapes
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
              Rim Shape: {rimShape.shapeName}
            </Typography>
            <StatusChip status={rimShape.status} />
          </Stack>
          <Typography sx={{ mt: 1, color: colors.textSecondary, fontSize: typography.fontSize.small }}>
            Created On: {rimShape.createdOn}
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
          {/* Left Column: Detailed Information */}
          <Box sx={{ width: { xs: "100%", lg: "60%" }, ...getFadeInStyle(0.3) }}>
            <Stack spacing={3}>
              <SideCard title="Rim Shape Information">
                <InfoLine label="Rim Shape ID" value={rimShape.rimShapeId} />
                <InfoLine label="Rim Shape Code" value={rimShape.rimShapeCode} />
                <InfoLine label="Shape Name" value={rimShape.shapeName} />
                <InfoLine label="Shape Category" value={rimShape.shapeCategory} />
                <InfoLine label="Applicable For" value={rimShape.applicableFor} />
                <InfoLine label="Status" value={rimShape.status} />
              </SideCard>

              <SideCard title="Product Information">
                <InfoLine label="Total Products" value={rimShape.totalProducts} />
                <InfoLine label="Created By" value={rimShape.createdBy} />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {rimShape.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={rimShape.createdOn} />
                <InfoLine label="Updated Date" value={rimShape.updatedDate} />
                <InfoLine label="Created By" value={rimShape.createdBy} />
              </SideCard>
            </Stack>
          </Box>

          {/* Right Column: Sticky Summary */}
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
                  {rimShape.shapeName}
                </Typography>
                <Typography sx={{ color: colors.textSecondary, fontSize: typography.fontSize.small, mt: 0.5 }}>
                  {rimShape.applicableFor}
                </Typography>
              </Card>

              <SideCard title="Rim Shape Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Total Products: ${rimShape.totalProducts}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Status: ${rimShape.status}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Code: ${rimShape.rimShapeCode}`}
                />
                <IconLine
                  icon={<VisibilityOutlinedIcon sx={{ color: colors.primary }} />}
                  text={`Category: ${rimShape.shapeCategory}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: colors.textMain, fontSize: typography.fontSize.small, lineHeight: 1.7 }}>
                  {rimShape.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}