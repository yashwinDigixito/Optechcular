import Link from "next/link";

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

import { contactLenses } from "@/assets/genericdata";
import StatusChip from "@/component/common/StatusChip";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";

export default async function ContactLensViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lens = contactLenses.find(
    (item) => item.id === id
  );

  if (!lens) {
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
          <Typography
            sx={{
              color: "#64748B",
              fontWeight: 700,
            }}
          >
            Contact Lens not found
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* TOP BAR */}
      <Box>
        <Container maxWidth="xl">
      <Box>
        <Link
          href="/products/contact-lens"
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
        {/* PAGE TITLE */}
        <Box sx={{ mb: 4 }}>
          <Stack
            direction="row"
            spacing={1.5}

            sx={{alignItems:"center", flexWrap:"wrap"}}
           
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  md: "1.9rem",
                },
                fontWeight: 800,
                color: "#3B82F6",
              }}
            >
              Contact Lens: {lens.lensName}
            </Typography>

            <Chip
              label={lens.status}
              size="small"
              sx={{
                bgcolor:
                  lens.status === "Active"
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                  lens.status === "Active"
                    ? "#15803D"
                    : "#B91C1C",

                fontWeight: 700,
                borderRadius: "8px",
              }}
            />
          </Stack>

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
              fontSize: 14,
            }}
          >
            Created On: {lens.createdOn}
          </Typography>
        </Box>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "flex-start",

            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
            }}
          >
            <Stack spacing={3}>
              {/* BASIC INFO */}
              <SideCard title="Contact Lens Information">
                <InfoLine
                  label="Lens ID"
                  value={lens.lensId}
                />

                <InfoLine
                  label="Product Code"
                  value={lens.productCode}
                />

                <InfoLine
                  label="Brand"
                  value={lens.brand}
                />

                <InfoLine
                  label="Lens Name"
                  value={lens.lensName}
                />

                <InfoLine
                  label="Product Type"
                  value={lens.productType}
                />

                <InfoLine
                  label="Power Type"
                  value={lens.powerType}
                />

                <InfoLine
                  label="Modality"
                  value={lens.modality}
                />

                <InfoLine
                  label="Material"
                  value={lens.material}
                />
              </SideCard>

              {/* SPECIFICATIONS */}
              <SideCard title="Lens Specifications">
                <InfoLine
                  label="Base Curve"
                  value={lens.baseCurve}
                />

                <InfoLine
                  label="Diameter"
                  value={lens.diameter}
                />

                <InfoLine
                  label="Spherical Power"
                  value={lens.sphericalPower}
                />

                <InfoLine
                  label="Cylindrical Power"
                  value={lens.cylindricalPower}
                />

                <InfoLine
                  label="Axis"
                  value={lens.axis}
                />

                <InfoLine
                  label="Additional Power"
                  value={lens.additionalPower}
                />

                <InfoLine
                  label="Color"
                  value={lens.color}
                />
              </SideCard>

              {/* PRICING */}
              <SideCard title="Pricing & Tax">
                <InfoLine
                  label="MRP"
                  value={`₹${lens.mrp}`}
                />

                <InfoLine
                  label="Selling Price"
                  value={`₹${lens.sellingPrice}`}
                />

                <InfoLine
                  label="Discount Price"
                  value={`₹${lens.discountPrice}`}
                />

                <InfoLine
                  label="Tax"
                  value={`${lens.tax}%`}
                />

                <InfoLine
                  label="HSN Code"
                  value={lens.hsnCode}
                />
              </SideCard>

              {/* INVENTORY */}
              <SideCard title="Inventory Details">
                <InfoLine
                  label="SKU Code"
                  value={lens.skuCode}
                />

                <InfoLine
                  label="Barcode"
                  value={lens.barcode}
                />

                <InfoLine
                  label="Stock Quantity"
                  value={lens.stock}
                />

                <InfoLine
                  label="Warehouse Location"
                  value={lens.warehouseLocation}
                />
              </SideCard>

              {/* DESCRIPTION */}
              <SideCard title="Description">
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {lens.description}
                </Typography>
              </SideCard>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "40%",
              },
            }}
          >
            <Stack spacing={3}>
              {/* PRODUCT CARD */}
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
                <Avatar
                  src={lens.thumbnailImage}
                  variant="rounded"
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "20px",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#0F172A",
                  }}
                >
                  {lens.brand}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 14,
                    mt: 0.5,
                  }}
                >
                  {lens.lensName} • {lens.modality}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <StatusChip
                    status={lens.status}
                  />
                </Box>
              </Card>

              {/* SUMMARY */}
              <SideCard title="Lens Summary">
                <IconLine
                  icon={<VisibilityOutlinedIcon />}
                  text={`Power Type: ${lens.powerType}`}
                />

                <IconLine
                  icon={<RemoveRedEyeOutlinedIcon />}
                  text={`Base Curve: ${lens.baseCurve}`}
                />

                <IconLine
                  icon={<ColorLensOutlinedIcon />}
                  text={`Color: ${lens.color}`}
                />

                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Stock: ${lens.stock}`}
                />

                <IconLine
                  icon={<PaymentsOutlinedIcon />}
                  text={`Price: ₹${lens.sellingPrice}`}
                />

                <IconLine
                  icon={<WarehouseOutlinedIcon />}
                  text={lens.warehouseLocation}
                />
              </SideCard>

              {/* INVENTORY SUMMARY */}
              <SideCard title="Inventory Summary">
                <IconLine
                  icon={<QrCode2OutlinedIcon />}
                  text={`SKU: ${lens.skuCode}`}
                />

                <IconLine
                  icon={<Inventory2OutlinedIcon />}
                  text={`Available Stock: ${lens.stock}`}
                />

                <IconLine
                  icon={<WarehouseOutlinedIcon />}
                  text={lens.warehouseLocation}
                />
              </SideCard>

              {/* NOTES */}
              <SideCard title="Notes">
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {lens.notes || "No notes available"}
                </Typography>
              </SideCard>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// function SideCard({
//   title,
//   children,
// }: {
//   title: string;
//   children: ReactNode;
// }) {
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

// function IconLine({
//   icon,
//   text,
// }: {
//   icon: ReactNode;
//   text?: string;
// }) {
//   return (
//     <Stack
//       direction="row"
//       spacing={1}
//       alignItems="center"
//       sx={{ mb: 1.3 }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           color: "#64748B",
//         }}
//       >
//         {icon}
//       </Box>

//       <Typography
//         sx={{
//           color: "#334155",
//           fontSize: 14,
//           fontWeight: 500,
//         }}
//       >
//         {text || "N/A"}
//       </Typography>
//     </Stack>
//   );
// }