"use client";

import {
    User,
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

  users:
    User[];
}

export default function UserTable({
  users,
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
                Full Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Email
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Phone Number
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Role
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

          {users.map(
            (user) => (

              <TableRow
                key={user.id}
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
                      user.fullName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {user.email}
                </TableCell>

                <TableCell>
                  {
                    user.phoneNumber
                  }
                </TableCell>

                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        600,
                    }}
                  >
                    {user.role}
                  </Typography>

                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      user.status
                    }
                    size="small"
                    sx={{
                      background:
                        user.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        user.status ===
                        "Active"

                          ? "#15803D"

                          : "#DC2626",

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
                            `/users/view/${user.id}`
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
                            `/users/edit/${user.id}`
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