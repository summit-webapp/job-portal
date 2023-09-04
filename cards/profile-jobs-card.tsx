import { applied_jobs_data } from "@/datasets/applied-jobs";
import { ProfileInterface } from "@/interfaces/profile-interface";
import Link from "next/link";
import React from "react";

const ProfileJobsCard = ({ isLoading, data, error }: ProfileInterface) => {
  console.log("saved Jobs Data", data);
  return (
    <>
      {data?.map((job: any, index: any) => {
        return (
          <div className="col-12 col-lg-6" key={job.id}>
            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
              <div className="d-block mb-7">
                <a href="#">
                  <img src="./image/l1/png/feature-brand-1.png" alt="" />
                </a>
              </div>

              <h2 className="mt-n4">
                <Link
                  href={`/job-details/${job?.job_title}`}
                  className="font-size-7 text-black-2 font-weight-bold mb-4"
                >
                  {job?.designation}
                </Link>
              </h2>
              <ul className="list-unstyled mb-1 card-tag-list">
                <li>
                  <a
                    href=""
                    className="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
                  >
                    <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                    {job.location}
                    {job?.working_module?.map((type: any, index: any) => {
                      return (
                        <>
                          {index > 0 && " / "}{" "}
                          {/* Add a slash and space between modules */}
                          {type}
                        </>
                      );
                    })}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
                  >
                    <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                    {job?.employement_type?.map((type: any, index: any) => {
                      return <>{type}</>;
                    })}
                  </a>
                </li>
              </ul>
              <p className="mb-7 font-size-4 text-gray">{job.description}</p>
              {/* <div className="card-btn-group">
                <a
                  className="btn btn-green text-uppercase btn-medium rounded-3"
                  href="#"
                >
                  Apply Now
                </a>
                <a
                  className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
                  href="#"
                >
                  <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                  Save it
                </a>
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProfileJobsCard;
