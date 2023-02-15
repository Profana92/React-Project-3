import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
        <Card />
      </main>
    </Fragment>
  );
}

export default App;
