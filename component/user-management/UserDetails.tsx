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
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { users } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard } from "../common/ViewPage";
export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = users.find((item) => item.id === id);

  if (!user) {
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
            User not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
        sx={{
          py: 2,
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="xl">
          <Link href="/users" passHref style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Back to Users
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} sx={{alignItems:"center", flexWrap:"wrap"}}  >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              User: {user.fullName}
            </Typography>

            <Chip
              label={user.role}
              size="small"
              sx={{
                bgcolor: "#EFF6FF",
                color: "#3B82F6",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={user.status}
              size="small"
              sx={{
                bgcolor: user.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: user.status === "Active" ? "#15803D" : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Created On: {user.createdOn}
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
              <SideCard title="User Information">
                <InfoLine label="User ID" value={user.userId} />
                <InfoLine label="Full Name" value={user.fullName} />
                <InfoLine label="Username" value={user.username} />
                <InfoLine label="Email" value={user.email} />
                <InfoLine label="Phone Number" value={user.phone} />
                <InfoLine label="Status" value={user.status} />
              </SideCard>

              <SideCard title="Role & Permission Information">
                <InfoLine label="Role" value={user.role} />
                <InfoLine label="Department" value={user.department} />
                <InfoLine label="Access Level" value={user.accessLevel} />
                <InfoLine
                  label="Permissions"
                  value={
                    Array.isArray(user.permissions)
                      ? user.permissions.join(", ")
                      : "N/A"
                  }
                />
              </SideCard>

              <SideCard title="Account Information">
                <InfoLine label="Password" value="********" />
                <InfoLine label="Login Status" value={user.loginStatus} />
                <InfoLine label="Last Login" value={user.lastLogin} />
                <InfoLine
                  label="Two Factor Auth"
                  value={user.twoFactorEnabled ? "Enabled" : "Disabled"}
                />
              </SideCard>

              <SideCard title="Address Information">
                <InfoLine label="Address" value={user.address} />
                <InfoLine label="City" value={user.city} />
                <InfoLine label="State" value={user.state} />
                <InfoLine label="Country" value={user.country} />

                <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems:"center"}}>
                  <LocationOnOutlinedIcon sx={{ color: "#3B82F6", fontSize: 18 }} />
                  <Typography sx={{ color: "#3B82F6", fontWeight: 600 }}>
                    View Map
                  </Typography>
                </Stack>
              </SideCard>

              <SideCard title="System Information">
                <InfoLine label="Created On" value={user.createdOn} />
                <InfoLine label="Updated Date" value={user.updatedDate} />
                <InfoLine label="Created By" value={user.createdBy} />
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
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {user.fullName}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {user.role} • {user.department || "Department N/A"}
                </Typography>
              </Card>

              <SideCard title="Contact Summary">
                <IconLine icon={<MailOutlineOutlinedIcon />} text={user.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={user.phone} />
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={user.username} />
              </SideCard>

              <SideCard title="Access Summary">
                <IconLine icon={<BadgeOutlinedIcon />} text={`Role: ${user.role}`} />
                <IconLine
                  icon={<SecurityOutlinedIcon />}
                  text={`Access Level: ${user.accessLevel || "N/A"}`}
                />
                <IconLine
                  icon={<SecurityOutlinedIcon />}
                  text={`2FA: ${user.twoFactorEnabled ? "Enabled" : "Disabled"}`}
                />
              </SideCard>

              <SideCard title="Activity Information">
                <IconLine
                  icon={<LoginOutlinedIcon />}
                  text={`Last Login: ${user.lastLogin || "N/A"}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Orders Managed: ${user.totalOrdersManaged ?? 0}`}
                />
                <IconLine
                  icon={<GroupsOutlinedIcon />}
                  text={`Assigned Customers: ${user.assignedCustomers ?? 0}`}
                />
                <IconLine
                  icon={<AssignmentIndOutlinedIcon />}
                  text={`Last Activity: ${user.lastActivity || "N/A"}`}
                />
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {user.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

