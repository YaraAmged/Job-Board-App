import {
  Box,
  Container,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { lightTheme } from "../../App";

const NavBar = ({ setMode, mode }) => {
  return (
    <Box
      sx={{
        pt: "44px",
        height: 160,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: {
          xs: `url(${process.env.PUBLIC_URL + "/imgs/Triangle-xs.png"})`,
          sm: `url(${process.env.PUBLIC_URL + "/imgs/Triangle-sm.png"})`,
          md: `url(${process.env.PUBLIC_URL + "/imgs/Triangle-md.png"})`,
        },
      }}
    >
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            color="white"
            variant="h1"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            devjobs
          </Typography>
          <Stack direction="row" spacing={"20px"} alignItems="center">
            <img src={process.env.PUBLIC_URL + "/icons/sun.svg"} alt="" />
            <ThemeProvider theme={lightTheme}>
              <Switch
                checked={mode}
                onChange={(e) => setMode(e.target.checked)}
                inputProps={{ "aria-label": "ant design" }}
                sx={(theme) => ({
                  width: 48,
                  height: 24,
                  p: 0,
                  "& .MuiSwitch-track": {
                    backgroundColor: "white !important",
                    opacity: "1 !important",
                    borderRadius: 12,
                  },
                  "& .MuiSwitch-thumb": {
                    width: 14,
                    height: 14,
                    transform: "translate(-1px,-4px)",
                    background: theme.palette.primary.main,
                  },
                  "&:hover": {
                    "& .MuiSwitch-thumb": {
                      background: theme.palette.primary.light,
                    },
                  },
                })}
              />
            </ThemeProvider>
            <img src={process.env.PUBLIC_URL + "/icons/moon.svg"} alt="" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default NavBar;
