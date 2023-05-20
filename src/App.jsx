import { useContext } from "react";
import { RickContext } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const { darkMode } = useContext(RickContext);

  darkMode ? "darkOn" : "darkOff";

  return (
    <div className={`${darkMode ? "darkOn" : "darkOff"}`}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
