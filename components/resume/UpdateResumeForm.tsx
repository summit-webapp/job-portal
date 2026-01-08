import { Button } from "react-bootstrap";
import InputField from "../common/fields/InputField";
import UploadFileField from "../common/fields/UploadFileField";
import PreviousResume from "./PreviousResume";

const UpdateResumeForm = () => {
    return (
        <div className="bg-white rounded-8 pt-6 px-8 pb-8 profile-card-wrapper h-100">
            <h3 className="profile-card-header font-size-4">Update Resume</h3>
            <div style={{ maxWidth: 320 }}>
                <p className="previous-resumes-title">Previous Resumes</p>
                <div className="previous-resumes-wrapper">
                    <PreviousResume />
                    <PreviousResume />
                </div>
                <form action="">
                    <UploadFileField label="Upload Resume" />
                    <Button className="btn-update-save-resume" disabled>Save & Update</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateResumeForm;
