import { useMemo, useState } from "react";
import { Products } from "./components/Products/Products";
import productsJson from "./db/products.json";
import sortingOptions from "./db/sortingOptions.json";
import { Filters } from "./components/Filters/Filters";
const { washing_machines } = productsJson;
const { sorting_options } = sortingOptions;

function App() {
  const [filters, setFilters] = useState({
    sorted: "Wszystkie",
    functions: "Wszystkie",
    energetic_class: "Wszystkie",
    capacity: "Wszystkie",
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

  let visibleProducts = washing_machines;

  visibleProducts = useMemo(() => {
    return washing_machines
      .filter(
        ({ functions, title }) =>
          functions.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
          title.toLocaleLowerCase().includes(searchText.toLowerCase())
      )
      .filter((productFiltered) => {
        if (
          filters.capacity !== "Wszystkie" &&
          filters.capacity !== productFiltered.capacity
        ) {
          return false;
        } else if (
          filters.energetic_class !== "Wszystkie" &&
          filters.energetic_class !== productFiltered.energetic_class
        ) {
          return false;
        } else if (
          filters.functions !== "Wszystkie" &&
          !productFiltered.functions.includes(filters.functions)
        ) {
          return false;
        } else {
          return true;
        }
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
      <div className="bg-[#F8F8F8] text-[12px] leading-[18px]">
        <div className="max-w-[1046px] m-auto">
          <section className="search">
            <div className="text-center pt-9 pb-9">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                className="w-32 md:w-64 h-9 pl-2"
                value={searchText}
              />
            </div>
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
            "Przepraszamy, nie znaleziono żadnych wyników."
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
