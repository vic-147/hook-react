import { RickProvider } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  return (
    <RickProvider>
      <Header />
      <Characters />
    </RickProvider>
  );
}

export default App;
