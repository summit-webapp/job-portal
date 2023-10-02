const CandidateCard = ({ content }: any) => {
  return (
    <div>
      {content?.map((content_card: any, index: number) => {
        return (
          <div className="card">
            <div className="card-body">{content_card?.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateCard;
