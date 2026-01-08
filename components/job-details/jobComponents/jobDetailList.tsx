interface JobDetailListProps {
    listType?: "number" | "dot";
    title: string;
    items?: string[];
}

const JobDetailList = ({ listType = "dot", title, items = [] }: JobDetailListProps) => {
    const ListTag = listType === "number" ? "ol" : "ul";

    return (
        <div className="job-details-content-wrap">
            <h2 className="job-details-title-bold mt-4">{title}</h2>
            <ListTag>
                {items.length > 0 && (
                    items.map((item, index) => <li key={index}>{item}</li>)
                )}
            </ListTag>
        </div>
    );
};

export default JobDetailList;
