import { ChangeEvent, FC } from "react";
import { CapacityType } from "../../types/enums/CapacityType";
import { EnergeticType } from "../../types/enums/EnergeticType";
import { SortBy } from "../../types/enums/SortBy";
import { FunctionType } from "../../types/enums/FunctionType";
import { Filter } from "../Filter/Filter";

type Props = {
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  filter: {
    sorted: SortBy;
    function: FunctionType;
    energetic: EnergeticType;
    capacity: CapacityType;
  };
};

export const AllFilters: FC<Props> = ({ handleSelectChange, filter }) => {
  const capacities = Object.values(CapacityType);
  const energeticClasses = Object.values(EnergeticType);
  const sortBys = Object.values(SortBy);
  const functions = Object.values(FunctionType);

  const filtersMapped = [capacities, energeticClasses, sortBys, functions];
  return (
    <div className="flex w-full justify-between">
      {filtersMapped.map((currentOptions) => (
        <div>
          <Filter
            handleSelectChange={handleSelectChange}
            options={currentOptions}
            name=""
          />
        </div>
      ))}
    </div>
  );
};
