"use client";

import { themeConfig } from "@/assets/constants";
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
// Import your theme configuration
 

interface Props {
  purchaseOrders: PurchaseOrder[];
}

export default function PurchaseOrderTable({ purchaseOrders }: Props) {
  const router = useRouter();
  const { colors, typography, borderRadius } = themeConfig;

  return (
    <TableContainer
      sx={{
        mt: 2,
        borderRadius: borderRadius.large, // Using theme token
        background: colors.white,        // Using theme token
        border: `1px solid ${colors.border}`,
        overflow: "hidden",
      }}
    >
      <Table
        sx={{
          minWidth: 1000,
          "& .MuiTableCell-root": {
            py: 2.2,
            borderColor: colors.bgLight,
          },
        }}
      >
        {/* TABLE HEAD */}
        <TableHead>
          <TableRow
            sx={{
              background: colors.bgLight,
            }}
          >
            {["Purchase No", "Vendor", "Product", "Amount", "Payment", "Status", "Actions"].map((head) => (
              <TableCell key={head}>
                <Typography
                  sx={{
                    fontWeight: typography.fontWeight.bold,
                    fontSize: typography.fontSize.small,
                    color: colors.textMuted,
                  }}
                >
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* TABLE BODY */}
        <TableBody>
          {purchaseOrders.map((po) => (
            <TableRow
              key={po.id}
              hover
              sx={{
                "&:hover": {
                  background: colors.bgLight,
                },
              }}
            >
              {/* PURCHASE NO */}
              <TableCell>
                <Box>
                  <Typography
                    sx={{
                      color: colors.primary,
                      fontWeight: typography.fontWeight.bold,
                    }}
                  >
                    {po.purchaseNo}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: colors.textSecondary,
                    }}
                  >
                    {po.orderDate}
                  </Typography>
                </Box>
              </TableCell>

              {/* VENDOR */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: typography.fontWeight.medium,
                    color: colors.textMuted,
                  }}
                >
                  {po.vendorName}
                </Typography>
              </TableCell>

              {/* PRODUCT */}
              <TableCell>
                <Box>
                  <Typography sx={{ fontWeight: typography.fontWeight.medium }}>
                    {po.productName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: colors.textSecondary,
                    }}
                  >
                    {po.brand}
                  </Typography>
                </Box>
              </TableCell>

              {/* AMOUNT */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: typography.fontWeight.bold,
                    color: colors.success,
                  }}
                >
                  ₹ {po.grandTotal.toLocaleString()}
                </Typography>
              </TableCell>

              {/* PAYMENT STATUS */}
              <TableCell>
                <Chip
                  label={po.paymentStatus}
                  size="small"
                  sx={{
                    bgcolor: po.paymentStatus === "Paid" ? colors.successBg : po.paymentStatus === "Pending" ? colors.warningBg : colors.errorBg,
                    color: po.paymentStatus === "Paid" ? colors.success : po.paymentStatus === "Pending" ? colors.warning : colors.error,
                    fontWeight: typography.fontWeight.bold,
                    borderRadius: borderRadius.small,
                  }}
                />
              </TableCell>

              {/* ORDER STATUS */}
              <TableCell>
                <Chip
                  label={po.status}
                  size="small"
                  sx={{
                    bgcolor: po.status === "Received" ? colors.successBg : colors.primaryLight,
                    color: po.status === "Received" ? colors.success : colors.primary,
                    fontWeight: typography.fontWeight.bold,
                    borderRadius: borderRadius.small,
                  }}
                />
              </TableCell>

              {/* ACTIONS */}
              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Tooltip title="View">
                    <IconButton
                      sx={{
                        background: colors.primaryLight,
                        "&:hover": { background: colors.border },
                      }}
                      onClick={() => router.push(`/purchase-orders/view/${po.id}`)}
                    >
                      <RemoveRedEyeOutlinedIcon sx={{ color: colors.primary }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <IconButton
                      sx={{
                        background: colors.bgLight,
                        "&:hover": { background: colors.border },
                      }}
                      onClick={() => router.push(`/purchase-orders/edit/${po.id}`)}
                    >
                      <EditIcon sx={{ color: colors.textMain }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}