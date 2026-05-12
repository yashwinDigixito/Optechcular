"use client";

import StatusChip from "@/component/common/StatusChip";
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
import { useState } from "react";

interface Props {
  contactLenses: {
    id: string;
    productName: string;
    productCode: string;
    brand: string;
    powerType: string;
    modality: string;
    material: string;
    productType: string;
    baseCurve: string;
    diameter: string;
    stock: number;
    price: number;
    status: string;
    createdOn: string;
  }[];
}

export default function ContactLensTable({
  contactLenses,
}: Props) {
  const router = useRouter();
  const [statusMap, setStatusMap] = useState<Record<string, string>>({});
  const handleToggleStatus = (
  id: string
) => {
  setStatusMap((prev) => ({
    ...prev,
    [id]: prev[id] === "Active" ? "Inactive" : "Active",
  }));
};
  return (
    <TableContainer
  sx={{
    mt: 2,
    borderRadius: "20px",
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    overflow: "hidden",
    boxShadow: "0px 4px 20px rgba(15,23,42,0.04)",
  }}
>

      <Table
        sx={{
          minWidth: 1100,
          "& .MuiTableCell-root":
            {
              py: 2,
              borderColor: "#F1F5F9",
            },
        }}
      >

        <TableHead>
          <TableRow
            sx={{
              background: "#F8FAFC",
              "& .MuiTableCell-root":
                {
                  py: 2.2,
                },
            }}
          >
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Product
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Product Code
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Brand
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Power Type
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Price
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Stock
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactLenses.map((lens) => (
            <TableRow
              key={lens.id}
              hover
              sx={{
                transition: "0.2s",
                "&:hover": {
                  background: "#F8FAFC",
                },
              }}
            >
              <TableCell>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#2563EB",
                    }}
                  >
                    { lens.productName }
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "14px",
                    }}
                  >
                    {
                      lens.modality
                    }{" "}
                    •{" "}
                    {
                      lens.material
                    }
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={
                    lens.productCode
                  }
                  sx={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    fontWeight: 700,
                  }}
                />
              </TableCell>
              <TableCell>
                {lens.brand}
              </TableCell>
              <TableCell>
                {lens.powerType}
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  ₹ {lens.price}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={`${lens.stock} pcs`}
                  sx={{ background: lens.stock > 0 ? "#DCFCE7" : "#FEE2E2",
                    color: lens.stock > 0 ? "#16A34A" : "#DC2626",
                    fontWeight: 700,
                  }}
                />
              </TableCell>
              <TableCell>
                <StatusChip status={ statusMap[lens.id] || lens.status}/>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Tooltip title="View">
                    <IconButton
                      sx={{
                        background: "#EFF6FF",
                      }}
                      onClick={() =>
                        router.push(`/products/contact-lens/view/${lens.id}`)
                      }
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton
                      sx={{
                        background: "#F8FAFC",
                      }}
                      onClick={() =>
                        router.push(`/products/contact-lens/edit/${lens.id}`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                    (
                      statusMap[lens.id] ||
                      lens.status
                    ) === "Active"
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    <IconButton
                      sx={{
                        background:
                          "#FEF2F2",
                      }}
                      onClick={() =>
                        handleToggleStatus(
                          lens.id
                        )
                      }
                    >
                      <BlockIcon
                        sx={{
                          color: "#DC2626",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}