"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import {
  LedgerGroup,
} from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  ledgerGroups: LedgerGroup[];
  setLedgerGroupData: React.Dispatch<React.SetStateAction<LedgerGroup[]>>;
}

export default function LedgerGroupTable({ ledgerGroups,setLedgerGroupData}: Props) {

  const router =useRouter();
  const columns = [
    {
      key: "groupName",
      label: "Group Name",
    },
    {
      key: "createdAt",
      label: "Created At",
      align: "center" as const,
    },
    {
      key: "notes",
      label: "Notes",
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
    setLedgerGroupData((prev) =>
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
      rows={ledgerGroups}
      renderCell={( ledger, key ) => {
        switch (key) {
          case "groupName":
            return (
              <Typography
                sx={{
                  color: "#2563EB",
                  fontWeight: FONT_WEIGHT.BOLD,
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.groupName }
              </Typography>
            );
          case "createdAt":
            return (
              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: FONT_WEIGHT.MEDIUM,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { ledger.createdAt }
              </Typography>
            );
          case "notes":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  maxWidth: "250px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                { ledger.notes }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ ledger.status }
                options={[ "Active", "Inactive"]}
                onChange={(value) => handleStatusChange( ledger.id,value)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/ledger-groups/view/${ledger.id}` ) }
                onEdit={() => router.push(`/ledger-groups/edit/${ledger.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}