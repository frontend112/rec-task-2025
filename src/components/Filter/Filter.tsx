import { FC } from "react";
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
  currentFilter: { name, subcategories },
}) => {
  const categoriesWithAll =
    name !== "sorted"
      ? ["Wszystkie", ...subcategories]
      : ["Popularność", ...subcategories];
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
