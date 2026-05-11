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
  rimShapes: {
    id: string;
    shapeName: string;
    description: string;
    status: string;
    createdOn: string;
  }[];
}

export default function RimShapeTable({
  rimShapes,
}: Props) {

  const router =
    useRouter();

  const [shapeData, setShapeData] =
    useState(rimShapes);

  const handleToggleStatus = (
    id: string
  ) => {

    setShapeData((prev) =>
      prev.map((shape) =>
        shape.id === id
          ? {
              ...shape,

              status:
                shape.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : shape
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
                Shape Name
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

        <TableBody>

          {shapeData.map((shape) => (

            <TableRow
              key={shape.id}
              hover
            >
              {/* SHAPE NAME */}
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {
                    shape.shapeName
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
                    shape.description
                  }
                </Typography>

              </TableCell>

              {/* STATUS */}
              <TableCell>

                <StatusChip
                  status={
                    shape.status
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
                    shape.createdOn
                  }
                </Typography>

              </TableCell>

              {/* ACTIONS */}
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
                          `/products/rim-shapes/view/${shape.id}`
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
                          `/products/rim-shapes/edit/${shape.id}`
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>

                  </Tooltip>

                  {/* DEACTIVATE */}
                  <Tooltip
                    title={
                      shape.status ===
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
                          shape.id
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