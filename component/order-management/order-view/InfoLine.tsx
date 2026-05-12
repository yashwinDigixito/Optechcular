"use client";

import {
    Stack,
    Typography,
} from "@mui/material";

interface Props {

  label: string;

  value?: string | number;
}

export default function InfoLine({
  label,
  value,
}: Props) {

  return (
    <Stack
      direction="row"
      sx={{
        py: 1.5,

        justifyContent:
          "space-between",
      }}
    >
      <Typography
        sx={{
          color:
            "#64748B",

          fontSize: 14,

          fontWeight: 500,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          color:
            "#0F172A",

          fontSize: 14,

          fontWeight: 700,

          textAlign:
            "right",
        }}
      >
        {value || "N/A"}
      </Typography>

    </Stack>
  );
}