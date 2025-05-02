import React from "react";
import { SortBy } from "../../types/enums/SortBy";
import { CapacityType } from "../../types/enums/CapacityType";
import { EnergeticType } from "../../types/enums/EnergeticType";
import { FunctionType } from "../../types/enums/FunctionType";
import { FilterNameType } from "../../types/FilterNameType";
type Props = {
  choosenFilter: SortBy | CapacityType | EnergeticType | FunctionType;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterName: FilterNameType;
};

export const Filter: React.FC<Props> = ({
  choosenFilter,
  handleSelectChange,
  filterName,
}) => {
  console.log(choosenFilter);
  // const mapSortByFilters = (
  //   Object.keys(SortBy) as Array<keyof typeof SortBy>
  // ).map((key) => <option value={SortBy[key]}>{SortBy[key]}</option>);
  const mapFilters = (filterName: FilterNameType) => {
    const mapSortByFilters = (
      Object.keys(SortBy) as Array<keyof typeof SortBy>
    ).map((key) => <option value={SortBy[key]}>{SortBy[key]}</option>);

    let filterMethod: any = SortBy;
    switch (filterName) {
      case FilterNameType.FUNCTION:
        filterMethod = FunctionType;
        break;
      case FilterNameType.ENERGETIC:
        filterMethod = EnergeticType;
        break;
      case FilterNameType.CAPACITY:
        filterMethod = CapacityType;
        break;
      case FilterNameType.SORTBY:
        filterMethod = SortBy;
        break;
      default:
        filterMethod = SortBy;
        break;
    }

    return (Object.keys(filterMethod) as Array<keyof typeof filterMethod>).map(
      (key) => <option value={filterMethod[key]}>{filterMethod[key]}</option>
    );
  };
  return (
    <div>
      <h2>{filterName}:</h2>
      <div>
        <select name="sortby" id="sortby" onChange={handleSelectChange}>
          {mapFilters(filterName)}
        </select>
      </div>
    </div>
  );
};
