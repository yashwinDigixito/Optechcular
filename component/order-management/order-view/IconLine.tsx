"use client";

import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import {
    ReactNode,
} from "react";

interface Props {

  icon: ReactNode;

  text?: string | number;
}

export default function IconLine({
  icon,
  text,
}: Props) {

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mb: 1.5,

        alignItems:
          "center",
      }}
    >
      <Box
        sx={{
          display: "flex",

          color:
            "#64748B",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color:
            "#334155",

          fontSize: 14,
        }}
      >
        {text || "N/A"}
      </Typography>

    </Stack>
  );
}