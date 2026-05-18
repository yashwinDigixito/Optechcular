"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import { PurchaseOrder } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  purchaseOrders: PurchaseOrder[];
  setStoreData: React.Dispatch<React.SetStateAction<PurchaseOrder[]>>;
}

export default function PurchaseOrderTable({ purchaseOrders, setStoreData }: Props) {
  const router = useRouter();

  const columns = [
    {
      key: "purchaseNo",
      label: "Purchase No & Date",
    },
    {
      key: "vendorName",
      label: "Vendor Name",
    },
    {
      key: "productName",
      label: "Product & Category",
    },
    {
      key: "grandTotal",
      label: "Grand Total (₹)",
    },
    {
      key: "paymentStatus",
      label: "Payment Status",
      align: "center" as const,
    },
    {
      key: "status",
      label: "PO Status",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];

  // Handles inline payment status modification
  const handlePaymentStatusChange = (id: string, value: string) => {
    setStoreData((prev) =>
      prev.map((po) =>
        po.id === id
          ? {
              ...po,
              paymentStatus: value,
            }
          : po
      )
    );
  };

  // Handles inline PO status modification
  const handlePOStatusChange = (id: string, value: string) => {
    setStoreData((prev) =>
      prev.map((po) =>
        po.id === id
          ? {
              ...po,
              status: value,
              purchaseStatus: value, // keeping both statuses synchronized
            }
          : po
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={purchaseOrders}
      renderCell={(po, key) => {
        switch (key) {
          case "purchaseNo":
            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: themeConfig.colors.primary,
                    fontSize: "15px",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {po.purchaseNo}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  {po.orderDate || "N/A"}
                </Typography>
              </Box>
            );
          case "vendorName":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  color: "#334155",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {po.vendorName || po.supplierName || "N/A"}
              </Typography>
            );
          case "productName":
            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: "#0F172A",
                    fontSize: "14px",
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  {po.productName}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  {po.category  || "Frame"}
                </Typography>
              </Box>
            );
          case "grandTotal":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: themeConfig.colors.success,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ {(po.grandTotal || 0).toLocaleString()}
              </Typography>
            );
          case "paymentStatus":
            return (
              <StatusSelect
                value={po.paymentStatus}
                options={["Paid", "Pending", "Partial"]}
                onChange={(val) => handlePaymentStatusChange(po.id, val)}
              />
            );
          case "status":
            return (
              <StatusSelect
                value={po.status}
                options={["Pending", "Processing", "Delivered", "Received"]}
                onChange={(val) => handlePOStatusChange(po.id, val)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/purchase-orders/view/${po.id}`)}
                onEdit={() => router.push(`/purchase-orders/edit/${po.id}`)}
              />
            );
          default:
            return null;
        }
      }}
    />
  );
}