"use client";

import { useState } from "react";

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

interface Props {
  materials: {
    id: string;
    materialName: string;
    applicableFor: string;
    status: string;
    createdOn: string;
  }[];
}

export default function MaterialTable({
  materials,
}: Props) {

  const router =
    useRouter();

  const [materialData, setMaterialData] =
    useState(materials);

  const handleToggleStatus = (
    id: string
  ) => {

    setMaterialData((prev) =>
      prev.map((material) =>
        material.id === id
          ? {
              ...material,

              status:
                material.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : material
      )
    );
  };

  return (
    <TableContainer>

      <Table>

        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Material Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Applicable For
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

        <TableBody>

          {materialData.map((material) => (

            <TableRow
              key={material.id}
              hover
            >
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {
                    material.materialName
                  }
                </Typography>

              </TableCell>

              <TableCell>
                {
                  material.applicableFor
                }
              </TableCell>

              <TableCell>

                <StatusChip
                  status={
                    material.status
                  }
                />

              </TableCell>

              <TableCell>
                {
                  material.createdOn
                }
              </TableCell>

              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {/* VIEW */}
                  <Tooltip title="View">

                    <IconButton
                      sx={{
                        background:
                          "#EFF6FF",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/materials/view/${material.id}`
                        )
                      }
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>

                  </Tooltip>

                  {/* EDIT */}
                  <Tooltip title="Edit">

                    <IconButton
                      sx={{
                        background:
                          "#F8FAFC",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/materials/edit/${material.id}`
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>

                  </Tooltip>

                  {/* DEACTIVATE */}
                  <Tooltip
                    title={
                      material.status ===
                      "Active"
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    <IconButton
                      sx={{
                        background:
                          "#FEF2F2",
                      }}
                      onClick={() =>
                        handleToggleStatus(
                          material.id
                        )
                      }
                    >
                      <BlockIcon
                        sx={{
                          color:
                            "#DC2626",
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