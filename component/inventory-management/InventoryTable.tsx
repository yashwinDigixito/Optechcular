"use client";

import {
    Inventory,
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

  inventories:
    Inventory[];
}

export default function InventoryTable({
  inventories,
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
                Product
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                SKU
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Barcode
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Brand
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Stock
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{fontWeight:700}}>
                Price
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

          {inventories.map(
            (
              item
            ) => (

              <TableRow
                key={item.id}
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
                      item.productName
                    }
                  </Typography>

                </TableCell>

                <TableCell>
                  {item.sku}
                </TableCell>

                <TableCell>
                  {item.barcode}
                </TableCell>

                <TableCell>
                  {item.brand}
                </TableCell>

                <TableCell>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      color:
                        item.stock <=
                        item.minStock

                          ? "#DC2626"

                          : "#15803D",
                    }}
                  >
                    {item.stock}
                  </Typography>

                </TableCell>

                <TableCell>
                  ₹
                  {
                    new Intl.NumberFormat(
                      "en-IN"
                    ).format(
                      item.price
                    )
                  }
                </TableCell>

                <TableCell>

                  <Chip
                    label={
                      item.status
                    }
                    size="small"
                    sx={{
                      background:
                        item.status ===
                        "In Stock"

                          ? "#DCFCE7"

                          : "#FEE2E2",

                      color:
                        item.status ===
                        "In Stock"

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
                            `/inventory/view/${item.id}`
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
                            `/inventory/edit/${item.id}`
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