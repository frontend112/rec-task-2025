import { useState } from "react";
import { Products } from "./components/Products/Products";
import products from "./db/products.json";
import { SortBy } from "./types/enums/SortBy";
// import { Filter } from "./components/Filter/Filter";
import { AllFilters } from "./components/AllFilters/AllFilters";
import { FunctionType } from "./types/enums/FunctionType";
import { EnergeticType } from "./types/enums/EnergeticType";
import { CapacityType } from "./types/enums/CapacityType";
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
    // console.log(e.target.value);
    setFilter((prevFilter) => ({ ...prevFilter }));
  };

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchbyword(e.target.value);
  };

  return (
    <div>
      <h1 className="pb-4 text-center text-[40px] leading-[56px] font-bold ">
        Wybierz urządzenie
      </h1>
      <div className="bg-[#F8F8F8] text-[12px] leading-[18px]">
        <div className="max-w-[1046px] m-auto">
          <section className="search">
            <div className="text-center">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleWordChange}
                className=""
                value={searchByWord}
              />
            </div>
            <div>
              <AllFilters
                handleSelectChange={handleSelectChange}
                filter={filter}
              />
            </div>
            <div className="flex w-full"></div>
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
