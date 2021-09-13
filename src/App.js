import React from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";

faker.locale = "en_US";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Learning: ReactJs & Hook Redux</h2>
      </header>
      <Card
        name={`${faker.name.firstName(0)} ${faker.name.lastName(0)}`}
        position={faker.name.jobTitle()}
        image={faker.image.avatar()}
      />

      <Card
        name={`${faker.name.firstName(0)} ${faker.name.lastName(0)}`}
        position={faker.name.jobTitle()}
        image={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
