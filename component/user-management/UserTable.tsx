"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  themeConfig,
} from "@/assets/constants";
import {
  User,
} from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  users: User[];
  setUserData: React.Dispatch< React.SetStateAction<User[]>>;
}

export default function UserTable({ users, setUserData}: Props) {

  const router = useRouter();
  const columns = [
    {
      key: "fullName",
      label: "Full Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone Number",
    },
    {
      key: "role",
      label: "Role",
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
    setUserData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: value as
                | "Active"
                | "Inactive",
            }
          : user
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={users}
      renderCell={( user,key) => {
        switch (key) {
          case "fullName":
            return (
              <Typography
                sx={{
                  fontWeight:FONT_WEIGHT.BOLD,
                  color: themeConfig.colors.primary,
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { user.fullName }
              </Typography>
            );
          case "email":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { user.email }
              </Typography>
            );
          case "phone":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { user.phone }
              </Typography>
            );
          case "role":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.SEMI_BOLD,
                  color: "#0F172A",
                  fontSize: FONT_SIZE.TABLE_BODY,
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { user.role }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ user.status }
                options={[
                  "Active",
                  "Inactive",
                  "Suspended"
                ]}
                onChange={(value) => handleStatusChange( user.id, value)}
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() => router.push( `/users/view/${user.id}` )}
                onEdit={() => router.push(`/users/edit/${user.id}`)}
              />
            );
          default: return null;
        }
      }}
    />
  );
}