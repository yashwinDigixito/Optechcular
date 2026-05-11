"use client";

import {
    useState,
} from "react";

import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
    Box,
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

interface CategoryTableProps {
  categories: {
    id: string;
    categoryName: string;
    description: string;
    status: string;
    createdOn: string;
  }[];
}

export default function CategoryTable({
  categories,
}: CategoryTableProps) {

  const router =
    useRouter();

  const [categoryData, setCategoryData] =
    useState(categories);

  const handleToggleStatus = (
    id: string
  ) => {

    setCategoryData((prev) =>
      prev.map((category) =>
        category.id === id
          ? {
              ...category,

              status:
                category.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : category
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
              <Typography sx={{ fontWeight: 700 }}>
                Category Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Description
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Created On
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {categoryData.map((category) => (

            <TableRow
              key={category.id}
              hover
            >
              {/* CATEGORY NAME */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {
                    category.categoryName
                  }
                </Typography>

              </TableCell>

              {/* DESCRIPTION */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#475569",
                  }}
                >
                  {
                    category.description
                  }
                </Typography>

              </TableCell>

              {/* STATUS */}
              <TableCell>

                <StatusChip
                  status={
                    category.status
                  }
                />

              </TableCell>

              {/* CREATED DATE */}
              <TableCell>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontWeight: 500,
                  }}
                >
                  {
                    category.createdOn
                  }
                </Typography>

              </TableCell>

              {/* ACTIONS */}
              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {/* VIEW */}
                  <Tooltip title="View">

                    <IconButton
                      sx={{
                        background:
                          "#EFF6FF",

                        "&:hover": {
                          background:
                            "#DBEAFE",
                        },
                      }}
                      onClick={() =>
                        router.push(
                          `/products/categories/view/${category.id}`
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

                        "&:hover": {
                          background:
                            "#E2E8F0",
                        },
                      }}
                      onClick={() =>
                        router.push(
                          `/products/categories/edit/${category.id}`
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

                  {/* DEACTIVATE */}
                  <Tooltip
                    title={
                      category.status ===
                      "Active"
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    <IconButton
                      sx={{
                        background:
                          category.status ===
                          "Active"
                            ? "#FEF2F2"
                            : "#DCFCE7",

                        "&:hover": {
                          background:
                            category.status ===
                            "Active"
                              ? "#FEE2E2"
                              : "#BBF7D0",
                        },
                      }}
                      onClick={() =>
                        handleToggleStatus(
                          category.id
                        )
                      }
                    >
                      <BlockIcon
                        sx={{
                          color:
                            category.status ===
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
          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}