"use client";

import {
  useState,
} from "react";

import {
  Invoice,
} from "@/assets/types";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import EditIcon from "@mui/icons-material/Edit";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

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

  invoices:
    Invoice[];

  setInvoiceData:
    React.Dispatch<
      React.SetStateAction<
        Invoice[]
      >
    >;
}

export default function InvoiceTable({
  invoices,
  setInvoiceData,
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
    selectedInvoiceId,
    setSelectedInvoiceId,
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

    setSelectedInvoiceId(
      id
    );
  };

  const handleMenuClose = () => {

    setAnchorEl(null);

    setSelectedInvoiceId(
      null
    );
  };

  const handleStatusChange = (
    id: string,
    value:
      | "Draft"
      | "Sent"
      | "Cancelled"
  ) => {

    setInvoiceData((prev) =>
      prev.map((invoice) =>
        invoice.id === id
          ? {
              ...invoice,
              invoiceStatus:
                value,
            }
          : invoice
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
                }}
              >
                Invoice No
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Customer
              </Typography>

            </TableCell>

            <TableCell>

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Product
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Category
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Amount
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Payment
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Invoice Status
              </Typography>

            </TableCell>

            <TableCell align="center">

              <Typography
                sx={{
                  fontWeight:
                    700,
                }}
              >
                Date
              </Typography>

            </TableCell>

            <TableCell align="center">

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

          {invoices.map(
            (
              invoice
            ) => (

              <TableRow
                key={
                  invoice.id
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
                {/* INVOICE NO */}
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
                      invoice.invoiceNo
                    }
                  </Typography>

                </TableCell>

                {/* CUSTOMER */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        600,
                    }}
                  >
                    {
                      invoice.customerName
                    }
                  </Typography>

                </TableCell>

                {/* PRODUCT */}
                <TableCell>

                  <Typography
                    sx={{
                      color:
                        "#475569",
                    }}
                  >
                    {
                      invoice.productName
                    }
                  </Typography>

                </TableCell>

                {/* CATEGORY */}
                <TableCell align="center">

                  <Chip
                    label={
                      invoice.category
                    }
                    size="small"
                    sx={{
                      background:
                        "#EFF6FF",

                      color:
                        "#2563EB",

                      fontWeight:
                        700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* AMOUNT */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      fontWeight:
                        700,
                    }}
                  >
                    ₹{" "}
                    {
                      new Intl.NumberFormat(
                        "en-IN"
                      ).format(
                        invoice.lineTotal
                      )
                    }
                  </Typography>

                </TableCell>

                {/* PAYMENT */}
                <TableCell align="center">

                  <Chip
                    label={
                      invoice.paymentStatus
                    }
                    size="small"
                    sx={{
                      background:
                        invoice.paymentStatus ===
                        "Paid"

                          ? "#DCFCE7"

                          : invoice.paymentStatus ===
                            "Pending"

                          ? "#FEF3C7"

                          : "#DBEAFE",

                      color:
                        invoice.paymentStatus ===
                        "Paid"

                          ? "#15803D"

                          : invoice.paymentStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#2563EB",

                      fontWeight:
                        700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* STATUS */}
                <TableCell align="center">

                  <Select
                    size="small"
                    value={
                      invoice.invoiceStatus
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        invoice.id,
                        e.target.value as
                          | "Draft"
                          | "Sent"
                          | "Cancelled"
                      )
                    }
                    sx={{
                      minWidth:
                        "120px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        600,

                      background:
                        invoice.invoiceStatus ===
                        "Sent"

                          ? "#DCFCE7"

                          : invoice.invoiceStatus ===
                            "Draft"

                          ? "#FEF3C7"

                          : "#FEE2E2",

                      color:
                        invoice.invoiceStatus ===
                        "Sent"

                          ? "#15803D"

                          : invoice.invoiceStatus ===
                            "Draft"

                          ? "#B45309"

                          : "#DC2626",

                      ".MuiOutlinedInput-notchedOutline":
                        {
                          border:
                            "none",
                        },

                      ".MuiSelect-icon":
                        {
                          color:
                            invoice.invoiceStatus ===
                            "Sent"

                              ? "#15803D"

                              : invoice.invoiceStatus ===
                                "Draft"

                              ? "#B45309"

                              : "#DC2626",
                        },
                    }}
                  >
                    <MenuItem value="Sent">
                      Sent
                    </MenuItem>

                    <MenuItem value="Draft">
                      Draft
                    </MenuItem>

                    <MenuItem value="Cancelled">
                      Cancelled
                    </MenuItem>

                  </Select>

                </TableCell>

                {/* DATE */}
                <TableCell align="center">

                  <Typography
                    sx={{
                      color:
                        "#64748B",
                    }}
                  >
                    {
                      invoice.invoiceDate
                    }
                  </Typography>

                </TableCell>

                {/* ACTIONS */}
                <TableCell align="center">

                  <IconButton
                    onClick={(e) =>
                      handleMenuOpen(
                        e,
                        invoice.id
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
                      selectedInvoiceId ===
                        invoice.id
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
                            "150px",

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
                          `/invoices/view/${invoice.id}`
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
                          `/invoices/edit/${invoice.id}`
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

                    {/* PRINT */}
                    <MenuItem>

                      <PrintOutlinedIcon
                        sx={{
                          mr: 1,

                          color:
                            "#059669",
                        }}
                      />

                      Print

                    </MenuItem>

                    {/* DOWNLOAD */}
                    <MenuItem>

                      <DownloadOutlinedIcon
                        sx={{
                          mr: 1,

                          color:
                            "#DC2626",
                        }}
                      />

                      Download

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