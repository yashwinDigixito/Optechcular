"use client";

import StatusChip from "@/component/common/StatusChip";
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
import { useState, } from "react";

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

  const router = useRouter();
  const [statusMap, setStatusMap] = useState<Record<string, string>>({});
  const handleToggleStatus = (
    id: string
  ) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]:
        (
          prev[id] ||
          categories.find((category) => category.id === id )?.status ) === "Active" ? "Inactive" : "Active",
    }));
  };

  return (
    <TableContainer
      sx={{
        mt: 2,
        borderRadius: "24px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(15,23,42,0.04)",
      }}
    >
      <Table
        sx={{
          minWidth: 900,
          "& .MuiTableCell-root":
            {
              py: 2.5,
              borderColor: "#F1F5F9",
            },
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              background: "#F8FAFC",
              "& .MuiTableCell-root":
                {
                  py: 2.2,
                },
            }}
          >
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Category Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Description
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
                Created On
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
        <TableBody>
          {categories.map(
            (category) => {
              const currentStatus = statusMap[ category.id ] || category.status;
              return (
                <TableRow
                  key={category.id}
                  hover
                  sx={{
                    transition: "0.2s",
                    "&:hover": {
                      background: "#F8FAFC",
                    },
                  }}
                >
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#2563EB",
                        fontSize: "16px",
                      }}
                    >
                      { category.categoryName }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#475569",
                        maxWidth: "350px",
                      }}
                    >
                      { category.description }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <StatusChip status={ currentStatus }/>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontWeight: 500,
                      }}
                    >
                      { category.createdOn }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Tooltip title="View">
                        <IconButton
                          sx={{
                            background: "#EFF6FF",
                            "&:hover":
                              {
                                background: "#DBEAFE",
                              },
                          }}
                          onClick={() =>
                            router.push(`/products/categories/view/${category.id}`)
                          }
                        >
                          <RemoveRedEyeOutlinedIcon
                            sx={{
                              color: "#2563EB",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          sx={{
                            background: "#F8FAFC",
                            "&:hover":
                              {
                                background: "#E2E8F0",
                              },
                          }}
                          onClick={() =>
                            router.push( `/products/categories/edit/${category.id}`)
                          }
                        >
                          <EditIcon
                            sx={{
                              color: "#0F172A",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={
                          currentStatus === "Active" ? "Deactivate" : "Activate"
                        }
                      >
                        <IconButton
                          sx={{
                            background: currentStatus === "Active" ? "#FEF2F2" : "#DCFCE7",
                            "&:hover":
                              {
                                background: currentStatus === "Active" ? "#FEE2E2" : "#BBF7D0",
                              },
                          }}
                          onClick={() =>
                            handleToggleStatus( category.id )
                          }
                        >
                          <BlockIcon
                            sx={{
                              color: currentStatus === "Active" ? "#DC2626" : "#16A34A",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}