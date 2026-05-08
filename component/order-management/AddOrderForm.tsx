"use client";

import {
    Card,
    Grid,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";

import OrderItemsTable from "./OrderItemsTable";

export default function AddOrderForm() {
    return (
    <Card
    sx={{
        p: 3,
        borderRadius: "24px",
    }}
    >
    <Typography
        variant="h5"
        sx={{fontWeight:700,mb:3}}
    
    >
        Add Order
    </Typography>

    <Grid container spacing={3}>
        <Grid size ={{xs:12, md:6}}>
        <TextField
            fullWidth
            label="Customer"
        />
        </Grid>

        <Grid size ={{xs:12, md:6}}>
        <TextField
            fullWidth
            label="Sales Person"
        />
        </Grid>

        <Grid size ={{xs:12, md:6}}>
        <TextField
            fullWidth
            label="Product Type"
            select
        >
            <MenuItem value="Frame">
            Frame
            </MenuItem>

            <MenuItem value="Lens">
            Lens
            </MenuItem>
        </TextField>
        </Grid>

        <Grid size ={{xs:12, md:6}}>
        <TextField
            fullWidth
            type="date"
        />
        </Grid>
    </Grid>

    <OrderItemsTable />
    </Card>
);
}