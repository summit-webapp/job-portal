import { filtersData } from "../../datasets/filter-data";

const FilterSection = ({
  isLoading,
  data,
  error,
  selectedFilters,
  handleApplyFilters,
}: any) => {
  return (
    <div>
      {data?.message?.data?.map((filter: any) => {
        return (
          <div className="widgets mb-11">
            <h4 className="font-size-6 font-weight-semibold mb-6">
              {filter?.name}
            </h4>

            <ul className="list-unstyled filter-check-list">
              {filter?.values?.map((filterValue: string) => {
                return (
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      name={filter?.name}
                      onChange={handleApplyFilters}
                      value={filterValue}
                      checked={selectedFilters.some(
                        (selectedFilter: any) =>
                          selectedFilter.name === filter?.name &&
                          selectedFilter?.value?.includes(filterValue)
                      )}
                    />
                    <label
                      className="form-check-label pl-2"
                      htmlFor="flexCheckDefault"
                    >
                      {filterValue}
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
