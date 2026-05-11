import {
  Box,
  Card,
  Typography,
} from "@mui/material";

import {
  roles,
} from "@/assets/genericdata";

export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const role =
    roles.find(
      (item) =>
        item.id === id
    );

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 70px)",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        background: "#F1F5F9",

        pt: 15,
        px: 3,
      }}
    >
      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          width: "100%",
          maxWidth: "500px",

          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.08)",

          background: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#0F172A",
          }}
        >
          {role?.roleName}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: "18px",
            color: "#475569",
          }}
        >
          Status: {role?.status}
        </Typography>

        <Typography
          sx={{
            mt: 4,
            fontWeight: 700,
            fontSize: "24px",
            color: "#0F172A",
          }}
        >
          Permissions
        </Typography>

        {role?.permissions.map((item) => (
          <Typography
            key={item}
            sx={{
              mt: 2,
              fontSize: "18px",
              color: "#334155",
            }}
          >
            • {item}
          </Typography>
        ))}
      </Card>
    </Box>
  );
}