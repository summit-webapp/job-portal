import Link from "next/link";
import { job_details_data } from "../../datasets/job-details";
import { APIDataTypes } from "@/interfaces/api-data-types";

const JobDetailMaster = ({
  isLoading,
  data,
  error,
  appliedJobsQuery,
  savedJobsQuery,
  createJobApplicantFunction,
}: any) => {
  const appliedJobsDesignationSet = new Set(
    appliedJobsQuery?.map((item: any) => item.designation)
  );
  const savedJobsDesignationSet = new Set(
    savedJobsQuery?.map((item: any) => item.designation)
  );
  const returnFormattedDate = (raw_date: any) => {
    const splitDate: any = raw_date?.split(" ");
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(splitDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div>
      <div className="jobDetails-section bg-default-1 pt-22 pt-lg-22 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 mt-5 ml-xxl-32 ml-xl-15 dark-mode-texts">
              <div className="mb-9 back-job-container">
                <Link href="/jobs" className="d-flex align-items-center ml-4">
                  {" "}
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                    Back to view jobs
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
              <div className="bg-white rounded-4 border border-mercury shadow-9">
                {/* job opening data main starts*/}
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row">
                    <div className="col-md-6">
                      {/* media start */}
                      <div className="media align-items-center">
                        {/* media logo start */}
                        {/* <div className="square-72 d-block mr-8">
                          <img
                            src="/image/l1/png/logo.png"
                            alt=""
                            width={90}
                            height={72}
                          />
                        </div> */}
                        {/* media logo end */}

                        {/* media texts start */}
                        <div>
                          <h3 className="font-size-6 mb-0">
                            {data?.message?.data?.job_title}
                          </h3>
                          <span className="font-size-3 text-gray line-height-2">
                            8848 Digital LLP
                          </span>
                        </div>
                        {/* media texts end */}
                      </div>
                      {/* media end */}
                    </div>
                    <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                      {/* media date start */}
                      <div className="media justify-content-md-end">
                        <p className="font-size-4 text-gray mb-0">
                          {returnFormattedDate(data?.message?.data?.modified)}
                        </p>
                      </div>
                      {/* <!-- media date end --> */}
                    </div>
                  </div>
                  <div className="row pt-9">
                    <div className="col-12">
                      {/* card-btn-group start */}
                      <div className="card-btn-group">
                        {appliedJobsDesignationSet?.has(
                          data?.message?.data?.designation
                        ) ? (
                          <>
                            <a
                              className={`btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5 ${
                                appliedJobsDesignationSet?.has(
                                  data?.message?.data?.designation
                                )
                                  ? "disabled"
                                  : null
                              }`}
                            >
                              Applied
                            </a>
                          </>
                        ) : (
                          <>
                            {" "}
                            <a
                              className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                              onClick={() =>
                                createJobApplicantFunction(
                                  data?.message?.data?.designation,
                                  data?.message?.data?.name,
                                  "Apply"
                                )
                              }
                            >
                              Apply to this job
                            </a>
                          </>
                        )}

                        {savedJobsDesignationSet?.has(
                          data?.message?.data?.designation
                        ) ? (
                          <a
                            className={`btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5  ${
                              savedJobsDesignationSet?.has(
                                data?.message?.data?.designation
                              )
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
                              className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5"
                              onClick={() =>
                                createJobApplicantFunction(
                                  data?.message?.data?.designation,
                                  data?.message?.data?.name,
                                  "Save"
                                )
                              }
                            >
                              <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                              Save Job
                            </a>
                          </>
                        )}
                      </div>
                      {/* card-btn-group end */}
                    </div>
                  </div>
                </div>
                {/* job opening data main ends */}

                <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-6 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row mb-7">
                    <div className="col-md-4 mb-md-0 mb-6">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          {/* <img src="/image/svg/icon-dolor.svg" className="svg-icon" alt="" /> */}
                          <div className="circle-icon">
                            <i className="fas fa-dollar-sign"></i>
                          </div>
                        </div>
                        <div style={{ paddingTop: "4px" }}>
                          <p className="font-weight-semibold font-size-4 text-black mb-0">
                            As per Industry standard
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          {/* <img src="/image/svg/icon-briefcase.svg" className="svg-icon" alt="" /> */}
                          <div className="circle-icon">
                            <i className="fas fa-briefcase"></i>
                          </div>
                        </div>
                        <div style={{ paddingTop: "4px" }}>
                          <p className="font-weight-semibold font-size-4 text-black mb-0">
                            {data?.message?.data?.employement_type?.length >
                            1 ? (
                              <>
                                {data?.message?.data?.employement_type?.map(
                                  (module_name: any, index: number) => (
                                    <span key={index}>
                                      {module_name}
                                      {index !==
                                        data?.message?.data?.employement_type
                                          ?.length -
                                          1 && "/"}
                                    </span>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                                {data?.message?.data?.employement_type?.map(
                                  (module_name: any) => (
                                    <span key={module_name}>{module_name}</span>
                                  )
                                )}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 pl-lg-0">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          {/* <img src="/image/svg/icon-location.svg" className="svg-icon" alt="" /> */}
                          <div className="circle-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                        </div>
                        <div style={{ paddingTop: "4px" }}>
                          <p className="font-weight-semibold font-size-4 text-black mb-0">
                            {data?.message?.data?.working_module?.length > 1 ? (
                              <>
                                {data?.message?.data?.working_module?.map(
                                  (module_name: any, index: number) => (
                                    <span key={index}>
                                      {module_name}
                                      {index !==
                                        data?.message?.data?.working_module
                                          ?.length -
                                          1 && "/"}
                                    </span>
                                  )
                                )}
                              </>
                            ) : (
                              <>
                                {data?.message?.data?.working_module?.map(
                                  (module_name: any) => (
                                    <span key={module_name}>{module_name}</span>
                                  )
                                )}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-lg-0 mb-10">
                      <div className="tags">
                        <p className="font-size-4 text-gray mb-0">Soft Skill</p>
                        <ul className="list-unstyled mr-n3 mb-0">
                          {data?.message?.data?.soft_skills?.map(
                            (skill: string) => {
                              return (
                                <li className="d-block font-size-4 text-black-2 mt-2">
                                  <span className="d-inline-block mr-2">•</span>
                                  {skill}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
                      <div className="tags">
                        <p className="font-size-4 text-black mb-3">
                          Technical Skill
                        </p>
                        <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                          {data?.message?.data?.technical_skills?.map(
                            (skill: string) => {
                              return (
                                <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                  {skill}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                  <div className="row">
                    <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                      <div className="">
                        {/* <p className="font-size-4 font-weight-semibold text-black-2 mb-7">
                          Job Description
                        </p> */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.message?.data?.custom_job_description,
                          }}
                          className="description-html font-size-4 text-dark mb-7"
                        />
                        {/* <p className="font-size-4 text-black-2 mb-7">
                          {data?.message?.data?.custom_job_description}
                        </p> */}
                      </div>

                      {appliedJobsDesignationSet?.has(
                        data?.message?.data?.designation
                      ) ? (
                        <>
                          <a
                            className={`btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5 ${
                              appliedJobsDesignationSet?.has(
                                data?.message?.data?.designation
                              )
                                ? "disabled"
                                : null
                            }`}
                          >
                            Applied
                          </a>
                        </>
                      ) : (
                        <>
                          {" "}
                          <a
                            className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                            onClick={() =>
                              createJobApplicantFunction(
                                data?.message?.data?.designation,
                                data?.message?.data?.name,
                                "Apply"
                              )
                            }
                          >
                            Apply to this job
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailMaster;
