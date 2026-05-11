import {
    Box,
    Card,
    Chip,
    Typography,
} from "@mui/material";

import {
    rimShapes,
} from "@/assets/genericdata";

export default async function RimShapeViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const shape =
    rimShapes.find(
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
          maxWidth: "700px",
          borderRadius: "24px",
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 700,
            mb: 4,
          }}
        >
          Rim Shape Details
        </Typography>

        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Shape Name
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            {shape?.shapeName}
          </Typography>

        </Box>

        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Description
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {shape?.description}
          </Typography>

        </Box>

        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Status
          </Typography>

          <Chip
            label={shape?.status}
            sx={{
              background:
                shape?.status ===
                "Active"
                  ? "#DCFCE7"
                  : "#FEE2E2",

              color:
                shape?.status ===
                "Active"
                  ? "#16A34A"
                  : "#DC2626",

              fontWeight: 700,
            }}
          />

        </Box>

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
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {shape?.createdOn}
          </Typography>

        </Box>

      </Card>
    </Box>
  );
}