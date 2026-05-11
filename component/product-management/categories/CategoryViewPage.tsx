import {
    Box,
    Card,
    Chip,
    Typography,
} from "@mui/material";

import {
    categories,
} from "@/assets/genericdata";

export default async function CategoryViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const category =
    categories.find(
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
          Category Details
        </Typography>

        {/* CATEGORY NAME */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Category Name
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            {
              category?.categoryName
            }
          </Typography>

        </Box>

        {/* DESCRIPTION */}
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
            {
              category?.description
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
              category?.status
            }
            sx={{
              background:
                category?.status ===
                "Active"
                  ? "#DCFCE7"
                  : "#FEE2E2",

              color:
                category?.status ===
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
              category?.createdOn
            }
          </Typography>

        </Box>

      </Card>
    </Box>
  );
}