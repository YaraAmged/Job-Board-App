import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar/FilterBar";
import JobCard from "./JobsCard/JobCard";

const JobsContainer = () => {
  const [filters, setFilters] = useState({
    q: "all",
    location: "",
    fullTimeOnly: false,
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const getJobs = async (isNewFilter) => {
    setLoading(true);
    const oldJobs = isNewFilter ? [] : jobs;
    try {
      if (isNewFilter) setJobs([]);
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com///serpapi.com/search.json",
        {
          params: {
            api_key:
              "709d362b2a4e5f744404fa5cd99b80cc48c9230350b6170437ac26b0755f34c0",
            engine: "google_jobs",
            q: filters.q,
            start: oldJobs.length,
            location: filters.location,
            chips: filters.fullTimeOnly
              ? "employment_type:FULLTIME"
              : undefined,
          },
        }
      );
      if (res.data.jobs_results) {
        setJobs([...oldJobs, ...res.data.jobs_results]);
      } else setJobs([]);
    } catch (err) {
      setJobs([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <Container sx={{ pb: 6 }}>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        getJobs={() => getJobs(true)}
        loading={loading}
      />
      <Box pt={"80px"}>
        {loading && jobs.length === 0 ? (
          <Stack alignItems={"center"}>
            <CircularProgress />
          </Stack>
        ) : jobs.length === 0 ? (
          <Typography>No Results</Typography>
        ) : (
          <>
            <Grid container columnSpacing={"30px"} rowSpacing={"65px"}>
              {jobs.map((job) => (
                <Grid key={job.job_id} item xs={12} sm={6} md={4}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
            <Stack alignItems={"center"} mt={"56px"}>
              <Button
                variant="contained"
                onClick={() => getJobs()}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={15} /> : undefined}
              >
                Load More
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Container>
  );
};
export default JobsContainer;
