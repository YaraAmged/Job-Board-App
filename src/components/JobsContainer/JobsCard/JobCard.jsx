import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        height: "228px",
        position: "relative",
        overflow: "visible",
        cursor: "pointer",
        boxShadow: "none",
      }}
      onClick={() => navigate(`/jobs/${job.title}`, { state: job })}
    >
      <Box
        component={"img"}
        sx={{
          position: "absolute",
          width: "50px",
          height: "50px",
          borderRadius: "15px ",
          objectFit: "contain",
          top: 0,
          left: "32px",
          transform: "translateY(-50%)",
        }}
        src={
          job.thumbnail ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFS1Es-aCVOSc5QXwpwzsxUYVUOH5eGW_lkHXb2Y&s"
        }
        alt=""
      />
      <CardContent sx={{ pt: "49px", pb: "36px", px: "32px", height: "100%" }}>
        <Stack justifyContent={"space-between"} height={"100%"}>
          <Stack direction={"row"} gap={"12px"}>
            <Typography color="secondary.dark">
              {job.detected_extensions.posted_at || "Now"}
            </Typography>
            <Typography color="secondary.dark">.</Typography>
            <Typography color="secondary.dark">
              {job.detected_extensions.schedule_type}
            </Typography>
          </Stack>
          <Stack gap={"16px"}>
            <Typography variant="h3" noWrap>
              {job.title}
            </Typography>
            <Typography variant="h4" noWra color="secondary.dark">
              {job.company_name}
            </Typography>
          </Stack>
          <Typography color="primary" fontWeight={700}>
            {job.location}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default JobCard;
