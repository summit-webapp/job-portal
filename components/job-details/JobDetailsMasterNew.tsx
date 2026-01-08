import BelowNav from "../common/BelowNav";
import JobHeader from "./jobComponents/JobHeader";
import JobContent from "./jobComponents/JobContent";
import JobDetailList from "./jobComponents/JobDetailList";

import { job_single_details } from "../../datasets/job-single-details";

const JobDetailMasterNew = () => {
	return (
		<div className="bg-default-3 flex-grow-1 d-flex flex-column font-manrope">
			<BelowNav link="/jobs" text="Back to Job List" maxWidth={900} />
			<div className="container">
				<div className="row justify-content-center">
					<div className="bg-white col-11 col-lg-8 job-details-container">
						<JobHeader
							jobTitle={job_single_details.job_title}
							jobLocation={job_single_details.job_location}
							jobType={job_single_details.job_type}
							jobPostingDate={job_single_details.job_posting_date}
						/>
						<JobContent
							title={job_single_details.about_us.title}
							content={job_single_details.about_us.content}
						/>
						<JobContent
							title={job_single_details.job_description.title}
							content={job_single_details.job_description.content}
						/>
						<JobDetailList
							title={job_single_details.responsibilities.title}
							listType="dot"
							items={job_single_details.responsibilities.items}
						/>
						<JobDetailList
							title={job_single_details.qualifications.title}
							listType="number"
							items={job_single_details.qualifications.items}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetailMasterNew;
