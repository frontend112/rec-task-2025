import React, { ChangeEvent } from "react";

type Props = {
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  name: string;
};

export const Filter: React.FC<Props> = ({
  handleSelectChange,
  options,
  name,
}) => {
  const mappedOptions = () => (
    <div>
      <h2>{name}</h2>
      <select name="capacity" id="capacity" onChange={handleSelectChange}>
        {options.map((element: string) => (
          <option value={element} key={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );

  return <div>{mappedOptions()}</div>;
};
