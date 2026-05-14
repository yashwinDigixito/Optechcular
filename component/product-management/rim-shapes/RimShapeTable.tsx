"use client";

import {
  useState,
} from "react";

import {
  RimShape,
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

  rimShapes:
    RimShape[];

  setRimShapeData:
    React.Dispatch<
      React.SetStateAction<
        RimShape[]
      >
    >;
}

export default function RimShapeTable({
  rimShapes,
  setRimShapeData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl,
    setAnchorEl] =
      useState<
        null | HTMLElement
      >(null);

  const [selectedShapeId,
    setSelectedShapeId] =
      useState<
        string | null
      >(null);

  const handleMenuOpen = (
    event:
      React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedShapeId(
      id
    );
  };

  const handleMenuClose =
    () => {

      setAnchorEl(null);

      setSelectedShapeId(
        null
      );
    };

  const handleStatusChange = (
    id: string,

    value:
      | "Active"
      | "Inactive"
  ) => {

    setRimShapeData(
      (prev) =>

        prev.map(
          (shape) =>

            shape.id === id

              ? {
                  ...shape,
                  status:
                    value,
                }

              : shape
        )
    );
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
          minWidth: 1000,

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
                Shape Name
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Shape Code
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
                Applicable For
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Products
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
                Created On
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

        {/* TABLE BODY */}
        <TableBody>

          {rimShapes.map(
            (
              shape
            ) => (

              <TableRow
                key={
                  shape.id
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

                {/* SHAPE NAME */}
                <TableCell>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight:
                          700,

                        color:
                          "#2563EB",

                        fontSize:
                          "15px",
                      }}
                    >
                      {
                        shape.shapeName
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
                        shape.description
                      }
                    </Typography>

                  </Box>

                </TableCell>

                {/* CODE */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        600,

                      color:
                        "#475569",
                    }}
                  >
                    {
                      shape.rimShapeCode
                    }
                  </Typography>

                </TableCell>

                {/* CATEGORY */}
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
                      shape.shapeCategory
                    }
                  </Typography>

                </TableCell>

                {/* APPLICABLE */}
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
                      shape.applicableFor
                    }
                  </Typography>

                </TableCell>

                {/* PRODUCTS */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#0F172A",
                    }}
                  >
                    {
                      shape.totalProducts
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"

                    value={
                      shape.status
                    }

                    onChange={(
                      e
                    ) =>
                      handleStatusChange(
                        shape.id,

                        e.target
                          .value as
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
                        shape.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        shape.status ===
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
                            shape.status ===
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

                {/* CREATED */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      color:
                        "#64748B",

                      fontWeight:
                        500,
                    }}
                  >
                    {
                      shape.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        shape.id
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
                    anchorEl={
                      anchorEl
                    }

                    open={
                      Boolean(
                        anchorEl
                      ) &&

                      selectedShapeId ===
                        shape.id
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
                          `/products/rim-shapes/view/${shape.id}`
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
                          `/products/rim-shapes/edit/${shape.id}`
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