import React from 'react'
import { Button } from 'react-bootstrap';

const JobDetailsCard = () => {
    return (
        <div className="job-details-card">

            {/* Header */}
            <div className="jobcard-header-section">
                <div className="jobcard-job-details">
                    <h2>UX Researcher</h2>
                    <div className="jobcard-job-location">
                        <div>Mumbai</div>
                        <div>Full Time</div>
                    </div>
                </div>
                <div>
                    <div>Applied</div>
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
                    <div className="status-step active">Shortlisted</div>
                    <div className="status-line active"></div>
                    <div className="status-step">HR Screening</div>
                    <div className="status-line"></div>
                    <div className="status-step">Assessment</div>
                    <div className="status-line"></div>
                    <div className="status-step">Tech Round</div>
                    <div className="status-line"></div>
                    <div className="status-step">Final Interview</div>
                    <div className="status-line"></div>
                    <div className="status-step">Offer Letter</div>
                </div>

                <div className="jobcard-status-message">
                    Congratulations! Your profile has been shortlisted. Our HR team will reach out to you soon.
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

export default JobDetailsCard;
