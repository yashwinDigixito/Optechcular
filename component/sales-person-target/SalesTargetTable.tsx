"use client";

import {
  SalesTarget,
} from "@/assets/types";

import CommonTable from "@/component/common/table/CommonTable";

import StatusSelect from "@/component/common/table/StatusSelect";

import TableActions from "@/component/common/table/TableActions";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import {
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {

  salesTargets:
    SalesTarget[];

  setSalesTargetData:
    React.Dispatch<
      React.SetStateAction<
        SalesTarget[]
      >
    >;
}

export default function SalesTargetTable({
  salesTargets,
  setSalesTargetData,
}: Props) {

  const router =
    useRouter();

  /* TABLE COLUMNS */
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

  /* STATUS CHANGE */
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

      renderCell={(
        target,
        key
      ) => {

        switch (key) {

          /* SALES PERSON */
          case "salesPerson":

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
                  target.salesPersonName
                }
              </Typography>

            );

          /* TARGET */
          case "target":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  color:
                    "#0F172A",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹
                {
                  target.targetAmount.toLocaleString()
                }
              </Typography>

            );

          /* ACHIEVED */
          case "achieved":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  color:
                    "#16A34A",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹
                {
                  target.achievedAmount.toLocaleString()
                }
              </Typography>

            );

          /* REMAINING */
          case "remaining":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  color:
                    "#DC2626",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹
                {
                  target.remainingAmount.toLocaleString()
                }
              </Typography>

            );

          /* DUE DATE */
          case "dueDate":

            return (

              <Typography
                sx={{
                  color:
                    "#64748B",

                  fontWeight:
                    FONT_WEIGHT.MEDIUM,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  target.dueDate
                }
              </Typography>

            );

          /* MONTH */
          case "month":

            return (

              <Typography
                sx={{
                  fontWeight:
                    FONT_WEIGHT.SEMI_BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  color:
                    "#475569",

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  target.month
                }
              </Typography>

            );

          /* STATUS */
          case "status":

            return (

              <StatusSelect
                value={
                  target.status
                }

                options={[
                  "Completed",
                  "In Progress",
                  "Pending",
                  "Overdue",
                ]}

                onChange={(value) =>
                  handleStatusChange(
                    target.id,
                    value
                  )
                }
              />

            );

          /* ACTIONS */
          case "actions":

            return (

              <TableActions
                onView={() =>
                  router.push(
                    `/sales-target/view/${target.id}`
                  )
                }

                onEdit={() =>
                  router.push(
                    `/sales-target/edit/${target.id}`
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