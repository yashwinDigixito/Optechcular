"use client";

import { useState } from "react";

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
  frames: {
    id: string;

    brand: string;

    modelNo: string;

    rimType: string;

    rimShape: string;

    category: string;

    skuCode: string;

    srp: number;

    stock: number;

    status: string;

    createdOn: string;
  }[];
}

export default function FrameTable({
  frames,
}: Props) {

  const router =
    useRouter();

  const [frameData, setFrameData] =
    useState(frames);

  const handleToggleStatus = (
    id: string
  ) => {

    setFrameData((prev) =>
      prev.map((frame) =>
        frame.id === id
          ? {
              ...frame,

              status:
                frame.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : frame
      )
    );
  };

  return (
    <TableContainer>

      <Table>

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
                Brand
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Model No
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Rim Type
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Rim Shape
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Category
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                SKU Code
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                SRP
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Stock
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
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {frameData.map((frame) => (

            <TableRow
              key={frame.id}
              hover
            >
              {/* BRAND */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {frame.brand}
                </Typography>

              </TableCell>

              {/* MODEL NO */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {
                    frame.modelNo
                  }
                </Typography>

              </TableCell>

              {/* RIM TYPE */}
              <TableCell>

                <Typography>
                  {
                    frame.rimType
                  }
                </Typography>

              </TableCell>

              {/* RIM SHAPE */}
              <TableCell>

                <Typography>
                  {
                    frame.rimShape
                  }
                </Typography>

              </TableCell>

              {/* CATEGORY */}
              <TableCell>

                <Chip
                  label={
                    frame.category
                  }
                  sx={{
                    background:
                      "#EFF6FF",

                    color:
                      "#2563EB",

                    fontWeight: 600,
                  }}
                />

              </TableCell>

              {/* SKU */}
              <TableCell>

                <Chip
                  label={
                    frame.skuCode
                  }
                  sx={{
                    background:
                      "#F8FAFC",

                    color:
                      "#0F172A",

                    fontWeight: 700,
                  }}
                />

              </TableCell>

              {/* SRP */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#16A34A",
                  }}
                >
                  ₹{" "}
                  {frame.srp.toLocaleString()}
                </Typography>

              </TableCell>

              {/* STOCK */}
              <TableCell>

                <Chip
                  label={
                    frame.stock === 0
                      ? "Out of Stock"
                      : frame.stock <=
                        5
                      ? "Low Stock"
                      : "In Stock"
                  }
                  sx={{
                    background:
                      frame.stock === 0
                        ? "#FEE2E2"
                        : frame.stock <=
                          5
                        ? "#FEF3C7"
                        : "#DCFCE7",

                    color:
                      frame.stock === 0
                        ? "#DC2626"
                        : frame.stock <=
                          5
                        ? "#D97706"
                        : "#16A34A",

                    fontWeight: 700,
                  }}
                />

              </TableCell>

              {/* STATUS */}
              <TableCell>

                <StatusChip
                  status={
                    frame.status
                  }
                />

              </TableCell>

              {/* ACTIONS */}
              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {/* VIEW */}
                  <Tooltip title="View">

                    <IconButton
                      sx={{
                        background:
                          "#EFF6FF",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/frames/view/${frame.id}`
                        )
                      }
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>

                  </Tooltip>

                  {/* EDIT */}
                  <Tooltip title="Edit">

                    <IconButton
                      sx={{
                        background:
                          "#F8FAFC",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/frames/edit/${frame.id}`
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>

                  </Tooltip>

                  {/* DEACTIVATE */}
                  <Tooltip
                    title={
                      frame.status ===
                      "Active"
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    <IconButton
                      sx={{
                        background:
                          "#FEF2F2",
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
                            "#DC2626",
                        }}
                      />
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