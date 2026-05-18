"use client";

import { Category } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface CategoryTableProps {
  categories: Category[];
  setCategoryData: React.Dispatch<React.SetStateAction<Category[]>>;
}

export default function CategoryTable({
  categories,
  setCategoryData,
}: CategoryTableProps) {

  const router = useRouter();

  const columns = [
    {
      key: "category",
      label: "Category",
    },
    {
      key: "categoryType",
      label: "Category Type",
    },
    {
      key: "parentCategory",
      label: "Parent Category",
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

    setCategoryData((prev) =>
      prev.map((category) =>
        category.id === id
          ? {
              ...category,
              status: value as "Active" | "Inactive",
            }
          : category
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={categories}
      renderCell={(category, key) => {
        switch (key) {
          case "category":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#2563EB",
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {category.categoryName}
              </Typography>
            );
          case "categoryType":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {category.categoryType}
              </Typography>
            );
          case "parentCategory":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {category.parentCategory || "-"}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={category.status}
                options={[
                  "Active",
                  "Inactive",
                ]}
                onChange={(value) =>
                  handleStatusChange(category.id, value)
                }
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
                {category.createdOn}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/products/categories/view/${category.id}` ) }
                onEdit={() => router.push(`/products/categories/edit/${category.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}