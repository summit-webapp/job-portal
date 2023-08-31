import { jobsData } from "@/datasets/jobs-data";
import Link from "next/link";
import loading from "../../styles/jobs-list-loading.module.css";
import { job_details_data } from "@/datasets/job-details";

const ProfileLoading = () => {
  //   console.log("loading state");
  return (
    <>
      {[...Array(10)].map(() => {
        return (
          <div className="bg-white shadow-9 rounded-4 skeleton_blog_profile">
            <div className="px-5 pt-8 text-center border-bottom border-mercury">
              {/* <a className="mb-4" href="#">
                <img
                  className="circle-54"
                  src="./image/l3/png/pro-img.png"
                  alt=""
                />
              </a> */}
              <h4 className="mb-0">
              </h4>
              {/* <p className="mb-8">
                      <a className="text-gray font-size-4" href="#">
                        Product Designer
                      </a>
                    </p> */}
            </div>
            {/* Top End */}
            {/* Bottom Start */}
            <div className="px-9 pt-5 pt-xl-6 pb-5">
              <h5 className="text-black-2 mb-8 font-size-5">
                {/* Contact Info */}
              </h5>

              <div className="mb-7">
                {/* <p className="font-size-4 mb-0">Location</p> */}
                <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                  {/* {data?.data?.city} */}
                </h5>
              </div>

              <div className="mb-7">
                {/* <p className="font-size-4 mb-0">E-mail</p> */}
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  {/* {data?.data?.email} */}
                </h5>
              </div>

              <div className="mb-7">
                {/* <p className="font-size-4 mb-0">Phone</p> */}
                <h5 className="font-size-4 font-weight-semibold mb-0">
                  <a
                    className="text-black-2 text-break"
                    href=""
                  >
                    {/* {data?.data?.phone_number} */}
                  </a>
                </h5>
              </div>
            </div>
            {/* Bottom End */}
          </div>
        );
      })}
    </>
  );
};

export default ProfileLoading;
