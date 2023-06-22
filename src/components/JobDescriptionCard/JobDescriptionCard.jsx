import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const JobDescriptionCard = ({ job }) => {
  const theme = useTheme();
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardContent sx={{ p: "48px" }}>
        <Stack gap={"40px"}>
          <Stack
            direction={{ sm: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"54px"}
          >
            <Stack height={"100%"} maxWidth={{ sm: "70%", xs: "100%" }}>
              <Stack direction={"row"} gap={"12px"}>
                <Typography color={"secondary.dark"}>
                  {job.detected_extensions.posted_at || "Now"}
                </Typography>
                <Typography color={"secondary.dark"}>.</Typography>
                <Typography color={"secondary.dark"}>
                  {job.detected_extensions.schedule_type}
                </Typography>
              </Stack>
              <Typography noWrap fontSize={28} fontWeight={700}>
                {job.title}
              </Typography>
              <Typography color={"primary"} fontWeight={"700"}>
                {job.location}
              </Typography>
            </Stack>
            <Button variant="contained" size="large" fullWidth={isXs}>
              Apply Now
            </Button>
          </Stack>

          <Typography>{job.description}</Typography>
          {job.job_highlights.map(({ title, items }) => (
            <Stack>
              {title && (
                <Typography fontWeight={700} fontSize={20}>
                  {title}
                </Typography>
              )}{" "}
              <Box
                component={"ul"}
                sx={{
                  p: "15px",
                  listStyle: "none",
                  "li::before": {
                    content: '"•"',
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    display: "inline-block",
                    width: "1em",
                    marginLeft: "-1em",
                  },
                }}
              >
                {items.map((item) => (
                  <li>{item}</li>
                ))}
              </Box>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default JobDescriptionCard;
