import { APIDataTypes } from "@/interfaces/api-data-types";
import FilterSection from "./filter-section";
import JobSearch from "./job-search";
import JobsCardContainer from "./jobs-card-container";

const JobsListMaster = ({
  jobListIsLoading,
  jobListData,
  jobListError,
  filterLoading,
  filterData,
  filterError,
  selectedFilters,
  handleApplyFilters,
}: any) => {
  return (
    <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-xs-8">
            <FilterSection
              isLoading={filterLoading}
              data={filterData}
              error={filterError}
              selectedFilters={selectedFilters}
              handleApplyFilters={handleApplyFilters}
            />
          </div>

          <div className="col-12 col-md-9 col-xs-12 ">
            {/* <JobSearch /> */}

            <div className=" ml-lg-0 ml-md-15">
              {/* count of jobs div starts */}
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="font-size-4 font-weight-normal text-default-color">
                  {jobListData?.message?.data?.length} Job Openings
                  {/* <span className="heading-default-color">120</span> results for{" "}
                  <span className="heading-default-color">UI Designer</span> */}
                </h5>
              </div>
              {/* count of jobs div ends */}

              <div className="pt-6">
                {jobListError ? (
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <h6>
                        Something went wrong ... Please look back in sometime
                      </h6>
                    </div>
                  </div>
                ) : (
                  <JobsCardContainer
                    isLoading={jobListIsLoading}
                    data={jobListData}
                    error={jobListError}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListMaster;
