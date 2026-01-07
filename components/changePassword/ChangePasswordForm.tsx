import { Button } from "react-bootstrap";
import InputField from "../common/fields/InputField";

const ChangePasswordForm = () => {
    return (
        <div className="bg-white rounded-8 pt-6 px-8 pb-8 profile-card-wrapper h-100">
            <h3 className="profile-card-header font-size-4">Change Password</h3>
            <div style={{ maxWidth: 320 }}>
                <form action="">
                    <div className="change-password-form">
                        <InputField label="Old Password" type="password" />
                        <InputField label="New Password" type="password" />
                        <InputField label="Confirm Password" type="password" />
                    </div>
                    <Button className="btn-change-password">Save and Update</Button>
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordForm;
