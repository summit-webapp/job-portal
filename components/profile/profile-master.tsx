import { applied_jobs_data } from "../../datasets/applied-jobs";
import Link from "next/link";

const ProfileMaster = () => {
  return (
    <div className="bg-default-2 pt-8 pt-lg-8 pb-7 pb-lg-23">
      <div className="container">
        {/* back Button starts */}
        <div className="row">
          <div className="col-12 mt-8 dark-mode-texts">
            <div className="mb-9">
              <Link href="/jobs" className="d-flex align-items-center ml-4">
                {" "}
                <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                  Back
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* back Button ends */}

        <div className="row">
          {/* sidebar starts */}
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-xs-10 mb-11 mb-lg-0">
            <div className="mr-0 mr-xl-17">
              <div className="pl-lg-5">
                {/* Top starts */}
                <div className="bg-white shadow-9 rounded-4">
                  <div className="px-5 pt-8 text-center border-bottom border-mercury">
                    <a className="mb-4" href="#">
                      <img
                        className="circle-54"
                        src="./image/l3/png/pro-img.png"
                        alt=""
                      />
                    </a>
                    <h4 className="mb-0">
                      <a
                        className="text-black-2 font-size-6 font-weight-semibold"
                        href="#"
                      >
                        David Henricks
                      </a>
                    </h4>
                    <p className="mb-8">
                      <a className="text-gray font-size-4" href="#">
                        Product Designer
                      </a>
                    </p>
                  </div>
                  {/* Top End */}
                  {/* Bottom Start */}
                  <div className="px-9 pt-5 pt-xl-6 pb-5">
                    <h5 className="text-black-2 mb-8 font-size-5">
                      Contact Info
                    </h5>

                    <div className="mb-7">
                      <p className="font-size-4 mb-0">Location</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                        Andheri
                      </h5>
                    </div>

                    <div className="mb-7">
                      <p className="font-size-4 mb-0">E-mail</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0">
                        <a
                          className="text-black-2 text-break"
                          href="mailto:name_ac@gmail.com"
                        >
                          name@8848digital.com
                        </a>
                      </h5>
                    </div>

                    <div className="mb-7">
                      <p className="font-size-4 mb-0">Phone</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0">
                        <a
                          className="text-black-2 text-break"
                          href="tel:+999565562"
                        >
                          8765447890
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Bottom End */}
                </div>
              </div>
            </div>
          </div>
          {/* sidebar ends */}

          {/* right section starts */}
          <div className="col-12 col-xl-8 col-lg-8">
            <div className="mb-5">
              <h4 className="font-size-7 mb-9">Applied Jobs</h4>
              <div className="row justify-content-center">
                {applied_jobs_data?.map((job: any, index: any) => {
                  return (
                    <div
                      className="col-lg-6 col-md-6 col-sm-11 mb-9"
                      key={job.id}
                    >
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-indigo mr-8 rounded">
                            <a href="#">
                              <img src="./image/l3/png/fimize.png" alt="" />
                            </a>
                          </div>
                          <div>
                            <h3 className="font-size-6 mb-0">
                              <a
                                className="heading-default-color font-weight-semibold"
                                href="#"
                              >
                                {job.job_title}
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-8">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <a
                                href="#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                {job.location}
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                {job.employmentType}
                              </a>
                            </li>
                          </ul>
                          <a
                            href="javascript:"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked"
                          ></a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right section ends */}
        </div>
      </div>
    </div>
  );
};

export default ProfileMaster;
