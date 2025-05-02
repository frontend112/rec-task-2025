import { Products } from "./components/Products/Products";
import products from "./db/products.json";
const { washing_machines } = products;
function App() {
  return (
    <div>
      <h1 className="pb-4 text-center text-[40px] leading-[56px] font-bold ">
        Wybierz urządzenie
      </h1>
      <div className="bg-[#F8F8F8] text-[12px] leading-[18px]">
        <div className="max-w-[1046px] m-auto">
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
