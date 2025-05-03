import { FC } from "react";
import { FilterType } from "../../types/FilterType";
import { FilterValues } from "../../types/FilterValues";
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
  currentFilter: { name, subcategories },
}) => {
  const categoriesWithAll =
    name !== FilterValues.SORTBY
      ? [FilterValues.ALL, ...subcategories]
      : [FilterValues.POPULARITY, ...subcategories];
  return (
    <>
      {categoriesWithAll.map((subcategory) => (
        <option
          value={[name, subcategory]}
          key={subcategory}
          className="pt-8 pb-8"
        >
          {subcategory}
        </option>
      ))}
    </>
  );
};
