const CandidateCard = ({ content }: any) => {
  return (
    <div>
      {content?.map((content_card: any, index: number) => {
        return (
          <div className="card">
            <div className="card-body">
              <p>{content_card?.name}</p>
              <p>{content_card?.designation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateCard;
