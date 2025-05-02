import { useMemo, useState } from "react";
import { Products } from "./components/Products/Products";
import products from "./db/products.json";
const { washing_machines } = products;

function App() {
  // const [filter, setFilter] = useState({
  //   sorted: "Wszystkie",
  //   function: "Wszystkie",
  //   energetic: "Wszystkie",
  //   capacity: "Wszystkie",
  // });
  const [searchText, setSearchtext] = useState("");

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilter((prevFilter) => ({ ...prevFilter }));
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchtext(e.target.value);
  };

  let visibleProducts = washing_machines;

  visibleProducts = useMemo(
    () =>
      washing_machines.filter(({ functions, title }) => {
        return (
          functions.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
          title.toLocaleLowerCase().includes(searchText.toLowerCase())
        );
      }),
    [searchText]
  );

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
            <div className="text-center">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                className=""
                value={searchText}
              />
            </div>
            <div>
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
