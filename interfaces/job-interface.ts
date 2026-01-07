export interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    description: string;
    status: 'pending' | 'shortlisted' | 'rejected' | 'saved';
    currentStep?: number; // 1 to 6
    statusMessage?: string;
    contactNumber: string;
}
