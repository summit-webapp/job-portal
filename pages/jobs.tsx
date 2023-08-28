import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list";
import { JobsListInterface } from "@/interfaces/jobs-list-interface";

const JobsListing = () => {
  const { isLoading, data, error } = useJobsList();

  console.log("jobs list data", data);
  return (
    <div>
      <JobsListMaster isLoading={isLoading} data={data} error={error} />
    </div>
  );
};

export default JobsListing;
