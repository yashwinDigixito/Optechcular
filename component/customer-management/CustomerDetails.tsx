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

import { customers } from "@/assets/genericdata";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconLine, InfoLine, SideCard } from "../common/ViewPage";

export default async function CustomerViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = customers.find((item) => item.id === id);

  if (!customer) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
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
            Customer not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box
        sx={{
          px: 3,
        }}
      >
        <Link
          href="/customers"
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
              Customer: {customer.customerName}
            </Typography>

            <Chip
              label={customer.customerType}
              size="small"
              sx={{
                bgcolor: "#EFF6FF",
                color: "#3B82F6",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />

            <Chip
              label={customer.status}
              size="small"
              sx={{
                bgcolor: customer.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: customer.status === "Active" ? "#15803D" : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Created On: {customer.createdOn}
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
              <SideCard title="Customer Information">
                <InfoLine label="Customer ID" value={customer.customerId} />
                <InfoLine label="Full Name" value={customer.fullName} />
                <InfoLine label="Customer Type" value={customer.customerType} />
                <InfoLine label="Customer Group" value={customer.customerGroup} />
                <InfoLine label="Status" value={customer.status} />
              </SideCard>

              <SideCard title="Contact Information">
                <IconLine icon={<PersonOutlineOutlinedIcon />} text={customer.customerName} />
                <IconLine icon={<MailOutlineOutlinedIcon />} text={customer.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={customer.phone} />
                <IconLine
                  icon={<PhoneOutlinedIcon />}
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

                <Stack direction="row" spacing={1} sx={{ mt: 2,  alignItems:"center" }}>
                  <LocationOnOutlinedIcon sx={{ color: "#3B82F6", fontSize: 18 }} />
                  <Typography sx={{ color: "#3B82F6", fontWeight: 600 }}>
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

              <SideCard title="System Information">
                <InfoLine label="Created On" value={customer.createdOn} />
                <InfoLine label="Updated Date" value={customer.updatedDate} />
                <InfoLine label="Created By" value={customer.createdBy} />
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
                  {customer.fullName}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {customer.customerType} • {customer.customerGroup}
                </Typography>
              </Card>

              <SideCard title="Customer Summary">
                <IconLine icon={<BadgeOutlinedIcon />} text={`Customer ID: ${customer.customerId}`} />
                <IconLine icon={<ReceiptLongOutlinedIcon />} text={`Total Orders: ${customer.totalOrders ?? 0}`} />
                <IconLine icon={<PaymentsOutlinedIcon />} text={`Revenue: ₹${customer.totalRevenue ?? 0}`} />
                <IconLine icon={<AccountBalanceWalletOutlinedIcon />} text={`Outstanding: ₹${customer.outstandingAmount ?? 0}`} />
              </SideCard>

              <SideCard title="Activity Information">
                <IconLine icon={<LoginOutlinedIcon />} text={`Last Login: ${customer.lastLogin ?? "N/A"}`} />
                <IconLine icon={<ShoppingBagOutlinedIcon />} text={`Last Purchase: ${customer.lastPurchase ?? "N/A"}`} />
                <IconLine icon={<ReceiptLongOutlinedIcon />} text={`Last Order: ${customer.lastOrderDate ?? "N/A"}`} />
              </SideCard>

              <SideCard title="Complete Address">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {customer.addressLine1}, {customer.addressLine2}
                  <br />
                  {customer.city}, {customer.state}
                  <br />
                  {customer.country} - {customer.postalCode}
                </Typography>
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
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

