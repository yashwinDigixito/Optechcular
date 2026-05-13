"use client";

import { PurchaseOrder } from "@/assets/types";

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
        borderRadius:
          "20px",

        border:
          "1px solid #E2E8F0",
      }}
    >
      <Table>

        {/* HEAD */}
        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{fontWeight:700}}>
                PO Number
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Vendor
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Product
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Quantity
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
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {/* BODY */}
        <TableBody>

          {purchaseOrders.map(
            (po) => (

              <TableRow
                key={po.id}
                hover
              >
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#2563EB",

                      fontWeight:
                        700,
                    }}
                  >
                    {
                      po.poNumber
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    po.vendorName
                  }
                </TableCell>

                <TableCell>
                  {
                    po.productName
                  }
                </TableCell>

                <TableCell>
                  {
                    po.quantity
                  }
                </TableCell>

                <TableCell>

                  <Typography
                    sx={{fontWeight:700}}
                  >
                    ₹
                    {
                      po.totalAmount.toLocaleString()
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

                          : "#DBEAFE",

                      color:
                        po.paymentStatus ===
                        "Paid"

                          ? "#15803D"

                          : po.paymentStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#2563EB",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <Chip
                    label={
                      po.poStatus
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        po.poStatus ===
                        "Delivered"

                          ? "#DCFCE7"

                          : po.poStatus ===
                            "Processing"

                          ? "#DBEAFE"

                          : "#FEF3C7",

                      color:
                        po.poStatus ===
                        "Delivered"

                          ? "#15803D"

                          : po.poStatus ===
                            "Processing"

                          ? "#2563EB"

                          : "#B45309",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

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