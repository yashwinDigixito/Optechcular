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
    productName: string;
    sku: string;
    brand: string;
    category: string;
    material: string;
    rimShape: string;
    color: string;
    size: string;
    price: number;
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

        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Product
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                SKU
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Brand
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Price
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Stock
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>

        </TableHead>

        <TableBody>

          {frameData.map((frame) => (

            <TableRow
              key={frame.id}
              hover
            >
              {/* PRODUCT */}
              <TableCell>

                <Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#2563EB",
                    }}
                  >
                    {
                      frame.productName
                    }
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "14px",
                    }}
                  >
                    {
                      frame.rimShape
                    }{" "}
                    •{" "}
                    {
                      frame.material
                    }
                  </Typography>

                </Box>

              </TableCell>

              {/* SKU */}
              <TableCell>

                <Chip
                  label={frame.sku}
                  sx={{
                    background:
                      "#EFF6FF",

                    color:
                      "#2563EB",

                    fontWeight: 700,
                  }}
                />

              </TableCell>

              {/* BRAND */}
              <TableCell>
                {frame.brand}
              </TableCell>

              {/* PRICE */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  ₹ {frame.price}
                </Typography>

              </TableCell>

              {/* STOCK */}
              <TableCell>

                <Chip
                  label={`${frame.stock} pcs`}
                  sx={{
                    background:
                      frame.stock > 0
                        ? "#DCFCE7"
                        : "#FEE2E2",

                    color:
                      frame.stock > 0
                        ? "#16A34A"
                        : "#DC2626",

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