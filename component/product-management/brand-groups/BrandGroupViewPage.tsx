import {
    Box,
    Card,
    Chip,
    Typography,
} from "@mui/material";

import {
    brandGroups,
} from "@/assets/genericdata";

export default async function BrandGroupViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const group =
    brandGroups.find(
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
          Brand Group Details
        </Typography>

        {/* GROUP NAME */}
        <Box sx={{ mb: 3 }}>

          <Typography
            sx={{
              color: "#64748B",
              mb: 1,
              fontWeight: 600,
            }}
          >
            Group Name
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            {group?.groupName}
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
            {group?.description}
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
            label={group?.status}
            sx={{
              background:
                group?.status ===
                "Active"
                  ? "#DCFCE7"
                  : "#FEE2E2",

              color:
                group?.status ===
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
            {group?.createdOn}
          </Typography>

        </Box>

      </Card>
    </Box>
  );
}