import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";

// Change the locality of fake-names
faker.locale = "en_IND";

function App() {
  // Initial values of the user
  const [name, setName] = useState("Kishan Kr Sharma");
  const [position, setPosition] = useState("Software Engineer");
  const [image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/36340195"
  );

  // Updating the details using Hooks (useState)
  const ChangeDetails = () => {
    setName(`${faker.name.firstName(0)} ${faker.name.lastName(0)}`);
    setPosition(faker.name.jobTitle());
    setImage(faker.image.avatar());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Learning: ReactJs, Hooks & Redux</h2>
      </header>
      <button
        className="button"
        style={{ backgroundColor: "red" }}
        onClick={ChangeDetails}
      >
        Refresh
      </button>

      <Card
        name={name}
        position={position}
        image={image}
        onDetailsChanged={ChangeDetails}
      />
    </div>
  );
}

export default App;
