import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, themeConfig } from "@/assets/constants";
import { Box, Card, Stack, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

const { colors, borderRadius } = themeConfig;

interface Props {
  children: ReactNode;
}

interface DataNotFoundProps {
    message?: string;
}


export function SectionTitle({ title }: { title: string }) {
  return (
    <Typography
      sx={{
        fontSize: FONT_SIZE.CARD_HEADING,
        fontWeight: FONT_WEIGHT.BOLD,
        fontFamily: FONT_FAMILY.HEADING,
        color: colors.textMain,
        mb: 2,
      }}
    >
      {title}
    </Typography>
  );
}

/**
 * SideCard used in Detail Views
 */
export function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: borderRadius.large,
        boxShadow: "none",
        border: `1px solid ${colors.border}`,
        bgcolor: colors.white,
      }}
    >
      <Typography
        sx={{
          fontSize: FONT_SIZE.CARD_HEADING,
          fontWeight: FONT_WEIGHT.BOLD,
          fontFamily: FONT_FAMILY.HEADING,
          color: colors.textMain,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Card>
  );
}


export function IconLine({ icon, text }: { icon: ReactNode; text?: string | number }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems: "center" }}>
      <Box sx={{ display: "flex", color: colors.primary }}>{icon}</Box>
      <Typography 
        sx={{ 
          color: colors.textMain, 
          fontSize: FONT_SIZE.BODY,
          fontFamily: FONT_FAMILY.BODY,
          fontWeight: FONT_WEIGHT.MEDIUM 
        }}
      >
        {text || "N/A"}
      </Typography>
    </Stack>
  );
}


export function InfoLine({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string | number;
  icon?: ReactNode;
}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        py: 1.5,
        alignItems: "center",
        borderBottom: `1px solid ${colors.bgLight}`,
        "&:last-child": { borderBottom: "none" }
      }}
    >
      
      <Stack 
        direction="row" 
        spacing={1} 
        sx={{ width: "200px", flexShrink: 0, alignItems: "center" }}
      >
        {icon && (
          <Box sx={{ display: "flex", alignItems: "center", color: colors.primary }}>
            {icon}
          </Box>
        )}
        <Typography
          sx={{
            fontSize: FONT_SIZE.BODY, 
            color: colors.textSecondary,
            fontWeight: FONT_WEIGHT.MEDIUM,
            fontFamily: FONT_FAMILY.SUB_HEADING,
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          {label}
        </Typography>
      </Stack>

      {/* Value Container - GREATER SIZE */}
      <Typography
        sx={{
          flex: 1,
          textAlign: "left",
          color: colors.textMain,
          fontSize: FONT_SIZE.SUB_HEADING, // 16px (Increased for contrast)
          fontWeight: FONT_WEIGHT.BOLD,    // 700
          fontFamily: FONT_FAMILY.BODY,
          lineHeight: 1.2
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
  valueColor,
}: {
  label: string;
  value: string | number;
  middle?: string;
  bold?: boolean;
  valueColor?: string;
}) {
  return (
    <Stack 
      direction="row" 
      spacing={2}
      sx={{ justifyContent: "space-between", py: 0.8 }}
    >
      <Typography
        sx={{
          flex: 1,
          color: colors.textMain,
          fontSize: FONT_SIZE.BODY,
          fontFamily: FONT_FAMILY.BODY,
          fontWeight: bold ? FONT_WEIGHT.BOLD : FONT_WEIGHT.REGULAR,
        }}
      >
        {label}
      </Typography>

      {middle && (
        <Typography 
          sx={{ 
            flex: 1, 
            color: colors.textSecondary, 
            textAlign: "left",
            fontSize: FONT_SIZE.BODY,
            fontFamily: FONT_FAMILY.BODY 
          }}
        >
          {middle}
        </Typography>
      )}

      <Typography
        sx={{
          minWidth: 90,
          textAlign: "right",
          color: valueColor || colors.textMain,
          fontSize: FONT_SIZE.BODY,
          fontFamily: FONT_FAMILY.BODY,
          fontWeight: bold ? FONT_WEIGHT.BOLD : FONT_WEIGHT.SEMI_BOLD,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}


export default function CustomCard({ children }: Props) {
  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: borderRadius.large,
        boxShadow: "none",
        border: `1px solid ${colors.border}`,
        bgcolor: colors.white,
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(15,23,42,0.08)",
        },
      }}
    >
      {children}
    </Card>
  );
}




export function DataNotFound({ message = "Record not found" }: DataNotFoundProps) {
  const { colors, borderRadius } = themeConfig;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: colors.bgLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...getFadeInStyle(0),
            }}
        >
            <Card
                sx={{
                    p: 4,
                    borderRadius: borderRadius.large,
                    border: `1px solid ${colors.border}`,
                    boxShadow: "none",
                }}
            >
                <Typography
                    sx={{
                        color: colors.textSecondary,
                        fontWeight: FONT_WEIGHT.BOLD,
                        fontFamily: FONT_FAMILY.BODY,
                        fontSize: FONT_SIZE.BODY,
                    }}
                >
                    {message}
                </Typography>
            </Card>
        </Box>
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