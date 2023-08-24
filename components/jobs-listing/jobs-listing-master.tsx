import FilterSection from "./filter-section";
import JobSearch from "./job-search";
import JobsCardContainer from "./jobs-card-container";

const JobsListMaster = () => {
  return (
    <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-xs-8">
            <FilterSection />
          </div>

          <div className="col-12 col-md-8 col-xs-12 ">
            {/* <JobSearch /> */}

            <div className=" ml-lg-0 ml-md-15">
              {/* count of jobs div starts */}
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="font-size-4 font-weight-normal text-default-color">
                  <span className="heading-default-color">120</span>
                  {" "}results for{" "}
                  <span className="heading-default-color">UI Designer</span>
                </h5>
              </div>
              {/* count of jobs div ends */}

              <div className="pt-6">
                <JobsCardContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListMaster;
