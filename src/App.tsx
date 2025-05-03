import { useMemo, useState } from "react";
import { Products } from "./components/Products/Products";
import productsJson from "./db/products.json";
import sortingOptions from "./db/sortingOptions.json";
import { Filters } from "./components/Filters/Filters";
import { FilterValues } from "./types/FilterValues";
import { SearchInput } from "./components/SearchInput/SearchInput";
const { washing_machines } = productsJson;
const { sorting_options } = sortingOptions;

function App() {
  let visibleProducts = washing_machines;

  const [filters, setFilters] = useState({
    sorted: FilterValues.POPULARITY,
    functions: FilterValues.ALL,
    energetic_class: FilterValues.ALL,
    capacity: FilterValues.ALL,
  });

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(() => e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilters = e.target.value.split(",");

    setFilters((prevFilterState) => ({
      ...prevFilterState,
      [selectedFilters[0]]: selectedFilters[1],
    }));
  };

  [...visibleProducts] = useMemo(() => {
    console.log(filters.sorted);
    return washing_machines
      .filter(
        ({ functions, title }) =>
          functions.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
          title.toLocaleLowerCase().includes(searchText.toLowerCase())
      )
      .filter((productFiltered) => {
        if (
          filters.capacity !== FilterValues.ALL &&
          filters.capacity !== productFiltered.capacity
        ) {
          return false;
        } else if (
          filters.energetic_class !== FilterValues.ALL &&
          filters.energetic_class !== productFiltered.energetic_class
        ) {
          return false;
        } else if (
          filters.functions !== FilterValues.ALL &&
          !productFiltered.functions.includes(filters.functions)
        ) {
          return false;
        } else {
          return true;
        }
      })
      .sort((a, b) => {
        if (filters.sorted === FilterValues.POPULARITY) {
          return a.id > b.id ? 1 : -1;
        }
        if (filters.sorted === FilterValues.PRICE) {
          return a.price - b.price;
        }
        if (filters.sorted === FilterValues.CAPACATY) {
          return +b.capacity.replace("kg", "") - +a.capacity.replace("kg", "");
        }
        return 1;
      });
  }, [searchText, filters]);

  if (washing_machines.length === 0) {
    return <div>database problem</div>;
  }

  return (
    <div>
      <h1 className="pb-4 text-center text-[40px] leading-[56px] font-bold ">
        Wybierz urządzenie
      </h1>
      <div className="w-full bg-[#F8F8F8] text-[12px] leading-[18px]">
        <div className="max-w-[1046px] m-auto">
          <section className="search">
            <SearchInput
              handleInputChange={handleInputChange}
              searchText={searchText}
            />
            <div>
              {sorting_options.length > 0 && (
                <Filters
                  sorting_options={sorting_options}
                  handleSelectChange={handleSelectChange}
                  filters={filters}
                />
              )}
            </div>
            <div className="flex w-full"></div>
          </section>
          {visibleProducts.length > 0 ? (
            <Products products={visibleProducts} />
          ) : (
            <h3 className="py-8 text-xl text-center font-bold">
              Przepraszamy, nie znaleziono żadnych wyników.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
