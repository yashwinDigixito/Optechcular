"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { Order } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  orders: Order[];
  setOrderData: React.Dispatch<
    React.SetStateAction<Order[]>
  >;
}
export default function OrderTable({ orders, setOrderData}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "orderNo",
      label: "Order No",
    },
    {
      key: "customer",
      label: "Customer",
    },
    {
      key: "product",
      label: "Product",
    },
    {
      key: "amount",
      label: "Amount",
      align: "center" as const,
    },
    {
      key: "payment",
      label: "Payment",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Order Status",
      align: "center" as const,
    },
    {
      key: "date",
      label: "Date",
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
    setOrderData((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status: value,
            }
          : order
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={orders}
      renderCell={( order, key ) => {
        switch (key) {
          case "orderNo":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#2563EB",
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { order.orderNo }
              </Typography>
            );
          case "customer":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { order.customerName }
              </Typography>
            );
          case "product":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { order.productName }
              </Typography>
            );
          case "amount":
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
                { new Intl.NumberFormat( "en-IN" ).format( order.totalAmount ) }
              </Typography>
            );
          case "payment":
            return (
              <Chip
                label={ order.paymentStatus }
                size="small"
                sx={{
                  background:
                    order.paymentStatus ===
                    "Paid"
                      ? "#DCFCE7"
                      : order.paymentStatus ===
                        "Pending"
                      ? "#FEF3C7"
                      : "#EDE9FE",
                  color:
                    order.paymentStatus ===
                    "Paid"
                      ? "#15803D"
                      : order.paymentStatus ===
                        "Pending"
                      ? "#B45309"
                      : "#7C3AED",
                  fontWeight: FONT_WEIGHT.BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "status":
            return (
              <StatusSelect
                value={ order.status || "" }
                options={[
                  "Completed",
                  "Pending",
                  "Cancelled",
                  "Refunded",
                ]}
                onChange={(value) => handleStatusChange( order.id, value )}
              />
            );
          case "date":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { order.orderDate }
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/orders/view/${order.id}` )}
                onEdit={() => router.push( `/orders/edit/${order.id}` )}
              />
            );
          default:return null;
        }
      }}
    />
  );
}