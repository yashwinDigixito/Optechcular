"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import {
  SalesTarget,
} from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  salesTargets: SalesTarget[];
  setSalesTargetData: React.Dispatch<React.SetStateAction<SalesTarget[]>>;
}

export default function SalesTargetTable({ salesTargets, setSalesTargetData}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "salesPerson",
      label: "Sales Person",
    },
    {
      key: "target",
      label: "Target",
      align: "center" as const,
    },
    {
      key: "achieved",
      label: "Achieved",
      align: "center" as const,
    },
    {
      key: "remaining",
      label: "Remaining",
      align: "center" as const,
    },
    {
      key: "dueDate",
      label: "Due Date",
      align: "center" as const,
    },
    {
      key: "month",
      label: "Month",
      align: "center" as const,
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
  const handleStatusChange = (
    id: string,
    value: string
  ) => {
    setSalesTargetData((prev) =>
      prev.map((target) =>
        target.id === id
          ? {
              ...target,
              status: value as
                | "Completed"
                | "In Progress"
                | "Pending"
                | "Overdue",
            }
          : target
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={salesTargets}
      renderCell={( target, key) => {
        switch (key) {
          case "salesPerson":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color:themeConfig.colors.primary,
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { target.salesPersonName }
              </Typography>
            );
          case "target":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ { target.targetAmount.toLocaleString() }
              </Typography>
            );
          case "achieved":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#16A34A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ { target.achievedAmount.toLocaleString() }
              </Typography>
            );
          case "remaining":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#DC2626",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ { target.remainingAmount.toLocaleString() }
              </Typography>
            );
          case "dueDate":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { target.dueDate }
              </Typography>
            );
          case "month":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { target.month }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ target.status }
                options={[
                  "Completed",
                  "In Progress",
                  "Pending",
                  "Overdue",
                ]}
                onChange={(value) => handleStatusChange( target.id, value)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/sales-target/view/${target.id}`)}
                onEdit={() =>router.push(`/sales-target/edit/${target.id}`)}
              />
            );
          default:return null;
        }
      }}
    />
  );
}