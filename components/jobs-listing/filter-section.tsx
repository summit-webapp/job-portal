import { filtersData } from "../../datasets/filter-data";

const FilterSection = () => {
  return (
    <div>
      {filtersData?.map((filter: any) => {
        return (
          <div className="widgets mb-11">
            <h4 className="font-size-6 font-weight-semibold mb-6">
              {filter?.name}
            </h4>

            <ul className="list-unstyled filter-check-list">
              {filter?.values?.map((value: string) => {
                return (
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      name={filter.section}
                      // onChange={handleApplyFilters}
                      // value={filterValue}
                      // checked={selectedFilters.some(
                      //   (selectedFilter: any) =>
                      //     selectedFilter.name === filter.section &&
                      //     selectedFilter.value.includes(filterValue)
                      // )}
                    />
                    <label
                      className="form-check-label pl-2"
                      htmlFor="flexCheckDefault"
                    >
                      {value}
                    </label>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSection;
