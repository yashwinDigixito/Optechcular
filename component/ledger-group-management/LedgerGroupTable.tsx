"use client";

import {
  LedgerGroup,
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

  ledgerGroups:
    LedgerGroup[];
}

export default function LedgerGroupTable({
  ledgerGroups,
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
                Group Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Created At
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

          {ledgerGroups.map(
            (group) => (

              <TableRow
                key={group.id}
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
                      group.groupName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {
                    group.createdAt
                  }
                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      group.status
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        group.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        group.status ===
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
                            `/ledger-groups/view/${group.id}`
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
                            `/ledger-groups/edit/${group.id}`
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