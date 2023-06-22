import {
  Button,
  Container,
  Hidden,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const DetailedPageFooter = ({ job }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Paper sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Container>
        <Stack
          p={"25px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"100%"}
        >
          <Hidden smDown>
            <Stack gap={"12px"} maxWidth={"100%"}>
              <Typography fontSize={20} fontWeight={700} noWrap>
                {job.title}
              </Typography>
              <Typography color={"secondary.dark"}>
                {job.company_name}
              </Typography>
            </Stack>
          </Hidden>
          <Button variant="contained" size={"large"} fullWidth={isXs}>
            Apply Now
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
};
export default DetailedPageFooter;
