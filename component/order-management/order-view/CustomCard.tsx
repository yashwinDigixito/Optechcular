"use client";

import { Card } from "@mui/material";
import { ReactNode } from "react";
interface Props {
children: ReactNode;
}

export default function CustomCard({
children,
}: Props) {

return (
    <Card
    sx={{
        p: 2.5,
        borderRadius:"16px",
        boxShadow:"none",
        border:"1px solid #E2E8F0",
        bgcolor:"#FFFFFF",
        transition:"0.2s ease",
        "&:hover": {
        boxShadow:"0px 8px 24px rgba(15,23,42,0.08)",
        },
    }}
    >
    {children}
    </Card>
);
}