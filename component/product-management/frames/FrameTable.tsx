"use client";

import {
  useState,
} from "react";

import {
  Frame,
} from "@/assets/types";

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
  Typography
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {

  frames:
    Frame[];

  setFrameData:
    React.Dispatch<
      React.SetStateAction<
        Frame[]
      >
    >;
}

export default function FrameTable({
  frames,
  setFrameData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedFrameId, setSelectedFrameId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedFrameId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedFrameId(null);
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
      | "Out of Stock"
  ) => {

    setFrameData((prev) =>
      prev.map((frame) =>
        frame.id === id
          ? {
              ...frame,
              status: value,
            }
          : frame
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

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Frame
              </Typography>

            </TableCell>

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
                Gender
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Stock
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Price
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Status
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Created
              </Typography>

            </TableCell>

            <TableCell align="center">

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

        <TableBody>

          {frames.map(
            (
              frame
            ) => (

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

                {/* FRAME */}
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
                          frame.frameName
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

                  </Box>

                </TableCell>

                {/* BRAND */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#0F172A",

                      fontWeight:
                        600,

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      frame.brand
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

                      fontWeight:
                        500,
                    }}
                  >
                    {
                      frame.gender
                    }
                  </Typography>

                </TableCell>

                {/* STOCK */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        frame.stockQuantity &&
                        frame.stockQuantity <=
                          (
                            frame.lowStockLimit ||
                            0
                          )

                          ? "#EA580C"

                          : "#16A34A",
                    }}
                  >
                    {
                      frame.stockQuantity || 0
                    }
                  </Typography>

                </TableCell>

                {/* PRICE */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#16A34A",
                    }}
                  >
                    ₹
                    {
                      frame.sellingPrice.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={frame.status}
                    onChange={(e) =>
                      handleStatusChange(
                        frame.id,
                        e.target.value as
                          | "Active"
                          | "Inactive"
                          | "Out of Stock"
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
                        frame.status ===
                        "Active"

                          ? "#DCFCE7"

                          : frame.status ===
                            "Inactive"

                            ? "#FEE2E2"

                            : "#FFF7ED",

                      color:
                        frame.status ===
                        "Active"

                          ? "#15803D"

                          : frame.status ===
                            "Inactive"

                            ? "#DC2626"

                            : "#EA580C",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            frame.status ===
                            "Active"

                              ? "#15803D"

                              : frame.status ===
                                "Inactive"

                                ? "#DC2626"

                                : "#EA580C",
                        },
                    }}
                  >

                    <MenuItem value="Active">
                      Active
                    </MenuItem>

                    <MenuItem value="Inactive">
                      Inactive
                    </MenuItem>

                    <MenuItem value="Out of Stock">
                      Out of Stock
                    </MenuItem>

                  </Select>

                </TableCell>

                {/* CREATED */}
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
                      frame.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        frame.id
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
                      selectedFrameId ===
                        frame.id
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
                          `/products/frames/view/${frame.id}`
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
                          `/products/frames/edit/${frame.id}`
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