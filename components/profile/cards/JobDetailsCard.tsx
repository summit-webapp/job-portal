import { BriefcaseIcon, ChatsCircleIcon, CheckCircleIcon, EnvelopeOpenIcon, FileTextIcon, HourglassIcon, MapPinLineIcon, PhoneCallIcon, UserCircleCheckIcon, UserSoundIcon, XCircleIcon } from '@phosphor-icons/react';
import React from 'react'
import { Button } from 'react-bootstrap';
import { Job } from '@/interfaces/job-interface';

interface JobDetailsCardProps {
    job: Job;
}

const JobDetailsCard: React.FC<JobDetailsCardProps> = ({ job }) => {
    const steps = [
        { label: 'Shortlisted', icon: UserCircleCheckIcon },
        { label: 'HR Screening', icon: PhoneCallIcon },
        { label: 'Assessment', icon: FileTextIcon },
        { label: 'Tech Round', icon: ChatsCircleIcon },
        { label: 'Final Interview', icon: UserSoundIcon },
        { label: 'Offer Letter', icon: EnvelopeOpenIcon },
    ];

    return (
        <div className="job-details-card">
            {/* Header */}
            <div className="jobcard-header-section">
                <div className="jobcard-job-details">
                    <h2>{job.title}</h2>
                    <div className="jobcard-job-location">
                        <div>
                            <MapPinLineIcon size={20} />
                            {job.location}
                        </div>
                        <div>
                            <BriefcaseIcon size={20} />
                            {job.type}
                        </div>
                    </div>
                </div>
                {job.status === 'shortlisted' || job.status === 'pending' ? (
                    <div className="jobcard-application-status">
                        <CheckCircleIcon size={24} weight="fill" />
                        <div>Applied</div>
                    </div>
                ) : job.status === 'rejected' ? (
                    <div className="jobcard-application-status application-rejected">
                        <XCircleIcon size={24} weight="fill" />
                        <div>Rejected</div>
                    </div>
                ) : null}
            </div>

            {/* Description */}
            <p className="jobcard-description m-0">
                {job.description}
            </p>

            {/* If Job Applied */}
            {job.status !== 'saved' && (
                <div className="jobcard-job-applied-wrapper">
                    {job.status === 'shortlisted' && (
                        <div className="job-status-tracker progress-steps">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className={`status-step ${index + 1 < (job.currentStep || 0) ? 'completed' : index + 1 === job.currentStep ? 'active' : ''}`}>
                                        <step.icon size={20} />
                                        {step.label}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`status-line ${index + 1 < (job.currentStep || 0) ? 'active' : ''}`}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}

                    {job.status === 'pending' && (
                        <div className="job-status-tracker justify-content-between">
                            <div className="status-step under-review">
                                <HourglassIcon size={20} />
                                Under Review
                            </div>
                            <div className="jobcard-contact-footer">
                                <span>For Any Queries:</span>
                                <span className="jobcard-contact-number">{job.contactNumber}</span>
                            </div>
                        </div>
                    )}

                    {(job.status === 'shortlisted' || job.status === 'pending') && job.statusMessage && (
                        <div className="jobcard-status-message">
                            {job.statusMessage}
                        </div>
                    )}

                    {job.status === 'rejected' && (
                        <div className="jobcard-status-message status-rejected">
                            {job.statusMessage || "Thank you for taking the time to apply. After reviewing your profile, we regret to inform you that you have not been shortlisted for this stage. We appreciate your interest and encourage you to apply again for future openings."}
                        </div>
                    )}

                    {job.status === 'shortlisted' && (
                        <div className="jobcard-contact-footer">
                            <span>For Any Queries:</span>
                            <span className="jobcard-contact-number">{job.contactNumber}</span>
                        </div>
                    )}
                </div>
            )}

            {/* If Job Saved (Optional interaction if needed) */}
            {job.status === 'saved' && (
                <div className="jobcard-button-wrap">
                    <Button className="jobcard-save-job-btn">Remove</Button>
                    <Button className="jobcard-apply-to-job-btn">Apply Now</Button>
                </div>
            )}
        </div>
    )
}

export default JobDetailsCard;
