"use client";

import {
    Stack,
    Typography,
} from "@mui/material";

interface Props {

  label: string;

  middle?: string;

  value?: string | number;

  bold?: boolean;

  valueColor?: string;
}

export default function SummaryLine({
  label,
  middle,
  value,
  bold,
  valueColor,
}: Props) {

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent:
          "space-between",

        alignItems:
          "center",

        py: 1,
      }}
    >
      {/* LABEL */}
      <Typography
        sx={{
          flex: 1,

          color:
            "#334155",

          fontSize: 14,

          fontWeight:
            bold ? 700 : 500,
        }}
      >
        {label}
      </Typography>

      {/* MIDDLE */}
      {middle && (
        <Typography
          sx={{
            flex: 1,

            color:
              "#64748B",

            fontSize: 13,

            textAlign:
              "center",
          }}
        >
          {middle}
        </Typography>
      )}

      {/* VALUE */}
      <Typography
        sx={{
          minWidth: 120,

          textAlign:
            "right",

          color:
            valueColor ||
            "#0F172A",

          fontSize: 14,

          fontWeight:
            bold ? 700 : 600,
        }}
      >
        {value || "N/A"}
      </Typography>

    </Stack>
  );
}