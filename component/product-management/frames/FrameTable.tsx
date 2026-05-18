"use client";

import { Frame } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import {
  Box,
  Chip,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {
  frames: Frame[];
  setFrameData: React.Dispatch<
    React.SetStateAction<Frame[]>
  >;
}

export default function FrameTable({
  frames,
  setFrameData,
}: Props) {

  const router = useRouter();

  const columns = [
    {
      key: "frame",
      label: "Frame",
    },
    {
      key: "brand",
      label: "Brand",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "stock",
      label: "Stock",
      align: "center" as const,
    },
    {
      key: "price",
      label: "Price",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "created",
      label: "Created",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];

  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setFrameData((prev) =>
      prev.map((frame) =>
        frame.id === id
          ? {
              ...frame,
              status: value as
                | "Active"
                | "Inactive"
                | "Out of Stock",
            }
          : frame
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={frames}
      renderCell={(frame, key) => {
        switch (key) {
          case "frame":
            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: "#2563EB",
                    fontSize: "15px",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {frame.frameName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: FONT_SIZE.SMALL,
                    color: "#64748B",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {frame.frameId}
                </Typography>
              </Box>
            );
          case "brand":
            return (
              <Typography
                sx={{
                  color: "#0F172A",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {frame.brand}
              </Typography>
            );
          case "category":
            return (
              <Chip
                label={frame.category}
                sx={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "gender":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {frame.gender}
              </Typography>
            );
          case "stock":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  color:
                    frame.stockQuantity &&
                    frame.stockQuantity <=
                      (frame.lowStockLimit || 0)
                      ? "#EA580C"
                      : "#16A34A",
                }}
              >
                {frame.stockQuantity || 0}
              </Typography>
            );
          case "price":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#16A34A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹{frame.sellingPrice.toLocaleString()}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={frame.status}
                options={[
                  "Active",
                  "Inactive",
                  "Out of Stock",
                ]}
                onChange={(value) =>
                  handleStatusChange(frame.id, value)
                }
              />
            );
          case "created":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {frame.createdOn}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/products/frames/view/${frame.id}`)}
                onEdit={() => router.push(`/products/frames/edit/${frame.id}`)}
              />
            );

          default:
            return null;
        }
      }}
    />
  );
}