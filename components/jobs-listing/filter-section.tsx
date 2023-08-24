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
                  <li className="mb-2">
                    <a href="#" className="toggle-item">
                      {value}
                    </a>
                  </li>
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
