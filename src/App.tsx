import { Products } from "./components/Products/Products";
import products from "./db/products.json";
const { washing_machines } = products;
function App() {
  return (
    <div className="App">
      <h1>Wybierz urządzenie</h1>
      {washing_machines.length > 0 ? (
        <Products products={washing_machines} />
      ) : (
        "there is no products in database"
      )}
    </div>
  );
}

export default App;
