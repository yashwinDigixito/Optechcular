"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import { Store } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Box,
  Chip,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  stores: Store[];
  setStoreData: React.Dispatch<React.SetStateAction<Store[]>>;
}

export default function StoreTable({ stores, setStoreData }: Props) {
  const router = useRouter();

  const columns = [
    {
      key: "storeName",
      label: "Store / Operational Type",
    },
    {
      key: "inventory",
      label: "ERP Stock Valuation",
    },
    {
      key: "performance",
      label: "Monthly Sales Performance",
      width: "250px",
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];

  const handleStatusChange = (id: string, value: string) => {
    setStoreData((prev) =>
      prev.map((store) =>
        store.id === id
          ? {
              ...store,
              status: value as "Active" | "Inactive",
            }
          : store
      )
    );
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Warehouse Hub":
        return { bg: "#FEF3C7", text: "#D97706" }; // Amber
      case "Mega Showroom":
        return { bg: "#ECEFEE", text: "#0D9488" }; // Teal
      case "Retail Outlet":
      default:
        return { bg: "#DBEAFE", text: "#2563EB" }; // Blue
    }
  };

  return (
    <CommonTable
      columns={columns}
      rows={stores}
      renderCell={(store, key) => {
        switch (key) {
          case "storeName": {
            const { bg, text } = getTypeStyle(store.storeType || "Retail Outlet");
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
                  {store.storeName}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 0.5, alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "12px",
                      fontFamily: FONT_FAMILY.BODY,
                      fontWeight: FONT_WEIGHT.BOLD,
                    }}
                  >
                    {store.storeCode}
                  </Typography>
                  <Chip
                    label={store.storeType || "Retail Outlet"}
                    size="small"
                    sx={{
                      height: "18px",
                      fontSize: "10px",
                      fontWeight: FONT_WEIGHT.BOLD,
                      bgcolor: bg,
                      color: text,
                      borderRadius: "6px",
                      "& .MuiChip-label": { px: 1 },
                    }}
                  />
                </Stack>
              </Box>
            );
          }
          case "inventory": {
            const valuationLakhs = ((store.inventoryValue || 0) / 100000);
            const displayValuation = valuationLakhs >= 100
              ? `₹${(valuationLakhs / 100).toFixed(2)} Cr`
              : `₹${valuationLakhs.toFixed(1)} L`;
            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: "#0F172A",
                    fontSize: FONT_SIZE.TABLE_BODY,
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {displayValuation}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "12px",
                    fontFamily: FONT_FAMILY.BODY,
                  }}
                >
                  {store.totalSKUs || 0} Active SKUs
                </Typography>
              </Box>
            );
          }
          case "performance": {
            const target = store.monthlyTarget || 1;
            const revenue = store.monthlyRevenue || 0;
            const percentage = Math.round((revenue / target) * 100);
            
            const revenueL = (revenue / 100000).toFixed(1);
            const targetL = (target / 100000).toFixed(1);

            return (
              <Box sx={{ minWidth: "180px", pr: 2 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontWeight: FONT_WEIGHT.SEMI_BOLD,
                      color: "#334155",
                      fontSize: "13px",
                      fontFamily: FONT_FAMILY.BODY,
                    }}
                  >
                    ₹{revenueL}L / ₹{targetL}L
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: FONT_WEIGHT.BOLD,
                      color: percentage >= 85 ? "#16A34A" : percentage >= 70 ? "#CA8A04" : "#DC2626",
                      fontSize: "12px",
                      fontFamily: FONT_FAMILY.HEADING,
                    }}
                  >
                    {percentage}%
                  </Typography>
                </Stack>
                <Tooltip title={`${percentage}% Target Achieved (Revenue: ₹${revenue.toLocaleString()})`}>
                  <LinearProgress
                    variant="determinate"
                    value={percentage > 100 ? 100 : percentage}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      mt: 0.8,
                      backgroundColor: "#EFF6FF",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: percentage >= 85 ? "#16A34A" : percentage >= 70 ? "#CA8A04" : "#DC2626",
                        borderRadius: 3,
                      },
                    }}
                  />
                </Tooltip>
              </Box>
            );
          }
          case "status":
            return (
              <StatusSelect
                value={store.status}
                options={["Active", "Inactive"]}
                onChange={(value) => handleStatusChange(store.id, value)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/stores/view/${store.id}`)}
                onEdit={() => router.push(`/stores/edit/${store.id}`)}
              />
            );
          default:
            return null;
        }
      }}
    />
  );
}
