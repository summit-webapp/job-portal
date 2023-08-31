import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list-hook";
import { APIDataTypes } from "@/interfaces/api-data-types";

const JobsListing = () => {
  const { isLoading, data, error }: any = useJobsList();
  return (
    <div>
      <JobsListMaster isLoading={isLoading} data={data} error={error} />
    </div>
  );
};

export default JobsListing;
