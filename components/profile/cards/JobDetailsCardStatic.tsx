import { BriefcaseIcon, ChatsCircleIcon, CheckCircleIcon, EnvelopeOpenIcon, FileTextIcon, HourglassIcon, MapPinLineIcon, PhoneCallIcon, UserCircleCheckIcon, UserSoundIcon, XCircleIcon } from '@phosphor-icons/react';
import React from 'react'
import { Button } from 'react-bootstrap';

const JobDetailsCardStatic = () => {
    return (
        <div className="job-details-card">

            {/* Header */}
            <div className="jobcard-header-section">
                <div className="jobcard-job-details">
                    <h2>UX Researcher</h2>
                    <div className="jobcard-job-location">
                        <div>
                            <MapPinLineIcon size={20} />
                            Mumbai
                        </div>
                        <div>
                            <BriefcaseIcon size={20} />
                            Full Time
                        </div>
                    </div>
                </div>
                <div className="jobcard-application-status">
                    <CheckCircleIcon size={24} weight="fill" />
                    <div>Applied</div>
                </div>
                <div className="jobcard-application-status application-rejected">
                    <XCircleIcon size={24} weight="fill" />
                    <div>Rejected</div>
                </div>
            </div>

            {/* Description */}
            <p className="jobcard-description m-0">
                We are seeking a highly capable and detail-oriented UX Researcher
                to join our team. As a UX Researcher, you will play a critical role
                in understanding user needs.....
            </p>

            {/* If Job Applied */}
            <div className="jobcard-job-applied-wrapper">
                <div className="job-status-tracker">
                    <div className="status-step completed">
                        <UserCircleCheckIcon size={20} />
                        Shortlisted
                    </div>
                    <div className="status-line active"></div>
                    <div className="status-step active">
                        <PhoneCallIcon size={20} />
                        HR Screening
                    </div>
                    <div className="status-line"></div>
                    <div className="status-step">
                        <FileTextIcon size={20} />
                        Assessment
                    </div>
                    <div className="status-line"></div>
                    <div className="status-step">
                        <ChatsCircleIcon size={20} />
                        Tech Round
                    </div>
                    <div className="status-line"></div>
                    <div className="status-step">
                        <UserSoundIcon size={20} />
                        Final Interview
                    </div>
                    <div className="status-line"></div>
                    <div className="status-step">
                        <EnvelopeOpenIcon size={20} />
                        Offer Letter
                    </div>
                </div>

                <div className="job-status-tracker justify-content-between">
                    <div className="status-step under-review">
                        <HourglassIcon size={20} />
                        Under Review
                    </div>
                    <div className="jobcard-contact-footer">
                        <span>For Any Queries:</span>
                        <span className="jobcard-contact-number">+91 94164 23913</span>
                    </div>
                </div>

                <div className="jobcard-status-message">
                    Congratulations! Your profile has been shortlisted. Our HR team will reach out to you soon.
                </div>

                <div className="jobcard-status-message status-rejected">
                    Thank you for taking the time to apply. After reviewing your profile,
                    we regret to inform you that you have not been shortlisted for this stage.
                    We appreciate your interest and encourage you to apply again for future openings.
                </div>

                <div className="jobcard-contact-footer">
                    <span>For Any Queries:</span>
                    <span className="jobcard-contact-number">+91 94164 23913</span>
                </div>
            </div>

            {/* If Job Saved */}
            <div className="jobcard-button-wrap">
                <Button className="jobcard-save-job-btn">Unsave Job</Button>
                <Button className="jobcard-apply-to-job-btn">Apply to Job</Button>
            </div>

        </div>
    )
}

export default JobDetailsCardStatic;