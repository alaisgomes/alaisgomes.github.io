import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "dark",
    color: "white",
    primary: {
      main: "#F05672",
    },
    success: {
      main: "#406E8E",
    },
    secondary: {
      main: "#ffc65e",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontFamily: "'Josefin Slab', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Josefin Slab', serif",
    },
    body1: {
      marginBottom: "1rem",
      textAlign: "justify",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
