import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProfileQuery from "@/hooks/profile_hooks";
import { applied_jobs_data } from "../../datasets/applied-jobs";
import Link from "next/link";
import ProfileInfoCard from "@/cards/profile-info-card";
import AppliedJobsCard from "@/cards/applied-jobs-card";
import SavedJobsCard from "@/cards/profile-jobs-card";
import Loader from "react-loader-spinner";

const ProfileMaster = () => {
  const { profileQuery, appliedJobsQuery, savedJobsQuery } = useProfileQuery();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="bg-default-2 pt-8 pt-lg-8 pb-7 pb-lg-23 profile-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-8 dark-mode-texts">
            <div className="mb-9">
              <Link href="/jobs" className="d-flex align-items-center ml-4">
                <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                <span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {/* sidebar starts */}
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-xs-10 mb-11 mb-lg-0">
            <div className="mr-0 mr-xl-17">
              <div className="pl-lg-5">
                <div>
                  {profileQuery.isLoading ? (
                    <div className="spinner-border text-success text-center" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : profileQuery.error ? (
                    <div>Error</div>
                  ) : (

                    <ProfileInfoCard isLoading={profileQuery.isLoading} data={profileQuery.data} error={profileQuery.error} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* sidebar ends */}
          <div className="col-12 col-xl-8 col-lg-8 ms-3">
            <div className="mb-5">
              <div>
                <h4>Applied Jobs</h4>
                {profileQuery.isLoading ? (
                  <div className="spinner-border text-success  text-center" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : profileQuery.error ? (
                  <div>Error</div>
                ) : (

                  <AppliedJobsCard isLoading={appliedJobsQuery.isLoading} data={appliedJobsQuery.data} error={appliedJobsQuery.error} />
                )
                }
              </div>
              
              <div>
                <h4>Saved Jobs</h4>
                {profileQuery.isLoading ? (
                  <div className="spinner-border text-success  text-center" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : profileQuery.error ? (
                  <div>Error</div>
                ) : (
                  <SavedJobsCard isLoading={savedJobsQuery.isLoading} data={savedJobsQuery.data} error={savedJobsQuery.error} />
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMaster;
