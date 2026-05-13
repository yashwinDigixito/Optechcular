"use client";

import {
  Ledger,
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

  ledgers:
    Ledger[];
}

export default function LedgerTable({
  ledgers,
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
      <Table
        sx={{
          "& .MuiTableCell-root":
            {
              py: 2,

              borderColor:
                "#F1F5F9",
            },
        }}
      >
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
                Ledger Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Group
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Opening Balance
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Balance Type
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Current Balance
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

          {ledgers.map(
            (ledger) => (

              <TableRow
                key={ledger.id}
                hover
                sx={{
                  "&:hover": {
                    background:
                      "#F8FAFC",
                  },
                }}
              >
                {/* LEDGER NAME */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,

                      color:
                        "#2563EB",
                    }}
                  >
                    {
                      ledger.ledgerName
                    }
                  </Typography>

                </TableCell>

                {/* GROUP */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {
                      ledger.ledgerGroup
                    }
                  </Typography>

                </TableCell>

                {/* OPENING BALANCE */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    ₹
                    {
                      ledger.openingBalance.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                {/* BALANCE TYPE */}
                <TableCell>

                  <Chip
                    label={
                      ledger.balanceType
                    }
                    size="small"
                    sx={{
                      background:
                        ledger.balanceType ===
                        "Debit"

                          ? "#FEF3C7"

                          : "#DCFCE7",

                      color:
                        ledger.balanceType ===
                        "Debit"

                          ? "#B45309"

                          : "#15803D",

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* CURRENT BALANCE */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    ₹
                    {
                      ledger.currentBalance.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <Chip
                    label={
                      ledger.status
                    }
                    size="small"
                    sx={{
                      background:
                        ledger.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        ledger.status ===
                        "Active"

                          ? "#15803D"

                          : "#DC2626",

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* CREATED ON */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#64748B",
                    }}
                  >
                    {
                      ledger.createdOn
                    }
                  </Typography>

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
                            `/ledgers/view/${ledger.id}`
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
                            `/ledgers/edit/${ledger.id}`
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