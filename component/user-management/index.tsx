"use client";

import {
    users,
} from "@/assets/genericdata";

import {
    User,
} from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
    useState,
} from "react";

import TableContainerCard from "@/component/common/TableContainerCard";

import UserFilters from "./UserFilters";

import UserTable from "./UserTable";

export default function UserManagementPage() {

    const router =useRouter();
    const [search, setSearch] =useState("");
    const [role, setRole] =useState("");
    const [status, setStatus] =useState("");
    const [userData] =useState<User[]>(users);
    const filteredUsers =
    userData.filter(
    (user) => {
        const matchesSearch = search ? user.fullName.toLowerCase().includes(search.toLowerCase()) : true;
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
    <Box sx={{ p: 3 }}>
    <Box
        sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mb: 3,
        }}
    >
        <Typography
        sx={{
            fontSize:"32px",
            fontWeight:700,
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
            borderRadius:"12px",
            textTransform:"none",
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
            }}
        >
            {
            filteredUsers.length
            }{" "}
            results found
        </Typography>
        <UserTable users={filteredUsers}/>
        </Box>
    </TableContainerCard>
    </Box>
);
}