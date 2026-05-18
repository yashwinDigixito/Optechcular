"use client";

import { ContactLens } from "@/assets/types";
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
  contactLenses: ContactLens[];
  setContactLensData: React.Dispatch<
    React.SetStateAction<ContactLens[]>
  >;
}

export default function ContactLensTable({
  contactLenses,
  setContactLensData,
}: Props) {

  const router = useRouter();

  const columns = [
    {
      key: "product",
      label: "Product",
    },
    {
      key: "brand",
      label: "Brand",
    },
    {
      key: "powerType",
      label: "Power Type",
    },
    {
      key: "modality",
      label: "Modality",
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
    setContactLensData((prev) =>
      prev.map((lens) =>
        lens.id === id
          ? {
              ...lens,
              status: value as
                | "Active"
                | "Inactive"
                | "Out of Stock",
            }
          : lens
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={contactLenses}
      renderCell={(lens, key) => {
        switch (key) {
          case "product":
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
                  {lens.lensName}
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
                {lens.brand}
              </Typography>
            );
          case "powerType":
            return (
              <Chip
                label={lens.powerType}
                sx={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "modality":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {lens.modality}
              </Typography>
            );
          case "stock":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color:
                    lens.stock <= 5
                      ? "#EA580C"
                      : "#16A34A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {lens.stock}
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
                ₹{lens.sellingPrice.toLocaleString()}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={lens.status}
                options={[
                  "Active",
                  "Inactive",
                  "Out of Stock",
                ]}
                onChange={(value) =>
                  handleStatusChange(lens.id, value)
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
                {lens.createdOn}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/products/contact-lens/view/${lens.id}`)}
                onEdit={() => router.push(`/products/contact-lens/edit/${lens.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}