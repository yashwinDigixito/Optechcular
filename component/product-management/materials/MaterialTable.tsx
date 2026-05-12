"use client";

import StatusChip from "@/component/common/StatusChip";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  Box,
  Chip,
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
import {
  useState,
} from "react";

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

  const router = useRouter();
  const [statusMap, setStatusMap] = useState< Record<string, string> >({});

  const handleToggleStatus = (
    id: string
  ) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]:
        (
          prev[id] || materials.find( (material) => material.id === id )?.status ) === "Active" ? "Inactive" : "Active",
    }));
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
        overflow: "hidden",
        boxShadow:
          "0px 4px 20px rgba(15,23,42,0.04)",
      }}
    >
      <Table
        sx={{
          minWidth: 950,
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
                Material Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Applicable For
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
          {materials.map(
            (material) => {
              const currentStatus = statusMap[ material.id ] || material.status;
              return (
                <TableRow
                  key={material.id}
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
                      { material.materialName }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={material.applicableFor}
                      sx={{
                        background:
                          "#EFF6FF",
                        color:
                          "#2563EB",
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <StatusChip
                      status={currentStatus}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontWeight: 500,
                      }}
                    >
                      {material.createdOn}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
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
                            router.push(`/products/materials/view/${material.id}`)
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
                            router.push(`/products/materials/edit/${material.id}`)
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
                        title={ currentStatus === "Active" ? "Deactivate" : "Activate"
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
                            handleToggleStatus(
                              material.id
                            )
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