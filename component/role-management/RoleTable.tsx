"use client";

import BlockIcon from "@mui/icons-material/Block";
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

import StatusChip from "@/component/common/StatusChip";

interface Props {

  roles: {
    id: string;

    roleName: string;

    description: string;

    permissions: string[];

    totalUsers: number;

    status: string;

    createdOn: string;
  }[];

  setRoleData:
    React.Dispatch<
      React.SetStateAction<
        {
          id: string;

          roleName: string;

          description: string;

          permissions: string[];

          totalUsers: number;

          status: string;

          createdOn: string;
        }[]
      >
    >;
}

export default function RoleTable({
  roles,
  setRoleData,
}: Props) {

  const router =
    useRouter();

  const handleToggleStatus = (
    id: string
  ) => {

    setRoleData((prev) =>
      prev.map((role) =>
        role.id === id
          ? {
              ...role,

              status:
                role.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : role
      )
    );
  };

  return (
    <TableContainer
      sx={{
        mt: 2,

        borderRadius:
          "24px",

        background:
          "#FFFFFF",

        border:
          "1px solid #E2E8F0",

        overflow: "hidden",
      }}
    >
      <Table
        sx={{
          "& .MuiTableCell-root":
            {
              py: 2,

              borderColor:
                "#F1F5F9",
            },
        }}
      >
        {/* TABLE HEAD */}
        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Role Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Permissions
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Users
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Created On
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {roles.map(
            (role) => (

              <TableRow
                key={role.id}
                hover
                sx={{
                  "&:hover": {
                    background:
                      "#F8FAFC",
                  },
                }}
              >
                {/* ROLE NAME */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,

                      color:
                        "#2563EB",

                      fontSize:
                        "16px",
                    }}
                  >
                    {
                      role.roleName
                    }
                  </Typography>

                </TableCell>

                {/* PERMISSIONS */}
                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,

                      flexWrap:
                        "wrap",
                    }}
                  >
                    {role.permissions
                      .slice(0, 1)
                      .map(
                        (
                          permission
                        ) => (

                          <Chip
                            key={
                              permission
                            }
                            label={
                              permission
                            }
                            size="small"
                            sx={{
                              background:
                                "#EFF6FF",

                              color:
                                "#2563EB",

                              fontWeight: 600,

                              borderRadius:
                                "8px",
                            }}
                          />
                        )
                      )}

                    {role.permissions
                      .length >
                      1 && (

                      <Chip
                        label={`+${
                          role
                            .permissions
                            .length -
                          1
                        }`}
                        size="small"
                        sx={{
                          background:
                            "#F1F5F9",

                          color:
                            "#475569",

                          fontWeight: 700,

                          borderRadius:
                            "8px",
                        }}
                      />

                    )}

                  </Box>

                </TableCell>

                {/* USERS */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,

                      color:
                        "#0F172A",
                    }}
                  >
                    {
                      role.totalUsers
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <StatusChip
                    status={
                      role.status
                    }
                  />

                </TableCell>

                {/* CREATED DATE */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#64748B",

                      fontWeight: 500,
                    }}
                  >
                    {
                      role.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,
                    }}
                  >
                    {/* VIEW */}
                    <Tooltip title="View">

                      <IconButton
                        sx={{
                          background:
                            "#EFF6FF",

                          "&:hover":
                            {
                              background:
                                "#DBEAFE",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/roles/view/${role.id}`
                          )
                        }
                      >
                        <RemoveRedEyeOutlinedIcon
                          sx={{
                            color:
                              "#2563EB",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                    {/* EDIT */}
                    <Tooltip title="Edit">

                      <IconButton
                        sx={{
                          background:
                            "#F8FAFC",

                          "&:hover":
                            {
                              background:
                                "#E2E8F0",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/roles/edit/${role.id}`
                          )
                        }
                      >
                        <EditIcon
                          sx={{
                            color:
                              "#0F172A",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                    {/* STATUS */}
                    <Tooltip
                      title={
                        role.status ===
                        "Active"
                          ? "Deactivate"
                          : "Activate"
                      }
                    >
                      <IconButton
                        sx={{
                          background:
                            role.status ===
                            "Active"

                              ? "#FEF2F2"

                              : "#DCFCE7",
                        }}
                        onClick={() =>
                          handleToggleStatus(
                            role.id
                          )
                        }
                      >
                        <BlockIcon
                          sx={{
                            color:
                              role.status ===
                              "Active"

                                ? "#DC2626"

                                : "#16A34A",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                  </Box>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}