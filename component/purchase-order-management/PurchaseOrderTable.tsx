"use client";

import { FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
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
  purchaseOrders: PurchaseOrder[];
}
export default function PurchaseOrderTable({ purchaseOrders }: Props) {
  const router = useRouter();
  const { colors,borderRadius } = themeConfig;

  return (
    <TableContainer
      sx={{
        mt: 2,
        borderRadius: borderRadius.large,
        background: colors.white,
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
                    fontWeight: FONT_WEIGHT.BOLD,
                    fontSize: FONT_SIZE.SMALL,
                    color: colors.textMuted,
                  }}
                >
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
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
              <TableCell>
                <Box>
                  <Typography
                    sx={{
                      color: colors.primary,
                      fontWeight: FONT_WEIGHT.BOLD,
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
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.MEDIUM,
                    color: colors.textMuted,
                  }}
                >
                  {po.vendorName}
                </Typography>
              </TableCell>
              <TableCell>
                <Box>
                  <Typography sx={{ fontWeight: FONT_WEIGHT.MEDIUM}}>
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
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: colors.success,
                  }}
                >
                  ₹ {po.grandTotal.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={po.paymentStatus}
                  size="small"
                  sx={{
                    bgcolor: po.paymentStatus === "Paid" ? colors.successBg : po.paymentStatus === "Pending" ? colors.warningBg : colors.errorBg,
                    color: po.paymentStatus === "Paid" ? colors.success : po.paymentStatus === "Pending" ? colors.warning : colors.error,
                    fontWeight: FONT_WEIGHT.BOLD,
                    borderRadius: borderRadius.small,
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={po.status}
                  size="small"
                  sx={{
                    bgcolor: po.status === "Received" ? colors.successBg : colors.primaryLight,
                    color: po.status === "Received" ? colors.success : colors.primary,
                    fontWeight: FONT_WEIGHT.BOLD,
                    borderRadius: borderRadius.small,
                  }}
                />
              </TableCell>
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