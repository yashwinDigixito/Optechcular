"use client";

import { Chip } from "@mui/material";

interface StatusChipProps {
  status: string;
}

export default function StatusChip({
  status,
}: StatusChipProps) {

  const getStatusStyles = () => {
    switch (status) {

      case "Completed":
        return {
          bg: "#DCFCE7",
          color: "#16A34A",
        };

      case "Pending":
        return {
          bg: "#FEF3C7",
          color: "#D97706",
        };

      case "Cancelled":
        return {
          bg: "#FEE2E2",
          color: "#DC2626",
        };

      case "Refunded":
        return {
          bg: "#E2E8F0",
          color: "#475569",
        };

      default:
        return {
          bg: "#E2E8F0",
          color: "#475569",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        backgroundColor: styles.bg,
        color: styles.color,
        fontWeight: 700,
        borderRadius: "8px",
        px: 1,

        "& .MuiChip-label": {
          px: 1,
        },
      }}
    />
  );
}