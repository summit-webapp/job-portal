import Link from "next/link";
import { job_details_data } from "../../datasets/job-details";
import { APIDataTypes } from "@/interfaces/api-data-types";
import BelowNav from "../common/BelowNav";
import JobHeader from "./jobComponents/jobHeader";
import JobContent from "./jobComponents/jobContent";
import JobList from "../profile/JobList";
import JobDetailList from "./jobComponents/jobDetailList";

const JobDetailMasterNew = ({
	isLoading,
	data,
	error,
	appliedJobsQuery,
	savedJobsQuery,
	createJobApplicantFunction,
}: any) => {
	const appliedJobsDesignationSet = new Set(
		appliedJobsQuery?.map((item: any) => item.designation)
	);
	const savedJobsDesignationSet = new Set(
		savedJobsQuery?.map((item: any) => item.designation)
	);
	const returnFormattedDate = (raw_date: any) => {
		const splitDate: any = raw_date?.split(" ");
		const options: any = { year: "numeric", month: "long", day: "numeric" };
		const formattedDate = new Date(splitDate).toLocaleDateString(
			"en-US",
			options
		);
		return formattedDate;
	};
	return (
		<div className="bg-default-3 flex-grow-1 d-flex flex-column font-manrope">
			<BelowNav />
			<div className="container">
				<div className="row justify-content-center">
					<div className="bg-white col-11 col-lg-8 job-details-container">
						<JobHeader />
						<JobContent />
						<JobContent />
						<JobDetailList />
						<JobDetailList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetailMasterNew;
