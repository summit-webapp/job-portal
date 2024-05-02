import { APIDataTypes } from "@/interfaces/api-data-types";
import FilterSection from "./filter-section";
import JobSearch from "./job-search";
import JobsCardContainer from "./jobs-card-container";
import ReactPaginate from "react-paginate";

const JobsListMaster = ({
  jobListIsLoading,
  jobListData,
  jobListError,
  filterLoading,
  filterData,
  filterError,
  selectedFilters,
  handleApplyFilters,
  createJobApplicantFunction,
  appliedJobsQuery,
  savedJobsQuery,
}: any) => {
  const appliedJobsDesignationSet = new Set(
    appliedJobsQuery?.map((item: any) => item.designation)
  );
  const savedJobsDesignationSet = new Set(
    savedJobsQuery?.map((item: any) => item.designation)
  );
  // console.log("applicant ", appliedJobsDesignationSet);
  return (
    <div className="bg-default-1 pt-24 pt-lg-28 pb-13 pb-lg-25">
      {/* job-listing class added */}
      <div className="container job-listing"> 
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
            {/* <div>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                forcePage={pageOffset}
              />
            </div> */}

            <div className=" ml-lg-0 ml-md-15 pt-1">
              {/* count of jobs div starts */}
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="font-size-4 font-weight-normal text-default-color">
                  {jobListData?.length} Job Openings
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
                    createJobApplicantFunction={createJobApplicantFunction}
                    appliedJobsDesignationSet={appliedJobsDesignationSet}
                    savedJobsDesignationSet={savedJobsDesignationSet}
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
