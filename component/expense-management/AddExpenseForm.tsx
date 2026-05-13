"use client";

import {
  useState,
} from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddExpenseForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      expenseName: "",

      ledger:
        "Administrative Expense",

      amount: 0,

      paymentMethod:
        "Bank Transfer",

      expenseDate: "",

      status:
        "Paid",

      notes: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {

    console.log(
      "Expense:",
      formData
    );

    router.push(
      "/expenses"
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/expenses"
          style={{
            textDecoration:
              "none",
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
            Back
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          p: 4,

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          background:
            "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight:
              700,

            mb: 4,
          }}
        >
          Add Expense
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* EXPENSE NAME */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Expense Name"
              name="expenseName"
              value={
                formData.expenseName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* LEDGER */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Ledger"
              name="ledger"
              value={
                formData.ledger
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Administrative Expense">
                Administrative Expense
              </MenuItem>

              <MenuItem value="Utility Expense">
                Utility Expense
              </MenuItem>

              <MenuItem value="Payroll">
                Payroll
              </MenuItem>

            </TextField>

          </Grid>

          {/* AMOUNT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Amount"
              name="amount"
              value={
                formData.amount
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* PAYMENT METHOD */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Payment Method"
              name="paymentMethod"
              value={
                formData.paymentMethod
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Bank Transfer">
                Bank Transfer
              </MenuItem>

              <MenuItem value="UPI">
                UPI
              </MenuItem>

              <MenuItem value="Cash">
                Cash
              </MenuItem>

            </TextField>

          </Grid>

          {/* DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="date"
              label="Expense Date"
              name="expenseDate"
              value={
                formData.expenseDate
              }
              onChange={
                handleChange
              }
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />

          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={
                formData.status
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Paid">
                Paid
              </MenuItem>

              <MenuItem value="Pending">
                Pending
              </MenuItem>

            </TextField>

          </Grid>

          {/* NOTES */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              name="notes"
              value={
                formData.notes
              }
              onChange={
                handleChange
              }
            />

          </Grid>

        </Grid>

        {/* BUTTONS */}
        <Box
          sx={{
            mt: 5,

            display:
              "flex",

            justifyContent:
              "flex-end",

            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/expenses"
              )
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSubmit
            }
          >
            Save Expense
          </Button>

        </Box>

      </Box>

    </Box>
  );
}