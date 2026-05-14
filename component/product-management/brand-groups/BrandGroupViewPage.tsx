import Link from "next/link";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import { brandGroups } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";

export default async function BrandGroupViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const group = brandGroups.find((item) => item.id === id);

  if (!group) {
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
            Brand Group not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Container maxWidth="xl">
      <Box>
        <Link
          href="/products/brand-groups"
          style={{
            textDecoration:
              "none",
          }}
        >
          <Button
            startIcon={
              <ArrowBackIcon />
            }
            sx={{
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
        </Container>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems:"center", flexWrap:"wrap"}}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Brand Group: {group.groupName}
            </Typography>

            <Chip
              label={group.status}
              size="small"
              sx={{
                bgcolor: group.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: group.status === "Active" ? "#15803D" : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
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
          <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
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
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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
                  <CategoryOutlinedIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {group.groupName}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {group.groupType} • {group.parentCategory}
                </Typography>
              </Card>

              <SideCard title="Group Summary">
                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Total Products: ${group.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Active Brands: ${group.activeBrands ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Total Brands: ${group.totalBrands ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Revenue: ₹${group.revenueContribution ?? 0}`}
                />
              </SideCard>

              <SideCard title="Manager Information">
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={group.managerName} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={group.managerEmail} />
                <IconLine icon={<PhoneOutlinedIcon />} text={group.managerPhone} />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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

// function ViewCard({ title, children }: { title: string; children: ReactNode }) {
//   return (
//     <Card
//       sx={{
//         p: 2.5,
//         borderRadius: "16px",
//         boxShadow: "none",
//         border: "1px solid #E2E8F0",
//         bgcolor: "#FFFFFF",
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: 18,
//           fontWeight: 700,
//           color: "#0F172A",
//           mb: 2,
//         }}
//       >
//         {title}
//       </Typography>

//       {children}
//     </Card>
//   );
// }

// function InfoLine({
//   label,
//   value,
// }: {
//   label: string;
//   value?: string | number;
// }) {
//   return (
//     <Stack
//       direction="row"
//       alignItems="center"
//       justifyContent="space-between"
//       sx={{
//         py: 1.5,
//         borderBottom: "1px solid #E2E8F0",
//       }}
//     >
//       <Typography
//         sx={{
//           width: "180px",
//           flexShrink: 0,
//           color: "#64748B",
//           fontSize: "14px",
//           fontWeight: 500,
//         }}
//       >
//         {label}
//       </Typography>

//       <Typography
//         sx={{
//           flex: 1,
//           textAlign: "right",
//           color: "#0F172A",
//           fontSize: "14px",
//           fontWeight: 700,
//         }}
//       >
//         {value || "N/A"}
//       </Typography>
//     </Stack>
//   );
// }

// function IconLine({ icon, text }: { icon: ReactNode; text?: string }) {
//   return (
//     <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.3 }}>
//       <Box sx={{ display: "flex", color: "#64748B" }}>{icon}</Box>

//       <Typography sx={{ color: "#334155", fontSize: 14, fontWeight: 500 }}>
//         {text || "N/A"}
//       </Typography>
//     </Stack>
//   );
// }