"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import { RoleType } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Box,
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  roles:RoleType[];
  setRoleData: React.Dispatch<React.SetStateAction< RoleType[]>>;
}

export default function RoleTable({ roles,setRoleData}: Props) {
  const router = useRouter();
  const columns = [
    {
      key: "roleName",
      label: "Role Name",
    },
    {
      key: "permissions",
      label: "Permissions",
    },
    {
      key: "users",
      label: "Users",
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
    setRoleData((prev) =>
      prev.map((role) =>
        role.id === id
          ? {
              ...role,
              status: value as
                | "Active"
                | "Inactive",
            }
          : role
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={roles}
      renderCell={( role, key) => {
        switch (key) {
          case "roleName":
            return (
              <Typography
                sx={{
                  fontWeight:FONT_WEIGHT.BOLD,
                  color:themeConfig.colors.primary,
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { role.roleName }
              </Typography>
            );
          case "permissions":
            return (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {role.permissions
                  .slice(0, 1)
                  .map( ( permission ) => (
                      <Chip
                        key={ permission }
                        label={ permission }
                        size="small"
                        sx={{
                          background: "#EFF6FF",
                          color: "#2563EB",
                          fontWeight: FONT_WEIGHT.SEMI_BOLD,
                          borderRadius: "8px",
                          fontFamily: FONT_FAMILY.BODY,
                        }}
                      />
                    )
                  )}
                {role.permissions
                  .length > 1 && (
                  <Chip
                    label={`+${
                      role.permissions
                        .length - 1
                    }`}
                    size="small"
                    sx={{
                      background: "#F1F5F9",
                      color: "#475569",
                      fontWeight: FONT_WEIGHT.BOLD,
                      borderRadius: "8px",
                      fontFamily: FONT_FAMILY.BODY,
                    }}
                  />
                )}
              </Box>
            );
          case "users":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#0F172A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { role.totalUsers }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ role.status }
                options={[ "Active","Inactive"]}
                onChange={(value) => handleStatusChange( role.id, value )}
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
                { role.createdOn }
              </Typography>
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/roles/view/${role.id}` )}
                onEdit={() => router.push(`/roles/edit/${role.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}