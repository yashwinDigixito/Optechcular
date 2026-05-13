"use client";

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
import {
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function AddLedgerForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      ledgerName: "",

      ledgerGroup:
        "Administrative",

      openingBalance: 0,

      balanceType:
        "Debit",

      currentBalance: 0,

      status:
        "Active",

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
      "Ledger:",
      formData
    );

    router.push(
      "/ledgers"
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/ledgers"
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
            Back to Ledgers
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
          Add Ledger
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* LEDGER NAME */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Ledger Name"
              name="ledgerName"
              value={
                formData.ledgerName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* GROUP */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Ledger Group"
              name="ledgerGroup"
              value={
                formData.ledgerGroup
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Administrative">
                Administrative
              </MenuItem>

              <MenuItem value="Utilities">
                Utilities
              </MenuItem>

              <MenuItem value="Revenue">
                Revenue
              </MenuItem>

            </TextField>

          </Grid>

          {/* OPENING BALANCE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Opening Balance"
              name="openingBalance"
              value={
                formData.openingBalance
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* BALANCE TYPE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Balance Type"
              name="balanceType"
              value={
                formData.balanceType
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="Debit">
                Debit
              </MenuItem>

              <MenuItem value="Credit">
                Credit
              </MenuItem>

            </TextField>

          </Grid>

          {/* CURRENT BALANCE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Current Balance"
              name="currentBalance"
              value={
                formData.currentBalance
              }
              onChange={
                handleChange
              }
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
              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
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
                "/ledgers"
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
            Save Ledger
          </Button>

        </Box>

      </Box>

    </Box>
  );
}