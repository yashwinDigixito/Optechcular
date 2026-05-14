"use client";

import {
  useState,
} from "react";

import {
  Brand,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Avatar,
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

interface BrandTableProps {

  brands:
    Brand[];

  setBrandData:
    React.Dispatch<
      React.SetStateAction<
        Brand[]
      >
    >;
}

export default function BrandTable({
  brands,
  setBrandData,
}: BrandTableProps) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedBrandId, setSelectedBrandId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedBrandId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedBrandId(null);
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
  ) => {

    setBrandData((prev) =>
      prev.map((brand) =>
        brand.id === id
          ? {
              ...brand,
              status: value,
            }
          : brand
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
              <Typography sx={{ fontWeight: 700 }}>
                Brand
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Category
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Brand Group
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Phone
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Status
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Created
              </Typography>
            </TableCell>

            <TableCell align="center">
              <Typography sx={{ fontWeight: 700 }}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {brands.map(
            (
              brand
            ) => (

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

                          fontSize:
                            "14px",
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

                {/* CATEGORY */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",

                      fontWeight:
                        600,

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      brand.category ||
                      "-"
                    }
                  </Typography>

                </TableCell>

                {/* GROUP */}
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
                      brand.brandGroup ||
                      "-"
                    }
                  </Typography>

                </TableCell>

                {/* PHONE */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      brand.phone
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={brand.status}
                    onChange={(e) =>
                      handleStatusChange(
                        brand.id,
                        e.target.value as
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
                        brand.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        brand.status ===
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
                            brand.status ===
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

                      fontSize:
                        "14px",
                    }}
                  >
                    {
                      brand.createdDate
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        brand.id
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
                      selectedBrandId ===
                        brand.id
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
                          `/products/brands/view/${brand.id}`
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
                          `/products/brands/edit/${brand.id}`
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