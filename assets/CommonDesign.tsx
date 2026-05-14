// Common Design Tokens
export const themeConfig = {
  colors: {
    // Brand Colors
    primary: "#3B82F6",
    primaryLight: "#EFF6FF",
    
    // Status Colors
    success: "#15803D",
    successBg: "#DCFCE7",
    error: "#B91C1C",
    errorBg: "#FEE2E2",
    warning: "#D97706",
    warningBg: "#FEF3C7",

    // Neutrals
    textMain: "#0F172A",
    textSecondary: "#64748B",
    textMuted: "#475569",
    border: "#E2E8F0",
    bgLight: "#F8FAFC",
    white: "#FFFFFF",
  },
  
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    fontSize: {
      tiny: 12,
      small: 14,
      body: 16,
      h3: "1.5rem",
      h2: "1.9rem",
    },
    fontWeight: {
      medium: 600,
      bold: 700,
      extraBold: 800,
    }
  },

  borderRadius: {
    small: "8px",
    medium: "10px",
    large: "16px",
    xl: "18px",
  }
};