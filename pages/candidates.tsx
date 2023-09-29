const Candidates = () => {
  return (
    <>
      <div className="bg-default-1 pt-24 pt-lg-28 pb-13 pb-lg-25">
        <div className="container">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link show active"
                id="nav-profile-tab"
                data-toggle="tab"
                data-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Applicant
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                data-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Interview
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              profile
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              contact
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
