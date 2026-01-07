import BelowNav from "../common/BelowNav"
import TabSwitch from "../common/TabSwitch"
import ProfileContactDetails from "./cards/ProfileContactDetails"
import useProfileQuery from "@/hooks/profile_hooks";
import { APPLIED_JOBS_DATA } from "@/datasets/new-applied-jobs-data";
import { SAVED_JOBS_DATA } from "@/datasets/saved-jobs-data";
import JobList from "./JobList";

const TabData = [
    {
        label: "Applied Jobs",
        content: <JobList jobs={APPLIED_JOBS_DATA} />
    },
    {
        label: "Saved Jobs",
        content: <JobList jobs={SAVED_JOBS_DATA} />
    }
]

const ProfileMasterLatest = () => {
    const { profileQuery, appliedJobsQuery, savedJobsQuery } = useProfileQuery();
    return (
        <div className="bg-default-3 flex-grow-1 font-manrope">
            <BelowNav />
            <div className="container profile-container mb-6">
                <div className="row row-gap-4">
                    <div className="col-lg-4">
                        <ProfileContactDetails
                            isLoading={profileQuery.isLoading}
                            data={profileQuery.data}
                            error={profileQuery.error}
                        />
                    </div>
                    <div className="col-lg-8 mt-10 mt-lg-0">
                        <TabSwitch tabs={TabData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMasterLatest