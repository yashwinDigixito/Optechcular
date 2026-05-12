"use client";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EditIcon from "@mui/icons-material/Edit";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
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

import { Invoice } from "@/assets/types";

interface Props {

  invoices: Invoice[];

  setInvoiceData:
    React.Dispatch<
      React.SetStateAction<
        Invoice[]
      >
    >;
}

export default function InvoiceTable({
  invoices,
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
              <Typography sx={{fontWeight:700}}>
                Invoice No
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Customer
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Product
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Category
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Amount
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Payment
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Status
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Invoice Date
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Actions
              </Typography>
            </TableCell>

          </TableRow>

        </TableHead>

        {/* TABLE BODY */}
        <TableBody>

          {invoices.map(
            (invoice) => (

              <TableRow
                key={invoice.id}
                hover
                sx={{
                  "&:hover": {
                    background:
                      "#F8FAFC",
                  },
                }}
              >
                {/* INVOICE NO */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,

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
                      fontWeight: 600,
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
                <TableCell>

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

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* AMOUNT */}
                <TableCell>

                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    ₹
                    {
                      invoice.totalAmount.toLocaleString()
                    }
                  </Typography>

                </TableCell>

                {/* PAYMENT */}
                <TableCell>

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

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* STATUS */}
                <TableCell>

                  <Chip
                    label={
                      invoice.invoiceStatus
                    }
                    size="small"
                    sx={{
                      background:
                        invoice.invoiceStatus ===
                        "Completed"

                          ? "#DCFCE7"

                          : invoice.invoiceStatus ===
                            "Pending"

                          ? "#FEF3C7"

                          : "#DBEAFE",

                      color:
                        invoice.invoiceStatus ===
                        "Completed"

                          ? "#15803D"

                          : invoice.invoiceStatus ===
                            "Pending"

                          ? "#B45309"

                          : "#2563EB",

                      fontWeight: 700,

                      borderRadius:
                        "8px",
                    }}
                  />

                </TableCell>

                {/* DATE */}
                <TableCell>

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
                            `/invoices/view/${invoice.id}`
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
                            `/invoices/edit/${invoice.id}`
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

                    {/* PRINT */}
                    <Tooltip title="Print">

                      <IconButton
                        sx={{
                          background:
                            "#ECFDF5",

                          "&:hover":
                            {
                              background:
                                "#D1FAE5",
                            },
                        }}
                      >
                        <PrintOutlinedIcon
                          sx={{
                            color:
                              "#059669",
                          }}
                        />
                      </IconButton>

                    </Tooltip>

                    {/* DOWNLOAD */}
                    <Tooltip title="Download">

                      <IconButton
                        sx={{
                          background:
                            "#FEF2F2",

                          "&:hover":
                            {
                              background:
                                "#FEE2E2",
                            },
                        }}
                      >
                        <DownloadOutlinedIcon
                          sx={{
                            color:
                              "#DC2626",
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