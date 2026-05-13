import Link from "next/link";

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";

import {
  categories,
  frames,
  frameVariants,
} from "@/assets/genericdata";
import { IconLine, InfoLine, SideCard } from "@/component/common/ViewPage";

import StatusChip from "@/component/common/StatusChip";

export default async function FrameViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const frame = frames.find(
    (item) => item.id === id
  );

  if (!frame) {
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
            Frame not found
          </Typography>
        </Card>
      </Box>
    );
  }

  const variants =
    frameVariants.filter(
      (item) =>
        item.frameId === id
    );

  const category =
    categories.find(
      (item) =>
        item.categoryId ===
        frame.categoryId
    );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ mb: 3 }}>
        <Link
          href="/product/frames"
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

      <Container
        maxWidth="xl"
        sx={{ py: 4 }}
      >
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
              Frame:{" "}
              {frame.frameName}
            </Typography>

            <Chip
              label={frame.status}
              size="small"
              sx={{
                bgcolor:
                  frame.status ===
                  "Active"
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                  frame.status ===
                  "Active"
                    ? "#15803D"
                    : "#B91C1C",

                fontWeight: 700,
                borderRadius:
                  "8px",
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
            Created On:{" "}
            {frame.createdOn}
          </Typography>
        </Box>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: "flex",
            gap: 3,

            alignItems:
              "flex-start",

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
              <SideCard title="Frame Information">
                <InfoLine
                  label="Frame ID"
                  value={
                    frame.frameId
                  }
                />

                <InfoLine
                  label="Brand"
                  value={
                    frame.brand
                  }
                />

                <InfoLine
                  label="Model No"
                  value={
                    frame.modelNo
                  }
                />

                <InfoLine
                  label="Category"
                  value={
                    frame.category
                  }
                />

                <InfoLine
                  label="Rim Type"
                  value={
                    frame.rimType
                  }
                />

                <InfoLine
                  label="Rim Shape"
                  value={
                    frame.rimShape
                  }
                />

                <InfoLine
                  label="Frame Material"
                  value={
                    frame.frameMaterial
                  }
                />

                <InfoLine
                  label="Temple Material"
                  value={
                    frame.templeMaterial
                  }
                />

                <InfoLine
                  label="Gender"
                  value={
                    frame.gender
                  }
                />
              </SideCard>

              {/* SIZE DETAILS */}
              <SideCard title="Size Details">
                <InfoLine
                  label="Size"
                  value={frame.size}
                />

                <InfoLine
                  label="DBL"
                  value={frame.dbl}
                />

                <InfoLine
                  label="Temple Length"
                  value={
                    frame.templeLength
                  }
                />

                <InfoLine
                  label="Frame Width"
                  value={
                    frame.frameWidth
                  }
                />

                <InfoLine
                  label="Lens Width"
                  value={
                    frame.lensWidth
                  }
                />

                <InfoLine
                  label="Lens Height"
                  value={
                    frame.lensHeight
                  }
                />
              </SideCard>

              {/* COLOR DETAILS */}
              <SideCard title="Color Details">
                <InfoLine
                  label="Colour Code"
                  value={
                    frame.colourCode
                  }
                />

                <InfoLine
                  label="Front Color"
                  value={
                    frame.frameFrontColor
                  }
                />

                <InfoLine
                  label="Temple Color"
                  value={
                    frame.templeColor
                  }
                />

                <InfoLine
                  label="Lens Color"
                  value={
                    frame.lensColor
                  }
                />
              </SideCard>

              {/* PRICE */}
              <SideCard title="Pricing & Tax">
                <InfoLine
                  label="Purchase Price"
                  value={`₹${frame.purchasePrice}`}
                />

                <InfoLine
                  label="Selling Price"
                  value={`₹${frame.srp}`}
                />

                <InfoLine
                  label="Discount Price"
                  value={`₹${frame.discountPrice}`}
                />

                <InfoLine
                  label="Tax"
                  value={`${frame.tax}%`}
                />

                <InfoLine
                  label="HSN Code"
                  value={
                    frame.hsnCode
                  }
                />
              </SideCard>

              {/* INVENTORY */}
              <SideCard title="Inventory Details">
                <InfoLine
                  label="SKU Code"
                  value={
                    frame.skuCode
                  }
                />

                <InfoLine
                  label="Barcode"
                  value={
                    frame.barcode
                  }
                />

                <InfoLine
                  label="Stock"
                  value={
                    frame.stock
                  }
                />

                <InfoLine
                  label="Warehouse"
                  value={
                    frame.warehouseLocation
                  }
                />
              </SideCard>

              {/* DESCRIPTION */}
              <SideCard title="Description">
                <Typography
                  sx={{
                    color:
                      "#475569",

                    fontSize: 14,

                    lineHeight: 1.7,
                  }}
                >
                  {
                    frame.description
                  }
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
              {/* TOP CARD */}
              <Card
                sx={{
                  p: 3,
                  borderRadius:
                    "16px",

                  boxShadow:
                    "none",

                  border:
                    "1px solid #E2E8F0",

                  bgcolor:
                    "#FFFFFF",

                  textAlign:
                    "center",
                }}
              >
                <Avatar
                  src={
                    frame.thumbnailImage
                  }
                  variant="rounded"
                  sx={{
                    width: 100,
                    height: 100,

                    mx: "auto",
                    mb: 2,

                    borderRadius:
                      "20px",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    color:
                      "#0F172A",
                  }}
                >
                  {frame.brand}
                </Typography>

                <Typography
                  sx={{
                    color:
                      "#64748B",

                    fontSize: 14,

                    mt: 0.5,
                  }}
                >
                  {
                    frame.modelNo
                  }{" "}
                  •{" "}
                  {
                    frame.category
                  }
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <StatusChip
                    status={
                      frame.status
                    }
                  />
                </Box>
              </Card>

              {/* SUMMARY */}
              <SideCard title="Frame Summary">
                <IconLine
                  icon={
                    <VisibilityOutlinedIcon />
                  }
                  text={`Frame Type: ${frame.frameType}`}
                />

                <IconLine
                  icon={
                    <StraightenOutlinedIcon />
                  }
                  text={`Size: ${frame.size}`}
                />

                <IconLine
                  icon={
                    <PaletteOutlinedIcon />
                  }
                  text={`Color: ${frame.frameFrontColor}`}
                />

                <IconLine
                  icon={
                    <Inventory2OutlinedIcon />
                  }
                  text={`Stock: ${frame.stock}`}
                />

                <IconLine
                  icon={
                    <PaymentsOutlinedIcon />
                  }
                  text={`Price: ₹${frame.srp}`}
                />

                <IconLine
                  icon={
                    <WarehouseOutlinedIcon />
                  }
                  text={
                    frame.warehouseLocation
                  }
                />
              </SideCard>

              {/* CATEGORY */}
              <SideCard title="Category Details">
                <InfoLine
                  label="Category"
                  value={
                    category?.categoryName
                  }
                />

                <InfoLine
                  label="Category Code"
                  value={
                    category?.categoryCode
                  }
                />

                <InfoLine
                  label="Category Type"
                  value={
                    category?.categoryType
                  }
                />

                <InfoLine
                  label="Priority"
                  value={
                    category?.priorityLevel
                  }
                />
              </SideCard>

              {/* VARIANTS */}
              <SideCard title="Variants">
                <Grid
                  container
                  spacing={2}
                >
                  {variants.map(
                    (
                      variant
                    ) => (
                      <Grid
                        key={
                          variant.id
                        }
                        size={{
                          xs: 12,
                        }}
                      >
                        <Card
                          sx={{
                            p: 2,
                            borderRadius:
                              "14px",

                            border:
                              "1px solid #E2E8F0",

                            boxShadow:
                              "none",
                          }}
                        >
                          <Stack
                            direction="row"
                            sx={{justifyContent:"space-between", alignItems:"center"}}
                          >
                            <Typography
                              sx={{
                                fontWeight: 700,
                              }}
                            >
                              {
                                variant.color
                              }
                            </Typography>

                            <Chip
                              label={`${variant.stock} pcs`}
                              size="small"
                              sx={{
                                bgcolor:
                                  variant.stock >
                                  0
                                    ? "#DCFCE7"
                                    : "#FEE2E2",

                                color:
                                  variant.stock >
                                  0
                                    ? "#15803D"
                                    : "#B91C1C",

                                fontWeight: 700,
                              }}
                            />
                          </Stack>

                          <Typography
                            sx={{
                              mt: 1,
                              color:
                                "#64748B",

                              fontSize: 13,
                            }}
                          >
                            Size:{" "}
                            {
                              variant.size
                            }
                          </Typography>

                          <Typography
                            sx={{
                              mt: 1,
                              fontWeight: 700,

                              color:
                                "#3B82F6",
                            }}
                          >
                            ₹
                            {
                              variant.price
                            }
                          </Typography>
                        </Card>
                      </Grid>
                    )
                  )}
                </Grid>
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

//         border:
//           "1px solid #E2E8F0",

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

//         borderBottom:
//           "1px solid #E2E8F0",
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