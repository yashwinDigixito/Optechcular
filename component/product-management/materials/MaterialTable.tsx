"use client";

import {
  useState,
} from "react";

import {
  Material,
} from "@/assets/types";

import StatusChip from "@/component/common/StatusChip";

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

interface Props {

  materials:
    Material[];
}

export default function MaterialTable({
  materials,
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

          materials.find(
            (material) =>
              material.id === id
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
          minWidth: 950,

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
                Material
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Applicable For
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Selling Price
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
                Actions
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {materials.map(
            (
              material
            ) => {

              const currentStatus =

                statusMap[
                  material.id
                ] ||

                material.status;

              return (

                <TableRow
                  key={
                    material.id
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
                  {/* MATERIAL */}
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
                          material.materialName
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
                          material.materialCode
                        }
                      </Typography>

                    </Box>

                  </TableCell>

                  {/* APPLICABLE FOR */}
                  <TableCell>

                    <Chip
                      label={
                        material.applicableFor
                      }
                      sx={{
                        background:
                          "#EFF6FF",

                        color:
                          "#2563EB",

                        fontWeight:
                          600,
                      }}
                    />

                  </TableCell>

                  {/* PRICE */}
                  <TableCell>

                    <Typography
                      sx={{
                        fontWeight:
                          700,

                        color:
                          "#16A34A",
                      }}
                    >
                      ₹{" "}
                      {
                        material.sellingPrice.toLocaleString()
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
                              `/products/materials/view/${material.id}`
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
                              `/products/materials/edit/${material.id}`
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
                              material.id
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