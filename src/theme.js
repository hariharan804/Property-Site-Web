import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // components: {
  //   MuiFilledInput: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "green"
  //       },
  //       focused: {
  //         backgroundColor: "yellow"
  //       }
  //     }
  //   }
  // },
  palette: {
    primary: {
      main: "#2C3060",
      dark: "#2C3060",
      light: "#5078E1",
    },
    secondary: {
      main: "#2C3060",
      dark: "#091B29",
      light: "#4E5A6B",
    },
    background: {
      white: "#FFFFFF",
      darkBg: "#1C1C1C",
      grayTransprent: "#00001F",
      grayTransprent2: "#000014",
      gray: "#98A0AC",
      lightGray: "#E4E8EE",
      sidebarBg: "#333333",
      sidebarText: "#C1C5CB",
    },
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(9, 30, 66, 0.2)",
    "0px 1px 3px rgba(9, 30, 66, 0.12)",
    "0px 2px 4px rgba(9, 30, 66, 0.08)",
  ],
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "NunitoSans-Regular, sans-serif",
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
});
