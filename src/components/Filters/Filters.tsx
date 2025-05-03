import { FC, ChangeEvent } from "react";
import { FilterType } from "../../types/FilterType";
import { Filter } from "../Filter/Filter";
type Props = {
  sorting_options: FilterType[];
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  filters: {
    sorted: string;
    functions: string;
    energetic_class: string;
    capacity: string;
  };
};

export const Filters: FC<Props> = ({
  sorting_options,
  handleSelectChange,
  filters,
}) => (
  <div className="flex justify-between flex-wrap">
    {sorting_options.map((currentFilter) => (
      <section
        key={currentFilter.id}
        className="flex flex-col w-1/2 md:w-1/4 px-1.5"
      >
        <label
          htmlFor={currentFilter.name}
          className="text-[18px] leading-[22px] font-bold pb-2"
        >
          {currentFilter.name_pl}:
        </label>
        <select
          name={currentFilter.name}
          id={currentFilter.name}
          onChange={handleSelectChange}
          className="p-2 text-[14px] leading-[22px]"
        >
          <Filter currentFilter={currentFilter} filters={filters} />
        </select>
      </section>
    ))}
  </div>
);
