"use client";

import {
  useState,
} from "react";

import {
  Frame,
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

  frames:
    Frame[];
}

export default function FrameTable({
  frames,
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

          frames.find(
            (frame) =>
              frame.id === id
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
                Frame Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Gender
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Price
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

          {frames.map(
            (
              frame
            ) => {

              const currentStatus =

                statusMap[
                  frame.id
                ] ||

                frame.status;

              return (

                <TableRow
                  key={
                    frame.id
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
                          frame.brand
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
                          frame.frameId
                        }
                      </Typography>

                    </Box>

                  </TableCell>

                  {/* FRAME TYPE */}
                  <TableCell>

                    <Chip
                      label={
                        frame.frameType
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

                  {/* GENDER */}
                  <TableCell>

                    <Typography
                      sx={{
                        color:
                          "#475569",
                      }}
                    >
                      {
                        frame.gender
                      }
                    </Typography>

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
                        (
                          frame.sellingPrice || 0
                        ).toLocaleString()
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
                              `/products/frames/view/${frame.id}`
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
                              `/products/frames/edit/${frame.id}`
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
                              frame.id
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