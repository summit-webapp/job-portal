import Link from "next/link";

// import { company } from "../public/image/l1/png/feature-brand-1.png";

const JobsGridCard = ({
  jobsData,
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
          <ul className="list-unstyled mb-1 card-tag-list mt-3">
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
          <ul className="list-unstyled mb-1 card-tag-list mt-5">
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
      {jobsData?.length > 0 ? (
        jobsData?.map((job: any, index: number) => {
          return (
            <div className="col-12 col-lg-6 mb-9" key={index}>
              <div className="bg-white rounded-4 mb-9 feature-cardOne-adjustments feature-job-cardOne-adjustments">
                <div className="job_title">
                  <h2 className="mt-n4">
                    <Link
                      href={`/job-details/${encodeURIComponent(job?.name)}`}
                      className="font-size-6 text-black-2 font-weight-bold"
                    >
                      {job?.job_title}
                    </Link>
                  </h2>
                </div>
                 
                {showWorkingModuleAndEmploymentType(job)}

                <div className="job_summary">

                  {
                    job?.job_summary === null ? '' : <p className="font-size-4 text-gray">{`${job?.job_summary?.slice(
                      0,
                      80
                    )}...`}</p>
                  }
                </div>
                <div className="card-btn-group">
                  {appliedJobsDesignationSet?.has(job.designation) ? (
                    <a
                      className={`btn btn-green text-uppercase btn-medium rounded-3 ${appliedJobsDesignationSet?.has(job.designation)
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
                      className={`btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3  ${savedJobsDesignationSet?.has(job.designation)
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
        })
      ) : (
        <>
          {" "}
          <img
            src="/image/no-data.jpg"
            width="100%"
            height="75%"
            style={{ margin: "8px" }}
          />
        </>
      )}
    </>
  );
};

export default JobsGridCard;
