"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { Ledger } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  ledgers: Ledger[];
  setLedgerData: React.Dispatch<React.SetStateAction<Ledger[]>>;
}
export default function LedgerTable({ ledgers, setLedgerData}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "ledgerName",
      label: "Ledger Name",
    },
    {
      key: "ledgerGroup",
      label: "Group",
    },
    {
      key: "openingBalance",
      label: "Opening Balance",
      align: "center" as const,
    },
    {
      key: "balanceType",
      label: "Balance Type",
      align: "center" as const,
    },
    {
      key: "currentBalance",
      label: "Current Balance",
      align: "center" as const,
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "createdOn",
      label: "Created On",
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
    setLedgerData((prev) =>
      prev.map((ledger) =>
        ledger.id === id
          ? {
              ...ledger,
              status: value as
                | "Active"
                | "Inactive",
            }
            : ledger
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={ledgers}
      renderCell={( ledger, key ) => {
        switch (key) {
          case "ledgerName":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: "15px",
                  color: "#2563EB",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.ledgerName }
              </Typography>
            );
          case "ledgerGroup":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.ledgerGroup }
              </Typography>
            );
          case "openingBalance":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ { ledger.openingBalance.toLocaleString() }
              </Typography>
            );
          case "balanceType":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: ledger.balanceType === "Debit" ? "#B45309" : "#15803D",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.balanceType }
              </Typography>
            );
          case "currentBalance":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#0F172A",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                ₹ { ledger.currentBalance.toLocaleString() }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ ledger.status }
                options={[ "Active", "Inactive"]}
                onChange={(value) => handleStatusChange( ledger.id, value )
                }
              />
            );
          case "createdOn":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.createdOn }
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/ledgers/view/${ledger.id}` ) }
                onEdit={() => router.push( `/ledgers/edit/${ledger.id}` )}
              />
            );
          default:return null;
        }
      }}
    />
  );
}