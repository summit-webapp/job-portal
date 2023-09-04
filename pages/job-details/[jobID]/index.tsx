import useJobDetail from "@/hooks/job-detail/job-detail-hook";
import JobDetailMaster from "../../../components/job-details/job-detail-master";
import useProfileQuery from "@/hooks/profile_hooks";

const JobsDetails = () => {
  const { isLoading, data, error, detailData }: any = useJobDetail();
  const { profileQuery, appliedJobsQuery, savedJobsQuery } = useProfileQuery();
  return (
    <div>
      <JobDetailMaster
        isLoading={isLoading}
        data={data}
        error={error}
        appliedJobsQuery={appliedJobsQuery.data}
        savedJobsQuery={savedJobsQuery.data}
      />
    </div>
  );
};

export default JobsDetails;
