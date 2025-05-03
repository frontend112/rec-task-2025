import { useMemo, useState } from "react";
import { Products } from "./components/Products/Products";
import products from "./db/products.json";
import sortingOptions from "./db/sortingOptions.json";
import { Filters } from "./components/Filters/Filters";
const { washing_machines } = products;
const { sorting_options } = sortingOptions;

function App() {
  const [filter, setFilter] = useState({
    sorted: "Wszystkie",
    functions: "Wszystkie",
    energetic_class: "Wszystkie",
    capacity: "Wszystkie",
    searchText: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, searchText: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilters = e.target.value.split(",");

    setFilter((prevFilterState) => ({
      ...prevFilterState,
      [selectedFilters[0]]: selectedFilters[1],
    }));
  };

  let visibleProducts = washing_machines;

  visibleProducts = useMemo(() => {
    console.log(filter);
    return washing_machines.filter(
      ({
        functions,
        title,
        capacity,
        energetic_class,
        promotion_time,
        price,
      }) => {
        // need to add filter for each category (if pressed)
        return (
          functions
            .toLocaleLowerCase()
            .includes(filter.searchText.toLowerCase()) ||
          title.toLocaleLowerCase().includes(filter.searchText.toLowerCase())
        );
      }
    );
  }, [filter]);

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
                value={filter.searchText}
              />
            </div>
            <div>
              {sorting_options.length > 0 && (
                <Filters
                  sorting_options={sorting_options}
                  handleSelectChange={handleSelectChange}
                  filter={filter}
                />
              )}
              {/* <AllFilters
                handleSelectChange={handleSelectChange}
                filter={filter}
              /> */}
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
