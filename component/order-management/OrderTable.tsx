"use client";

import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Box,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
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

  orders: OrderType[];

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

  const handleToggleStatus = (
    id: string
  ) => {

    setOrderData((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,

              status:
                order.status ===
                "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : order
      )
    );
  };

  return (
    <TableContainer
      sx={{
        borderRadius:
          "24px",

        border:
          "1px solid #E2E8F0",

        overflow: "hidden",

        background:
          "#FFFFFF",
      }}
    >
      <Table
        sx={{
          "& .MuiTableCell-root":
            {
              py: 2,

              borderColor:
                "#F1F5F9",
            },
        }}
      >
        {/* TABLE HEAD */}
        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Order No
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Customer
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Product
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Amount
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Payment
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Order Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Order Date
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {orders.map(
            (order) => (

              <TableRow
                key={order.id}
                hover
                sx={{
                  "&:hover": {
                    background:
                      "#F8FAFC",
                  },
                }}
              >
                {/* ORDER NO */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,

                      color:
                        "#2563EB",
                    }}
                  >
                    {
                      order.orderNo
                    }
                  </Typography>

                </TableCell>

                {/* CUSTOMER */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {
                      order.customerName
                    }
                  </Typography>

                </TableCell>

                {/* PRODUCT */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",
                    }}
                  >
                    {
                      order.productName
                    }
                  </Typography>

                </TableCell>

                {/* AMOUNT */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    ₹
                    {
                      order.totalAmount
                    }
                  </Typography>

                </TableCell>

                {/* PAYMENT STATUS */}
                <TableCell>

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

                          : "#FEE2E2",

                      color:
                        order.paymentStatus ===
                        "Paid"

                          ? "#15803D"

                          : order.paymentStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#DC2626",

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* ORDER STATUS */}
                <TableCell>

                  <Chip
                    label={
                      order.status
                    }
                    size="small"
                    sx={{
                      background:
                        order.status ===
                        "Completed"

                          ? "#DCFCE7"

                          : order.status ===
                            "Pending"

                          ? "#DBEAFE"

                          : "#FEE2E2",

                      color:
                        order.status ===
                        "Completed"

                          ? "#15803D"

                          : order.status ===
                            "Pending"

                          ? "#2563EB"

                          : "#DC2626",

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* DATE */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#64748B",
                    }}
                  >
                    {
                      order.orderDate
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,
                    }}
                  >
                    {/* VIEW */}
                    <Tooltip title="View">

                      <IconButton
                        sx={{
                          background:
                            "#EFF6FF",

                          "&:hover":
                            {
                              background:
                                "#DBEAFE",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/orders/view/${order.id}`
                          )
                        }
                      >
                        <RemoveRedEyeOutlinedIcon
                          sx={{
                            color:
                              "#2563EB",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                    {/* EDIT */}
                    <Tooltip title="Edit">

                      <IconButton
                        sx={{
                          background:
                            "#F8FAFC",

                          "&:hover":
                            {
                              background:
                                "#E2E8F0",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/orders/edit/${order.id}`
                          )
                        }
                      >
                        <EditIcon
                          sx={{
                            color:
                              "#0F172A",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                    {/* STATUS */}
                    <Tooltip title="Change Status">

                      <IconButton
                        sx={{
                          background:
                            "#FEF2F2",
                        }}
                        onClick={() =>
                          handleToggleStatus(
                            order.id
                          )
                        }
                      >
                        <BlockIcon
                          sx={{
                            color:
                              "#DC2626",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                  </Box>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}