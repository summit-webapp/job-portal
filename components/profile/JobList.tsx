import React from 'react';
import JobDetailsCard from './cards/JobDetailsCard';
import { Job } from '@/interfaces/job-interface';

const JobList = ({ jobs }: { jobs: Job[] }) => {
    return (
        <div className="job-cards-flex-list">
            {jobs.map((job) => (
                <JobDetailsCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;
