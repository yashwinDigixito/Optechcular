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

    // Green
    case "Completed":
    case "Active":
      return {
        bg: "#DCFCE7",
        color: "#16A34A",
      };

    // Yellow
    case "Pending":
      return {
        bg: "#FEF3C7",
        color: "#D97706",
      };

    // Red
    case "Cancelled":
    case "Inactive":
      return {
        bg: "#FEE2E2",
        color: "#DC2626",
      };

    // Gray
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