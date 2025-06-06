import { ChangeEvent, FC } from "react";
type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
};
export const SearchInput: FC<Props> = ({ handleInputChange, searchText }) => (
  <div className="pt-9 pb-9 text-center">
    <input
      type="text"
      placeholder="Szukaj..."
      onChange={handleInputChange}
      className="w-full md:w-64 h-9 pl-2"
      value={searchText}
    />
  </div>
);
