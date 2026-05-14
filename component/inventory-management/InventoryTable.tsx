"use client";

import {
  useState,
} from "react";

import {
  Inventory,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
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

  inventories:
    Inventory[];

  setInventoryData:
    React.Dispatch<
      React.SetStateAction<
        Inventory[]
      >
    >;
}

export default function InventoryTable({
  inventories,
  setInventoryData,
}: Props) {

  const router =
    useRouter();

  const [
    anchorEl,
    setAnchorEl,
  ] = useState<
    null | HTMLElement
  >(null);

  const [
    selectedInventoryId,
    setSelectedInventoryId,
  ] = useState<
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

    setSelectedInventoryId(
      id
    );
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedInventoryId(
      null
    );
  };

  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setInventoryData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: value,
            }
          : item
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
          "& .MuiTableCell-root":
            {
              py: 2,

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

              borderBottom:
                "1px solid #E2E8F0",
            }}
          >
            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
                }}
              >
                Product
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
                }}
              >
                SKU
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
                }}
              >
                Barcode
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
                }}
              >
                Brand
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
                }}
              >
                Actions
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {inventories.map(
            (
              item
            ) => (

              <TableRow
                key={
                  item.id
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
                {/* PRODUCT */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#2563EB",

                      fontSize:
                        "16px",
                    }}
                  >
                    {
                      item.productName
                    }
                  </Typography>

                </TableCell>

                {/* SKU */}
                <TableCell>

                  <Typography>
                    {
                      item.sku
                    }
                  </Typography>

                </TableCell>

                {/* BARCODE */}
                <TableCell>

                  <Typography>
                    {
                      item.barcode
                    }
                  </Typography>

                </TableCell>

                {/* BRAND */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",
                    }}
                  >
                    {
                      item.brand
                    }
                  </Typography>

                </TableCell>

                {/* STOCK */}
                <TableCell align="center">

                  <Chip
                    label={
                      item.stock
                    }
                    sx={{
                      background:
                        item.stock === 0

                          ? "#FEE2E2"

                          : item.stock <=
                            item.minStock

                          ? "#FEF3C7"

                          : "#DCFCE7",

                      color:
                        item.stock === 0

                          ? "#DC2626"

                          : item.stock <=
                            item.minStock

                          ? "#B45309"

                          : "#15803D",

                      fontWeight:
                        700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* PRICE */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#0F172A",
                    }}
                  >
                    ₹{" "}
                    {
                      new Intl.NumberFormat(
                        "en-IN"
                      ).format(
                        item.price
                      )
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={
                      item.status
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        item.id,
                        e.target.value
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
                        item.status ===
                        "In Stock"

                          ? "#DCFCE7"

                          : item.status ===
                            "Low Stock"

                          ? "#FEF3C7"

                          : "#FEE2E2",

                      color:
                        item.status ===
                        "In Stock"

                          ? "#15803D"

                          : item.status ===
                            "Low Stock"

                          ? "#B45309"

                          : "#DC2626",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            item.status ===
                            "In Stock"

                              ? "#15803D"

                              : item.status ===
                                "Low Stock"

                              ? "#B45309"

                              : "#DC2626",
                        },
                    }}
                  >
                    <MenuItem value="In Stock">
                      In Stock
                    </MenuItem>

                    <MenuItem value="Low Stock">
                      Low Stock
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
                        item.id
                      )
                    }
                    sx={{
                      background:
                        "#F8FAFC",

                      width: 38,

                      height: 38,

                      "&:hover":
                        {
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
                      selectedInventoryId ===
                        item.id
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
                            "120px",

                          boxShadow:
                            "0px 10px 30px rgba(15,23,42,0.08)",
                        },
                      },
                    }}
                  >
                    {/* VIEW */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/inventory/view/${item.id}`
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

                    {/* EDIT */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/inventory/edit/${item.id}`
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