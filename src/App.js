import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/Home";
import JobDetailsPage from "./pages/JobDetails";
const typography = {
  fontFamily: "Kumbh Sans",
  fontSize: "16px",
  lineHeight: "26px",
  h1: {
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: "bold",
  },
  h2: {
    fontSize: "24px",
    lineHeight: "29px",
  },
  h3: {
    fontSize: "20px",
    lineHeight: "24px",
  },
  h4: {
    fontSize: "14px",
    lineHeight: "18px",
  },
};
const components = {
  MuiContainer: {
    defaultProps: {
      sx: { px: { md: "125px", sm: "39px", xs: "24px" } },
    },
  },
  MuiButton: {
    styleOverrides: {
      sizeLarge: {
        padding: "10px 31px",
        fontSize: 16,
        textTransform: "none",
        fontWeight: 700,
      },
    },
    defaultProps: { sx: { textTransform: "none" } },
  },
  MuiCheckbox: {
    styleOverrides: {
      colorPrimary: ({ theme }) => ({
        "& svg": {
          width: 24,
          height: 24,
        },
        "&:not(.Mui-checked) svg": {
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.background.default
              : "rgba(255,255,255,0.1)",
        },
        "&:not(.Mui-checked) path": { display: "none" },
      }),
    },
    defaultProps: {
      disableRipple: true,
    },
  },
};
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5964E0",
      dark: "#939BF4",
    },
    secondary: {
      main: "#9DAEC2",
      dark: "#6E8098",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F4F6F8",
    },
  },
  typography,
  components: {
    ...components,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5964E0",
      dark: "#939BF4",
    },
    secondary: {
      main: "#9DAEC2",
      dark: "#6E8098",
    },
    background: {
      paper: "#19202D",
      default: "#121721",
    },
  },
  typography,
  components,
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetailsPage />,
  },
]);

function App() {
  const [mode, setMode] = React.useState(false);
  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar setMode={setMode} mode={mode} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
