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

export default function AddSalesTargetForm() {

  const router =
    useRouter();

  const [formData, setFormData] =
    useState({
      salesPersonName:"",
      targetAmount:0,
      achievedAmount:0,
      dueDate:"",
      month:"June",
      status:"Pending",
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

    const payload = {

      ...formData,

      remainingAmount:
        Number(
          formData.targetAmount
        ) -
        Number(
          formData.achievedAmount
        ),
    };

    console.log(
      "Sales Target:",
      payload
    );

    router.push(
      "/sales-person-target"
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link
          href="/sales-target"
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
              textTransform:
                "none",
      
              fontWeight:
                600,
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
          Add Sales Target
        </Typography>

        <Grid
          container
          spacing={3}
        >
          {/* SALES PERSON */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              label="Sales Person Name"
              name="salesPersonName"
              value={
                formData.salesPersonName
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* TARGET */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Target Amount"
              name="targetAmount"
              value={
                formData.targetAmount
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* ACHIEVED */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              fullWidth
              type="number"
              label="Achieved Amount"
              name="achievedAmount"
              value={
                formData.achievedAmount
              }
              onChange={
                handleChange
              }
            />

          </Grid>

          {/* MONTH */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
              select
              fullWidth
              label="Month"
              name="month"
              value={
                formData.month
              }
              onChange={
                handleChange
              }
            >
              <MenuItem value="January">
                January
              </MenuItem>

              <MenuItem value="February">
                February
              </MenuItem>

              <MenuItem value="March">
                March
              </MenuItem>

              <MenuItem value="April">
                April
              </MenuItem>

              <MenuItem value="May">
                May
              </MenuItem>

              <MenuItem value="June">
                June
              </MenuItem>

            </TextField>

          </Grid>

          {/* DUE DATE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <TextField
                fullWidth
                type="date"
                label="Due Date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                slotProps={{
                inputLabel: {shrink: true},
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
              <MenuItem value="Completed">
                Completed
              </MenuItem>

              <MenuItem value="In Progress">
                In Progress
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
                "/sales-person-target"
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
            Save Target
          </Button>

        </Box>

      </Box>

    </Box>
  );
}