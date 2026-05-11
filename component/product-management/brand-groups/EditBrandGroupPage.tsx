"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    Box,
    Button,
    Card,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import {
    brandGroups,
} from "@/assets/genericdata";

export default function EditBrandGroupPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const [formData, setFormData] =
    useState({
      groupName: "",
      description: "",
      status: "",
    });

  useEffect(() => {

    params.then(
      ({ id }) => {

        const group =
          brandGroups.find(
            (item) =>
              item.id === id
          );

        if (group) {

          setFormData({
            groupName:
              group.groupName,

            description:
              group.description,

            status:
              group.status,
          });
        }
      }
    );
  }, [params]);

  const handleChange = (
    field: string,
    value: string
  ) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
        }}
      >
        Edit Brand Group
      </Typography>

      {/* FORM */}
      <Card
        sx={{
          p: 4,
          borderRadius: "24px",
          boxShadow:
            "0px 10px 30px rgba(15,23,42,0.06)",
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {/* GROUP NAME */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Group Name"
              value={
                formData.groupName
              }
              onChange={(e) =>
                handleChange(
                  "groupName",
                  e.target.value
                )
              }
            />
          </Grid>

          {/* STATUS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Status"
              value={
                formData.status
              }
              onChange={(e) =>
                handleChange(
                  "status",
                  e.target.value
                )
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

          {/* DESCRIPTION */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={
                formData.description
              }
              onChange={(e) =>
                handleChange(
                  "description",
                  e.target.value
                )
              }
            />
          </Grid>
        </Grid>

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            height: "48px",
            borderRadius: "12px",
            px: 4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Update Group
        </Button>
      </Card>
    </Box>
  );
}