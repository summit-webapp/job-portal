import JobsListMaster from "@/components/jobs-listing/jobs-listing-master";
import useJobsList from "@/hooks/jobs-list";

const JobsListing = () => {
  const { isLoading, data, error } = useJobsList();
  return (
    <div>
      <JobsListMaster />
    </div>
  );
};

export default JobsListing;
