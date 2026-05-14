"use client";

import {
  useState,
} from "react";

import EditIcon from "@mui/icons-material/Edit";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
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

  const [
    anchorEl,
    setAnchorEl,
  ] = useState<
    null | HTMLElement
  >(null);

  const [
    selectedOrderId,
    setSelectedOrderId,
  ] = useState<
    string | null
  >(null);

  const handleMenuOpen = (
    event:
      React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedOrderId(
      id
    );
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedOrderId(
      null
    );
  };

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
    <TableContainer
      sx={{
        borderRadius:
          "20px",

        overflow:
          "hidden",

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

              borderBottom:
                "1px solid #E2E8F0",
            }}
          >
            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Order No
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Customer
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Product
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Amount
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Payment
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Order Status
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Date
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Actions
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {orders.map(
            (
              order
            ) => (

              <TableRow
                key={
                  order.id
                }
                hover
                sx={{
                  "&:hover":
                    {
                      background:
                        "#F8FAFC",
                    },
                }}
              >
                {/* ORDER NO */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#2563EB",

                      fontSize:
                        "15px",
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
                      fontWeight:
                        600,
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
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,
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

                </TableCell>

                {/* PAYMENT */}
                <TableCell align="center">

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
                        700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={
                      order.status
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        order.id,
                        e.target.value
                      )
                    }
                    sx={{
                      minWidth:
                        "130px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        600,

                      background:
                        order.status ===
                        "Completed"

                          ? "#DCFCE7"

                          : order.status ===
                            "Pending"

                          ? "#FEF3C7"

                          : order.status ===
                            "Cancelled"

                          ? "#FEE2E2"

                          : "#EDE9FE",

                      color:
                        order.status ===
                        "Completed"

                          ? "#15803D"

                          : order.status ===
                            "Pending"

                          ? "#B45309"

                          : order.status ===
                            "Cancelled"

                          ? "#DC2626"

                          : "#7C3AED",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            order.status ===
                            "Completed"

                              ? "#15803D"

                              : order.status ===
                                "Pending"

                              ? "#B45309"

                              : order.status ===
                                "Cancelled"

                              ? "#DC2626"

                              : "#7C3AED",
                        },
                    }}
                  >
                    <MenuItem value="Completed">
                      Completed
                    </MenuItem>

                    <MenuItem value="Pending">
                      Pending
                    </MenuItem>

                    <MenuItem value="Cancelled">
                      Cancelled
                    </MenuItem>

                    <MenuItem value="Refunded">
                      Refunded
                    </MenuItem>

                  </Select>

                </TableCell>

                {/* DATE */}
                <TableCell align="center">

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
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        order.id
                      )
                    }
                    sx={{
                      background:
                        "#F8FAFC",

                      width: 38,

                      height: 38,

                      "&:hover":
                        {
                          background:
                            "#E2E8F0",
                        },
                    }}
                  >
                    <MoreVertIcon
                      sx={{
                        color:
                          "#64748B",
                      }}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={
                      anchorEl
                    }
                    open={
                      Boolean(
                        anchorEl
                      ) &&
                      selectedOrderId ===
                        order.id
                    }
                    onClose={
                      handleMenuClose
                    }
                    slotProps={{
                      paper: {
                        sx: {
                          borderRadius:
                            "14px",

                          minWidth:
                            "120px",

                          boxShadow:
                            "0px 10px 30px rgba(15,23,42,0.08)",
                        },
                      },
                    }}
                  >
                    {/* VIEW */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/orders/view/${order.id}`
                        );

                        handleMenuClose();
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon
                        sx={{
                          mr: 1,

                          color:
                            "#2563EB",
                        }}
                      />

                      View
                    </MenuItem>

                    {/* EDIT */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/orders/edit/${order.id}`
                        );

                        handleMenuClose();
                      }}
                    >
                      <EditIcon
                        sx={{
                          mr: 1,

                          color:
                            "#0F172A",
                        }}
                      />

                      Edit
                    </MenuItem>

                  </Menu>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}