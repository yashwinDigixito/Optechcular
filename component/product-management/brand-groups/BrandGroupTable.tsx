"use client";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/assets/constants";
import { BrandGroup } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  groups: BrandGroup[];
  setGroupData: React.Dispatch<React.SetStateAction<BrandGroup[]>>;
}

export default function BrandGroupTable({ groups, setGroupData }: Props) {

  const router = useRouter();

  const columns = [
    {
      key: "groupName",
      label: "Group Name",
    },
    {
      key: "groupType",
      label: "Group Type",
    },
    {
      key: "parentCategory",
      label: "Parent Category",
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
    setGroupData((prev) =>
      prev.map((group) =>
        group.id === id
          ? {
              ...group,
              status: value as "Active" | "Inactive",
            }
          : group
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={groups}
      renderCell={(group, key) => {
        switch (key) {
          case "groupName":
            return (
              <Box>
                <Typography
                  sx={{
                    fontWeight: FONT_WEIGHT.BOLD,
                    color: "#2563EB",
                    fontSize: "15px",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {group.groupName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: FONT_SIZE.SMALL,
                    color: "#64748B",
                    fontFamily: FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {group.groupId}
                </Typography>
              </Box>
            );
          case "groupType":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {group.groupType}
              </Typography>
            );
          case "parentCategory":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                {group.parentCategory || "-"}
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={group.status}
                options={[
                  "Active",
                  "Inactive",
                ]}
                onChange={(value) =>
                  handleStatusChange(group.id, value)
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
                {group.createdOn}
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push(`/products/brand-groups/view/${group.id}`) }
                onEdit={() => router.push(`/products/brand-groups/edit/${group.id}`)}
              />
            );
          default:
            return null;
        }
      }}
    />
  );
}