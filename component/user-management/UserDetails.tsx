"use client";

import {
    Box,
    Chip,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

import StatusChip from "@/component/common/StatusChip";

interface Props {

  user: {
    id: string;

    fullName: string;

    email: string;

    phone: string;

    role: string;

    status: string;

    createdOn: string;
  };
}

export default function UserDetails({
  user,
}: Props) {

  return (
    <Box
      sx={{
        background:
          "#FFFFFF",

        borderRadius:
          "24px",

        p: 4,

        border:
          "1px solid #E2E8F0",

        boxShadow:
          "0px 4px 20px rgba(15,23,42,0.04)",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,
        }}
      >
        <Box>

          <Typography
            sx={{
              fontSize:
                "28px",

              fontWeight: 700,

              color:
                "#0F172A",
            }}
          >
            {
              user.fullName
            }
          </Typography>

          <Typography
            sx={{
              color:
                "#64748B",

              mt: 0.5,
            }}
          >
            User Details
          </Typography>

        </Box>

        <StatusChip
          status={
            user.status
          }
        />

      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* DETAILS */}
      <Grid
        container
        spacing={4}
      >
        {/* EMAIL */}
        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
            sx={{
              fontSize:
                "14px",

              color:
                "#64748B",

              mb: 1,
            }}
          >
            Email Address
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,

              color:
                "#0F172A",
            }}
          >
            {
              user.email
            }
          </Typography>

        </Grid>

        {/* PHONE */}
        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
            sx={{
              fontSize:
                "14px",

              color:
                "#64748B",

              mb: 1,
            }}
          >
            Phone Number
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,

              color:
                "#0F172A",
            }}
          >
            {
              user.phone
            }
          </Typography>

        </Grid>

        {/* ROLE */}
        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
            sx={{
              fontSize:
                "14px",

              color:
                "#64748B",

              mb: 1,
            }}
          >
            Role
          </Typography>

          <Chip
            label={
              user.role
            }
            sx={{
              background:
                "#EFF6FF",

              color:
                "#2563EB",

              fontWeight: 700,
            }}
          />

        </Grid>

        {/* CREATED DATE */}
        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
            sx={{
              fontSize:
                "14px",

              color:
                "#64748B",

              mb: 1,
            }}
          >
            Created On
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,

              color:
                "#0F172A",
            }}
          >
            {
              user.createdOn
            }
          </Typography>

        </Grid>

      </Grid>

    </Box>
  );
}