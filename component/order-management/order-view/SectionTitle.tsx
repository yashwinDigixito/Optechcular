"use client";

import {
    Typography,
} from "@mui/material";

interface Props {

  title: string;
}

export default function SectionTitle({
  title,
}: Props) {

  return (
    <Typography
      sx={{
        fontSize: 18,

        fontWeight: 700,

        color:
          "#0F172A",

        mb: 2,
      }}
    >
      {title}
    </Typography>
  );
}