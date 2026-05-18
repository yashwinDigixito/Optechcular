"use client";

import { Box, Typography, Divider, Grid } from "@mui/material";
import { FONT_FAMILY, FONT_WEIGHT } from "@/assets/constants";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <Grid size={{ xs: 12 }}>
      <Box
        sx={{
          mb: 3,
          p: 3,
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "20px",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: "18px",
              fontWeight: FONT_WEIGHT.BOLD,
              color: "#0F172A",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.BODY,
                fontSize: "13px",
                color: "#64748B",
                mt: 0.5,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Divider sx={{ my: 2, borderColor: "#E2E8F0" }} />
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Box>
    </Grid>
  );
}
