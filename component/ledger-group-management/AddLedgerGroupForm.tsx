"use client";

import {
  useState,
} from "react";

import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function AddLedgerGroupForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({

      groupName: "",

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
      "Ledger Group:",
      formData
    );

    router.push(
      "/ledger-groups"
    );
  };

  return (
    <Box sx={{ p: 3 }}>
    <Box sx={{ mb: 3 }}>
        <Link
          href="/ledger-groups"
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
            Back to Ledger Groups
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
          Add Ledger Group
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* GROUP NAME */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              label="Ledger Group Name"
              name="groupName"
              value={
                formData.groupName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12 }}>

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
                "/ledger-groups"
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
            Save Ledger Group
          </Button>

        </Box>

      </Box>

    </Box>
  );
}