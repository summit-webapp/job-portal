import FeaturedJobsGridCard from "@/cards/featured-jobs-grid-card";
import useJobsList from "@/hooks/jobs-list-hook";
import React from "react";
import JobsListLoading from "../jobs-listing/jobs-list-loading";

const FeaturedJobs = () => {
  const {
    jobsListQuery,
    appliedJobsQuery,
    savedJobsQuery,
    createJobApplicantFunction,
  }: any = useJobsList();

  const appliedJobsDesignationSet = new Set(
    appliedJobsQuery?.data?.map((item: any) => item.designation)
  );
  const savedJobsDesignationSet = new Set(
    savedJobsQuery?.data?.map((item: any) => item.designation)
  );
  const renderCards = () => {
    if (jobsListQuery.isLoading) {
      return (
        <>
          <JobsListLoading />
        </>
      );
    } else {
      return (
        <>
          <FeaturedJobsGridCard
            jobListIsLoading={jobsListQuery.isLoading}
            jobListData={jobsListQuery.data}
            jobListError={jobsListQuery.error}
            createJobApplicantFunction={createJobApplicantFunction}
            appliedJobsDesignationSet={appliedJobsDesignationSet}
            savedJobsDesignationSet={savedJobsDesignationSet}
          />
        </>
      );
    }
  };
  return (
    <>
      <div className="pt-8 pt-lg-27 pb-5 pb-lg-26 bg-black-2 dark-mode-texts">
        <div className="container">
          <div className="row align-items-center pb-14">
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">Featured Jobs</h2>
              </div>
            </div>

            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <a
                  className="btn btn-outline-white text-uppercase"
                  href="/jobs"
                >
                  Explore All
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">{renderCards()}</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
