import styles from "../styles/candidate-cards.module.css";

const CandidateCard = ({ content }: any) => {
  return (
    <div>
      {content?.map((content_card: any, index: number) => {
        return (
          <div className="card mb-3">
            <div className="d-flex justify-content-between align-items-center mx-3 mt-5">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mx-3">
                  <p className={`${styles.card_content} ${styles.f7}`}>
                    {content_card?.name}
                  </p>
                </div>
                <div className="mx-3">
                  <p className={`${styles.card_content}`}>
                    {content_card?.designation}
                  </p>
                </div>
              </div>
              <div className="">
                <p className={`${styles.card_content}`}>{content_card?.date}</p>
              </div>
            </div>

            <div className="mx-5">
              <p className={`${styles.card_content}`}>
                {content_card?.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateCard;
