import { Container, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import CompanyInfoCard from "../components/CompanyInfoCard/CompanyInfoCard";
import DetailedPageFooter from "../components/DetailedPageFooter/DetailedPageFooter";
import JobDescriptionCard from "../components/JobDescriptionCard/JobDescriptionCard";

const JobDetailsPage = () => {
  const { state: job } = useLocation();

  return (
    <Stack gap={"80px"}>
      <Container>
        <Stack>
          <CompanyInfoCard job={job} />
          <JobDescriptionCard job={job} />
        </Stack>
      </Container>
      <DetailedPageFooter job={job} />
    </Stack>
  );
};

export default JobDetailsPage;
