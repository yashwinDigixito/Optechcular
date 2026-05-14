"use client";

import { useState } from "react";

import {
  User,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
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

  users:
    User[];

  setUserData:
    React.Dispatch<
      React.SetStateAction<
        User[]
      >
    >;
}

export default function UserTable({
  users,
  setUserData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedUserId, setSelectedUserId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedUserId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedUserId(null);
  };

  const handleStatusChange = (
    id: string,
    value: "Active" | "Inactive"
  ) => {

    setUserData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: value,
            }
          : user
      )
    );
  };

  return (
    <TableContainer
      sx={{
        borderRadius:
          "20px",

        overflow:
          "hidden",

        background:
          "#FFFFFF",
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
              background:
                "#F8FAFC",

              borderBottom:
                "1px solid #E2E8F0",
            }}
          >

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Full Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Email
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Phone Number
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Role
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Status
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

          {users.map(
            (user) => (

              <TableRow
                key={user.id}
                hover
                sx={{
                  "&:hover": {
                    background:
                      "#F8FAFC",
                  },
                }}
              >

                {/* NAME */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#2563EB",

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      user.fullName
                    }
                  </Typography>

                </TableCell>

                {/* EMAIL */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",

                      fontSize:
                        "14px",
                    }}
                  >
                    {user.email}
                  </Typography>

                </TableCell>

                {/* PHONE */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      user.phone
                    }
                  </Typography>

                </TableCell>

                {/* ROLE */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        600,

                      color:
                        "#0F172A",

                      fontSize:
                        "14px",
                    }}
                  >
                    {user.role}
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={user.status}
                    onChange={(e) =>
                      handleStatusChange(
                        user.id,
                        e.target.value as
                          | "Active"
                          | "Inactive"
                      )
                    }
                    sx={{
                      minWidth:
                        "120px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        600,

                      background:
                        user.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        user.status ===
                        "Active"

                          ? "#15803D"

                          : "#DC2626",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            user.status ===
                            "Active"

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

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        user.id
                      )
                    }
                    sx={{
                      background:
                        "#F8FAFC",

                      width: 38,

                      height: 38,

                      "&:hover": {
                        background:
                          "#E2E8F0",
                      },
                    }}
                  >

                    <MoreVertIcon
                      sx={{
                        color:
                          "#64748B",
                      }}
                    />

                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={
                      Boolean(anchorEl) &&
                      selectedUserId ===
                        user.id
                    }
                    onClose={
                      handleMenuClose
                    }
                    slotProps={{
                      paper: {
                        sx: {
                          borderRadius:
                            "14px",

                          minWidth:
                            "150px",

                          boxShadow:
                            "0px 10px 30px rgba(15,23,42,0.08)",
                        },
                      },
                    }}
                  >

                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/users/view/${user.id}`
                        );

                        handleMenuClose();
                      }}
                    >

                      <RemoveRedEyeOutlinedIcon
                        sx={{
                          mr: 1,

                          color:
                            "#2563EB",
                        }}
                      />

                      View

                    </MenuItem>

                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/users/edit/${user.id}`
                        );

                        handleMenuClose();
                      }}
                    >

                      <EditIcon
                        sx={{
                          mr: 1,

                          color:
                            "#0F172A",
                        }}
                      />

                      Edit

                    </MenuItem>

                  </Menu>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}