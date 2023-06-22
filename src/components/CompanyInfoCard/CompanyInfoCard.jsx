import {
  Box,
  Button,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  alpha,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { darkTheme } from "../../App";
import { AllOut } from "@mui/icons-material";

const CompanyInfoCard = ({ job }) => {
  const theme = useTheme();
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Paper
      sx={{
        boxShadow: "none",
        transform: "translateY(-40px)",
        position: "relative",
      }}
    >
      <Stack direction={{ sm: "row", xs: "column" }} alignItems={"center"}>
        <Box
          component={"img"}
          src={job.thumbnail}
          sx={
            isXs
              ? {
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 50,
                  height: 50,
                }
              : {
                  objectFit: "contain",
                  width: 140,
                  height: 140,
                  maxWidth: "100%",
                }
          }
        />
        <Stack
          direction={{ sm: "row", xs: "column" }}
          px={"40px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={{ sm: "calc(100% - 150px)" }}
          py={"32px"}
        >
          <Stack gap={"13px"} maxWidth={{ sm: "50%", xs: "100%" }}>
            <Typography variant="h1">{job.company_name}</Typography>
            <Typography color={"secondary.dark"} noWrap>
              {job.related_links[0].link}
            </Typography>
          </Stack>
          <ThemeProvider
            theme={createTheme({
              ...darkTheme,
              palette: {
                ...darkTheme.palette,
                primary: {
                  main: alpha(theme.palette.primary.main, 0.1),
                  contrastText: theme.palette.primary.main,
                },
              },
            })}
          >
            <Button
              href={job.related_links[0].link}
              variant="contained"
              color="primary"
              target="_blank"
              sx={{ mt: "27px", textTransform: "none", fontWeight: "700" }}
            >
              Company Site
            </Button>
          </ThemeProvider>
        </Stack>
      </Stack>
    </Paper>
  );
};
export default CompanyInfoCard;
