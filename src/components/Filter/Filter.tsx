import React, { FC } from "react";
import { FilterType } from "../../types/FilterType";
type Props = {
  currentFilter: FilterType;
  filters: {
    sorted: string;
    functions: string;
    energetic_class: string;
    capacity: string;
  };
};

export const Filter: FC<Props> = ({
  currentFilter: { id, name, name_pl, subcategories },
  filters,
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
