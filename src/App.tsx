import { Products } from "./components/Products/Products";
import products from "./db/products.json";
const { washing_machines } = products;
function App() {
  return (
    <div className="App">
      <h1>Wybierz urządzenie</h1>
      <Products products={washing_machines} />
    </div>
  );
}

export default App;
