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
          "20px",

        border:
          "1px solid #E2E8F0",
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
                Ledger Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Group
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Balance Type
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Current Balance
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

          {ledgers.map(
            (ledger) => (

              <TableRow
                key={ledger.id}
                hover
              >
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#2563EB",

                      fontWeight:
                        700,
                    }}
                  >
                    {
                      ledger.ledgerName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    ledger.ledgerGroup
                  }
                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      ledger.balanceType
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        ledger.balanceType ===
                        "Debit"

                          ? "#FEF3C7"

                          : "#DCFCE7",

                      color:
                        ledger.balanceType ===
                        "Debit"

                          ? "#B45309"

                          : "#15803D",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                <TableCell>

                  <Typography
                    sx={{fontWeight:700}}
                  >
                    ₹
                    {
                      ledger.currentBalance.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      ledger.status
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        ledger.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        ledger.status ===
                        "Active"

                          ? "#15803D"

                          : "#DC2626",

                      fontWeight:
                        700,
                    }}
                  />

                </TableCell>

                <TableCell>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 1,
                    }}
                  >
                    <Tooltip title="View">

                      <IconButton
                        onClick={() =>
                          router.push(
                            `/ledgers/view/${ledger.id}`
                          )
                        }
                      >
                        <RemoveRedEyeOutlinedIcon />
                      </IconButton>

                    </Tooltip>

                    <Tooltip title="Edit">

                      <IconButton
                        onClick={() =>
                          router.push(
                            `/ledgers/edit/${ledger.id}`
                          )
                        }
                      >
                        <EditIcon />
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