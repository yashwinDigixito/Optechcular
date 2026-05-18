"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { Inventory } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  inventories: Inventory[];
  setInventoryData: React.Dispatch< React.SetStateAction< Inventory[] >>;
}

export default function InventoryTable({ inventories, setInventoryData}: Props) {
  const router = useRouter();
  const columns = [
    {
      key: "product",
      label: "Product",
    },
    {
      key: "sku",
      label: "SKU",
    },
    {
      key: "barcode",
      label: "Barcode",
    },
    {
      key: "brand",
      label: "Brand",
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
    setInventoryData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: value,
            }
          : item
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={inventories}
      renderCell={( item, key ) => {
        switch (key) {
          case "product":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#2563EB",
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { item.productName }
              </Typography>
            );
          case "sku":
            return (
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#475569",
                }}
              >
                { item.sku }
              </Typography>
            );
          case "barcode":
            return (
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize:FONT_SIZE.TABLE_BODY,
                  color: "#475569",
                }}
              >
                { item.barcode }
              </Typography>
            );
          case "brand":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { item.brand }
              </Typography>
            );
          case "stock":
            return (
              <Chip
                label={item.stock}
                sx={{
                  background:
                    item.stock === 0
                      ? "#FEE2E2"
                      : item.stock <=
                        item.minStock
                      ? "#FEF3C7"
                      : "#DCFCE7",
                  color:
                    item.stock === 0
                      ? "#DC2626"
                      : item.stock <=
                        item.minStock
                      ? "#B45309"
                      : "#15803D",
                  fontWeight: FONT_WEIGHT.BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "price":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                ₹{" "}
                {new Intl.NumberFormat("en-IN").format(item.price)}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={item.status}
                options={["In Stock", "Low Stock","Out of Stock"]}
                onChange={(value) => handleStatusChange( item.id, value ) }
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/inventory/view/${item.id}` ) }
                onEdit={() => router.push( `/inventory/edit/${item.id}` ) }
              />
            );
          default: return null;
        }
      }}
    />
  );
}