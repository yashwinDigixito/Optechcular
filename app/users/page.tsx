"use client";

import {
    useState,
} from "react";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
    users,
} from "@/assets/genericdata";

import TableContainerCard from "@/component/common/TableContainerCard";

import UserFilters from "@/component/user-management/UserFilters";
import UserTable from "@/component/user-management/UserTable";

export default function UserManagementPage() {

    const router = useRouter();
    const [search, setSearch] =useState("");
    const [role, setRole] =  useState("");
    const [status, setStatus] =useState("");
    const [userData, setUserData] =useState(users);
    const filteredUsers =
    userData.filter(
        (user) => {
        const matchesSearch =
            user.fullName
            .toLowerCase()
            .includes(
            search.toLowerCase()
            ) ||

            user.email
            .toLowerCase()
            .includes(
            search.toLowerCase()
            ) ||
        user.phone.includes(
            search
        );

        const matchesRole = role ? user.role === role : true;
        const matchesStatus = status ? user.status === status : true;

        return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
        );
    }
    );

return (
    <Box
    sx={{
        p: 3,
    }}
    >
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        }}
    >
        <Typography
        sx={{
            fontSize: "32px",
            fontWeight: 700,
        }}
        >
        User Management
        </Typography>

        <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() =>
            router.push("/users/add")
        }
        sx={{
            height: "48px",
            borderRadius: "12px",
            textTransform: "none",
            px: 3,
        }}
        >
        Add User
        </Button>
    </Box>
    <UserFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
/>
    <TableContainerCard>
        <Box sx={{ p: 3 }}>
        <Typography
            sx={{
            mb: 2,
            color:"#64748B",
            fontWeight: 600,
            }}
        >
            {
            filteredUsers.length
            }{" "}
            results found
        </Typography>
        <UserTable
            users={
            filteredUsers
            }
            setUserData={
            setUserData
            }
        />
        </Box>
    </TableContainerCard>
    </Box>
);
}