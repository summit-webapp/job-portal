import JobsGridCard from "@/cards/jobs-grid-card";
import { APIDataTypes } from "@/interfaces/api-data-types";
import JobsListLoading from "./jobs-list-loading";

const JobsCardContainer = ({ isLoading, data, error }: APIDataTypes) => {
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
