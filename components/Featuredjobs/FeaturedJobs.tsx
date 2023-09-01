import FeaturedJobsGridCard from "@/cards/featured-jobs-grid-card";
import React from "react";

const FeaturedJobs = () => {
  return (
    <>
      <div className="pt-8 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
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

          <div className="row justify-content-center">
            <FeaturedJobsGridCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
