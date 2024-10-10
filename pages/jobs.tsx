import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list-hook";
import useProfileQuery from "@/hooks/profile_hooks";
import { APIDataTypes } from "@/interfaces/api-data-types";
import { useState } from "react";

const JobsListing = () => {
  const {
    jobsListQuery,
    FilterQuery,
    selectedFilters,
    handleApplyFilters,
    createJobApplicantFunction,
    appliedJobsQuery,
    savedJobsQuery,
  }: any = useJobsList();

  // const [appliedJobsQueryData, setAppliedJobsQueryData] = useState([]);
  // console.log("job listing", jobsListQuery.data);
  return (
    <div>
      <JobsListMaster
        jobListIsLoading={jobsListQuery.isLoading}
        jobListData={jobsListQuery.data}
        jobListError={jobsListQuery.error}
        filterLoading={FilterQuery.isLoading}
        filterData={FilterQuery.data}
        filterError={FilterQuery.error}
        selectedFilters={selectedFilters}
        handleApplyFilters={handleApplyFilters}
        createJobApplicantFunction={createJobApplicantFunction}
        appliedJobsQuery={appliedJobsQuery.data}
        savedJobsQuery={savedJobsQuery.data}
      />
    </div>
  );
};

export default JobsListing;
