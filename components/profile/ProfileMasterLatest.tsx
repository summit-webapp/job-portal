import ProfileJobsCard from "@/cards/profile-jobs-card";
import BelowNav from "../common/BelowNav"
import TabSwitch from "../common/TabSwitch"
import ProfileContactDetails from "./cards/ProfileContactDetails"
import useProfileQuery from "@/hooks/profile_hooks";
import ProfileSavedJobs from "./cards/ProfileSavedJobs";
import JobDetailsCard from "./cards/JobDetailsCard";

const TabData = [
    {
        label: "Applied Jobs",
        content: <JobDetailsCard />
    },
    {
        label: "Saved Jobs",
        content: <ProfileSavedJobs />
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