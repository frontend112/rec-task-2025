import { useState } from "react";
import { Products } from "./components/Products/Products";
import products from "./db/products.json";
import { SortBy } from "./types/sortBy";
const { washing_machines } = products;
function App() {
  const [filter, setFilter] = useState({ sorted: SortBy.ALL });
  const [searchByWord, setSearchbyword] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const allFilters = (Object.keys(SortBy) as Array<keyof typeof SortBy>).map(
    (key) => <option value={SortBy[key]}>{SortBy[key]}</option>
  );
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
            <div>
              <div>
                <h2>Sortuj po:</h2>
                <div>
                  <select
                    name="sortby"
                    id="sortby"
                    onChange={handleSelectChange}
                  >
                    {allFilters}
                  </select>
                </div>
              </div>
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
