import useJobDetail from "@/hooks/job-detail/job-detail-hook";
import JobDetailMaster from "../../../components/job-details/job-detail-master";
import useProfileQuery from "@/hooks/profile_hooks";

const JobsDetails = () => {
  const {
    isLoading,
    data,
    error,
    detailData,
    appliedJobsQuery,
    savedJobsQuery,
    createJobApplicantFunction,
  }: any = useJobDetail();
  return (
    <div>
      <JobDetailMaster
        isLoading={isLoading}
        data={data}
        error={error}
        appliedJobsQuery={appliedJobsQuery.data}
        savedJobsQuery={savedJobsQuery.data}
        createJobApplicantFunction={createJobApplicantFunction}
      />
    </div>
  );
};

export default JobsDetails;
