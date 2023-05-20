import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RickProvider } from "./context/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RickProvider>
      <App />
    </RickProvider>
  </React.StrictMode>
);
