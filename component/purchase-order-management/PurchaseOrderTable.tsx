"use client";

import {
  PurchaseOrder,
} from "@/assets/types";

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

interface Props {

  purchaseOrders:
    PurchaseOrder[];
}

export default function PurchaseOrderTable({
  purchaseOrders,
}: Props) {

  const router =
    useRouter();

  return (
    <TableContainer
      sx={{
        mt: 2,

        borderRadius:
          "24px",

        background:
          "#FFFFFF",

        border:
          "1px solid #E2E8F0",

        overflow:
          "hidden",
      }}
    >
      <Table
        sx={{
          minWidth: 1000,

          "& .MuiTableCell-root":
            {
              py: 2.2,

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

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Purchase No
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Vendor
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

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Amount
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Payment
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Status
              </Typography>

            </TableCell>

            <TableCell>

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

          {purchaseOrders.map(
            (
              po
            ) => (

              <TableRow
                key={po.id}
                hover
                sx={{
                  "&:hover":
                    {
                      background:
                        "#F8FAFC",
                    },
                }}
              >
                {/* PURCHASE NO */}
                <TableCell>

                  <Box>

                    <Typography
                      sx={{
                        color:
                          "#2563EB",

                        fontWeight:
                          700,
                      }}
                    >
                      {
                        po.purchaseNo
                      }
                    </Typography>

                    <Typography
                      sx={{
                        fontSize:
                          "13px",

                        color:
                          "#64748B",
                      }}
                    >
                      {
                        po.orderDate
                      }
                    </Typography>

                  </Box>

                </TableCell>

                {/* VENDOR */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        600,

                      color:
                        "#475569",
                    }}
                  >
                    {
                      po.vendorName
                    }
                  </Typography>

                </TableCell>

                {/* PRODUCT */}
                <TableCell>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight:
                          600,
                      }}
                    >
                      {
                        po.productName
                      }
                    </Typography>

                    <Typography
                      sx={{
                        fontSize:
                          "13px",

                        color:
                          "#64748B",
                      }}
                    >
                      {
                        po.brand
                      }
                    </Typography>

                  </Box>

                </TableCell>

                {/* AMOUNT */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#16A34A",
                    }}
                  >
                    ₹{" "}
                    {
                      po.grandTotal.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                {/* PAYMENT */}
                <TableCell>

                  <Chip
                    label={
                      po.paymentStatus
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        po.paymentStatus ===
                        "Paid"

                          ? "#DCFCE7"

                          : po.paymentStatus ===
                            "Pending"

                          ? "#FEF3C7"

                          : po.paymentStatus ===
                            "Partial"

                          ? "#DBEAFE"

                          : "#FEE2E2",

                      color:
                        po.paymentStatus ===
                        "Paid"

                          ? "#15803D"

                          : po.paymentStatus ===
                            "Pending"

                          ? "#B45309"

                          : po.paymentStatus ===
                            "Partial"

                          ? "#2563EB"

                          : "#DC2626",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <Chip
                    label={
                      po.status
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        po.status ===
                        "Received"

                          ? "#DCFCE7"

                          : po.status ===
                            "Ordered"

                          ? "#DBEAFE"

                          : "#FEF3C7",

                      color:
                        po.status ===
                        "Received"

                          ? "#15803D"

                          : po.status ===
                            "Ordered"

                          ? "#2563EB"

                          : "#B45309",

                      fontWeight:
                        700,
                    }}
                  />

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
                            `/purchase-orders/view/${po.id}`
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
                            `/purchase-orders/edit/${po.id}`
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