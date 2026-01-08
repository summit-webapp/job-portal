import { MapPinLineIcon, BriefcaseIcon } from "@phosphor-icons/react";
import { Button } from "react-bootstrap";

interface JobHeaderProps {
    jobTitle: string;
    jobLocation: string;
    jobType: string;
    jobPostingDate: string;
}

const JobHeader = ({ jobTitle, jobLocation, jobType, jobPostingDate }: JobHeaderProps) => {
    return (
        <div className="job-details-header">
            <h1>{jobTitle}</h1>
            <div className="job-details-labels-wrapper">
                <div>
                    <MapPinLineIcon size={20} />
                    {jobLocation}
                </div>
                <div>
                    <BriefcaseIcon size={20} />
                    {jobType}
                </div>
                <div>
                    <BriefcaseIcon size={20} />
                    {jobPostingDate}
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
