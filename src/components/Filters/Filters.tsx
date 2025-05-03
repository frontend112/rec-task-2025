import { Fragment, FC, ChangeEvent } from "react";
import { FilterType } from "../../types/FilterType";
import { Filter } from "../Filter/Filter";
type Props = {
  sorting_options: FilterType[];
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  filter: {
    sorted: string;
    function: string;
    energetic: string;
    capacity: string;
    searchText: string;
  };
};

export const Filters: FC<Props> = ({
  sorting_options,
  handleSelectChange,
  filter,
}) => {
  return (
    <div className="flex justify-between flex-wrap">
      {sorting_options.map((currentFilter) => (
        <section
          key={currentFilter.id}
          className="flex flex-col w-1/2 md:w-1/4"
        >
          <label htmlFor={currentFilter.name}>{currentFilter.name_pl}</label>
          <select
            name={currentFilter.name}
            id={currentFilter.name}
            onChange={handleSelectChange}
          >
            <Filter currentFilter={currentFilter} filter={filter} />
          </select>
        </section>
      ))}
    </div>
  );
};
