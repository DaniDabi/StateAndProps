import React from "react";
import Greetings from "./greetings";
import PersonList from "./personlist";
import Counter from "./counter";
import Person from "./person";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Greetings</h1>
        <Greetings name="John" />
        <Greetings name="Mary" />
        <Greetings name="Alex" />
        <Greetings name="Sarah" />
      </div>
      <div>
        <Counter />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "10px" }}>
        <h2 style={{ textAlign: "center" }}>Person</h2>
        <Person name="John " age="25" />
        <Person name="Dane " age="23" />
        <Person name="Dave " age="23" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "10px" }}>
        <PersonList />
      </div>
    </>
  );
}

export default App;
