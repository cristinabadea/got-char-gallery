/** @format */

import React from "react";
import CharacterGallery from "./components/CharacterGallery";
import "./App.css";

const App = () => {
  return (
    <div data-test="component-app">
      <h1 className="site-title" data-test="site-title">
        The Lord of the Rings
      </h1>
      <CharacterGallery />
    </div>
  );
};

export default App;
