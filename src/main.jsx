import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Cards from "./Components/Cards-setter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Cards />
  </React.StrictMode>
);
