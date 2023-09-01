import useJobDetail from "@/hooks/job-detail/job-detail-hook";
import JobDetailMaster from "../../../components/job-details/job-detail-master";

const JobsDetails = () => {
  const { isLoading, data, error, detailData }: any = useJobDetail();
  return (
    <div>
      <JobDetailMaster isLoading={isLoading} data={data} error={error} />
    </div>
  );
};

export default JobsDetails;
