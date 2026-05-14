"use client";

import {
  Customer,
} from "@/assets/types";

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

import StatusChip from "@/component/common/StatusChip";

interface Props {

  customers:
    Customer[];

  setCustomerData:
    React.Dispatch<
      React.SetStateAction<
        Customer[]
      >
    >;
}

export default function CustomerTable({
  customers,
  setCustomerData,
}: Props) {

  const router =
    useRouter();

  const handleToggleStatus = (
    id: string
  ) => {

    setCustomerData((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? {
              ...customer,

              status:
                customer.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : customer
      )
    );
  };

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

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Customer Name
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Customer Type
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Phone Number
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Email
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Location
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Status
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Created On
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Actions
              </Typography>

            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {customers.map(
            (
              customer
            ) => (

              <TableRow
                key={
                  customer.id
                }
                hover
                sx={{
                  "&:hover":
                    {
                      background:
                        "#F8FAFC",
                    },
                }}
              >
                {/* NAME */}
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
                      customer.customerName
                    }
                  </Typography>

                </TableCell>

                {/* CUSTOMER TYPE */}
                <TableCell>

                  <Chip
                    label={
                      customer.customerType
                    }
                    size="small"
                    sx={{
                      background:
                        customer.customerType ===
                        "B2B"

                          ? "#EFF6FF"

                          : "#FDF4FF",

                      color:
                        customer.customerType ===
                        "B2B"

                          ? "#2563EB"

                          : "#C026D3",

                      fontWeight:
                        700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* PHONE */}
                <TableCell>

                  <Typography>
                    {
                      customer.phone
                    }
                  </Typography>

                </TableCell>

                {/* EMAIL */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",
                    }}
                  >
                    {
                      customer.email
                    }
                  </Typography>

                </TableCell>

                {/* LOCATION */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",
                    }}
                  >
                    {
                      customer.city
                    },{" "}
                    {
                      customer.state
                    }
                  </Typography>

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <StatusChip
                    status={
                      customer.status
                    }
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
                      customer.createdOn
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
                            `/customers/view/${customer.id}`
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
                            `/customers/edit/${customer.id}`
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

                    {/* STATUS */}
                    <Tooltip
                      title={
                        customer.status ===
                        "Active"
                          ? "Deactivate"
                          : "Activate"
                      }
                    >
                      <IconButton
                        sx={{
                          background:
                            customer.status ===
                            "Active"

                              ? "#FEF2F2"

                              : "#DCFCE7",
                        }}
                        onClick={() =>
                          handleToggleStatus(
                            customer.id
                          )
                        }
                      >
                        <BlockIcon
                          sx={{
                            color:
                              customer.status ===
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
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}