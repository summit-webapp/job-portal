import { job_details_data } from "../../datasets/job-details";

const JobDetailMaster = () => {
  return (
    <div>
      <div className="jobDetails-section bg-default-1 pt-14 pt-lg-4 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 mt-2 ml-xxl-32 ml-xl-15 dark-mode-texts">
              <div className="mb-9">
                <a
                  className="d-flex align-items-center ml-4"
                  href="dashboard-main.html"
                >
                  {" "}
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                    Back to view jobs
                  </span>
                </a>
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
                        <div className="square-72 d-block mr-8">
                          <img
                            src="./image/l2/png/featured-job-logo-1.png"
                            alt=""
                          />
                        </div>
                        {/* media logo end */}

                        {/* media texts start */}
                        <div>
                          <h3 className="font-size-6 mb-0">
                            {job_details_data?.job_title}
                          </h3>
                          <span className="font-size-3 text-gray line-height-2">
                            {job_details_data?.company_name}
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
                          {job_details_data?.job_posting_date}
                        </p>
                      </div>
                      {/* <!-- media date end --> */}
                    </div>
                  </div>
                  <div className="row pt-9">
                    <div className="col-12">
                      {/* card-btn-group start */}
                      <div className="card-btn-group">
                        <a
                          className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5"
                          href="#"
                        >
                          Apply to this job
                        </a>
                        <a
                          className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5"
                          href="#"
                        >
                          <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                          Save job
                        </a>
                      </div>
                      {/* card-btn-group end */}
                    </div>
                  </div>
                </div>
                {/* job opening data main ends */}

                <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row mb-7">
                    <div className="col-md-4 mb-md-0 mb-6">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          <img src="./image/svg/icon-dolor.svg" alt="" />
                        </div>
                        <p className="font-weight-semibold font-size-4 text-black-2 mb-0">
                          As per Industry standard
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          <img src="./image/svg/icon-briefcase.svg" alt="" />
                        </div>
                        <p className="font-weight-semibold font-size-4 text-black-2 mb-0">
                          Full-Time
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 pl-lg-0">
                      <div className="media justify-content-md-start">
                        <div className="image mr-5">
                          <img src="./image/svg/icon-location.svg" alt="" />
                        </div>
                        <p className="font-weight-semibold font-size-4 text-black-2 mb-0">
                          On site/Mumbai
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-lg-0 mb-10">
                      <div className="tags">
                        <p className="font-size-4 text-gray mb-0">Soft Skill</p>
                        <ul className="list-unstyled mr-n3 mb-0">
                          {job_details_data?.soft_skills?.map(
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
                        <p className="font-size-4 text-gray mb-3">
                          Technical Skill
                        </p>
                        <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                          {job_details_data?.technical_skills?.map(
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
                        <p className="font-size-4 font-weight-semibold text-black-2 mb-7">
                          Job Description
                        </p>
                        <p className="font-size-4 text-black-2 mb-7">
                          {job_details_data?.job_description}
                        </p>
                      </div>

                      <a
                        className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6"
                        href="#"
                      >
                        Apply to this job
                      </a>
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
