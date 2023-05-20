import { useContext } from "react";
import { RickContext } from "../context";
import "./Header.css";

const Header = () => {
  const { handleClickDarkMode, darkMode } = useContext(RickContext);

  const handleDark = (event) => {
    handleClickDarkMode(event);
  };

  const colorSchema = darkMode ? "darkOff" : "darkOn";

  return (
    <div className={`container ${colorSchema}`}>
      <h1>ReactHooks</h1>
      <button type="button" onClick={(event) => handleDark(event)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
