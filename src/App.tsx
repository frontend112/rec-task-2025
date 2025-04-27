import products from "./db/products.json";
const { washing_machines } = products;
function App() {
  console.log(washing_machines);
  return (
    <div className="App">
      <h1>Wybierz urządzenie</h1>
    </div>
  );
}

export default App;
