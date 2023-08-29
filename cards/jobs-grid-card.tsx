import Link from "next/link";

// import { company } from "../public/image/l1/png/feature-brand-1.png";

const JobsGridCard = ({ jobsData }: any) => {
  return (
    <>
      {jobsData?.message?.data?.map((job: any, index: number) => {
        return (
          <div className="col-12 col-lg-6" key={index}>
            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
              <div className="d-block mb-7">
                <a href="#">
                  <img src="./image/l1/png/feature-brand-1.png" alt="" />
                </a>
              </div>

              <h2 className="mt-n4">
                <Link
                  href="/job-details"
                  className="font-size-7 text-black-2 font-weight-bold mb-4"
                >
                  {job.job_title}
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
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="bg-regent-opacity-15 text-orange font-size-3 rounded-3"
                  >
                    <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                    {job.employmentType}
                  </a>
                </li>
              </ul>
              {/* <p className="mb-7 font-size-4 text-gray"> */}
              {/* <div dangerouslySetInnerHTML={{ __html: job.description }} /> */}
              {/* </p> */}
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

export default JobsGridCard;
