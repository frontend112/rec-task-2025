import { Products } from "./components/Products/Products";
import products from "./db/products.json";
const { washing_machines } = products;
function App() {
  return (
    <div className="App bg-[#F8F8F8] text-[12px] leading-[18px]">
      <div className="max-w-[1046px] m-auto">
        <h1>Wybierz urządzenie</h1>
        {washing_machines.length > 0 ? (
          <Products products={washing_machines} />
        ) : (
          "there is no products in database"
        )}
      </div>
    </div>
  );
}

export default App;
