"use client";

import {
  useState,
} from "react";

import {
  Customer,
} from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

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

  const [
    anchorEl,
    setAnchorEl,
  ] = useState<
    null | HTMLElement
  >(null);

  const [
    selectedCustomerId,
    setSelectedCustomerId,
  ] = useState<
    string | null
  >(null);

  const handleMenuOpen = (
    event:
      React.MouseEvent<HTMLElement>,
    id: string
  ) => {

    setAnchorEl(
      event.currentTarget
    );

    setSelectedCustomerId(
      id
    );
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedCustomerId(
      null
    );
  };

  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setCustomerData((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: value,
            }
          : customer
      )
    );
  };

  return (
    <TableContainer
      sx={{
        borderRadius:
          "20px",

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

              borderBottom:
                "1px solid #E2E8F0",
            }}
          >
            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
                }}
              >
                Phone
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
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

                  color:
                    "#0F172A",
                }}
              >
                Location
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
                }}
              >
                Status
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,

                  color:
                    "#0F172A",
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

                      fontSize:
                        "16px",
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
                        "Individual"

                          ? "#EFF6FF"

                          : "#FDF4FF",

                      color:
                        customer.customerType ===
                        "Business"

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
                <TableCell align="center">

                  <Select
                    size="small"
                    value={
                      customer.status
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        customer.id,
                        e.target.value
                      )
                    }
                    sx={{
                      minWidth:
                        "110px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        600,

                      background:
                        customer.status ===
                        "Active"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        customer.status ===
                        "Active"

                          ? "#15803D"

                          : "#DC2626",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            customer.status ===
                            "Active"

                              ? "#15803D"

                              : "#DC2626",
                        },
                    }}
                  >
                    <MenuItem value="Active">
                      Active
                    </MenuItem>

                    <MenuItem value="Inactive">
                      Inactive
                    </MenuItem>

                  </Select>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        customer.id
                      )
                    }
                    sx={{
                      background:
                        "#F8FAFC",

                      width: 38,

                      height: 38,

                      "&:hover":
                        {
                          background:
                            "#E2E8F0",
                        },
                    }}
                  >
                    <MoreVertIcon
                      sx={{
                        color:
                          "#64748B",
                      }}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={
                      anchorEl
                    }
                    open={
                      Boolean(
                        anchorEl
                      ) &&
                      selectedCustomerId ===
                        customer.id
                    }
                    onClose={
                      handleMenuClose
                    }
                    slotProps={{
                      paper: {
                        sx: {
                          borderRadius:
                            "14px",

                          minWidth:
                            "120px",

                          boxShadow:
                            "0px 10px 30px rgba(15,23,42,0.08)",
                        },
                      },
                    }}
                  >
                    {/* VIEW */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/customers/view/${customer.id}`
                        );

                        handleMenuClose();
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon
                        sx={{
                          mr: 1,

                          color:
                            "#2563EB",
                        }}
                      />

                      View
                    </MenuItem>

                    {/* EDIT */}
                    <MenuItem
                      onClick={() => {

                        router.push(
                          `/customers/edit/${customer.id}`
                        );

                        handleMenuClose();
                      }}
                    >
                      <EditIcon
                        sx={{
                          mr: 1,

                          color:
                            "#0F172A",
                        }}
                      />

                      Edit
                    </MenuItem>

                  </Menu>

                </TableCell>

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
}