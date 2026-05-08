"use client";

import {
    Box,
} from "@mui/material";

export default function TableContainerCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow:
          "0px 6px 24px rgba(15,23,42,0.06)",
      }}
    >
      {children}
    </Box>
  );
}