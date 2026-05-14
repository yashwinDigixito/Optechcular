"use client";

import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

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

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedRoleId, setSelectedRoleId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedRoleId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedRoleId(null);
  };

  const handleStatusChange = (
    id: string,
    value: "Active" | "Inactive"
  ) => {

    setRoleData((prev) =>
      prev.map((role) =>
        role.id === id
          ? {
              ...role,
              status: value,
            }
          : role
      )
    );
  };

  return (
    <TableContainer
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "#FFFFFF",
      }}
    >

      <Table
        sx={{
          "& .MuiTableCell-root": {
            py: 2,
            borderColor: "#F1F5F9",
          },
        }}
      >

        <TableHead>

          <TableRow
            sx={{
              background: "#F8FAFC",
              borderBottom: "1px solid #E2E8F0",
            }}
          >

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Role Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Permissions
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Users
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Status
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Created On
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
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
                "&:hover": {
                  background: "#F8FAFC",
                },
              }}
            >

              {/* ROLE NAME */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "14px",
                  }}
                >
                  {role.roleName}
                </Typography>

              </TableCell>

              {/* PERMISSIONS */}
              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >

                  {role.permissions
                    .slice(0, 1)
                    .map((permission) => (

                      <Chip
                        key={permission}
                        label={permission}
                        size="small"
                        sx={{
                          background: "#EFF6FF",
                          color: "#2563EB",
                          fontWeight: 600,
                          borderRadius: "8px",
                        }}
                      />

                    ))}

                  {role.permissions.length > 1 && (

                    <Chip
                      label={`+${
                        role.permissions.length - 1
                      }`}
                      size="small"
                      sx={{
                        background: "#F1F5F9",
                        color: "#475569",
                        fontWeight: 700,
                        borderRadius: "8px",
                      }}
                    />

                  )}

                </Box>

              </TableCell>

              {/* USERS */}
              <TableCell align="center">

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0F172A",
                    fontSize: "14px",
                  }}
                >
                  {role.totalUsers}
                </Typography>

              </TableCell>

              {/* STATUS */}
              <TableCell align="center">

                <Select
                  size="small"
                  value={role.status}
                  onChange={(e) =>
                    handleStatusChange(
                      role.id,
                      e.target.value as
                        | "Active"
                        | "Inactive"
                    )
                  }
                  sx={{
                    minWidth: "120px",
                    borderRadius: "10px",
                    fontWeight: 600,

                    background:
                      role.status === "Active"
                        ? "#DCFCE7"
                        : "#FEE2E2",

                    color:
                      role.status === "Active"
                        ? "#15803D"
                        : "#DC2626",

                    ".MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },

                    ".MuiSelect-icon": {
                      color:
                        role.status === "Active"
                          ? "#15803D"
                          : "#DC2626",
                    },
                  }}
                >

                  <MenuItem value="Active">
                    Active
                  </MenuItem>

                  <MenuItem value="Inactive">
                    Inactive
                  </MenuItem>

                </Select>

              </TableCell>

              {/* CREATED DATE */}
              <TableCell align="center">

                <Typography
                  sx={{
                    color: "#64748B",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  {role.createdOn}
                </Typography>

              </TableCell>

              {/* ACTIONS */}
              <TableCell align="center">

                <IconButton
                  onClick={(e) =>
                    handleMenuOpen(
                      e,
                      role.id
                    )
                  }
                  sx={{
                    background: "#F8FAFC",
                    width: 38,
                    height: 38,

                    "&:hover": {
                      background: "#E2E8F0",
                    },
                  }}
                >

                  <MoreVertIcon
                    sx={{
                      color: "#64748B",
                    }}
                  />

                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={
                    Boolean(anchorEl) &&
                    selectedRoleId === role.id
                  }
                  onClose={handleMenuClose}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: "14px",
                        minWidth: "150px",
                        boxShadow:
                          "0px 10px 30px rgba(15,23,42,0.08)",
                      },
                    },
                  }}
                >

                  <MenuItem
                    onClick={() => {

                      router.push(
                        `/roles/view/${role.id}`
                      );

                      handleMenuClose();
                    }}
                  >

                    <RemoveRedEyeOutlinedIcon
                      sx={{
                        mr: 1,
                        color: "#2563EB",
                      }}
                    />

                    View

                  </MenuItem>

                  <MenuItem
                    onClick={() => {

                      router.push(
                        `/roles/edit/${role.id}`
                      );

                      handleMenuClose();
                    }}
                  >

                    <EditIcon
                      sx={{
                        mr: 1,
                        color: "#0F172A",
                      }}
                    />

                    Edit

                  </MenuItem>

                </Menu>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}