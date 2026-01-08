import { Job } from "@/interfaces/job-interface";

export const SAVED_JOBS_DATA: Job[] = [
    {
        id: "s1",
        title: "Senior Full Stack Developer",
        location: "Pune, India",
        type: "Full Time",
        description: "We are seeking a Senior Full Stack Developer to lead our core product team. You will be responsible for defining the architecture and best practices for our Next.js and Go-based applications.",
        status: "saved",
        contactNumber: "+91 99887 76655"
    },
    {
        id: "s2",
        title: "Mobile App Developer (Flutter)",
        location: "Hybrid - Bangalore",
        type: "Full Time",
        description: "Join our mobile team to build high-performance, cross-platform applications using Flutter. Experience with state management (Riverpod/Bloc) and native integrations is required.",
        status: "saved",
        contactNumber: "+91 88776 65544"
    }
];
