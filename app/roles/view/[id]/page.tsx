import {
  Box,
  Typography,
  Stack,
  Chip,
  Container,
  Card,
  Button,
  Divider,
  Grid,
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShieldIcon from '@mui/icons-material/Shield';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

import { roles } from "@/assets/genericdata";
import Link from "next/link";

export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  
  // Renamed to 'currentRole' to prevent clashing with MUI's 'item' prop
  const currentRole = roles.find((r) => r.id === id);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "#F8FAFC" }}>
      {/* 1. TOP NAVIGATION BAR */}
      <Box sx={{ py: 2, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Link href="/roles" passHref style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{ color: "#64748B", textTransform: "none", fontWeight: 600 }}
            >
              Back to Roles
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* HEADER SECTION */}
        <Box sx={{ mb: 5 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 800, 
              color: "#3B82F6", 
              fontSize: "1.75rem", 
              mb: 1 
            }}
          >
            {currentRole?.roleName}
          </Typography>
          
          <Chip 
            label={currentRole?.status} 
            size="small"
            sx={{ 
              bgcolor: currentRole?.status === "Active" ? "#DCFCE7" : "#FEE2E2",
              color: currentRole?.status === "Active" ? "#15803D" : "#B91C1C",
              fontWeight: 700 
            }} 
          />
        </Box>

        {/* MAIN CONTENT CARD */}
        <Card 
          elevation={0} 
          sx={{ 
            p: 4, 
            borderRadius: "16px", 
            border: "1px solid #E2E8F0",
            background: "#FFFFFF" 
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.25rem", mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <ShieldIcon sx={{ color: "#3B82F6" }} />
            Role Permissions
          </Typography>
          
          <Divider sx={{ mb: 4 }} />

          {/* PERMISSIONS GRID */}
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {currentRole?.permissions.map((permission) => (
              <Grid size = {{xs: 12, sm: 6, md: 3}} key={permission}>
                <Box 
                  sx={{ 
                    p: 2, 
                    borderRadius: "10px", 
                    border: "1px solid #F1F5F9", 
                    bgcolor: "#F8FAFC",
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#3B82F6' }} />
                  <Typography sx={{ color: "#334155", fontWeight: 500 }}>
                    {permission}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* METADATA COLUMNS */}
          <Box sx={{ pt: 3, borderTop: "1px solid #F1F5F9" }}>
            <Grid container spacing={4}>
                  <Grid size={{xs: 12, sm: 4}}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#94A3B8", mb: 1 }}>
                  <FingerprintIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>UNIQUE ID</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A", pl: 0.5 }}>{id}</Typography>
              </Grid>

                 <Grid size={{xs: 12, sm: 4}}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#94A3B8", mb: 1 }}>
                  <DateRangeIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>DATE CREATED</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A", pl: 0.5 }}>May 11, 2026</Typography>
              </Grid>

              <Grid size={{xs: 12, sm: 4}}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#94A3B8", mb: 1 }}>
                  <InfoOutlinedIcon fontSize="small" />
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>ACCESS TYPE</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A", pl: 0.5 }}>System-Defined</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}