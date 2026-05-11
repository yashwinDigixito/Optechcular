import {
    Box,
    Card,
    Chip,
    Typography,
} from "@mui/material";

import {
    brands,
} from "@/assets/genericdata";

export default async function BrandViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const brand =
    brands.find(
      (item) =>
        item.id === id
    );

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",

        background:
          "#F4F7FE",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "flex-start",
      }}
    >
      <Card
        sx={{
          width: "100%",

          maxWidth:
            "700px",

          borderRadius:
            "24px",

          p: 4,

          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.08)",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize:
              "34px",

            fontWeight: 700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Brand Details
        </Typography>

        {/* BRAND NAME */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color:
                "#64748B",

              mb: 1,

              fontWeight: 600,
            }}
          >
            Brand Name
          </Typography>

          <Typography
            sx={{
              fontSize:
                "24px",

              fontWeight: 700,

              color:
                "#2563EB",
            }}
          >
            {
              brand?.brandName
            }
          </Typography>

        </Box>

        {/* CATEGORY */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color:
                "#64748B",

              mb: 1,

              fontWeight: 600,
            }}
          >
            Category
          </Typography>

          <Typography
            sx={{
              fontSize:
                "18px",

              fontWeight: 600,
            }}
          >
            {
              brand?.category
            }
          </Typography>

        </Box>

        {/* BRAND GROUP */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color:
                "#64748B",

              mb: 1,

              fontWeight: 600,
            }}
          >
            Brand Group
          </Typography>

          <Typography
            sx={{
              fontSize:
                "18px",

              fontWeight: 600,
            }}
          >
            {
              brand?.brandGroup
            }
          </Typography>

        </Box>

        {/* STATUS */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color:
                "#64748B",

              mb: 1,

              fontWeight: 600,
            }}
          >
            Status
          </Typography>

          <Chip
            label={
              brand?.status
            }
            sx={{
              background:
                brand?.status ===
                "Active"
                  ? "#DCFCE7"
                  : "#FEE2E2",

              color:
                brand?.status ===
                "Active"
                  ? "#16A34A"
                  : "#DC2626",

              fontWeight: 700,
            }}
          />

        </Box>

        {/* CREATED DATE */}
        <Box>

          <Typography
            sx={{
              color:
                "#64748B",

              mb: 1,

              fontWeight: 600,
            }}
          >
            Created On
          </Typography>

          <Typography
            sx={{
              fontSize:
                "18px",

              fontWeight: 600,
            }}
          >
            {
              brand?.createdOn
            }
          </Typography>

        </Box>

      </Card>
    </Box>
  );
}