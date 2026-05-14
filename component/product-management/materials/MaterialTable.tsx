"use client";

import {
  useState,
} from "react";

import {
  Material,
} from "@/assets/types";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditIcon from "@mui/icons-material/Edit";

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
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props {

  materials:
    Material[];

  setMaterialData:
    React.Dispatch<
      React.SetStateAction<
        Material[]
      >
    >;
}

export default function MaterialTable({
  materials,
  setMaterialData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedMaterialId,
    setSelectedMaterialId] =
      useState<string | null>(
        null
      );

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedMaterialId(
      id
    );
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedMaterialId(
      null
    );
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
      | "Out of Stock"
  ) => {

    setMaterialData((prev) =>
      prev.map((material) =>
        material.id === id

          ? {
              ...material,
              status: value,
            }

          : material
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
            ) => (

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

                        fontSize:
                          "14px",
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

                {/* STOCK */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        material.stockQuantity <=
                        material.minimumStockLevel

                          ? "#EA580C"

                          : "#16A34A",
                    }}
                  >
                    {
                      material.stockQuantity
                    }
                  </Typography>

                </TableCell>

                {/* PRICE */}
                <TableCell align="center">

                  <Box>

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
                        material.sellingPrice.toLocaleString()
                      }
                    </Typography>
                  </Box>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={
                      material.status
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        material.id,
                        e.target.value as
                          | "Active"
                          | "Inactive"
                          | "Out of Stock"
                      )
                    }
                    sx={{
                      minWidth:
                        "140px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        600,

                      background:
                        material.status ===
                        "Active"

                          ? "#DCFCE7"

                          : material.status ===
                            "Inactive"

                            ? "#FEE2E2"

                            : "#FFF7ED",

                      color:
                        material.status ===
                        "Active"

                          ? "#15803D"

                          : material.status ===
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
                            material.status ===
                            "Active"

                              ? "#15803D"

                              : material.status ===
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

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        material.id
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
                      selectedMaterialId ===
                        material.id
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
                          `/products/materials/view/${material.id}`
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
                          `/products/materials/edit/${material.id}`
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