import BelowNav from "../common/BelowNav"
import ProfileContactDetails from "../profile/cards/ProfileContactDetails"
import useProfileQuery from "@/hooks/profile_hooks";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordNew = () => {
    const { profileQuery } = useProfileQuery();
    return (
        <div className="bg-default-3 flex-grow-1 font-manrope d-flex flex-column">
            <BelowNav />
            <div className="container flex-grow-1 mb-6 d-flex flex-column">
                <div className="row row-gap-4 flex-grow-1">
                    <div className="col-lg-4">
                        <ProfileContactDetails
                            isLoading={profileQuery.isLoading}
                            data={profileQuery.data}
                            error={profileQuery.error}
                        />
                    </div>
                    <div className="col-lg-8 mt-10 mt-lg-0">
                        <ChangePasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordNew;