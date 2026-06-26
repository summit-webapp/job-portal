import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { get_access_token } from "@/store/slices/auth_slice/login_slice";
import { useRouter } from "next/router";
import ApplyJobModal from "@/components/ApplyJobModal";
import ResumeScore from "@/components/ResumeScore";

// import { company } from "../public/image/l1/png/feature-brand-1.png";

const JobsGridCard = ({
  jobsData,
  createJobApplicantFunction,
  appliedJobsDesignationSet,
  savedJobsDesignationSet,
  appliedJobsQuery,
}: any) => {
  const router = useRouter();
  const authState = useSelector(get_access_token);
  const token = authState?.token ?? "";

  const [activeJob, setActiveJob] = useState<{ designation: string; name: string } | null>(null);
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
          const matchedAppliedJob = appliedJobsQuery?.find(
            (item: any) => item.designation === job.designation
          );
          return (
            <div className="col-12 col-lg-6 mb-9" key={index}>
              <div className="bg-white rounded-4 mb-9 feature-cardOne-adjustments feature-job-cardOne-adjustments" style={{ position: "relative" }}>
                <div className="job_title" style={{ paddingRight: "80px", marginBottom: "16px" }}>
                  <h2 className="mt-n4 mb-0">
                    <Link
                      href={`/job-details/${encodeURIComponent(job?.name)}`}
                      className="font-size-6 text-black-2 font-weight-bold"
                    >
                      {job?.designation}
                    </Link>
                  </h2>
                </div>
                {/* <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 10 }}>
                  <ResumeScore
                    score={matchedAppliedJob?.custom_score}
                    label={matchedAppliedJob?.custom_label}
                    size={72}
                  />
                </div> */}

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
                      onClick={() => {
                        if (!token) {
                          router.push("/login");
                          return;
                        }
                        setActiveJob({ designation: job.designation, name: job.name });
                      }}
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
      <ApplyJobModal
        show={activeJob !== null}
        onClose={() => setActiveJob(null)}
        designation={activeJob?.designation || ""}
        jobName={activeJob?.name || ""}
        createJobApplicantFunction={createJobApplicantFunction}
      />
    </>
  );
};

export default JobsGridCard;
