import JobsGridCard from "@/cards/jobs-grid-card";
import { APIDataTypes } from "@/interfaces/api-data-types";
import JobsListLoading from "./jobs-list-loading";

const JobsCardContainer = ({
  isLoading,
  data,
  error,
  createJobApplicantFunction,
  appliedJobsDesignationSet,
  savedJobsDesignationSet,
}: any) => {
  if (isLoading) {
    return (
      <div className="row justify-content-center">
        <JobsListLoading />
      </div>
    );
  }
  const filteredData = data.filter((job: any) => job.status !== "Closed");
  return (
    <div className="row">
      <JobsGridCard
        jobsData={data}
        createJobApplicantFunction={createJobApplicantFunction}
        appliedJobsDesignationSet={appliedJobsDesignationSet}
        savedJobsDesignationSet={savedJobsDesignationSet}
      />
    </div>
  );
};

export default JobsCardContainer;
