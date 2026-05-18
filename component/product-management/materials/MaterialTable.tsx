"use client";

import { Material } from "@/assets/types";
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
  materials: Material[];
  setMaterialData: React.Dispatch<
    React.SetStateAction<Material[]>
  >;
}

export default function MaterialTable({materials,setMaterialData}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "material",
      label: "Material",
    },
    {
      key: "applicableFor",
      label: "Applicable For",
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
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];

  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setMaterialData((prev) =>
      prev.map((material) =>
        material.id === id
          ? {
              ...material,
              status: value as
                | "Active"
                | "Inactive"
                | "Out of Stock",
            }
          : material
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={materials}
      renderCell={(material, key) => {
        switch (key) {
          case "material":
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
                  {material.materialName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: FONT_SIZE.SMALL,
                    color: "#64748B",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {material.materialCode}
                </Typography>
              </Box>
            );
          case "applicableFor":
            return (
              <Chip
                label={material.applicableFor}
                sx={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "stock":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color:
                    material.stockQuantity <=
                    material.minimumStockLevel
                      ? "#EA580C"
                      : "#16A34A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {material.stockQuantity}
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
                ₹{material.sellingPrice.toLocaleString()}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={material.status}
                options={[
                  "Active",
                  "Inactive",
                  "Out of Stock",
                ]}
                onChange={(value) => handleStatusChange(material.id, value)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/products/materials/view/${material.id}`)}
                onEdit={() => router.push(`/products/materials/edit/${material.id}`)}
              />
            );
          default:return null;
        }
      }}
    />
  );
}