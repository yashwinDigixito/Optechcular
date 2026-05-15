import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
export const tableStyles = {
  container: {
    borderRadius: "20px",
    overflow: "hidden",
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
  },
  headRow: {
    background: "#F8FAFC",
    borderBottom: "1px solid #E2E8F0",
  },
  headCell: {
    fontWeight: FONT_WEIGHT.BOLD,
    color: "#0F172A",
    fontFamily: FONT_FAMILY.TABLE_HEADING,
    fontSize: FONT_SIZE.SUB_HEADING,
  },
  bodyCell: {
    fontSize: FONT_SIZE.TABLE_BODY,
    fontFamily: FONT_FAMILY.TABLE_BODY,
    color: "#475569",
  },
  row: {
    "&:hover": {
      background: "#F8FAFC",
    },
  },
  table: {
    "& .MuiTableCell-root": {
      py: 2.2,
      borderColor: "#F1F5F9",
    },
  },
};