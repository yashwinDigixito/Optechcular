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

import { brands } from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export default async function BrandViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const brand = brands.find((item) => item.id === id);

  if (!brand) {
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
          <Typography sx={{ fontWeight: 700, color: "#64748B" }}>
            Brand not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh"}}>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ mb: 3 }}>
        <Link
          href="/products/brands"
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
              Brand Details: {brand.brandName}
            </Typography>

            <Chip
              label={brand.status}
              size="small"
              sx={{
                bgcolor: brand.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: brand.status === "Active" ? "#15803D" : "#B91C1C",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
            Created On: {brand.createdOn}
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
              <SideCard title="Brand Information">
                <InfoLine label="Brand ID" value={brand.brandId} />
                <InfoLine label="Brand Name" value={brand.brandName} />
                <InfoLine label="Category" value={brand.category} />
                <InfoLine label="Brand Group" value={brand.brandGroup} />
                <InfoLine label="Brand Type" value={brand.brandType} />
                <InfoLine label="Status" value={brand.status} />
              </SideCard>

              <SideCard title="Contact Information">
                <IconLine icon={<BusinessIcon />} text={brand.contactPerson} />
                <IconLine icon={<EmailOutlinedIcon />} text={brand.email} />
                <IconLine icon={<PhoneOutlinedIcon />} text={brand.phone} />
                <IconLine icon={<LanguageOutlinedIcon />} text={brand.website || "N/A"} />
              </SideCard>

              <SideCard title="Address Information">
                <IconLine icon={<LocationOnOutlinedIcon />} text={brand.address} />
                <InfoLine label="City" value={brand.city} />
                <InfoLine label="State" value={brand.state} />
                <InfoLine label="Country" value={brand.country} />
                <InfoLine label="Postal Code" value={brand.postalCode} />
              </SideCard>

              <SideCard title="Business Information">
                <InfoLine label="GST Number" value={brand.gstNumber} />
                <InfoLine label="PAN Number" value={brand.panNumber} />
                <InfoLine label="Created By" value={brand.createdBy} />
                <InfoLine label="Updated Date" value={brand.updatedDate} />
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
                  <BusinessIcon sx={{ fontSize: 46, color: "#3B82F6" }} />
                </Box>

                <Typography sx={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>
                  {brand.brandName}
                </Typography>

                <Typography sx={{ color: "#64748B", fontSize: 14, mt: 0.5 }}>
                  {brand.category} • {brand.brandGroup}
                </Typography>
              </Card>

              <SideCard title="Product Statistics">
                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Total Products: ${brand.totalProducts ?? 0}`}
                />
                <IconLine
                  icon={<BadgeOutlinedIcon />}
                  text={`Active Products: ${brand.activeProducts ?? 0}`}
                />
                <IconLine
                  icon={<ReceiptLongOutlinedIcon />}
                  text={`Total Orders: ${brand.totalOrders ?? 0}`}
                />
                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Revenue: ₹${brand.revenue ?? 0}`}
                />
              </SideCard>

              <SideCard title="Description">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {brand.description || "No description available"}
                </Typography>
              </SideCard>

              <SideCard title="Notes">
                <Typography sx={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {brand.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

