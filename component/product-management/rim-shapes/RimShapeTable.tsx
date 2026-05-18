"use client";

import { RimShape } from "@/assets/types";
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
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {
  rimShapes: RimShape[];
  setRimShapeData: React.Dispatch<React.SetStateAction<RimShape[]>>;
}

export default function RimShapeTable({
  rimShapes,
  setRimShapeData,
}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "shape",
      label: "Shape Name",
    },
    {
      key: "code",
      label: "Shape Code",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "applicableFor",
      label: "Applicable For",
    },
    {
      key: "products",
      label: "Products",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "createdOn",
      label: "Created On",
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
    setRimShapeData((prev) =>
      prev.map((shape) =>
        shape.id === id
          ? {
              ...shape,
              status: value as
                | "Active"
                | "Inactive",
            }
          : shape
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={rimShapes}
      renderCell={(shape, key) => {
        switch (key) {
          case "shape":
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
                  {shape.shapeName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: FONT_SIZE.SMALL,
                    color: "#64748B",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {shape.description}
                </Typography>
              </Box>
            );
          case "code":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {shape.rimShapeCode}
              </Typography>
            );
          case "category":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {shape.shapeCategory}
              </Typography>
            );
          case "applicableFor":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {shape.applicableFor}
              </Typography>
            );
          case "products":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#0F172A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {shape.totalProducts}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={shape.status}
                options={[
                  "Active",
                  "Inactive",
                ]}
                onChange={(value) => handleStatusChange(shape.id, value)}
              />
            );
          case "createdOn":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {shape.createdOn}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/products/rim-shapes/view/${shape.id}` )}
                onEdit={() => router.push(`/products/rim-shapes/edit/${shape.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}