import { jobsData } from "../datasets/jobs-data";
// import { company } from "../public/image/l1/png/feature-brand-1.png";

const FeaturedJobsGridCard = ({ jobListData }: any) => {
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
      return null;
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

              <h2 className="mt-n4">
                <a
                  className="font-size-7 text-black-2 font-weight-bold mb-4"
                  href=""
                >
                  {job.job_title}
                </a>
              </h2>
              {showWorkingModuleAndEmploymentType(job)}
              <p className="mb-7 font-size-4 text-gray">{`${job?.custom_job_description?.slice(
                0,
                100
              )}...`}</p>
              <div className="card-btn-group">
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedJobsGridCard;
