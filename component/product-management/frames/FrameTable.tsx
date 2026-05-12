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
  frames: {
    id: string;
    brand: string;
    modelNo: string;
    rimType: string;
    rimShape: string;
    category: string;
    srp: number;
    stock: number;
    status: string;
    createdOn: string;
  }[];
}

export default function FrameTable({
  frames,
}: Props) {

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
          frames.find( (frame) => frame.id === id )?.status ) === "Active" ? "Inactive" : "Active",
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
          minWidth: 1100,
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
                Brand
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Model No
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Rim Type
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Rim Shape
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Category
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                SRP
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Stock
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
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {frames.map(
            (frame) => {
              const currentStatus = statusMap[ frame.id ] || frame.status;
              return (
                <TableRow
                  key={frame.id}
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
                      { frame.brand }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#0F172A",
                      }}
                    >
                      { frame.modelNo }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: "#475569",
                      }}
                    >
                      { frame.rimType }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: "#475569",
                      }}
                    >
                      { frame.rimShape }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={
                        frame.category
                      }
                      sx={{
                        background: "#EFF6FF",
                        color: "#2563EB",
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#16A34A",
                      }}
                    >
                      ₹{" "}
                      {frame.srp.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={
                        frame.stock === 0 ? "Out of Stock" : frame.stock <= 5 ? "Low Stock" : "In Stock"
                      }
                      sx={{
                        background:
                          frame.stock === 0 ? "#FEE2E2" : frame.stock <= 5 ? "#FEF3C7" : "#DCFCE7",
                        color:
                          frame.stock === 0 ? "#DC2626" : frame.stock <= 5 ? "#D97706" : "#16A34A",
                        fontWeight: 700,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={ currentStatus }/>
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
                            router.push( `/products/frames/view/${frame.id}` )
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
                            router.push( `/products/frames/edit/${frame.id}`)
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
                        title={ currentStatus === "Active" ? "Deactivate" : "Activate"}
                      >
                        <IconButton
                          sx={{
                            background: currentStatus === "Active" ? "#FEF2F2" : "#DCFCE7",
                            "&:hover":
                              {
                                background: currentStatus === "Active" ? "#FEE2E2": "#BBF7D0",
                              },
                          }}
                          onClick={() => handleToggleStatus( frame.id )
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