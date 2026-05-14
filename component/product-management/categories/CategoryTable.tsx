"use client";

import {
  useState,
} from "react";

import {
  Category,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
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

interface CategoryTableProps {

  categories:
    Category[];

  setCategoryData:
    React.Dispatch<
      React.SetStateAction<
        Category[]
      >
    >;
}

export default function CategoryTable({
  categories,
  setCategoryData,
}: CategoryTableProps) {

  const router =
    useRouter();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedCategoryId, setSelectedCategoryId] =
    useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedCategoryId(id);
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedCategoryId(null);
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Active"
      | "Inactive"
  ) => {

    setCategoryData((prev) =>
      prev.map((category) =>
        category.id === id
          ? {
              ...category,
              status: value,
            }
          : category
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
                Category Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Parent Category
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

        <TableBody>

          {categories.map(
            (
              category
            ) => (

              <TableRow
                key={
                  category.id
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

                {/* CATEGORY */}
                <TableCell>

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
                      category.categoryName
                    }
                  </Typography>

                </TableCell>

                {/* CATEGORY TYPE */}
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
                      category.categoryType
                    }
                  </Typography>

                </TableCell>

                {/* PARENT CATEGORY */}
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
                      category.parentCategory ||
                      "-"
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={category.status}
                    onChange={(e) =>
                      handleStatusChange(
                        category.id,
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
                        category.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        category.status ===
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
                            category.status ===
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

                {/* CREATED DATE */}
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
                      category.createdOn
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        category.id
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
                      selectedCategoryId ===
                        category.id
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
                          `/products/categories/view/${category.id}`
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
                          `/products/categories/edit/${category.id}`
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