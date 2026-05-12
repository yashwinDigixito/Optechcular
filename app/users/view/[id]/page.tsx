"use client";
import { users } from "@/assets/genericdata";
import UserDetails from "@/component/user-management/UserDetails";
import { Box } from "@mui/material";
import { notFound, useParams, } from "next/navigation";

export default function ViewUserPage() {
    const params = useParams();
    const user = users.find((item) => item.id === params.id);
    if (!user) {
    return notFound();
}

return (
    <Box
    sx={{
        p: 3,
    }}
    >
    <UserDetails
        user={user}
    />
    </Box>
);
}