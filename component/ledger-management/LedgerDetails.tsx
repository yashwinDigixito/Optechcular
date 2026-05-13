"use client";

import { Ledger } from "@/assets/types";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";

interface Props {
ledger:Ledger;
}

export default function LedgerDetails({
ledger,
}: Props) {

return (
    <Box
    sx={{
        minHeight:"100vh",
        bgcolor:"#F8FAFC",
        py: 4,
    }}
    >
    <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
        <Link
        href="/ledgers"
        style={{
            textDecoration:"none",
        }}
        >
        <Button
            startIcon={
            <ArrowBackIcon />
            }
            sx={{
            textTransform:"none",
            fontWeight:600,
            }}
        >
            Back to Ledgers
        </Button>
        </Link>
    </Box>
        <Box
        sx={{
            background:"#FFFFFF",
            borderRadius:"24px",
            border:"1px solid #E2E8F0",
            p: 4,
        }}
        >
        <Box
            sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexWrap:"wrap",
            gap: 2,
            mb: 3,
            }}
        >
            <Box>
            <Typography
                sx={{
                fontSize:"30px",
                fontWeight:700,
                color:"#2563EB",
                }}
            >
                {ledger.ledgerName}
            </Typography>
            <Typography
                sx={{
                color:"#64748B",
                mt: 0.5,
                }}
            >
                Ledger Details
            </Typography>
            </Box>
            <Chip
            label={ledger.status}
            sx={{
                bgcolor: ledger.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                color: ledger.status === "Active" ? "#15803D" : "#DC2626",
                fontWeight:700,
            }}
            />
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Box
            sx={{
            display:"grid",
            gridTemplateColumns:
                {
                xs: "1fr",
                md: "1fr 1fr",
                },
            gap: 3,
            }}
        >
            <InfoCard
            icon={
                <FolderOutlinedIcon />
            }
            title="Ledger Group"
            value={ledger.ledgerGroup}
            />
            <InfoCard
            icon={
                <CalendarMonthOutlinedIcon />
            }
            title="Created On"
            value={ledger.createdOn}
            />
            <InfoCard
            icon={
                <AccountBalanceWalletOutlinedIcon />
            }
            title="Opening Balance"
            value={`₹${ledger.openingBalance.toLocaleString()}`}
            />
            <InfoCard
            icon={
                <AccountBalanceWalletOutlinedIcon />
            }
            title="Current Balance"
            value={`₹${ledger.currentBalance.toLocaleString()}`}
            />
            <InfoCard
            icon={
                <PersonOutlineOutlinedIcon />
            }
            title="Balance Type"
            value={ledger.balanceType}
            />
            <InfoCard
            icon={
                <PersonOutlineOutlinedIcon />
            }
            title="Created By"
            value={ledger.createdBy}
            />
        </Box>
        <Box
            sx={{
            mt: 4,
            p: 3,
            borderRadius:"18px",
            border:"1px solid #E2E8F0",
            background:"#F8FAFC",
            }}
        >
            <Stack
            direction="row"
            spacing={1}
            sx={{
                alignItems:"center",
                mb: 2,
            }}
            >
            <DescriptionOutlinedIcon
                sx={{
                color:"#2563EB",
                }}
            />

            <Typography
                sx={{
                fontWeight:700,
                fontSize:"18px",
                }}
            >
                Notes
            </Typography>
            </Stack>
            <Typography
            sx={{
                color:"#475569",
                lineHeight:1.8,
            }}
            >
            {
                ledger.notes
            }
            </Typography>
        </Box>
        </Box>
    </Container>
    </Box>
);
}

function InfoCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {

return (
    <Box
    sx={{
        p: 3,
        borderRadius:"18px",
        border:"1px solid #E2E8F0",
        background:"#FFFFFF",
    }}
    >
    <Stack
        direction="row"
        spacing={2}
        sx={{
        alignItems:"center",
        mb: 2,
        }}
    >
        <Box
        sx={{
            width: 42,
            height: 42,
            borderRadius:"12px",
            bgcolor:"#EFF6FF",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#2563EB",
        }}
        >
        {icon}
        </Box>

        <Typography
        sx={{
            color:"#64748B",
            fontWeight:600,
        }}
        >
        {title}
        </Typography>

    </Stack>
        <Typography
        sx={{
        fontSize:"20px",
        fontWeight:700,
        color:"#0F172A",
        }}
    >
        {value}
    </Typography>
    </Box>
);
}