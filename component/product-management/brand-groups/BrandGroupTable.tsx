"use client";

import {
    useState,
} from "react";

import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
    Box,
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
  groups: {
    id: string;
    groupName: string;
    description: string;
    status: string;
    createdOn: string;
  }[];
}

export default function BrandGroupTable({
  groups,
}: Props) {

  const router =
    useRouter();

  const [groupData, setGroupData] =
    useState(groups);

  const handleToggleStatus = (
    id: string
  ) => {

    setGroupData((prev) =>
      prev.map((group) =>
        group.id === id
          ? {
              ...group,

              status:
                group.status ===
                "Active"
                  ? "Inactive"
                  : "Active",
            }
          : group
      )
    );
  };

  return (
    <TableContainer>

      <Table>

        <TableHead>

          <TableRow
            sx={{
              background:
                "#F8FAFC",
            }}
          >
            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Group Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography sx={{ fontWeight: 700 }}>
                Description
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

        <TableBody>

          {groupData.map((group) => (

            <TableRow
              key={group.id}
              hover
            >
              <TableCell>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  {group.groupName}
                </Typography>

              </TableCell>

              <TableCell>
                {group.description}
              </TableCell>

              <TableCell>

                <StatusChip
                  status={group.status}
                />

              </TableCell>

              <TableCell>
                {group.createdOn}
              </TableCell>

              <TableCell>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  {/* VIEW */}
                  <Tooltip title="View">

                    <IconButton
                      sx={{
                        background:
                          "#EFF6FF",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/brand-groups/view/${group.id}`
                        )
                      }
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>

                  </Tooltip>

                  {/* EDIT */}
                  <Tooltip title="Edit">

                    <IconButton
                      sx={{
                        background:
                          "#F8FAFC",
                      }}
                      onClick={() =>
                        router.push(
                          `/products/brand-groups/edit/${group.id}`
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>

                  </Tooltip>

                  {/* DEACTIVATE */}
                  <Tooltip
                    title={
                      group.status ===
                      "Active"
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
                          group.id
                        )
                      }
                    >
                      <BlockIcon
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
          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}