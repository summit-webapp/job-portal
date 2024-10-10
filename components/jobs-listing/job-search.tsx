const JobSearch = () => {
  return (
    <div>
      <form
        action="/"
        className="search-form search-2-adjustment ml-lg-0 ml-md-15"
      >
        <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
          <div className="filter-inputs">
            <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
              <input
                className="form-control focus-reset pl-13"
                type="text"
                id="keyword"
                placeholder="UI Designer"
              />
              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
              </span>
            </div>
            {/* city selection starts */}
            <div className="form-group position-relative">
              <select
                name="country"
                id="country"
                className="nice-select pl-13 h-100 arrow-3 font-size-4"
              >
                <option data-display="City, state, zip code or (Remote)">
                  City
                </option>
                <option value="">United States of America</option>
                <option value="">United Arab Emirates</option>
                <option value="">Bangladesh</option>
                <option value="">Pakistan</option>
              </select>
              <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
              </span>
            </div>
            {/* city selection ends */}
          </div>
          <div className="button-block">
            <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;
