"use client";

import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Box,
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

interface RoleTableProps {
  roles: {
    id: string;
    roleName: string;
    status: string;
    permissions: string[];
  }[];
}

export default function RoleTable({
  roles,
}: RoleTableProps) {

  const router = useRouter();

  return (
    <TableContainer sx={{ px: 4 }}>

      <Table>

        <TableHead>
          <TableRow
            sx={{
              background: "#F8FAFC",
            }}
          >
            <TableCell sx={{ width: "27%" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Role Name
              </Typography>
            </TableCell>

            <TableCell sx={{ width: "27%" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Status
              </Typography>
            </TableCell>

            <TableCell sx={{ width: "27%" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Permissions
              </Typography>
            </TableCell>

            <TableCell sx={{ width: "27%" }}>
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

        <TableBody>

          {roles.map((role) => (

            <TableRow
              key={role.id}
              hover
              sx={{
                transition: "0.3s",

                "&:hover": {
                  background:
                    "#F8FAFC",
                },
              }}
            >
              {/* Role Name */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "16px",
                  }}
                >
                  {role.roleName}
                </Typography>
              </TableCell>

              {/* Status */}
              <TableCell>
                <StatusChip
                  status={role.status}
                />
              </TableCell>

              {/* Permissions */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                    fontSize: "16px",
                  }}
                >
                  {
                    role.permissions
                      .length
                  }
                </Typography>
              </TableCell>

              {/* Actions */}
              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {/* View */}
                  <Tooltip title="View">
                    <IconButton
                      sx={{
                        background:
                          "#EFF6FF",

                        color:
                          "#2563EB",

                        width: "42px",
                        height: "42px",

                        "&:hover": {
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
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Edit */}
                  <Tooltip title="Edit">
                    <IconButton
                      sx={{
                        background:
                          "#F8FAFC",

                        color:
                          "#475569",

                        width: "42px",
                        height: "42px",

                        "&:hover": {
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
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Deactivate */}
                  <Tooltip title="Deactivate">
                    <IconButton
                      sx={{
                        background:
                          "#FEF2F2",

                        color:
                          "#DC2626",

                        width: "42px",
                        height: "42px",

                        "&:hover": {
                          background:
                            "#FEE2E2",
                        },
                      }}
                    >
                      <BlockOutlinedIcon />
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