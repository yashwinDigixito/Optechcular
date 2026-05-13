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

interface Props {

  users: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    role: string;
    status: string;
    createdOn: string;
    }[];

    setUserData:
    React.Dispatch<
    React.SetStateAction<
    {
        id: string;
        fullName: string;
        email: string;
        phone: string;
        role: string;
        status: string;
        createdOn: string;
    }[]
    >
    >;
}

export default function UserTable({
  users,
  setUserData,
}: Props) {

  const router = useRouter();

  const handleToggleStatus = (
    id: string
  ) => {

    setUserData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
            ...user, status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  return (
    <TableContainer
      sx={{
        mt: 2,
        borderRadius:"24px",
        background:"#FFFFFF",
        border:"1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(15,23,42,0.04)",
      }}
    >
      <Table
        sx={{
          minWidth: 1100,
          "& .MuiTableCell-root":
            {
              py: 2.5,
              borderColor: "#F1F5F9",
            },
        }}
      >

        <TableHead>
          <TableRow
            sx={{
              background:"#F8FAFC",
              "& .MuiTableCell-root":
                {
                  py: 2.2,
                },
            }}
          >
            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Full Name
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Email
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Phone Number
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Role
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Status
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
                Created On
            </Typography>
            </TableCell>

            <TableCell>
            <Typography
                sx={{
                fontWeight: 700,
                }}
            >
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
                sx={{
                transition: "0.2s",
                "&:hover": {
                    background:"#F8FAFC",
                },
                }}
            >
                <TableCell>
                <Typography
                    sx={{
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "16px",
                    }}
                >
                    {
                    user.fullName
                    }
                </Typography>
                </TableCell>
                <TableCell>
                <Typography
                    sx={{
                    color: "#475569",
                    fontWeight: 500,
                    }}
                >
                    {
                    user.email
                    }
                </Typography>
                </TableCell>
                <TableCell>
                <Typography
                    sx={{
                    color: "#475569",
                    fontWeight: 500,
                    }}
                >
                    {
                    user.phone
                    }
                </Typography>
                </TableCell>
                <TableCell>
                <Chip
                    label={
                    user.role
                    }
                    sx={{
                    background: "#EFF6FF",
                    color: "#2563EB",
                    fontWeight: 600,
                    }}
                />

                </TableCell>
                <TableCell>
                <StatusChip
                    status={
                    user.status
                    }
                />
                </TableCell>
                <TableCell>
                <Typography
                    sx={{
                    color: "#64748B",
                    fontWeight: 500,
                    }}
                >
                    {
                    user.createdOn
                    }
                </Typography>
                </TableCell>
                <TableCell>
                <Box
                    sx={{
                    display:"flex",
                    gap: 1,
                    }}
                >
                    <Tooltip title="View">
                    <IconButton
                        sx={{
                        background: "#EFF6FF",
                        "&:hover":
                            {
                            background: "#DBEAFE",
                            },
                        }}
                        onClick={() =>
                        router.push( `/users/view/${user.id}` )
                        }
                    >
                        <RemoveRedEyeOutlinedIcon
                        sx={{
                            color: "#2563EB",
                        }}
                        />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                    <IconButton
                        sx={{
                        background: "#F8FAFC",
                        "&:hover":
                            {
                            background: "#E2E8F0",
                            },
                        }}
                        onClick={() =>
                        router.push(`/users/edit/${user.id}`)
                        }
                    >
                        <EditIcon
                        sx={{
                            color:"#0F172A",
                        }}
                        />
                    </IconButton>
                    </Tooltip>
                    <Tooltip
                    title={
                        user.status === "Active" ? "Deactivate" : "Activate"
                    }
                    >
                    <IconButton
                        sx={{
                        background: user.status === "Active" ? "#FEF2F2" : "#DCFCE7",
                        "&:hover":
                            {
                            background: user.status === "Active" ? "#FEE2E2" : "#BBF7D0",
                            },
                        }}
                        onClick={() =>
                        handleToggleStatus( user.id)
                        }
                    >
                        <BlockIcon
                        sx={{
                            color: user.status === "Active" ? "#DC2626" : "#16A34A",
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