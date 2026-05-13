"use client";

import {
  useState,
} from "react";

import {
  BrandGroup,
} from "@/assets/types";

import BlockIcon from "@mui/icons-material/Block";

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

interface Props {

  groups:
    BrandGroup[];
}

export default function BrandGroupTable({
  groups,
}: Props) {

  const router =
    useRouter();

  const [statusMap, setStatusMap] =
    useState<
      Record<string, string>
    >({});

  const handleToggleStatus = (
    id: string
  ) => {

    setStatusMap((prev) => ({

      ...prev,

      [id]:
        (
          prev[id] ||

          groups.find(
            (group) =>
              group.id === id
          )?.status
        ) === "Active"

          ? "Inactive"

          : "Active",
    }));
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

        overflow:
          "hidden",
      }}
    >
      <Table
        sx={{
          minWidth: 850,

          "& .MuiTableCell-root":
            {
              py: 2.2,

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
                  fontWeight:
                    700,
                }}
              >
                Group Name
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Group Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Parent Category
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Status
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Created On
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Actions
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {groups.map(
            (
              group
            ) => {

              const currentStatus =

                statusMap[
                  group.id
                ] ||

                group.status;

              return (

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
                      }}
                    >
                      {
                        group.parentCategory || "-"
                      }
                    </Typography>

                  </TableCell>

                  {/* STATUS */}
                  <TableCell>

                    <StatusChip
                      status={
                        currentStatus
                      }
                    />

                  </TableCell>

                  {/* CREATED DATE */}
                  <TableCell>

                    <Typography
                      sx={{
                        color:
                          "#64748B",
                      }}
                    >
                      {
                        group.createdOn
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
                              `/products/brand-groups/view/${group.id}`
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
                              `/products/brand-groups/edit/${group.id}`
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
                          currentStatus ===
                          "Active"
                            ? "Deactivate"
                            : "Activate"
                        }
                      >
                        <IconButton
                          sx={{
                            background:
                              currentStatus ===
                              "Active"

                                ? "#FEF2F2"

                                : "#DCFCE7",
                          }}
                          onClick={() =>
                            handleToggleStatus(
                              group.id
                            )
                          }
                        >
                          <BlockIcon
                            sx={{
                              color:
                                currentStatus ===
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
              );
            }
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}