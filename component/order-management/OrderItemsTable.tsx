"use client";

import { Box, Button, Grid, TextField, } from "@mui/material";

export default function OrderItemsTable() {
    return (
    <Box sx={{ mt: 3 }}>
    <Grid container spacing={2}>
        <Grid size ={{xs:12, md:4}}>
        <TextField
            label="Product Name"
            fullWidth
        />
        </Grid>

        <Grid size ={{xs:12, md:2}}>
        <TextField
            label="Qty"
            fullWidth
        />
        </Grid>

        <Grid size ={{xs:12, md:2}}>
        <TextField
            label="Price"
            fullWidth
        />
        </Grid>

        <Grid size ={{xs:12, md:2}}>
        <TextField
            label="Tax %"
            fullWidth
        />
        </Grid>

        <Grid size ={{xs:12, md:2}}>
        <Button
            variant="contained"
            fullWidth
            sx={{ height: "56px" }}
        >
            Add
        </Button>
        </Grid>
    </Grid>
    </Box>
);
}