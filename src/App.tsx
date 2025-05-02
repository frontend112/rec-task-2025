import { useState } from "react";
import { Products } from "./components/Products/Products";
import products from "./db/products.json";
import { SortBy } from "./types/enums/SortBy";
import { Filter } from "./components/Filter/Filter";
import { FunctionType } from "./types/enums/FunctionType";
import { EnergeticType } from "./types/enums/EnergeticType";
import { CapacityType } from "./types/enums/CapacityType";
import { FilterNameType } from "./types/FilterNameType";
const { washing_machines } = products;

function App() {
  const [filter, setFilter] = useState({
    sorted: SortBy.ALL,
    function: FunctionType.ALL,
    energetic: EnergeticType.ALL,
    capacity: CapacityType.ALL,
  });
  const [searchByWord, setSearchbyword] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1 className="pb-4 text-center text-[40px] leading-[56px] font-bold ">
        Wybierz urządzenie
      </h1>
      <div className="bg-[#F8F8F8] text-[12px] leading-[18px]">
        <div className="max-w-[1046px] m-auto">
          <section className="search">
            <div>
              <input
                type="text"
                placeholder="Search..."
                onChange={handleWordChange}
              />
            </div>
            <div className="flex w-full">
              <Filter
                filterName={FilterNameType.SORTBY}
                choosenFilter={filter.sorted}
                handleSelectChange={handleSelectChange}
              />
              <Filter
                filterName={FilterNameType.FUNCTION}
                choosenFilter={filter.function}
                handleSelectChange={handleSelectChange}
              />
              <Filter
                filterName={FilterNameType.ENERGETIC}
                choosenFilter={filter.energetic}
                handleSelectChange={handleSelectChange}
              />
              <Filter
                filterName={FilterNameType.CAPACITY}
                choosenFilter={filter.capacity}
                handleSelectChange={handleSelectChange}
              />
            </div>
          </section>
          {washing_machines.length > 0 ? (
            <Products products={washing_machines} />
          ) : (
            "there is no products or problem with connecting to database"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
