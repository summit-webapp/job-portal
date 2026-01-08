interface JobContentProps {
    title: string;
    content: string;
}

const JobContent = ({ title, content }: JobContentProps) => {
    return (
        <div className="job-details-content-wrap">
            <h2 className="job-details-title-bold mt-4">{title}</h2>
            <p className="job-details-text">
                {content}
            </p>
        </div>
    );
};

export default JobContent;
