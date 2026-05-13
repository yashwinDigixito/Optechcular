"use client";

import {
  useState,
} from "react";

import {
  Category,
} from "@/assets/types";

import StatusChip from "@/component/common/StatusChip";

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

interface CategoryTableProps {

  categories:
    Category[];
}

export default function CategoryTable({
  categories,
}: CategoryTableProps) {

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

          categories.find(
            (category) =>
              category.id === id
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
          minWidth: 900,

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
                Category
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Category Type
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

          {categories.map(
            (
              category
            ) => {

              const currentStatus =

                statusMap[
                  category.id
                ] ||

                category.status;

              return (

                <TableRow
                  key={
                    category.id
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
                  {/* CATEGORY */}
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
                          category.categoryName
                        }
                      </Typography>

                    </Box>

                  </TableCell>

                  {/* CATEGORY TYPE */}
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
                        category.categoryType
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
                        category.parentCategory || "-"
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
                        category.createdOn
                      }
                    </Typography>

                  </TableCell>

                  {/* ACTIONS */}
                  <TableCell>

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

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
                              `/products/categories/view/${category.id}`
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
                              `/products/categories/edit/${category.id}`
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
                              category.id
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