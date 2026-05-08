"use client";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
  Order,
} from "@/assets/types";

import StatusChip from "@/component/common/StatusChip";
import TableContainerCard from "@/component/common/TableContainerCard";

interface OrderTableProps {
  orders: Order[];
}

export default function OrderTable({
  orders,
}: OrderTableProps) {

  const router = useRouter();

  return (
    <TableContainerCard>

      <TableContainer sx={{ px: 3 }}>

        <Table>

          {/* Header */}
          <TableHead>

            <TableRow
              sx={{
                background: "#F8FAFC",
              }}
            >
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Order
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Customer
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Date
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Product Type
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Price
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Status
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  Action
                </Typography>
              </TableCell>

              <TableCell />
            </TableRow>

          </TableHead>

          {/* Body */}
          <TableBody>

            {orders.map((order) => (

              <TableRow
                key={order.id}
                hover
                sx={{
                  cursor: "pointer",

                  transition: "0.2s",

                  "&:hover": {
                    background: "#F8FAFC",
                  },

                  "& .MuiTableCell-root": {
                    borderBottom:
                      "1px solid #F1F5F9",
                    py: 2.5,
                  },
                }}
              >

                {/* Order */}
                <TableCell>

                  <Typography
                    onClick={() =>
                      router.push(
                        `/orders/${order.id}`
                      )
                    }
                    sx={{
                      fontWeight: 700,
                      color: "#2563EB",
                      cursor: "pointer",
                      fontSize: "15px",

                      "&:hover": {
                        textDecoration:
                          "underline",
                      },
                    }}
                  >
                    {order.orderNo}
                  </Typography>

                </TableCell>

                {/* Customer */}
                <TableCell>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0F172A",
                      }}
                    >
                      {order.customerName}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#94A3B8",
                        mt: 0.5,
                      }}
                    >
                      {order.email}
                    </Typography>
                  </Box>

                </TableCell>

                {/* Date */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#334155",
                    }}
                  >
                    {order.orderDate}
                  </Typography>

                </TableCell>

                {/* Product */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#334155",
                    }}
                  >
                    {order.productType}
                  </Typography>

                </TableCell>

                {/* Amount */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    ₹{order.totalAmount}
                  </Typography>

                </TableCell>

                {/* Status */}
                <TableCell>

                  <StatusChip
                    status={order.status}
                  />

                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    minWidth: 140,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    {/* View */}
                    <IconButton
                      onClick={() =>
                        router.push(
                          `/orders/view/${order.id}`
                        )
                      }
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "12px",
                        background: "#EFF6FF",
                        "&:hover": {
                          background: "#DBEAFE",
                        },
                      }}
                    >
                      <VisibilityOutlinedIcon
                        sx={{
                          fontSize: 20,
                          color: "#2563EB",
                        }}
                      />
                    </IconButton>
                    {/* Print */}
                    <IconButton
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "12px",
                        background: "#F8FAFC",
                        "&:hover": {
                          background: "#E2E8F0",
                        },
                      }}
                    >
                      <LocalPrintshopOutlinedIcon
                        sx={{
                          fontSize: 20,
                          color: "#475569",
                        }}
                      />
                    </IconButton>
                  </Box>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </TableContainerCard>
);
}