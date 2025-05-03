import React, { FC } from "react";
import { FilterType } from "../../types/FilterType";
// import { ChangeEvent } from "react";
type Props = {
  currentFilter: FilterType;
  filter: {
    sorted: string;
    functions: string;
    energetic_class: string;
    capacity: string;
    searchText: string;
  };
};

export const Filter: FC<Props> = ({
  currentFilter: { id, name, name_pl, subcategories },
  filter,
}) => {
  const categoriesWithAll = ["Wszystkie", ...subcategories];
  return (
    <>
      {categoriesWithAll.map((subcategory) => (
        <option value={[name, subcategory]} key={subcategory}>
          {subcategory}
        </option>
      ))}
    </>
  );
};
