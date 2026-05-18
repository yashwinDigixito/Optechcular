import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
    primary: {
    main: "#2563EB",
    },

    secondary: {
    main: "#111827",
    },

    background: {
    default: "#F4F7FE",
    },
},

typography: {
    fontFamily: "Inter, sans-serif",
},

shape: {
    borderRadius: 12,
},
});
