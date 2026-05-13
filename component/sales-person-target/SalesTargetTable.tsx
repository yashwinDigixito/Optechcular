"use client";

import {
  SalesTarget,
} from "@/assets/types";

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

interface Props {

  salesTargets:
    SalesTarget[];
}

export default function SalesTargetTable({
  salesTargets,
}: Props) {

  const router =
    useRouter();

  return (
    <TableContainer
      sx={{
        borderRadius:
          "24px",

        border:
          "1px solid #E2E8F0",

        overflow:
          "hidden",

        background:
          "#FFFFFF",
      }}
    >
      <Table>

        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Sales Person
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Target
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Achieved
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Remaining
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Due Date
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Month
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {salesTargets.map(
            (
              target
            ) => (

              <TableRow
                key={
                  target.id
                }
                hover
              >
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#2563EB",
                    }}
                  >
                    {
                      target.salesPersonName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  ₹
                  {
                    target.targetAmount.toLocaleString()
                  }
                </TableCell>

                <TableCell>
                  ₹
                  {
                    target.achievedAmount.toLocaleString()
                  }
                </TableCell>

                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        "#DC2626",
                    }}
                  >
                    ₹
                    {
                      target.remainingAmount.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    target.dueDate
                  }
                </TableCell>

                <TableCell>
                  {
                    target.month
                  }
                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      target.status
                    }
                    size="small"
                    sx={{
                      background:
                        target.status ===
                        "Completed"

                          ? "#DCFCE7"

                          : target.status ===
                            "Pending"

                          ? "#FEE2E2"

                          : "#FEF3C7",

                      color:
                        target.status ===
                        "Completed"

                          ? "#15803D"

                          : target.status ===
                            "Pending"

                          ? "#DC2626"

                          : "#B45309",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                {/* ACTIONS */}
                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,
                    }}
                  >
                    {/* VIEW */}
                    <Tooltip title="View">

                      <IconButton
                        sx={{
                          background:
                            "#EFF6FF",

                          "&:hover":
                            {
                              background:
                                "#DBEAFE",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/sales-target/view/${target.id}`
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

                          "&:hover":
                            {
                              background:
                                "#E2E8F0",
                            },
                        }}
                        onClick={() =>
                          router.push(
                            `/sales-target/edit/${target.id}`
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

                  </Box>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}