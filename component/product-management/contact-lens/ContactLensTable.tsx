"use client";

import {
  useState,
} from "react";

import {
  ContactLens,
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

  contactLenses:
    ContactLens[];

  setContactLensData:
    React.Dispatch<
      React.SetStateAction<
        ContactLens[]
      >
    >;
}

export default function ContactLensTable({
  contactLenses,
  setContactLensData,
}: Props) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedLensId, setSelectedLensId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedLensId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedLensId(null);
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
      | "Out of Stock"
  ) => {

    setContactLensData((prev) =>
      prev.map((lens) =>
        lens.id === id
          ? {
              ...lens,
              status: value,
            }
          : lens
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
            borderColor:
              "#F1F5F9",
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
                Product
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
                Power Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Modality
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

          {contactLenses.map(
            (
              lens
            ) => (

              <TableRow
                key={
                  lens.id
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

                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 1,
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
                          lens.lensName
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
                      lens.brand
                    }
                  </Typography>

                </TableCell>


                {/* POWER TYPE */}
                <TableCell>

                  <Chip
                    label={
                      lens.powerType
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

                {/* MODALITY */}
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
                      lens.modality
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
                        lens.stock <= 5
                          ? "#EA580C"
                          : "#16A34A",
                    }}
                  >
                    {
                      lens.stock
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
                        lens.sellingPrice.toLocaleString()
                      }
                    </Typography>
                  </Box>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={lens.status}
                    onChange={(e) =>
                      handleStatusChange(
                        lens.id,
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
                        lens.status ===
                        "Active"

                          ? "#DCFCE7"

                          : lens.status ===
                            "Inactive"

                            ? "#FEE2E2"

                            : "#FFF7ED",

                      color:
                        lens.status ===
                        "Active"

                          ? "#15803D"

                          : lens.status ===
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
                            lens.status ===
                            "Active"

                              ? "#15803D"

                              : lens.status ===
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
                      lens.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        lens.id
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
                      selectedLensId ===
                        lens.id
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
                          `/products/contact-lens/view/${lens.id}`
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
                          `/products/contact-lens/edit/${lens.id}`
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