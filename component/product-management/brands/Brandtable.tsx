"use client";

import {
  useState,
} from "react";

import {
  Brand,
} from "@/assets/types";

import BlockIcon from "@mui/icons-material/Block";

import EditIcon from "@mui/icons-material/Edit";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Avatar,
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

interface BrandTableProps {

  brands:
    Brand[];
}

export default function BrandTable({
  brands,
}: BrandTableProps) {

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

          brands.find(
            (brand) =>
              brand.id === id
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
                Brand
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Phone
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
                Created
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

          {brands.map(
            (
              brand
            ) => {

              const currentStatus =

                statusMap[
                  brand.id
                ] ||

                brand.status;

              return (

                <TableRow
                  key={
                    brand.id
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
                  {/* BRAND */}
                  <TableCell>

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 2,
                      }}
                    >
                      <Avatar
                        src={
                          brand.brandLogo
                        }
                        sx={{
                          width: 42,

                          height: 42,

                          bgcolor:
                            "#EFF6FF",

                          color:
                            "#2563EB",

                          fontWeight:
                            700,
                        }}
                      >
                        {
                          brand.brandName?.charAt(
                            0
                          )
                        }
                      </Avatar>

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
                            brand.brandName
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
                            brand.brandId
                          }
                        </Typography>

                      </Box>

                    </Box>

                  </TableCell>

                  {/* TYPE */}
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
                        brand.brandType || "-"
                      }
                    </Typography>

                  </TableCell>

                  {/* PHONE */}
                  <TableCell>

                    <Typography
                      sx={{
                        color:
                          "#475569",
                      }}
                    >
                      {
                        brand.phone
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

                  {/* CREATED */}
                  <TableCell>

                    <Typography
                      sx={{
                        color:
                          "#64748B",
                      }}
                    >
                      {
                        brand.createdDate
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
                              `/products/brands/view/${brand.id}`
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
                              `/products/brands/edit/${brand.id}`
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
                              brand.id
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