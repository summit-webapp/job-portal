import Link from "next/link";
import { jobsData } from "../datasets/jobs-data";
// import { company } from "../public/image/l1/png/feature-brand-1.png";

const FeaturedJobsGridCard = ({
  jobListData,
  createJobApplicantFunction,
  appliedJobsDesignationSet,
  savedJobsDesignationSet,
}: any) => {
  const showWorkingModuleAndEmploymentType = (job: any) => {
    if (
      job.hasOwnProperty("working_module") &&
      job.hasOwnProperty("employement_type")
    ) {
      return (
        <>
          <ul className="list-unstyled mb-1 card-tag-list">
            <li>
              <a
                href=""
                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
              >
                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                {job?.working_module}
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
              >
                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                {job?.employement_type}
              </a>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <ul className="list-unstyled mb-1 card-tag-list">
            <li>
              <a
                href=""
                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3"
              >
                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                On-Site/Remote
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
              >
                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                Full-Time
              </a>
            </li>
          </ul>
        </>
      );
    }
  };
  return (
    <>
      {jobListData?.slice(0, 6)?.map((job: any, index: number) => {
        return (
          <div className="col-12 col-lg-4" key={job.id}>
            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
              {/* <div className="d-block mb-7">
                <a href="#">
                  <img src="./image/l1/png/feature-brand-1.png" alt="" />
                </a>
              </div> */}

              <h5 className="mt-n4">
                <Link
                  href={`/job-details/${job?.name}`}
                  className=" text-black-2 font-weight-bold mb-4"
                >
                  {job?.job_title}
                </Link>
              </h5>
              {showWorkingModuleAndEmploymentType(job)}
              <p className="mb-7 font-size-4 text-gray">{`${job?.job_summary?.slice(
                0,
                100
              )}...`}</p>
              <div className="card-btn-group">
                {appliedJobsDesignationSet?.has(job.designation) ? (
                  <a
                    className={`btn btn-green text-uppercase btn-medium rounded-3 ${
                      appliedJobsDesignationSet?.has(job.designation)
                        ? "disabled"
                        : null
                    } `}
                  >
                    Applied
                  </a>
                ) : (
                  <a
                    className={`btn btn-green text-uppercase btn-medium rounded-3  `}
                    onClick={() =>
                      createJobApplicantFunction(
                        job.designation,
                        job.name,
                        "Apply"
                      )
                    }
                  >
                    Apply Now
                  </a>
                )}
                {savedJobsDesignationSet?.has(job.designation) ? (
                  <a
                    className={`btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3  ${
                      savedJobsDesignationSet?.has(job.designation)
                        ? "disabled"
                        : null
                    }`}
                  >
                    <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                    Saved
                  </a>
                ) : (
                  <>
                    <a
                      className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3"
                      onClick={() =>
                        createJobApplicantFunction(
                          job.designation,
                          job.name,
                          "Save"
                        )
                      }
                    >
                      <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                      Save it
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedJobsGridCard;
