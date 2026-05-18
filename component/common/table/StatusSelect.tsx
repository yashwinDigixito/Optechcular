"use client";
import { FONT_FAMILY, FONT_WEIGHT } from "@/assets/constants";
import {
  MenuItem,
  Select,
} from "@mui/material";

interface Props {
  value: string;
  options: string[];
  onChange: (
    value: string
  ) => void;
  minWidth?: string;
}
export default function StatusSelect({
  value,
  options,
  onChange,
  minWidth = "110px",
}: Props) {
  const getColors = () => {
    switch (value) {
      case "Active":
      case "Approved":
      case "Completed":
      case "Paid":
      case "Sent":
      case "In Stock":
        return {
          bg: "#DCFCE7",
          color: "#15803D",
        };
      case "Inactive":
      case "Rejected":
      case "Cancelled":
      case "Out of Stock":
        case "Overdue":
        return {
          bg: "#FEE2E2",
          color: "#DC2626",
        };
      case "Pending":
      case "Low Stock":
      case "Partial":
      case "Suspended":
      case "Draft":
        return {
          bg: "#FFF7ED",
          color: "#EA580C",
        };
      case "Refunded":
        return {
          bg: "#F3E8FF",
          color: "#7C3AED",
        };
      default:
        return {
          bg: "#EFF6FF",
          color: "#2563EB",
        };
    }
  };
  const colors = getColors();
  return (
    <Select
      size="small"
      value={value}
      onChange={(e) => onChange( e.target.value )
      }
sx={{
  minWidth,
  borderRadius: "8px",

  fontWeight:
    FONT_WEIGHT.BOLD,

  fontFamily:
    FONT_FAMILY.BODY,

  fontSize: "13px",

  background:
    colors.bg,

  color:
    colors.color,

  height: "38px",

  ".MuiOutlinedInput-notchedOutline":
    {
      border: "none",
    },

  ".MuiSelect-select": {
    py: 1,
    px: 1.5,

    display: "flex",
    alignItems: "center",

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  ".MuiSelect-icon": {
    color: colors.color,
    right: "8px",
  },
}}
    >
      {options.map(
        (option) => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        )
      )}
    </Select>
  );
}