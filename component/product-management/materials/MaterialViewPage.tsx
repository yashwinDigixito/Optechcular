import {
    Box,
    Card,
    Chip,
    Typography,
} from "@mui/material";

import {
    materials,
} from "@/assets/genericdata";

export default async function MaterialViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const material =
    materials.find(
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
          maxWidth: "700px",
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
          Material Details
        </Typography>

        {/* MATERIAL NAME */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Material Name
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            {
              material?.materialName
            }
          </Typography>

        </Box>

        {/* APPLICABLE FOR */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Applicable For
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {
              material?.applicableFor
            }
          </Typography>

        </Box>

        {/* STATUS */}
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
            label={
              material?.status
            }
            sx={{
              background:
                material?.status ===
                "Active"
                  ? "#DCFCE7"
                  : "#FEE2E2",

              color:
                material?.status ===
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
            {
              material?.createdOn
            }
          </Typography>

        </Box>

      </Card>
    </Box>
  );
}