import { Job } from "@/interfaces/job-interface";

export const APPLIED_JOBS_DATA: Job[] = [
    {
        id: "1",
        title: "Frontend Developer",
        location: "Bangalore, India",
        type: "Full Time",
        description: "We are looking for a skilled Frontend Developer with expertise in React.js and modern CSS frameworks to build responsive and user-friendly web applications.",
        status: "shortlisted",
        currentStep: 3,
        statusMessage: "Congratulations! Your profile has been shortlisted. Our HR team will reach out to you soon for the HR Screening.",
        contactNumber: "+91 98765 43210"
    },
    {
        id: "2",
        title: "Backend Engineer",
        location: "Remote",
        type: "Contract",
        description: "Join our backend team to design and implement scalable APIs using Node.js and PostgreSQL. Experience with cloud platforms like AWS is a plus.",
        status: "pending",
        statusMessage: "Your application is currently under review. We’ll notify you once the status is updated.",
        contactNumber: "+91 87654 32109"
    },
    {
        id: "3",
        title: "UI/UX Designer",
        location: "Mumbai, India",
        type: "Full Time",
        description: "Seeking a creative UI/UX Designer to craft intuitive user experiences and visually appealing interfaces for our mobile and web platforms.",
        status: "rejected",
        statusMessage: "Thank you for taking the time to apply. After reviewing your profile, we regret to inform you that you have not been shortlisted for this stage. We appreciate your interest and encourage you to apply again for future openings.",
        contactNumber: "+91 76543 21098"
    }
];
