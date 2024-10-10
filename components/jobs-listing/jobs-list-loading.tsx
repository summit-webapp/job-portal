import { jobsData } from "@/datasets/jobs-data";
import Link from "next/link";
import loading from "../../styles/jobs-list-loading.module.css";
import { job_details_data } from "@/datasets/job-details";

const JobsListLoading = () => {
  //   console.log("loading state");
  return (
    <>
      {[...Array(10)].map(() => {
        return (
          <div className="col-12 col-lg-6">
            <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
              <div className={`${loading.skeleton_author} mt-n4`}></div>

              <ul className="list-unstyled mb-1 card-tag-list">
                <div className={`m-3 ${loading.skeleton_types}`}></div>
                <div className={`m-3 ${loading.skeleton_types}`}></div>
              </ul>
              <div className="card-btn-group">
                <main className={`m-3 ${loading.skeleton_image}`}></main>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobsListLoading;
