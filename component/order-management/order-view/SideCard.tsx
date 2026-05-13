"use client";

import {
    Card,
    Typography,
} from "@mui/material";

import {
    ReactNode,
} from "react";

interface Props {

  title: string;

  children: ReactNode;
}

export default function SideCard({
  title,
  children,
}: Props) {

  return (
    <Card
      sx={{
        p: 2.5,

        borderRadius:
          "16px",

        boxShadow:
          "none",

        border:
          "1px solid #E2E8F0",

        bgcolor:
          "#FFFFFF",

        transition:
          "0.2s ease",

        "&:hover": {
          boxShadow:
            "0px 8px 24px rgba(15,23,42,0.08)",
        },
      }}
    >
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

      {children}
    </Card>
  );
}