import {
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { frames, frameVariants } from "@/assets/genericdata";

import StatusChip from "@/component/common/StatusChip";

export default async function FrameViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const frame =
    frames.find(
      (item) =>
        item.id === id
    );
    const variants = frameVariants.filter(
    (item) =>  item.frameId === id
    );
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background: "#F4F7FE",

        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "1100px",

          borderRadius:
            "24px",

          p: 4,

          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.08)",
        }}
      >
        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 700,
            mb: 4,
          }}
        >
          Frame Details
        </Typography>

        {/* BASIC INFO */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Basic Information
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* BRAND */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Brand
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              {frame?.brand}
            </Typography>

          </Grid>

          {/* MODEL NO */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Model No
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.modelNo}
            </Typography>

          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Category
            </Typography>

            <Chip
              label={
                frame?.category
              }
              sx={{
                background:
                  "#EFF6FF",

                color:
                  "#2563EB",

                fontWeight: 700,
              }}
            />

          </Grid>

          {/* RIM TYPE */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Rim Type
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.rimType}
            </Typography>

          </Grid>

          {/* RIM SHAPE */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Rim Shape
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.rimShape}
            </Typography>

          </Grid>

          {/* TEMPLE MATERIAL */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Temple Material
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.templeMaterial
              }
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* SIZE DETAILS */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Size Details
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* SIZE */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Size
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.size}
            </Typography>

          </Grid>

          {/* DBL */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              DBL
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.dbl}
            </Typography>

          </Grid>

          {/* TEMPLE LENGTH */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Temple Length
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.templeLength
              }
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* COLORS */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Color Details
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* FRAME FRONT COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Frame Front Color
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.frameFrontColor
              }
            </Typography>

          </Grid>

          {/* TEMPLE COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Temple Color
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.templeColor
              }
            </Typography>

          </Grid>

          {/* LENS COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Lens Color
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.lensColor}
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* PRICING */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Pricing & Tax
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* SRP */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              SRP
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                color: "#16A34A",
              }}
            >
              ₹{" "}
              {frame?.srp.toLocaleString()}
            </Typography>

          </Grid>

          {/* TAX */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Tax %
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.tax}%
            </Typography>

          </Grid>

          {/* HSN CODE */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              HSN Code
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.hsnCode
              }
            </Typography>

          </Grid>

          {/* LOCATION PRICING */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Location Pricing
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.locationPricing
              }
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* INVENTORY */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Inventory Details
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* SKU */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              SKU Code
            </Typography>

            <Chip
              label={
                frame?.skuCode
              }
              sx={{
                background:
                  "#EFF6FF",

                color:
                  "#2563EB",

                fontWeight: 700,
              }}
            />

          </Grid>

          {/* BARCODE */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Barcode
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {
                frame?.barcode
              }
            </Typography>

          </Grid>

          {/* STOCK */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Stock
            </Typography>

            <Chip
              label={
                frame?.stock === 0
                  ? "Out of Stock"
                  : frame &&
                    frame.stock <= 5
                  ? "Low Stock"
                  : "In Stock"
              }
              sx={{
                background:
                  frame?.stock === 0
                    ? "#FEE2E2"
                    : frame &&
                      frame.stock <= 5
                    ? "#FEF3C7"
                    : "#DCFCE7",

                color:
                  frame?.stock === 0
                    ? "#DC2626"
                    : frame &&
                      frame.stock <= 5
                    ? "#D97706"
                    : "#16A34A",

                fontWeight: 700,
              }}
            />

          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Status
            </Typography>

            <StatusChip
              status={
                frame?.status || ""
              }
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* VARIANTS */}
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            mb: 3,
            color: "#2563EB",
          }}
        >
          Product Variants
        </Typography>
        
        <Grid
          container
          spacing={3}
        >
        
          {variants.map(
            (variant) => (
        
              <Grid
                key={variant.id}
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius:
                      "18px",
        
                    border:
                      "1px solid #E2E8F0",
        
                    boxShadow:
                      "none",
                  }}
                >
                  {/* COLOR */}
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    {variant.color}
                  </Typography>
        
                  {/* SIZE */}
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#64748B",
                    }}
                  >
                    Size:{" "}
                    {
                      variant.size
                    }
                  </Typography>
        
                  {/* SKU */}
                  <Chip
                    label={
                      variant.sku
                    }
                    sx={{
                      mt: 2,
        
                      background:
                        "#EFF6FF",
        
                      color:
                        "#2563EB",
        
                      fontWeight: 700,
                    }}
                  />
        
                  {/* PRICE */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 700,
                      color: "#16A34A",
                    }}
                  >
                    ₹{" "}
                    {variant.price.toLocaleString()}
                  </Typography>
        
                  {/* STOCK */}
                  <Chip
                    label={`${variant.stock} pcs`}
                    sx={{
                      mt: 2,
        
                      background:
                        variant.stock > 0
                          ? "#DCFCE7"
                          : "#FEE2E2",
        
                      color:
                        variant.stock > 0
                          ? "#16A34A"
                          : "#DC2626",
        
                      fontWeight: 700,
                    }}
                  />
        
                </Card>
        
              </Grid>
            )
          )}
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* CREATED DATE */}
        <Box>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Created On
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            {
              frame?.createdOn
            }
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}