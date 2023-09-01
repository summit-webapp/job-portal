import { applied_jobs_data } from '@/datasets/applied-jobs';
import { ProfileInterface } from '@/interfaces/profile-interface';
import React from 'react'

const AppliedJobsCard = ({ isLoading, data, error }: ProfileInterface) => {
  console.log('Applied Jobs Data', data)
  return (
    <>
      <div className="row">

        {data?.map((job: any, index: any) => {
          return (
            <div
              className="col-lg-6 col-md-6 col-sm-11 mb-9 card"
              key={index} style={{ marginLeft: '15px' }}
            >
              <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 card-body">
                <div className="media align-items-center">
                  <div className="square-52 bg-indigo mr-8 rounded">
                    <a href="#">
                      <img src="./image/l3/png/fimize.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <h3 className="font-size-6 mb-0 text-uppercase">
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
                        {
                          job?.working_module?.map((type: any, index: any) => {

                            return (
                              <>
                                {index > 0 && " / "} {/* Add a slash and space between modules */}
                                {type}
                              </>
                            )
                          })
                        }

                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                      >
                        <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                        {
                          job?.employement_type?.map((type: any, index: any) => {

                            return (
                              <>

                                {type}
                              </>
                            )
                          })
                        }
                      </a>
                    </li>
                  </ul>

                  {/* <a
                            href="javascript:"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked"
                          ></a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default AppliedJobsCard