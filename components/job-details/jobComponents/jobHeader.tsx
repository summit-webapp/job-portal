import { MapPinLineIcon, BriefcaseIcon } from "@phosphor-icons/react";
import { Button } from "react-bootstrap";

const JobHeader = () => {
    return (
        <div className="job-details-header">
            <h1>Business Development Manager</h1>
            <div className="job-details-labels-wrapper">
                <div>
                    <MapPinLineIcon size={20} />
                    Mumbai
                </div>
                <div>
                    <BriefcaseIcon size={20} />
                    Full-Time
                </div>
                <div>
                    <BriefcaseIcon size={20} />
                    September 11, 2024
                </div>
            </div>
            <div className="job-details-buttons-wrapper">
                <Button className="job-details-save-button">Save Job</Button>
                <Button className="job-details-apply-button">Apply to Job</Button>
            </div>
        </div>
    );
};

export default JobHeader;
