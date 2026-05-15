"use client";

import CommonTable from "@/component/common/table/CommonTable";

import StatusSelect from "@/component/common/table/StatusSelect";

import TableActions from "@/component/common/table/TableActions";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import {
  Chip,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface OrderType {

  id: string;

  orderNo: string;

  customerName: string;

  email: string;

  phone: string;

  salesPerson: string;

  orderSource: string;

  productType: string;

  productName: string;

  productSku: string;

  productVariant: string;

  quantity: number;

  productPrice: number;

  status: string;

  paymentStatus: string;

  deliveryStatus: string;

  orderDate: string;

  subtotal: number;

  discount: number;

  tax: number;

  shippingCharge: number;

  totalAmount: number;

  paymentMethod: string;

  transactionId: string;

  paidAmount: number;

  paymentDue: number;

  shippingPartner: string;

  trackingNo: string;

  estimatedDeliveryDate: string;

  shippingAddress: string;

  billingAddress: string;

  notes: string;
}

interface Props {

  orders:
    OrderType[];

  setOrderData:
    React.Dispatch<
      React.SetStateAction<
        OrderType[]
      >
    >;
}

export default function OrderTable({
  orders,
  setOrderData,
}: Props) {

  const router =
    useRouter();

  /* TABLE COLUMNS */
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

  /* STATUS CHANGE */
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

      renderCell={(
        order,
        key
      ) => {

        switch (key) {

          /* ORDER NO */
          case "orderNo":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  color:
                    "#2563EB",

                  fontSize:
                    "15px",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  order.orderNo
                }
              </Typography>

            );

          /* CUSTOMER */
          case "customer":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.SEMI_BOLD,

                  color:
                    "#0F172A",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,
                }}
              >
                {
                  order.customerName
                }
              </Typography>

            );

          /* PRODUCT */
          case "product":

            return (

              <Typography
                sx={{
                  color:
                    "#475569",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,
                }}
              >
                {
                  order.productName
                }
              </Typography>

            );

          /* AMOUNT */
          case "amount":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  color:
                    "#0F172A",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,
                }}
              >
                ₹{" "}
                {
                  new Intl.NumberFormat(
                    "en-IN"
                  ).format(
                    order.totalAmount
                  )
                }
              </Typography>

            );

          /* PAYMENT */
          case "payment":

            return (

              <Chip
                label={
                  order.paymentStatus
                }

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

                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  borderRadius:
                    "8px",

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              />

            );

          /* STATUS */
          case "status":

            return (

              <StatusSelect
                value={
                  order.status
                }

                options={[
                  "Completed",
                  "Pending",
                  "Cancelled",
                  "Refunded",
                ]}

                onChange={(value) =>
                  handleStatusChange(
                    order.id,
                    value
                  )
                }
              />

            );

          /* DATE */
          case "date":

            return (

              <Typography
                sx={{
                  color:
                    "#64748B",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,
                }}
              >
                {
                  order.orderDate
                }
              </Typography>

            );

          /* ACTIONS */
          case "actions":

            return (

              <TableActions
                onView={() =>
                  router.push(
                    `/orders/view/${order.id}`
                  )
                }

                onEdit={() =>
                  router.push(
                    `/orders/edit/${order.id}`
                  )
                }
              />

            );

          default:
            return null;
        }
      }}
    />
  );
}