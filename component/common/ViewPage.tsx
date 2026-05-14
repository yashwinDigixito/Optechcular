import { Box, Card, Stack, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export function SectionTitle({ title }: { title: string }) {
  return (
    <Typography
      sx={{
        fontSize: 18,
        fontWeight: 700,
        color: "#0F172A",
        mb: 2,
      }}
    >
      {title}
    </Typography>
  );
}

 export function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: "16px",
        boxShadow: "none",
        border: "1px solid #E2E8F0",
        bgcolor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
          color: "#0F172A",
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {children}
    </Card>
  );
}

export function IconLine({ icon, text }: { icon: ReactNode; text?: string }) {
  return (
    <Stack direction="row" spacing={1}  sx={{ mb: 1, alignItems:"center"}}>
      <Box sx={{ display: "flex", color: "#64748B" }}>{icon}</Box>
      <Typography sx={{ color: "#334155", fontSize: 14 }}>{text}</Typography>
    </Stack>
  );
}

export function InfoLine({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <Stack
      direction="row"
      sx={{
        py: 1.5,
       display: "flex",
       
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{
          width: "180px",
          flexShrink: 0,
          color: "#64748B",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          flex: 1,
          textAlign: "left",
          justifyContent: "space-between",
          color: "#0F172A",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        {value || "N/A"}
      </Typography>
    </Stack>
  );
}

export function SummaryLine({
  label,
  middle,
  value,
  bold,
}: {
  label: string;
  middle?: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <Stack direction="row"  spacing={2}
    sx={{
      justifyContent: "space-between",
    }}
    >
      <Typography
        sx={{
          flex: 1,
          color: "#334155",
          fontWeight: bold ? 700 : 400,
        }}
      >
        {label}
      </Typography>

      {middle && (
        <Typography sx={{ flex: 1, color: "#64748B", textAlign: "left" }}>
          {middle}
        </Typography>
      )}

      <Typography
        sx={{
          minWidth: 90,
          textAlign: "right",
          color: "#0F172A",
          fontWeight: bold ? 700 : 500,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}


export const getFadeInStyle = (delay: number = 0): SxProps<Theme> => ({
  "@keyframes fadeIn": {
    "0%": { 
      opacity: 0, 
      transform: "translateY(10px)" 
    },
    "100%": { 
      opacity: 1, 
      transform: "translateY(0)" 
    },
  },
  opacity: 0, 
  animation: "fadeIn 0.5s ease-out forwards",
  animationDelay: `${delay}s`,
});