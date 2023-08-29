import JobsGridCard from "@/cards/jobs-grid-card";
import { JobsListInterface } from "@/interfaces/jobs-list-interface";

const JobsCardContainer = ({ isLoading, data, error }: JobsListInterface) => {
  if (isLoading) {
    return <div> Loading ... </div>;
  }
  return (
    <div className="row justify-content-center">
      <JobsGridCard jobsData={data} />
    </div>
  );
};

export default JobsCardContainer;
