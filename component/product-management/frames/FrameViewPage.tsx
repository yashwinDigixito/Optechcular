import {
    Box,
    Card,
    Chip,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

import {
    frames,
} from "@/assets/genericdata";

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
          maxWidth: "950px",
          borderRadius: "24px",
          p: 4,

          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.08)",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 700,
            mb: 4,
          }}
        >
          Frame Details
        </Typography>

        <Grid
          container
          spacing={4}
        >
          {/* PRODUCT NAME */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Product Name
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#2563EB",
              }}
            >
              {
                frame?.productName
              }
            </Typography>

          </Grid>

          {/* SKU */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              SKU
            </Typography>

            <Chip
              label={frame?.sku}
              sx={{
                background:
                  "#EFF6FF",

                color:
                  "#2563EB",

                fontWeight: 700,
              }}
            />

          </Grid>

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
                fontWeight: 600,
              }}
            >
              {frame?.brand}
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

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.category}
            </Typography>

          </Grid>

          {/* MATERIAL */}
          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Material
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.material}
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* SECOND SECTION */}
        <Grid
          container
          spacing={4}
        >
          {/* RIM SHAPE */}
          <Grid size={{ xs: 12, md: 3 }}>

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

          {/* COLOR */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Color
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {frame?.color}
            </Typography>

          </Grid>

          {/* SIZE */}
          <Grid size={{ xs: 12, md: 3 }}>

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

          {/* PRICE */}
          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              sx={{
                color: "#64748B",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Price
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                color: "#16A34A",
              }}
            >
              ₹ {frame?.price}
            </Typography>

          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* THIRD SECTION */}
        <Grid
          container
          spacing={4}
        >
          {/* STOCK */}
          <Grid size={{ xs: 12, md: 4 }}>

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
              label={`${frame?.stock} pcs`}
              sx={{
                background:
                  frame &&
                  frame.stock > 0
                    ? "#DCFCE7"
                    : "#FEE2E2",

                color:
                  frame &&
                  frame.stock > 0
                    ? "#16A34A"
                    : "#DC2626",

                fontWeight: 700,
              }}
            />

          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 4 }}>

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

          {/* CREATED */}
          <Grid size={{ xs: 12, md: 4 }}>

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

          </Grid>

        </Grid>

      </Card>
    </Box>
  );
}