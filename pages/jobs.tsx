import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list-hook";
import { APIDataTypes } from "@/interfaces/api-data-types";

const JobsListing = () => {
  const {
    JobsListQuery,
    FilterQuery,
    selectedFilters,
    handleApplyFilters,
  }: any = useJobsList();
  return (
    <div>
      <JobsListMaster
        jobListIsLoading={JobsListQuery.isLoading}
        jobListData={JobsListQuery.data}
        jobListError={JobsListQuery.error}
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
