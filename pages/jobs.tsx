import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list-hook";
import { APIDataTypes } from "@/interfaces/api-data-types";

const JobsListing = () => {
  const {
    jobsListQuery,
    FilterQuery,
    selectedFilters,
    handleApplyFilters,
  }: any = useJobsList();
  console.log("job listing", jobsListQuery.data);
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
      />
    </div>
  );
};

export default JobsListing;
