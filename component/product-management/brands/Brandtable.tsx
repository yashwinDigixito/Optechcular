"use client";

import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState, } from "react";

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

interface BrandTableProps {
  brands: {
    id: string;
    brandName: string;
    category: string;
    brandGroup: string;
    status: string;
    createdOn: string;
  }[];
}

export default function BrandTable({
  brands,
}: BrandTableProps) {

  const router =
    useRouter();

  const [brandData, setBrandData] =
    useState(brands);

  const handleToggleStatus = (
    id: string
  ) => {

    setBrandData((prev) =>
      prev.map((brand) =>
        brand.id === id
          ? {
              ...brand,

              status:
                brand.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : brand
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
                Brand Name
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

          {brandData.map((brand) => (

            <TableRow
              key={brand.id}
              hover
            >
              {/* BRAND NAME */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {brand.brandName}
                </Typography>

              </TableCell>

              {/* CATEGORY */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {brand.category}
                </Typography>
              </TableCell>

              {/* BRAND GROUP */}
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {brand.brandGroup}
                </Typography>
              </TableCell>

              {/* STATUS */}
              <TableCell>

                <StatusChip
                  status={brand.status}
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
                  {brand.createdOn}
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
                          `/products/brands/view/${brand.id}`
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
                          `/products/brands/edit/${brand.id}`
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
                      brand.status ===
                      "Active"
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    <IconButton
                      sx={{
                        background:
                          brand.status ===
                          "Active"
                            ? "#FEF2F2"
                            : "#DCFCE7",

                        "&:hover": {
                          background:
                            brand.status ===
                            "Active"
                              ? "#FEE2E2"
                              : "#BBF7D0",
                        },
                      }}
                      onClick={() =>
                        handleToggleStatus(
                          brand.id
                        )
                      }
                    >
                      <BlockIcon
                        sx={{
                          color:
                            brand.status ===
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