"use client";

import {
  useState,
} from "react";

import {
  BrandGroup,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Box,
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

  groups:
    BrandGroup[];

  setGroupData:
    React.Dispatch<
      React.SetStateAction<
        BrandGroup[]
      >
    >;
}

export default function BrandGroupTable({
  groups,
  setGroupData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedGroupId, setSelectedGroupId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedGroupId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedGroupId(null);
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
  ) => {

    setGroupData((prev) =>
      prev.map((group) =>
        group.id === id
          ? {
              ...group,
              status: value,
            }
          : group
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
                Group Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Group Type
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Parent Category
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

          {groups.map(
            (
              group
            ) => (

              <TableRow
                key={
                  group.id
                }
                hover
                sx={{
                  "&:hover":
                    {
                      background:
                        "#F8FAFC",
                    },
                }}
              >

                {/* GROUP NAME */}
                <TableCell>

                  <Box>

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
                        group.groupName
                      }
                    </Typography>

                    <Typography
                      sx={{
                        fontSize:
                          "13px",

                        color:
                          "#64748B",
                      }}
                    >
                      {
                        group.groupId
                      }
                    </Typography>

                  </Box>

                </TableCell>

                {/* GROUP TYPE */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",

                      fontWeight:
                        600,

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      group.groupType
                    }
                  </Typography>

                </TableCell>

                {/* PARENT CATEGORY */}
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
                      group.parentCategory ||
                      "-"
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={group.status}
                    onChange={(e) =>
                      handleStatusChange(
                        group.id,
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
                        group.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        group.status ===
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
                            group.status ===
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

                {/* CREATED DATE */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      color:
                        "#64748B",

                      fontWeight:
                        500,

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      group.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        group.id
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
                      selectedGroupId ===
                        group.id
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
                          `/products/brand-groups/view/${group.id}`
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
                          `/products/brand-groups/edit/${group.id}`
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