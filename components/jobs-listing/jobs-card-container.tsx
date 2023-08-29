import JobsGridCard from "@/cards/jobs-grid-card";
import { JobsListInterface } from "@/interfaces/jobs-list-interface";
import JobsListLoading from "./jobs-list-loading";

const JobsCardContainer = ({ isLoading, data, error }: JobsListInterface) => {
  if (isLoading) {
    return (
      <div className="row justify-content-center">
        <JobsListLoading />
      </div>
    );
  }
  return (
    <div className="row justify-content-center">
      <JobsGridCard jobsData={data} />
    </div>
  );
};

export default JobsCardContainer;
